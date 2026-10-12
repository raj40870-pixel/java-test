import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {getQuestions} from './src/server/questions.js';

const app = express();
app.use(express.json());

app.post('/api/questions', (req, res) => {
  try {
    const result = getQuestions();
    res.setHeader('X-Question-Source', result.source);
    res.json(result.questions);
  } catch (error) {
    console.error('Error selecting questions from the bank:', error);
    res.status(500).json({
      error: 'Question selection failed',
      message: 'Could not select questions from the bank. Check the server logs and try again.',
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
