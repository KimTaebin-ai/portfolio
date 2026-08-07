"use client";

import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { useLang } from "@/lib/lang";

const TITLE = { ko: "빌드", en: "Build" };

export function Projects() {
  const lang = useLang();
  return (
    <Section id="build" kicker="02 · Build" title={TITLE[lang]}>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
