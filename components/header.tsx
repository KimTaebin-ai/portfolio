import Link from "next/link";
import { nav, profile } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-[800px] items-center justify-between px-6 py-4 md:px-16">
        <Link href="#top" className="text-sm font-semibold tracking-tight text-foreground no-underline">
          {profile.nameEn} <span className="text-foreground-muted">· {profile.nameKr}</span>
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
