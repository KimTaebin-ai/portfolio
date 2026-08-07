import type { ReactNode } from "react";

export function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-border py-16 last:border-b-0 md:py-24">
      <div className="mx-auto max-w-[800px] px-6 md:px-16">
        {kicker ? (
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
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
