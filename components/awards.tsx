"use client";

import { Section } from "@/components/section";
import { awards } from "@/lib/data";
import { useLang } from "@/lib/lang";

/* Everything that used to be a sentence buried in Education or a badge on one
   project card, collected in one reverse-chronological rail. A dated list is
   the format this content is actually read in — nobody hunts for a placement
   inside a paragraph about a school. */

const TITLE = { ko: "수상 및 활동", en: "Selected Awards & Activities" };

export function Awards() {
  const lang = useLang();
  return (
    <Section id="awards" kicker="03 · Awards" title={TITLE[lang]}>
      <ol className="relative space-y-6 border-l border-border pl-6">
        {awards.map((award, i) => (
          <li key={i} className="relative break-inside-avoid">
            <span
              className="absolute top-[0.45rem] -left-[1.6875rem] h-2 w-2 rounded-full bg-accent ring-4 ring-background"
              aria-hidden
            />
            <p className="font-mono text-xs text-foreground-muted">{award.year}</p>
            <p className="mt-0.5 text-sm font-medium md:text-base">
              {award.href ? (
                <a href={award.href} target="_blank" rel="noreferrer noopener">
                  {award.title[lang]} ↗
                </a>
              ) : (
                <span className="text-foreground">{award.title[lang]}</span>
              )}
            </p>
            {award.detail ? (
              <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
                {award.detail[lang]}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
