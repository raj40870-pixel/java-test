import type {IncomingMessage, ServerResponse} from 'node:http';
import {getQuestions} from '../src/server/questions.js';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.statusCode = 405;
    res.end(JSON.stringify({error: 'Method not allowed'}));
    return;
  }

  try {
    const result = await getQuestions();
    res.setHeader('X-Question-Source', result.source);
    res.statusCode = 200;
    res.end(JSON.stringify(result.questions));
  } catch (error) {
    console.error('Error generating questions:', error);
    res.statusCode = 502;
    res.end(
      JSON.stringify({
        error: 'Generation failed',
        message: 'Could not generate questions. Check the Gemini API key, quota, and server logs, then try again.',
      })
    );
  }
}
