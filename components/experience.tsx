"use client";

import { Section } from "@/components/section";
import { education, experience } from "@/lib/data";
import { useLang } from "@/lib/lang";

const TITLES = {
  experience: { ko: "경력", en: "Experience" },
  education: { ko: "학력", en: "Education" },
};

export function Experience() {
  const lang = useLang();
  return (
    <Section id="experience" kicker="04 · Experience" title={TITLES.experience[lang]}>
      <div className="space-y-10 border-l border-border pl-6">
        {experience.map((item) => (
          <div key={item.org.ko} className="relative">
            <span
              className="absolute top-1.5 -left-[31px] h-2.5 w-2.5 rounded-full border-2 border-background bg-accent"
              aria-hidden
            />
            <h3 className="text-lg font-semibold md:text-xl">{item.org[lang]}</h3>
            <p className="mt-1 font-mono text-xs text-foreground-muted md:text-[13px]">
              {item.period[lang]}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground-muted md:text-base">
              {item.bullets[lang].map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-16 mb-3 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
        05 · Education
      </p>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
        {TITLES.education[lang]}
      </h2>
      <div className="space-y-10 border-l border-border pl-6">
        {education.map((item) => (
          <div key={item.org.ko} className="relative">
            <span
              className="absolute top-1.5 -left-[31px] h-2.5 w-2.5 rounded-full border-2 border-background bg-accent"
              aria-hidden
            />
            <h3 className="text-lg font-semibold md:text-xl">{item.org[lang]}</h3>
            <p className="mt-1 font-mono text-xs text-foreground-muted md:text-[13px]">
              {item.period[lang]}
            </p>
            {item.body[lang].length ? (
              <div className="mt-3 space-y-1 text-sm text-foreground-muted md:text-base">
                {item.body[lang].map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
