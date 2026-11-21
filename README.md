# PlanoLand — planoland.vercel.app

Marketing site for the PlanoLand landscape design studio (Russian default,
English under `/en/`).

Stack: React 19 + TypeScript + Vite + React Router, Tailwind CSS 4.

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server (vite)
npm run build      # production build → dist/
```

## Deploy

Vercel project `planoland`, connected to this GitHub repo — every push to
`master` deploys automatically. `vercel.json` holds the SPA rewrite plus
permanent redirects from old project-codename URLs
(`/portfolio/buxus` → `/portfolio/planting`, etc.).

## Scripts

- `node scripts/generate-sitemap.mjs` — regenerate `public/sitemap.xml`
  (run after adding/removing routes or slugs).
- `node scripts/optimize-images.mjs` / `optimize-galleries.mjs` — build
  optimized webp under `public/images/projects/` from the raw originals.
  The raw originals are archived **outside** the repo at
  `C:\Users\Sinisa\Documents\MiniMaxAI Workfolder\archive\planoland-raw-images`
  so they don't get copied into every build — set `PLANOLAND_RAW_IMAGES` to
  point the script at them (or at a local `public/images/Project Images/`).
- `node scripts/generate-seo-assets.mjs` — regenerate OG/Twitter images.

## Structure

- `src/data/projects.ts` — portfolio records (slugs must match the sitemap).
- `src/data/content.ts` — services, team, principles, blog stubs.
- `src/i18n/useT.ts` — all UI strings (RU source of truth, EN fallback to RU).
- `src/lib/telegram.ts` — contact-form submission via a Cloudflare Worker
  (bot side lives in `worker/` in this repo).
- `worker/` — the `planoland-bot` Cloudflare Worker that forwards leads to
  Telegram. Secrets (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`) are set with
  `wrangler secret put`, never in the repo. The site points at
  `https://planoland-bot.sinisapre.workers.dev`; override with
  `VITE_TELEGRAM_WORKER_URL`.

## Assets

All images and fonts are served from this repo — nothing is hot-linked from a
third-party CDN.

- Fonts: `public/fonts/tt-commons-{expanded,text}.woff2` (TT Commons by
  TypeTogether). Self-hosting removes the CDN dependency but does **not**
  replace the licence: commercial web use needs a TypeTogether web licence.
- Social icons: `public/images/social/*.svg`.
- Blog covers: `public/images/blog/*.webp`.
- Project imagery: `public/images/projects/<slug>/` — folder names match the
  project slugs.
