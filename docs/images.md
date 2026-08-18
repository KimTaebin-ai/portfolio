# Images

Image files go in `public/images/`. They are served from the site root, so a file at
`public/images/rag-grid-search.png` is referenced in `lib/data.ts` as
`/images/rag-grid-search.png` — **without** the `/portfolio` basePath.

Always render through `Figure` / `FigureGrid` in `components/figure.tsx`, which
adds the prefix via `asset()`. Do not reach for a bare `next/image` or `<img>`:
`images.unoptimized` disables the loader that would normally prepend basePath,
so an unprefixed src resolves against the domain root and 404s once deployed
(it also 404s in `next dev`, which is how this was caught).

Every entry needs an intrinsic `width`/`height` (the file's real pixel size).
This build runs `output: "export"` with `images.unoptimized`, so Next.js cannot
probe the file at build time and will not reserve space without them — the page
reflows as images load.

    file            what to check
    ---------------------------------------------------------------
    *.png           screenshots, diagrams, anything with text
    *.jpg           photos
    *.svg           vector diagrams — inline it instead if it needs theming

Keep the long edge under ~1600px; there is no optimizer in this pipeline, so
whatever you commit is what visitors download.
