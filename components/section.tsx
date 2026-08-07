import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-border py-16 last:border-b-0 md:py-24">
      <div className="mx-auto max-w-[800px] px-6 md:px-16">
        {title ? (
          <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
