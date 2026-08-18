"use client";

import { projects } from "@/lib/data";
import { useLang } from "@/lib/lang";
import { RichText } from "@/components/rich-text";

const TITLE = {
  ko: "제가 만들고 검증한 것들 —",
  en: "What I've built and verified —",
};

/* An index for the detail cards below: problem on top, result under an accent
   arrow. Each card is a link to its own section, so the grid doubles as the
   table of contents for a long page. */
export function BuildOverview() {
  const lang = useLang();
  return (
    <div className="mb-12">
      <h3 className="text-lg font-semibold tracking-tight md:text-xl">{TITLE[lang]}</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            className="group block rounded-xl border border-border bg-background p-4 text-foreground no-underline transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-card-hover md:p-5"
          >
            <p className="flex items-baseline gap-2">
              <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-accent uppercase">
                Build
              </span>
              <span className="text-sm font-semibold md:text-base">{project.name}</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
              <RichText>{project.overview.problem[lang]}</RichText>
            </p>
            <p className="mt-2 flex gap-1.5 text-sm leading-relaxed text-foreground-muted">
              <span className="shrink-0 text-accent" aria-hidden>
                →
              </span>
              <span>
                <RichText>{project.overview.result[lang]}</RichText>
              </span>
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
