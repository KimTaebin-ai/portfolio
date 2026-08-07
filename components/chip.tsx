export function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-border bg-chip px-2 py-0.5 font-mono text-xs text-foreground-muted">
      {children}
    </span>
  );
}

export function StatusPill({ status, label }: { status: "complete" | "in-progress"; label: string }) {
  const complete = status === "complete";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground-muted">
      <span
        className={
          "h-1.5 w-1.5 rounded-full " + (complete ? "bg-success" : "animate-pulse bg-warning")
        }
      />
      {label}
    </span>
  );
}
