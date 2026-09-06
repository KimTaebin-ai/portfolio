"use client";

import type { Wireframe } from "@/lib/data";
import { useLang } from "@/lib/lang";

/* A screenshot that does not exist yet.

   Real captures aren't ready, so rather than leave a hole (or ship a grey
   rectangle that says nothing), each project draws the *structure* of the
   screen it would show: rows of labeled regions, sized against each other.
   A reader still learns what the thing looks like — where the evidence panel
   sits next to the answer, that the terminal prints θ twice on two scales —
   which is most of what the screenshot was there to convey.

   `h` is a row's share of the height, `w` a cell's share of its row; both
   default to 1. `tone: "muted"` marks a secondary region so the eye finds the
   primary one first. Replace a `wireframes` entry with a `Media` entry and
   `Figure` once the real file lands — see docs/images.md. */

const CHROME: Record<NonNullable<Wireframe["frame"]>, string> = {
  browser: "browser",
  terminal: "terminal",
  screen: "screen",
};

/* Rows are sized in ems rather than by aspect ratio: the labels are real text
   that wraps, and a fixed aspect would clip them on a narrow column. */
const ROW_UNIT = 2.1;

export function WireframeView({ wireframe }: { wireframe: Wireframe }) {
  const lang = useLang();
  const frame = wireframe.frame ?? "screen";

  return (
    <figure className="min-w-0 break-inside-avoid">
      <div className="overflow-hidden rounded-lg border border-border bg-chip/50">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted/40" aria-hidden />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted/40" aria-hidden />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted/40" aria-hidden />
          <span className="ml-1.5 font-mono text-[10px] tracking-wide text-foreground-muted/70">
            {CHROME[frame]}
          </span>
        </div>

        <div className="flex flex-col gap-2 p-3">
          {wireframe.rows.map((row, i) => (
            <div
              key={i}
              className="flex gap-2"
              style={{ minHeight: `${(row.h ?? 1) * ROW_UNIT}rem` }}
            >
              {row.cells.map((cell, j) => (
                <div
                  key={j}
                  style={{ flexGrow: cell.w ?? 1, flexBasis: 0 }}
                  className={
                    "flex items-center justify-center rounded border border-dashed px-2 py-2 text-center font-mono text-[10px] leading-snug md:text-[11px] " +
                    (cell.tone === "muted"
                      ? "border-border text-foreground-muted/70"
                      : "border-accent-muted bg-background/70 text-foreground-muted")
                  }
                >
                  {cell.label[lang]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <figcaption className="mt-2 text-center font-mono text-[11px] leading-relaxed text-foreground-muted">
        {wireframe.caption[lang]}
      </figcaption>
    </figure>
  );
}

/* One diagram runs full width; two share a row only once the column they sit
   in is actually wide enough for both. The measurement has to be the
   container, not the viewport: the same grid renders in a featured project's
   ~800px narrative column and inside a compact card a third that wide, and a
   viewport breakpoint can't tell those apart. Same rule as FigureGrid, so
   swapping one for the other later doesn't change the layout. */
export function WireframeGrid({ wireframes }: { wireframes: Wireframe[] }) {
  if (!wireframes.length) return null;
  return (
    <div className="@container">
      <div className={"grid gap-5 " + (wireframes.length > 1 ? "@3xl:grid-cols-2" : "")}>
        {wireframes.map((wireframe, i) => (
          <WireframeView key={i} wireframe={wireframe} />
        ))}
      </div>
    </div>
  );
}
