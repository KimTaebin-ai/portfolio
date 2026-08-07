# Taebin Kim — Portfolio

Single-page portfolio built with Next.js (static export) and Tailwind CSS.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs a static site to `out/`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages at
`https://kimtaebin-ai.github.io/portfolio/`.

Enable GitHub Pages once, under repo **Settings → Pages → Source → GitHub
Actions**.

Content lives in [`lib/data.ts`](lib/data.ts) — edit it to update projects,
tech stack, or experience without touching component code.
