"use client";

import type { Project } from "@/lib/data";
import { projects } from "@/lib/data";
import { useLang } from "@/lib/lang";
import type { Lang } from "@/lib/lang";
import { RichText } from "@/components/rich-text";

/* An index for a page that got long. Two columns, one per tier, each entry a
   jump link with the project's one-liner under it — so the reader picks by
   what a project *is*, not by whether they recognize the name.

   Hidden in print: paper has no anchors, and the sections it points at are all
   a page or two away anyway. */

const T = {
  kicker: { ko: "빠른 이동", en: "Quick Navigation" },
  featured: { ko: "대표 프로젝트", en: "Featured" },
  additional: { ko: "그 밖의 프로젝트", en: "Additional" },
};

function NavColumn({
  title,
  items,
  lang,
}: {
  title: string;
  items: Project[];
  lang: Lang;
}) {
  return (
    <div>
      <h3 className="font-mono text-[11px] font-semibold tracking-[0.14em] text-foreground-muted uppercase">
        {title}
      </h3>
      <ul className="mt-3 space-y-2.5">
        {items.map((project) => (
          <li key={project.id}>
            <a
              href={`#${project.id}`}
              className="group block rounded-lg border border-transparent px-3 py-2 text-foreground no-underline transition-colors hover:border-border hover:bg-card-hover"
            >
              <span className="text-sm font-medium group-hover:text-accent">
                {project.name[lang]}
              </span>
              <span className="mt-0.5 block text-[13px] leading-snug text-foreground-muted">
                <RichText>{project.headline[lang]}</RichText>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function QuickNav() {
  const lang = useLang();
  const featured = projects.filter((project) => project.tier === "featured");
  const additional = projects.filter((project) => project.tier === "additional");

  return (
    <section
      id="quick-nav"
      className="scroll-mt-20 border-b border-border py-12 print:hidden md:py-14"
    >
      <div className="mx-auto max-w-[1080px] px-6 md:px-16">
        <p className="mb-6 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
          {T.kicker[lang]}
        </p>
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          <NavColumn title={T.featured[lang]} items={featured} lang={lang} />
          <NavColumn title={T.additional[lang]} items={additional} lang={lang} />
        </div>
      </div>
    </section>
  );
}
