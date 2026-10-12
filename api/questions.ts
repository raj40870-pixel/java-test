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
    const result = getQuestions();
    res.setHeader('X-Question-Source', result.source);
    res.statusCode = 200;
    res.end(JSON.stringify(result.questions));
  } catch (error) {
    console.error('Error selecting questions from the bank:', error);
    res.statusCode = 500;
    res.end(
      JSON.stringify({
        error: 'Question selection failed',
        message: 'Could not select questions from the bank. Check the server logs and try again.',
      })
    );
  }
}
