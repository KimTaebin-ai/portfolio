"use client";

import { useEffect, useRef, useState } from "react";
import type { FlowStep } from "@/lib/data";
import type { Lang } from "@/lib/lang";

function Connector() {
  return (
    <svg width="28" height="12" viewBox="0 0 28 12" className="shrink-0 self-center text-accent-muted" aria-hidden>
      <line x1="0" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" className="flow-dash" />
      <path
        d="M17 2 L23 6 L17 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StepFlow({ steps, lang }: { steps: FlowStep[]; lang: Lang }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    const content = contentRef.current;
    if (!el || !content) return;
    function check() {
      if (!el) return;
      setHasMore(el.scrollWidth - el.clientWidth - el.scrollLeft > 4);
    }
    // Re-run on scroll, on container resize, AND on content resize — a
    // language toggle changes the rendered text (and thus content width)
    // without changing the container's own size, so both observers are
    // needed to catch every way "does this overflow" can change.
    check();
    el.addEventListener("scroll", check, { passive: true });
    const ro = new ResizeObserver(check);
    ro.observe(el);
    ro.observe(content);
    return () => {
      el.removeEventListener("scroll", check);
      ro.disconnect();
    };
  }, [steps, lang]);

  return (
    <div className="relative">
      <div ref={scrollRef} className="overflow-x-auto">
        <div ref={contentRef} role="list" className="flex w-max items-center py-0.5">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div
                role="listitem"
                className="flex min-w-[126px] max-w-[160px] flex-col justify-center gap-1 rounded-lg border border-border bg-chip/60 px-3 py-2.5"
              >
                <span className="text-xs leading-snug font-medium text-foreground">{step.label[lang]}</span>
                {step.sub ? (
                  <span className="font-mono text-[10px] text-foreground-muted">{step.sub[lang]}</span>
                ) : null}
              </div>
              {i < steps.length - 1 ? <Connector /> : null}
            </div>
          ))}
        </div>
      </div>
      {hasMore ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 flex w-10 items-center justify-end bg-gradient-to-l from-background to-transparent"
        >
          <span className="mr-0.5 text-xs text-foreground-muted">›</span>
        </div>
      ) : null}
    </div>
  );
}
