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

## Before the screenshot exists

No project captures have been taken yet, so projects carry a `wireframes` field
instead of `media` — see the `Wireframe` type in `lib/data.ts` and
`components/wireframe.tsx`. It draws the *structure* of the screen the missing
screenshot would show: rows of labeled regions sized against each other, in
chrome that says `browser` / `terminal` / `screen`.

    rows: [{ h: 6, cells: [{ w: 2, label: … }, { w: 1, tone: "muted", label: … }] }]

`h` is a row's share of the height, `w` a cell's share of its row (both default
to 1); `tone: "muted"` marks a secondary region.

To replace one with a real capture: drop the file in `public/images/`, add a
`media` entry with its true `width`/`height`, and delete the corresponding
`wireframes` entry. `ProjectFeatured` already renders `media` through
`FigureGrid` directly under the wireframe block, so nothing else changes.
