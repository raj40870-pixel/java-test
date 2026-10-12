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
2. Run the app:
   `npm run dev`

The question bank contains 246 MCQs across Units 1–3 (82 per unit). Each practice test
randomly selects 10 questions from each unit. No API key or environment
variables are required.

## Deploy to Vercel

Import `raj40870-pixel/java-test` into Vercel and deploy. The `/api/questions`
serverless function randomly selects from the built-in question bank. No
environment variables are required.
