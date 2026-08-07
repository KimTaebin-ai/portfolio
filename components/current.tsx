import { Section } from "@/components/section";
import { current } from "@/lib/data";

export function Current() {
  return (
    <Section id="current" kicker="01 · Now" title="Current">
      <div className="space-y-10">
        {current.map((item, idx) => (
          <div key={item.org}>
            <h3 className="flex items-center gap-2 text-lg font-semibold md:text-xl">
              {idx === 0 ? (
                <span className="h-2 w-2 animate-pulse rounded-full bg-success" aria-hidden />
              ) : null}
              {item.org}
            </h3>
            <p className="mt-1 font-mono text-xs text-foreground-muted md:text-[13px]">
              {item.period}
            </p>
            <div className="mt-3 space-y-1 text-sm text-foreground-muted md:text-base">
              {item.body.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
