import { Fragment } from "react";

/* Inline emphasis for body copy in lib/data.ts. Two markers, deliberately few:

     **text**   a claim worth landing on — lifts out of the muted body color
     `text`     a number, metric, or API-shaped token — accent + mono

   Body copy is uniformly muted so the eye can skim; these are the anchors it
   catches on. Used sparingly — a paragraph where everything is emphasized
   reads exactly like one where nothing is.

   The two nest one way only: metrics inside a claim (**recall `0.909`**), which
   is why strong is split first and its contents run through Metrics again. */
const STRONG = /(\*\*[^*]+\*\*)/g;
const METRIC = /(`[^`]+`)/g;

function Metrics({ text, inStrong = false }: { text: string; inStrong?: boolean }) {
  return (
    <>
      {text.split(METRIC).map((part, i) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <span
            key={i}
            className={
              "font-mono text-[0.92em] text-accent " + (inStrong ? "font-semibold" : "font-medium")
            }
          >
            {part.slice(1, -1)}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export function RichText({ children }: { children: string }) {
  return (
    <>
      {children.split(STRONG).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-foreground">
            <Metrics text={part.slice(2, -2)} inStrong />
          </strong>
        ) : (
          <Metrics key={i} text={part} />
        ),
      )}
    </>
  );
}
