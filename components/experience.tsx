import { Section } from "@/components/section";
import { education, experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((item) => (
          <div key={item.org}>
            <h3 className="text-lg font-semibold md:text-xl">{item.org}</h3>
            <p className="mt-1 text-xs font-medium text-foreground-muted md:text-sm">{item.period}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground-muted md:text-base">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mb-6 mt-16 text-2xl font-semibold tracking-tight md:text-3xl">Education</h2>
      <div>
        <h3 className="text-lg font-semibold md:text-xl">{education.org}</h3>
        <p className="mt-1 text-xs font-medium text-foreground-muted md:text-sm">{education.period}</p>
        <div className="mt-3 space-y-1 text-sm text-foreground-muted md:text-base">
          {education.body.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
