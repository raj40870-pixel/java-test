<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/881555fa-a759-4421-8c39-485eaf7bbfb3

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

The server loads `.env.local` and generates 30 MCQs with Gemini: 10 questions
from each of Units 1–3. If no API key is configured, it uses the built-in
question bank; API generation errors are shown instead of silently switching
to the bank.

## Deploy to Vercel

Import `raj40870-pixel/java-test` into Vercel. In the project's **Settings →
Environment Variables**, add `GEMINI_API_KEY` for the environments you deploy
(Production and, if needed, Preview), then redeploy. The `/api/questions`
serverless function generates the questions without exposing the key to the
browser. Never commit the key to the repository.
