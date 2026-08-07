import { Section } from "@/components/section";
import { Chip } from "@/components/chip";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <Section id="stack" kicker="03 · Stack" title="Tech Stack">
      <div className="grid gap-8 sm:grid-cols-2">
        {techStack.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground-muted">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
