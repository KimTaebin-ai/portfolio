/* The site deploys to a subpath (GitHub Pages), so every absolute URL it emits
   needs the prefix. `next/image` and `next/link` add it on their own — this is
   for the places that don't: metadata images, raw <img>, CSS url(), downloads. */
export const BASE_PATH = "/portfolio";

export function asset(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
