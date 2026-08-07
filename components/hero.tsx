import { profile } from "@/lib/data";
import { Chip } from "@/components/chip";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-[800px] px-6 md:px-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          {profile.nameEn}{" "}
          <span className="font-normal text-foreground-muted">· {profile.nameKr}</span>
        </h1>
        <p className="mt-5 text-base text-foreground-muted md:text-lg">{profile.roles}</p>
        <p className="mt-3 font-mono text-sm text-accent md:text-base">
          &ldquo;{profile.tagline}&rdquo;
        </p>

        <p className="mt-7 max-w-[600px] text-sm leading-relaxed text-foreground-muted md:text-base">
          {profile.intro}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {profile.techChips.map((chip) => (
            <Chip key={chip}>{chip}</Chip>
          ))}
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-foreground-muted md:text-base">
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" aria-hidden />
          {profile.currentLine}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground no-underline transition-colors hover:border-foreground"
          >
            GitHub ↗
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground no-underline transition-colors hover:border-foreground"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${profile.socials.email}`}
            className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground no-underline transition-colors hover:border-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
