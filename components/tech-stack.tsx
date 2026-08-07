import { Section } from "@/components/section";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <Section id="stack" title="Tech Stack">
      <div className="grid gap-8 sm:grid-cols-2">
        {techStack.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
              {group.title}
            </h3>
            <p className="mt-2 text-sm text-foreground md:text-base">{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
