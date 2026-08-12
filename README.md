# Clinton Ezeh — Product Designer Portfolio

A dark-mode, "design-tool chrome" styled portfolio built with Next.js (App Router).

## Before you deploy — edit these

1. **`app/page.tsx`** — each item in `caseStudies` has a `figmaUrl` placeholder like
   `https://figma.com/your-clacachi-project-link`. Replace each with the real
   "Present" link from your Figma project (see the share-link steps I gave you).
2. Also swap the hero and footer `figma.com/your-portfolio-figma-link` links to your
   main Figma profile or best project.
3. Optional: update the "Available for fintech projects" line in the top chrome bar
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
