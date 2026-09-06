import type { Lang } from "@/lib/lang";

/* The mono micro-label that heads every block inside a project card.

   Uppercase + letter-spacing is a Latin-script effect: Hangul has no case and
   tracking only pushes the syllables apart, so the Korean side keeps its
   natural width and drops the transform. */
export function MicroLabel({ children, lang }: { children: string; lang: Lang }) {
  return (
    <h4
      className={
        "font-mono text-[11px] font-semibold text-foreground-muted " +
        (lang === "en" ? "tracking-[0.14em] uppercase" : "text-xs tracking-normal")
      }
    >
      {children}
    </h4>
  );
}
