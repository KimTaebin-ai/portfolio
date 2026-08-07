"use client";

import type { Project } from "@/lib/data";
import { useLang } from "@/lib/lang";
import { StatusPill } from "@/components/chip";
import { StepFlow } from "@/components/step-flow";

const HEADINGS = {
  why: { ko: "왜 만들었나", en: "Why I built this" },
  how: { ko: "어떻게 동작하나", en: "How it works" },
  results: { ko: "핵심 결과", en: "Key results" },
  learned: { ko: "배운 것", en: "What I learned" },
};

function CardHeading({ children, lang }: { children: string; lang: "ko" | "en" }) {
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

export function ProjectCard({ project }: { project: Project }) {
  const lang = useLang();
  return (
    <article className="border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h3 className="text-lg font-semibold md:text-xl">{project.name}</h3>
        <StatusPill status={project.status} label={project.statusLabel[lang]} />
      </div>
      <p className="mt-2 font-mono text-xs text-foreground-muted md:text-[13px]">
        {project.stack} · {project.period}
      </p>
      {project.badge ? (
        <p className="mt-3 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent md:text-sm">
          {project.badge[lang]}
        </p>
      ) : null}

      <div className="mt-4">
        <CardHeading lang={lang}>{HEADINGS.why[lang]}</CardHeading>
        <p className="mt-2 text-sm text-foreground-muted md:text-base">{project.why[lang]}</p>
        <p className="mt-3 flex gap-2 text-sm font-medium md:text-base">
          <span className="shrink-0 text-accent" aria-hidden>
            →
          </span>
          <span>{project.solution[lang]}</span>
        </p>
      </div>

      <div className="mt-5">
        <CardHeading lang={lang}>{HEADINGS.how[lang]}</CardHeading>
        <div className="mt-3">
          <StepFlow steps={project.flow} lang={lang} />
        </div>
      </div>

      {project.keyResults ? (
        <div className="mt-5">
          <CardHeading lang={lang}>{HEADINGS.results[lang]}</CardHeading>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground-muted md:text-base">
            {project.keyResults[lang].map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-5">
        <CardHeading lang={lang}>{HEADINGS.learned[lang]}</CardHeading>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground-muted md:text-base">
          {project.whatILearned[lang].map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
            {link.label} ↗
          </a>
        ))}
      </div>
    </article>
  );
}
