import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="build" title="Build">
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
