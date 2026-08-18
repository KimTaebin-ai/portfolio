"use client";

import type { ReactNode } from "react";
import { making } from "@/lib/data";
import { useLang } from "@/lib/lang";
import type { Lang } from "@/lib/lang";

type Step = { title: { ko: string; en: string }; sub: { ko: string; en: string } };

/* Small-caps rule used to head each flow. */
function FlowLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[11px] font-semibold tracking-[0.16em] text-foreground-muted uppercase">
      {children}
    </p>
  );
}

function Node({ step, lang }: { step: Step; lang: Lang }) {
  return (
    <div className="flex-1 rounded-lg border border-border bg-accent-soft px-4 py-3">
      <p className="text-sm leading-snug font-medium text-foreground">{step.title[lang]}</p>
      <p className="mt-1 font-mono text-[11px] leading-snug text-foreground-muted">{step.sub[lang]}</p>
    </div>
  );
}

/* Points right when the steps sit in a row, down once they stack. */
function Arrow() {
  return (
    <svg
      viewBox="0 0 24 10"
      className="h-4 w-6 shrink-0 rotate-90 self-center text-accent sm:rotate-0"
      aria-hidden
    >
      <line x1="1" y1="5" x2="17" y2="5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M15 1.5 L21 5 L15 8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Flow({ steps, lang }: { steps: Step[]; lang: Lang }) {
  return (
    <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-stretch sm:gap-3">
      {steps.map((step, i) => (
        <div key={i} className="contents">
          <Node step={step} lang={lang} />
          {i < steps.length - 1 ? <Arrow /> : null}
        </div>
      ))}
    </div>
  );
}

/* The return edge: a dashed bracket that leaves the last step, runs under the
   row and comes back up into the first — drawn with three borders rather than
   an SVG path so it reflows with the steps instead of being pinned to
   authored coordinates. */
function FeedbackEdge({ caption }: { caption: string }) {
  return (
    <div className="mt-1">
      <div className="relative h-5">
        <div className="absolute inset-x-3 top-0 h-full rounded-b-lg border-x border-b border-dashed border-accent/70" />
        <svg viewBox="0 0 10 8" className="absolute top-0 left-1 h-2 w-2.5 text-accent" aria-hidden>
          <path d="M5 0 L9.5 7 L0.5 7 Z" fill="currentColor" />
        </svg>
      </div>
      <p className="mt-2 text-center font-mono text-[11px] text-foreground-muted">{caption}</p>
    </div>
  );
}

export function Making() {
  const lang = useLang();
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{making.title}</h2>

      {/* summary table — label right-aligned against the description */}
      <dl className="mt-6 grid max-w-[620px] grid-cols-[auto_1fr] gap-x-4 gap-y-2 sm:grid-cols-[auto_1fr_auto] sm:gap-x-5">
        {making.summary.map((row) => (
          <div key={row.label} className="contents">
            <dt className="text-right text-sm font-semibold text-foreground md:text-base">
              {row.label}
            </dt>
            <dd className="text-sm text-foreground-muted md:text-base">{row.what[lang]}</dd>
            <dd className="col-start-2 font-mono text-[11px] text-foreground-muted sm:col-start-3 sm:text-right md:text-xs">
              {row.when[lang]}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <FlowLabel>{making.origin.label}</FlowLabel>
        <Flow steps={making.origin.steps} lang={lang} />
      </div>

      <div className="mt-9">
        <FlowLabel>{making.loop.label}</FlowLabel>
        <Flow steps={making.loop.steps} lang={lang} />
        <FeedbackEdge caption={making.loop.feedback[lang]} />
      </div>
    </>
  );
}
