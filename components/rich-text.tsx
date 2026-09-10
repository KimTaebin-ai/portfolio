import { Fragment } from "react";

/* Inline emphasis for body copy in lib/data.ts. Three markers, deliberately few:

     **text**       a claim worth landing on — lifts out of the muted body color
     `text`         a number, metric, or API-shaped token — accent + mono
     [text](url)    a term the reader may want to verify — opens in a new tab

   Body copy is uniformly muted so the eye can skim; these are the anchors it
   catches on. Used sparingly — a paragraph where everything is emphasized
   reads exactly like one where nothing is. The same goes for links: one per
   term per section, on the first mention that matters, not on every repeat.

   Nesting runs one way, outermost first: a link may hold a claim, a claim may
   hold metrics (**recall `0.909`**). So the split order is LINK → STRONG →
   METRIC, each level re-running the ones below it.

   `leadAccent` recolors a strong that opens the string — the retrospective
   bullets use it to hang a short accent label off the front of the line. */
const LINK = /(\[[^\]]+\]\([^)]+\))/g;
const LINK_PARTS = /^\[([^\]]+)\]\(([^)]+)\)$/;
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

/* Strong and metrics, without the link level — used inside a link so a nested
   [**text**](url) still renders its emphasis. */
function Emphasis({ text, leadAccent = false }: { text: string; leadAccent?: boolean }) {
  const parts = text.split(STRONG);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong
            key={i}
            className={
              "font-semibold " +
              // index 1 with an empty part 0 means the string opens with it
              (leadAccent && i === 1 && parts[0] === "" ? "text-accent" : "text-foreground")
            }
          >
            <Metrics text={part.slice(2, -2)} inStrong />
          </strong>
        ) : (
          <Metrics key={i} text={part} />
        ),
      )}
    </>
  );
}

export function RichText({
  children,
  leadAccent = false,
}: {
  children: string;
  leadAccent?: boolean;
}) {
  const segments = children.split(LINK);
  return (
    <>
      {segments.map((segment, i) => {
        const link = segment.match(LINK_PARTS);
        if (link) {
          const [, label, href] = link;
          return (
            <a key={i} href={href} target="_blank" rel="noreferrer noopener">
              <Emphasis text={label} />
            </a>
          );
        }
        // leadAccent only applies to a strong opening the whole string, which
        // can only live in the first segment
        return <Emphasis key={i} text={segment} leadAccent={leadAccent && i === 0} />;
      })}
    </>
  );
}
