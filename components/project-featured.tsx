"use client";

import type { ReactNode } from "react";
import type { Project } from "@/lib/data";
import { useLang } from "@/lib/lang";
import type { Lang } from "@/lib/lang";
import { Chip, StatusPill } from "@/components/chip";
import { MicroLabel } from "@/components/micro-label";
import { RichText } from "@/components/rich-text";
import { StepFlow } from "@/components/step-flow";
import { TroubleshootList } from "@/components/troubleshoot";
import { WireframeGrid } from "@/components/wireframe";
import { FigureGrid } from "@/components/figure";

/* The deep-dive layout: facts on the left, the story on the right.

   The left rail is everything a recruiter scans for — dates, org, team, stack,
   links — and it sticks to the viewport on wide screens so those stay in reach
   while the narrative scrolls past. Below `lg` the grid collapses and the rail
   simply becomes the header of the card, which is the order you'd want on a
   phone anyway. */

const HEADING = {
  intro: { ko: "소개", en: "Introduction" },
  how: { ko: "어떻게 동작하나", en: "How it works" },
  screens: { ko: "화면 구조", en: "Screen structure" },
  trouble: { ko: "트러블슈팅", en: "Trouble shooting" },
  results: { ko: "핵심 결과", en: "Key results" },
  learned: { ko: "배운 것", en: "What I learned" },
};

/* The narrative column is wide enough for the diagrams, which makes it too
   wide for prose — ~95 characters a line in English. Text blocks cap out here
   and the flow diagram and screen schematics keep the full column, so the
   ragged right edge is where the reading stops, not where the content does. */
const PROSE = "max-w-[44rem]";

const META = {
  period: { ko: "기간", en: "Period" },
  org: { ko: "소속", en: "Org" },
  team: { ko: "팀 · 역할", en: "Team · role" },
  skills: { ko: "핵심 역량", en: "Core skills" },
  contributions: { ko: "기여", en: "Contributions" },
  stack: { ko: "스택", en: "Stack" },
  links: { ko: "링크", en: "Links" },
};

function MetaBlock({
  label,
  lang,
  children,
}: {
  label: string;
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <div>
      <MicroLabel lang={lang}>{label}</MicroLabel>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function MetaList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-4 text-[13px] leading-relaxed text-foreground-muted marker:text-accent/60">
      {items.map((item, i) => (
        <li key={i}>
          <RichText>{item}</RichText>
        </li>
      ))}
    </ul>
  );
}

function Block({
  heading,
  lang,
  children,
}: {
  heading: string;
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <div>
      <MicroLabel lang={lang}>{heading}</MicroLabel>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function ProjectFeatured({ project }: { project: Project }) {
  const lang = useLang();

  return (
    <article
      id={project.id}
      className="scroll-mt-20 border-t border-border pt-10 first:border-t-0 first:pt-0 md:pt-12 md:first:pt-0"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-10 xl:gap-14">
        {/* ------------------------------------------------------ meta rail */}
        <aside className="self-start lg:sticky lg:top-24">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-xl font-semibold tracking-tight">{project.name[lang]}</h3>
            <StatusPill status={project.status} lang={lang} />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            <RichText>{project.headline[lang]}</RichText>
          </p>

          {project.awards?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.awards.map((award, i) => (
                <span
                  key={i}
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                >
                  {award[lang]}
                </span>
              ))}
            </div>
          ) : null}

          {project.notice ? (
            <p className="mt-3 rounded-lg border border-border bg-chip px-3 py-2 text-xs leading-relaxed text-foreground-muted">
              {project.notice[lang]}
            </p>
          ) : null}

          <div className="mt-5 space-y-4 border-t border-border pt-5">
            <MetaBlock label={META.period[lang]} lang={lang}>
              <p className="font-mono text-[13px] text-foreground-muted">{project.period[lang]}</p>
            </MetaBlock>

            {project.org ? (
              <MetaBlock label={META.org[lang]} lang={lang}>
                <p className="text-[13px] text-foreground-muted">{project.org[lang]}</p>
              </MetaBlock>
            ) : null}

            {project.team ? (
              <MetaBlock label={META.team[lang]} lang={lang}>
                <p className="text-[13px] leading-relaxed text-foreground-muted">
                  <span className="font-medium text-foreground">{project.team.members[lang]}</span>
                  {" · "}
                  {project.team.myRole[lang]}
                </p>
              </MetaBlock>
            ) : null}

            {project.coreSkills ? (
              <MetaBlock label={META.skills[lang]} lang={lang}>
                <MetaList items={project.coreSkills[lang]} />
              </MetaBlock>
            ) : null}

            {project.contributions ? (
              <MetaBlock label={META.contributions[lang]} lang={lang}>
                <MetaList items={project.contributions[lang]} />
              </MetaBlock>
            ) : null}

            <MetaBlock label={META.stack[lang]} lang={lang}>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </MetaBlock>

            <MetaBlock label={META.links[lang]} lang={lang}>
              <div className="flex flex-col items-start gap-1.5 text-[13px] font-medium">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </MetaBlock>
          </div>
        </aside>

        {/* ------------------------------------------------------ narrative */}
        <div className="min-w-0 space-y-8">
          <Block heading={HEADING.intro[lang]} lang={lang}>
            <div className={`${PROSE} space-y-3 text-sm leading-relaxed text-foreground-muted md:text-base`}>
              {project.intro[lang].map((line, i) => (
                <p key={i}>
                  <RichText>{line}</RichText>
                </p>
              ))}
            </div>
          </Block>

          <Block heading={HEADING.how[lang]} lang={lang}>
            <StepFlow steps={project.flow} lang={lang} />
            {project.howItWorks ? (
              <ul className={`${PROSE} mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground-muted marker:text-accent md:text-base`}>
                {project.howItWorks[lang].map((line, i) => (
                  <li key={i}>
                    <RichText>{line}</RichText>
                  </li>
                ))}
              </ul>
            ) : null}
          </Block>

          {project.wireframes?.length ? (
            <Block heading={HEADING.screens[lang]} lang={lang}>
              <WireframeGrid wireframes={project.wireframes} />
            </Block>
          ) : null}

          {project.media?.length ? <FigureGrid media={project.media} /> : null}

          {project.troubleshooting?.length ? (
            <Block heading={HEADING.trouble[lang]} lang={lang}>
              <div className={PROSE}>
                <TroubleshootList items={project.troubleshooting} />
              </div>
            </Block>
          ) : null}

          {project.keyResults ? (
            <Block heading={HEADING.results[lang]} lang={lang}>
              <ul className={`${PROSE} list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground-muted marker:text-accent md:text-base`}>
                {project.keyResults[lang].map((line, i) => (
                  <li key={i}>
                    <RichText>{line}</RichText>
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          <Block heading={HEADING.learned[lang]} lang={lang}>
            <ul className={`${PROSE} list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground-muted marker:text-accent/60 md:text-base`}>
              {project.learned[lang].map((line, i) => (
                <li key={i}>
                  <RichText leadAccent>{line}</RichText>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>
    </article>
  );
}
