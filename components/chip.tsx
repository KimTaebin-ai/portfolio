import type { Lang } from "@/lib/lang";

export function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-border bg-chip px-2 py-0.5 font-mono text-xs text-foreground-muted">
      {children}
    </span>
  );
}

const STATUS_LABEL = {
  complete: { ko: "완료", en: "Complete" },
  ongoing: { ko: "진행 중", en: "Ongoing" },
};

export function StatusPill({
  status,
  lang,
}: {
  status: "complete" | "ongoing";
  lang: Lang;
}) {
  const complete = status === "complete";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground-muted">
      <span
        className={
          "h-1.5 w-1.5 rounded-full " + (complete ? "bg-success" : "animate-pulse bg-warning")
        }
      />
      {STATUS_LABEL[status][lang]}
    </span>
  );
}
