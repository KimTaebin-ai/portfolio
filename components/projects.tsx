"use client";

import { Section } from "@/components/section";
import { ProjectFeatured } from "@/components/project-featured";
import Link from "next/link";
import { RichText } from "@/components/rich-text";
import { projects } from "@/lib/data";
import { useLang } from "@/lib/lang";

const T = {
  featured: { ko: "대표 프로젝트", en: "Featured Projects" },
  featuredNote: {
    ko: "창업 · AI · 헬스케어 · 실시간 웹 — 문제를 확인하고, 직접 만들고, 결과로 증명한 프로젝트들입니다. 수치와 트러블슈팅, 외부 평가까지 따라갈 수 있습니다.",
    en: "A startup, AI, healthcare, real-time web — projects where I confirmed the problem, built the thing myself, and proved it with results. The numbers, the troubleshooting, and the outside evaluation are all there to follow.",
  },
  additional: { ko: "그 밖의 프로젝트", en: "Additional Projects" },
  additionalNote: {
    ko: "inPHRPILL과 École 42 · 개인 프로젝트들입니다. 각 프로젝트는 별도 페이지에서 대표 프로젝트와 같은 구조로 볼 수 있습니다.",
    en: "inPHRPILL, plus École 42 and personal projects. Each opens on its own page in the same layout as the featured ones.",
  },
  viewAll: { ko: "전체 보기 →", en: "View all →" },
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
        <ul className="grid gap-x-10 gap-y-1 md:grid-cols-2">
          {additional.map((project) => (
            <li key={project.id}>
              <Link
                href={`/projects#${project.id}`}
                className="group block rounded-lg border border-transparent px-3 py-2.5 text-foreground no-underline transition-colors hover:border-border hover:bg-card-hover"
              >
                <span className="text-sm font-medium group-hover:text-accent md:text-base">
                  {project.name[lang]}
                </span>
                <span className="mt-0.5 block text-[13px] leading-snug text-foreground-muted">
                  <RichText>{project.headline[lang]}</RichText>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/projects"
          className="mt-8 inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground no-underline transition-colors hover:border-foreground"
        >
          {T.viewAll[lang]}
        </Link>
      </Section>
    </>
  );
}
