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
  return (
    <div className="overflow-x-auto">
      <div role="list" className="flex w-max items-center py-0.5">
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
  );
}
