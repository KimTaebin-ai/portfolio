import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-[800px] flex-col gap-2 px-6 text-xs text-foreground-muted md:flex-row md:items-center md:justify-between md:px-16">
        <p>
          © {year} {profile.nameEn}
        </p>
        <p>Built with Next.js · Deployed on GitHub Pages</p>
      </div>
    </footer>
  );
}
