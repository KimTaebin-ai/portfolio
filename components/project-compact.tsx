"use client";

import type { Project } from "@/lib/data";
import { useLang } from "@/lib/lang";
import { Chip, StatusPill } from "@/components/chip";
import { MicroLabel } from "@/components/micro-label";
import { RichText } from "@/components/rich-text";
import { StepFlow } from "@/components/step-flow";
import { TroubleshootList } from "@/components/troubleshoot";
import { WireframeGrid } from "@/components/wireframe";

/* The short form: enough to know what it is and whether to open it.

   Closed, the card is a one-liner with its stack. Open, it gives up the same
   evidence the featured cards lead with — the flow diagram, the one thing that
   went wrong, and what it taught — just without a rail of metadata around it. */

const MORE = { ko: "자세히", en: "Details" };
const HEADING = {
  how: { ko: "어떻게 동작하나", en: "How it works" },
  trouble: { ko: "트러블슈팅", en: "Trouble shooting" },
  learned: { ko: "배운 것", en: "What I learned" },
};

export function ProjectCompact({ project }: { project: Project }) {
  const lang = useLang();

  return (
    <article
      id={project.id}
      className="flex scroll-mt-20 flex-col rounded-xl border border-border p-5 break-inside-avoid md:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <h3 className="text-base font-semibold tracking-tight md:text-lg">{project.name[lang]}</h3>
        <StatusPill status={project.status} lang={lang} />
      </div>

      <p className="mt-1 font-mono text-xs text-foreground-muted">
        {project.period[lang]}
        {project.org ? ` · ${project.org[lang]}` : ""}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
        <RichText>{project.headline[lang]}</RichText>
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>

      <details className="group mt-4 border-t border-border pt-3">
        <summary className="cursor-pointer list-none font-mono text-[11px] font-semibold tracking-[0.12em] text-accent uppercase marker:content-none">
          <span className="inline-block transition-transform group-open:rotate-90" aria-hidden>
            ›
          </span>{" "}
          {MORE[lang]}
        </summary>

        <div className="mt-4 space-y-6">
          <div className="space-y-3 text-sm leading-relaxed text-foreground-muted">
            {project.intro[lang].map((line, i) => (
              <p key={i}>
                <RichText>{line}</RichText>
              </p>
            ))}
          </div>

          <div>
            <MicroLabel lang={lang}>{HEADING.how[lang]}</MicroLabel>
            <div className="mt-3">
              <StepFlow steps={project.flow} lang={lang} />
            </div>
            {project.howItWorks ? (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground-muted marker:text-accent">
                {project.howItWorks[lang].map((line, i) => (
                  <li key={i}>
                    <RichText>{line}</RichText>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {project.wireframes?.length ? <WireframeGrid wireframes={project.wireframes} /> : null}

          {project.troubleshooting?.length ? (
            <div>
              <MicroLabel lang={lang}>{HEADING.trouble[lang]}</MicroLabel>
              <div className="mt-3">
                <TroubleshootList items={project.troubleshooting} />
              </div>
            </div>
          ) : null}

          <div>
            <MicroLabel lang={lang}>{HEADING.learned[lang]}</MicroLabel>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground-muted marker:text-accent/60">
              {project.learned[lang].map((line, i) => (
                <li key={i}>
                  <RichText leadAccent>{line}</RichText>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>

      <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
            {link.label} ↗
          </a>
        ))}
      </div>
    </article>
  );
}
