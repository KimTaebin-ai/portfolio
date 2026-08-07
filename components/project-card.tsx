import type { Project } from "@/lib/data";
import { StatusPill } from "@/components/chip";

function CardHeading({ children }: { children: string }) {
  return (
    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground-muted">
      {children}
    </h4>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h3 className="text-lg font-semibold md:text-xl">{project.name}</h3>
        <StatusPill status={project.status} label={project.statusLabel} />
      </div>
      <p className="mt-2 font-mono text-xs text-foreground-muted md:text-[13px]">
        {project.stack} · {project.period}
      </p>
      {project.badge ? (
        <p className="mt-3 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent md:text-sm">
          {project.badge}
        </p>
      ) : null}

      <div className="mt-5">
        <CardHeading>Why I built this</CardHeading>
        <p className="mt-2 text-sm text-foreground-muted md:text-base">{project.why}</p>
        <p className="mt-3 flex gap-2 text-sm font-medium md:text-base">
          <span className="shrink-0 text-accent" aria-hidden>
            →
          </span>
          <span>{project.solution}</span>
        </p>
      </div>

      <div className="mt-5">
        <CardHeading>How it works</CardHeading>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground-muted md:text-base">
          {project.howItWorks.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>

      {project.keyResults ? (
        <div className="mt-5">
          <CardHeading>Key results</CardHeading>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground-muted md:text-base">
            {project.keyResults.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-5">
        <CardHeading>What I learned</CardHeading>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground-muted md:text-base">
          {project.whatILearned.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
            {link.label} ↗
          </a>
        ))}
      </div>
    </article>
  );
}
