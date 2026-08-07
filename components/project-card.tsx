import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold md:text-xl">{project.name}</h3>
        <span
          className={
            "text-xs font-medium md:text-sm " +
            (project.status === "complete" ? "text-accent" : "text-foreground-muted")
          }
        >
          {project.status === "complete" ? "✓" : "🔄"} {project.statusLabel}
        </span>
      </div>
      <p className="mt-1 text-xs font-medium text-foreground-muted md:text-sm">
        {project.stack} · {project.period}
      </p>
      {project.badge ? (
        <p className="mt-2 text-xs font-medium text-accent md:text-sm">{project.badge}</p>
      ) : null}

      <div className="mt-4 space-y-1.5 text-sm text-foreground-muted md:text-base">
        {project.whatItDoes.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="mt-4">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
          How it works
        </h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground-muted md:text-base">
          {project.howItWorks.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>

      {project.keyResults ? (
        <div className="mt-4">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
            Key results
          </h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground-muted md:text-base">
            {project.keyResults.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-4">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
          What I learned
        </h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground-muted md:text-base">
          {project.whatILearned.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
