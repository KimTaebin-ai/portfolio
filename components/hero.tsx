import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-[800px] px-6 md:px-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {profile.nameEn} <span className="text-foreground-muted">· {profile.nameKr}</span>
        </h1>
        <p className="mt-4 text-base text-foreground-muted md:text-lg">{profile.roles}</p>
        <p className="mt-2 text-base italic text-accent md:text-lg">&ldquo;{profile.tagline}&rdquo;</p>

        <p className="mt-8 text-sm text-foreground-muted md:text-base">{profile.techLine}</p>
        <p className="text-sm text-foreground-muted md:text-base">{profile.currentLine}</p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium md:text-base">
          <a href={profile.socials.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={`mailto:${profile.socials.email}`}>Email</a>
        </div>
      </div>
    </section>
  );
}
