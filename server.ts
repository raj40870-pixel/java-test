import express from 'express';
import {GoogleGenAI, Type} from '@google/genai';
import path from 'path';
import {fileURLToPath} from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { questionBank, type Question } from './src/data/questionBank.js';

const app = express();
app.use(express.json());

dotenv.config({ path: ['.env.local', '.env'] });

const configuredApiKey = process.env.GEMINI_API_KEY;
const apiKey =
  configuredApiKey && configuredApiKey !== 'MY_GEMINI_API_KEY'
    ? configuredApiKey
    : undefined;

const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

const SYLLABUS_CONTEXT = `
Java Programming Syllabus (Units 1-3):
Unit I: Java Basics (structure, main method, access control), Control flow (if, switch, loops), Operators, Identifiers, OOP concepts (Class, Object, Encapsulation, Inheritance, Polymorphism, Abstraction), Arrays (1D, 2D), ArrayList.
Unit II: Classes & Objects (methods, constructors, super, this, static), Polymorphism (Overloading, Overriding).
Unit III: Inheritance (Single, Multilevel, Hierarchical), Abstract Classes, Final Keyword, Interfaces.
`;

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getBankQuestions(): Question[] {
  return [1, 2, 3].flatMap(unit => {
    const unitQuestions = questionBank.filter(question => question.unit === unit);
    if (unitQuestions.length < 10) {
      throw new Error(`Question bank must contain at least 10 questions for Unit ${unit}`);
    }
    return shuffleArray([...unitQuestions]).slice(0, 10);
  });
}

function isQuestion(value: unknown): value is Question {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const question = value as Record<string, unknown>;
  return (
    typeof question.id === 'string' &&
    typeof question.question === 'string' &&
    Array.isArray(question.options) &&
    question.options.length === 4 &&
    question.options.every(option => typeof option === 'string') &&
    typeof question.correctIndex === 'number' &&
    Number.isInteger(question.correctIndex) &&
    question.correctIndex >= 0 &&
    question.correctIndex < 4 &&
    (question.type === 'simple' || question.type === 'logical') &&
    typeof question.explanation === 'string' &&
    (question.unit === 1 || question.unit === 2 || question.unit === 3)
  );
}

function isBalancedQuestionSet(value: unknown): value is Question[] {
  if (!Array.isArray(value) || value.length !== 30 || !value.every(isQuestion)) {
    return false;
  }

  const ids = new Set(value.map(question => question.id));
  const counts = value.reduce(
    (result, question) => {
      result[question.unit]++;
      return result;
    },
    { 1: 0, 2: 0, 3: 0 }
  );

  return ids.size === 30 && counts[1] === 10 && counts[2] === 10 && counts[3] === 10;
}

app.post('/api/questions', async (req, res) => {
  if (!ai) {
    console.warn('GEMINI_API_KEY is not configured; serving questions from the local bank.');
    res.setHeader('X-Question-Source', 'bank');
    return res.json(shuffleArray(getBankQuestions()));
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Generate exactly 30 multiple-choice questions for a Java Midterm exam (CAP392) specifically for LPU students.
              
              Syllabus Context:
              ${SYLLABUS_CONTEXT}

              Rules for Generation:
              1. Total Questions: Exactly 30.
              2. Distribution: Exactly 10 questions for each of Units 1, 2, and 3. Set the "unit" field on every question to 1, 2, or 3 accordingly.
              3. Difficulty: LPU Midterm Standard (Medium). Avoid extremely complex code or "dirty" competitive programming tricks.
              4. Format: JSON array of objects.
              5. Object Fields:
                 - "id": unique string.
                 - "unit": 1, 2, or 3.
                 - "question": The question text (use code blocks for code snippets).
                 - "options": Array of 4 strings.
                 - "correctIndex": Number (0-3).
                 - "type": "simple" or "logical".
                 - "explanation": Brief reasoning for the correct answer.
              6. Variety: Mix theory and simple code output questions.`,
            },
          ],
        },
      ],
      config: {
        responseMimeType: 'application/json',
        maxOutputTokens: 8192,
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: {type: Type.STRING},
              unit: {type: Type.INTEGER, enum: [1, 2, 3]},
              question: {type: Type.STRING},
              options: {
                type: Type.ARRAY,
                items: {type: Type.STRING},
              },
              correctIndex: {type: Type.INTEGER},
              type: {type: Type.STRING, enum: ['simple', 'logical']},
              explanation: {type: Type.STRING},
            },
            required: ['id', 'unit', 'question', 'options', 'correctIndex', 'type', 'explanation'],
          },
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('AI returned empty response');
    }

    const aiQuestions: unknown = JSON.parse(text);
    if (!isBalancedQuestionSet(aiQuestions)) {
      throw new Error('AI returned an invalid question set; expected 10 valid questions per unit.');
    }

    res.setHeader('X-Question-Source', 'ai');
    res.json(shuffleArray(aiQuestions));
  } catch (error) {
    const message =
      error instanceof Error && apiKey
        ? error.message.replaceAll(apiKey, '[REDACTED]')
        : 'Unknown server error';
    console.error('Error generating questions:', message);
    res.status(502).json({
      error: 'Generation failed',
      message: 'Could not generate questions. Check the Gemini API key, quota, and server logs, then try again.',
    });
  }
});

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
} else {
  const {createServer: createViteServer} = await import('vite');
  const vite = await createViteServer({
    server: {middlewareMode: true},
    appType: 'custom',
  });
  app.use(vite.middlewares);
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const template = await vite.transformIndexHtml(url, `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Java Master (LPU) - Midterm Prep</title>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" src="/src/main.tsx"></script>
          </body>
        </html>
      `);
      res.status(200).set({'Content-Type': 'text/html'}).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
