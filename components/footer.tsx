import { profile } from "@/lib/data";

// Static export: both values freeze at build time, which is exactly "last updated".
const now = new Date();
const year = now.getFullYear();
const updated = `${year}.${String(now.getMonth() + 1).padStart(2, "0")}`;

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-[800px] flex-col gap-2 px-6 font-mono text-xs text-foreground-muted md:flex-row md:items-center md:justify-between md:px-16">
        <p>
          © {year} {profile.nameEn}
        </p>
        <p>Last updated {updated} · Next.js · GitHub Pages</p>
      </div>
    </footer>
  );
}
