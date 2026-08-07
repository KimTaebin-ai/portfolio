"use client";

import { Section } from "@/components/section";
import { Chip } from "@/components/chip";
import { techStack } from "@/lib/data";
import { useLang } from "@/lib/lang";

const TITLE = { ko: "기술 스택", en: "Tech Stack" };

export function TechStack() {
  const lang = useLang();
  return (
    <Section id="stack" kicker="03 · Stack" title={TITLE[lang]}>
      <div className="grid gap-8 sm:grid-cols-2">
        {techStack.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.14em] text-foreground-muted uppercase">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item.ko}>{item[lang]}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
