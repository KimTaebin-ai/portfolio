import { Section } from "@/components/section";
import { education, experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" kicker="04 · Experience" title="Experience">
      <div className="space-y-10 border-l border-border pl-6">
        {experience.map((item) => (
          <div key={item.org} className="relative">
            <span
              className="absolute top-1.5 -left-[31px] h-2.5 w-2.5 rounded-full border-2 border-background bg-accent"
              aria-hidden
            />
            <h3 className="text-lg font-semibold md:text-xl">{item.org}</h3>
            <p className="mt-1 font-mono text-xs text-foreground-muted md:text-[13px]">
              {item.period}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground-muted md:text-base">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-16 mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
        05 · Education
      </p>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Education</h2>
      <div className="border-l border-border pl-6">
        <div className="relative">
          <span
            className="absolute top-1.5 -left-[31px] h-2.5 w-2.5 rounded-full border-2 border-background bg-accent"
            aria-hidden
          />
          <h3 className="text-lg font-semibold md:text-xl">{education.org}</h3>
          <p className="mt-1 font-mono text-xs text-foreground-muted md:text-[13px]">
            {education.period}
          </p>
          <div className="mt-3 space-y-1 text-sm text-foreground-muted md:text-base">
            {education.body.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
