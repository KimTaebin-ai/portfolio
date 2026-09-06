"use client";

import { Section } from "@/components/section";
import { ProjectFeatured } from "@/components/project-featured";
import { ProjectCompact } from "@/components/project-compact";
import { projects } from "@/lib/data";
import { useLang } from "@/lib/lang";

const T = {
  featured: { ko: "대표 프로젝트", en: "Featured Projects" },
  featuredNote: {
    ko: "증거가 가장 많이 남은 네 개 — 수치, 트러블슈팅, 실행 결과까지 따라갈 수 있는 것들입니다.",
    en: "The four with the most evidence behind them — numbers, troubleshooting, and results you can follow all the way down.",
  },
  additional: { ko: "그 밖의 프로젝트", en: "Additional Projects" },
  additionalNote: {
    ko: "짧게 — 무엇을 만들었고 무엇이 어려웠는지. 펼치면 같은 구조로 이어집니다.",
    en: "The short form — what it is and what was hard. Open one and it unfolds the same way.",
  },
};

export function Projects() {
  const lang = useLang();
  const featured = projects.filter((project) => project.tier === "featured");
  const additional = projects.filter((project) => project.tier === "additional");

  return (
    <>
      <Section id="projects" kicker="02 · Projects" title={T.featured[lang]} wide>
        <p className="-mt-4 mb-10 max-w-[640px] text-sm leading-relaxed text-foreground-muted md:text-base">
          {T.featuredNote[lang]}
        </p>
        <div className="space-y-12 md:space-y-16">
          {featured.map((project) => (
            <ProjectFeatured key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section id="additional" title={T.additional[lang]} wide>
        <p className="-mt-4 mb-8 max-w-[640px] text-sm leading-relaxed text-foreground-muted md:text-base">
          {T.additionalNote[lang]}
        </p>
        <div className="grid items-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {additional.map((project) => (
            <ProjectCompact key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
