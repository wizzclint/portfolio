# Clinton Ezeh — Product Designer Portfolio

A dark-mode, "design-tool chrome" styled portfolio built with Next.js (App Router).

## Before you deploy — edit these

1. **`app/page.tsx`** — project walkthroughs are available by request. All demo
   buttons open a prefilled email to `wizzclint@gmail.com`; project buttons include
   the selected organization in the subject and message. Update `demoRequestUrl`
   if the demo contact address changes. Keep prototype URLs out of public page data.
2. Optional: update the "Available for fintech projects" line in the top chrome bar
   if your availability changes.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

**Option A — no terminal, from GitHub (easiest):**
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new, sign in, and import that repo.
3. Leave all settings as default (Vercel auto-detects Next.js) and click **Deploy**.
4. You'll get a live `.vercel.app` URL in about a minute.

**Option B — from your terminal:**
```bash
npm install -g vercel
vercel login
vercel        # deploys a preview
vercel --prod # deploys to your production URL
```

## Stack

- Next.js 14 (App Router, TypeScript)
- Plain CSS (no framework) — all tokens live in `app/globals.css`
- Google Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels)
