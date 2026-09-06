"use client";

import Link from "next/link";
import { nav, profile } from "@/lib/data";
import { useLang } from "@/lib/lang";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/lang-toggle";

/* Print goes through the browser's own dialog rather than a generated file:
   the print stylesheet in globals.css already lays the page out for A4, and
   "Save as PDF" is a destination in that dialog on every platform. One button,
   no PDF toolchain in the bundle. */
const PRINT = { ko: "PDF / 인쇄", en: "PDF / Print" };

export function Header() {
  const lang = useLang();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur print:static print:bg-transparent">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-4 md:px-16">
        <Link
          href="#top"
          className="text-sm font-semibold tracking-tight text-foreground no-underline"
        >
          {profile.nameEn} <span className="text-foreground-muted">· {profile.nameKr}</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden items-center gap-5 sm:flex print:hidden">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  {item.label[lang]}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="hidden items-center rounded-full border border-border px-3 py-1.5 font-mono text-[11px] text-foreground-muted transition-colors hover:border-foreground hover:text-foreground sm:inline-flex"
            >
              {PRINT[lang]}
            </button>
            <LangToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
