import {GoogleGenAI, Type} from '@google/genai';
import {questionBank, type Question} from '../data/questionBank.js';

const SYLLABUS_CONTEXT = `
Java Programming Syllabus (Units 1-3):
Unit I: Java Basics (structure, main method, access control), Control flow (if, switch, loops), Operators, Identifiers, OOP concepts (Class, Object, Encapsulation, Inheritance, Polymorphism, Abstraction), Arrays (1D, 2D), ArrayList.
Unit II: Classes & Objects (methods, constructors, super, this, static), Polymorphism (Overloading, Overriding).
Unit III: Inheritance (Single, Multilevel, Hierarchical), Abstract Classes, Final Keyword, Interfaces.
`;

export type QuestionSource = 'ai' | 'bank';

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
    {1: 0, 2: 0, 3: 0}
  );

  return ids.size === 30 && counts[1] === 10 && counts[2] === 10 && counts[3] === 10;
}

export async function getQuestions(): Promise<{questions: Question[]; source: QuestionSource}> {
  const configuredApiKey = process.env.GEMINI_API_KEY;
  const apiKey =
    configuredApiKey && configuredApiKey !== 'MY_GEMINI_API_KEY'
      ? configuredApiKey
      : undefined;

  if (!apiKey) {
    return {questions: shuffleArray(getBankQuestions()), source: 'bank'};
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
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

    const questions: unknown = JSON.parse(text);
    if (!isBalancedQuestionSet(questions)) {
      throw new Error('AI returned an invalid question set; expected 10 valid questions per unit.');
    }

    return {questions: shuffleArray(questions), source: 'ai'};
  } catch (error) {
    const message =
      error instanceof Error ? error.message.replaceAll(apiKey, '[REDACTED]') : 'Unknown error';
    throw new Error(message);
  }
}
