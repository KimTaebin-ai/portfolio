"use client";

import { useLang, setLang } from "@/lib/lang";

export function LangToggle() {
  const lang = useLang();
  return (
    <div className="flex items-center rounded-full border border-border p-0.5 font-mono text-xs">
      <button
        type="button"
        onClick={() => setLang("ko")}
        aria-pressed={lang === "ko"}
        className={
          "rounded-full px-2 py-1 transition-colors " +
          (lang === "ko" ? "bg-foreground text-background" : "text-foreground-muted hover:text-foreground")
        }
      >
        KO
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={
          "rounded-full px-2 py-1 transition-colors " +
          (lang === "en" ? "bg-foreground text-background" : "text-foreground-muted hover:text-foreground")
        }
      >
        EN
      </button>
    </div>
  );
}
