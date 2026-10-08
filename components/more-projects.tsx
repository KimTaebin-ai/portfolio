"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { ProjectFeatured } from "@/components/project-featured";
import { RichText } from "@/components/rich-text";
import { projects } from "@/lib/data";
import { useLang } from "@/lib/lang";

/* The additional projects, on their own page and at full width. They used to
   be three-across cards that unfolded into a column too narrow to read; here
   each one gets the same rail-plus-narrative layout as the featured ones, with
   an index up top so the page can still be skimmed. */

const T = {
  back: { ko: "← 메인으로", en: "← Back to main" },
  title: { ko: "그 밖의 프로젝트", en: "More Projects" },
  note: {
    ko: "inPHRPILL과 École 42 · 개인 프로젝트들입니다. 대표 프로젝트와 같은 구조로 정리했습니다.",
    en: "inPHRPILL, plus École 42 and personal projects — laid out the same way as the featured ones.",
  },
};

export function MoreProjects() {
  const lang = useLang();
  const additional = projects.filter((project) => project.tier === "additional");

  return (
    <Section id="more-projects" kicker="Projects" wide>
      <Link href="/#projects" className="font-mono text-xs text-foreground-muted no-underline hover:text-foreground">
        {T.back[lang]}
      </Link>
      <h1 className="mt-4 mb-4 text-3xl font-semibold tracking-tight md:text-4xl">{T.title[lang]}</h1>
      <p className="mb-10 max-w-[640px] text-sm leading-relaxed text-foreground-muted md:text-base">
        {T.note[lang]}
      </p>

      <nav className="mb-14 border-y border-border py-6 print:hidden">
        <ol className="grid gap-x-10 gap-y-3 md:grid-cols-2">
          {additional.map((project, i) => (
            <li key={project.id}>
              <a
                href={`#${project.id}`}
                className="group flex gap-3 rounded-lg px-3 py-2 text-foreground no-underline transition-colors hover:bg-card-hover"
              >
                <span className="pt-0.5 font-mono text-xs text-foreground-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="text-sm font-medium group-hover:text-accent">{project.name[lang]}</span>
                  <span className="mt-0.5 block text-[13px] leading-snug text-foreground-muted">
                    <RichText>{project.headline[lang]}</RichText>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-12 md:space-y-16">
        {additional.map((project) => (
          <ProjectFeatured key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
