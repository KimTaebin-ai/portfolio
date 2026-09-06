import type { ReactNode } from "react";

/* `wide` opts a section out of the 1080px reading measure.

   The measure is tuned for paragraphs, and the project sections are the one
   place on the page that isn't paragraphs — a two-column deep dive with a
   metadata rail, flow diagrams and screen schematics all competing for the
   same row. They get 1320px so the diagrams have somewhere to go; prose inside
   them is capped separately so lines don't run long. The two project sections
   sit next to each other, so the page widens once and narrows once rather
   than alternating. */
export function Section({
  id,
  kicker,
  title,
  wide = false,
  children,
}: {
  id: string;
  kicker?: string;
  title?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-border py-16 last:border-b-0 md:py-24">
      <div
        className={
          "mx-auto px-6 md:px-16 " + (wide ? "max-w-[1320px]" : "max-w-[1080px]")
        }
      >
        {kicker ? (
          <p className="mb-3 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
            {kicker}
          </p>
        ) : null}
        {title ? (
          <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
