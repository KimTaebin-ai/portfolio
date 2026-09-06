"use client";

import { Section } from "@/components/section";
import { RichText } from "@/components/rich-text";
import { FigureGrid } from "@/components/figure";
import { education, experience } from "@/lib/data";
import { useLang } from "@/lib/lang";

const TITLES = {
  experience: { ko: "경력", en: "Experience" },
  education: { ko: "학력", en: "Education" },
};

export function Experience() {
  const lang = useLang();
  return (
    <Section id="experience" kicker="05 · Experience" title={TITLES.experience[lang]}>
      <div className="grid gap-4 sm:grid-cols-2">
        {experience.map((item) => (
          <div key={item.org.ko} className="rounded-xl border border-border p-5 md:p-6">
            <h3 className="text-lg font-semibold md:text-xl">{item.org[lang]}</h3>
            <p className="mt-1 font-mono text-xs text-foreground-muted md:text-[13px]">
              {item.period[lang]}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground-muted marker:text-accent/60 md:text-base">
              {item.bullets[lang].map((bullet, i) => (
                <li key={i}>
                  <RichText>{bullet}</RichText>
                </li>
              ))}
            </ul>
            {item.media ? (
              <div className="mt-4">
                <FigureGrid media={item.media} />
              </div>
            ) : null}
            {item.links ? (
              <div className="mt-3 flex flex-wrap gap-4 text-sm font-medium">
                {item.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
                    {link.label[lang]} ↗
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <p className="mt-16 mb-3 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
        06 · Education
      </p>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
        {TITLES.education[lang]}
      </h2>
      <div className="grid gap-4">
        {education.map((item) => (
          <div key={item.org.ko} className="rounded-xl border border-border p-5 md:p-6">
            <h3 className="text-lg font-semibold md:text-xl">{item.org[lang]}</h3>
            <p className="mt-1 font-mono text-xs text-foreground-muted md:text-[13px]">
              {item.period[lang]}
            </p>
            {item.body[lang].length ? (
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-foreground-muted md:text-base">
                {item.body[lang].map((line, i) => (
                  <p key={i}>
                    <RichText>{line}</RichText>
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
