"use client";

import type { ReactNode } from "react";
import type { Troubleshoot } from "@/lib/data";
import { useLang } from "@/lib/lang";
import { RichText } from "@/components/rich-text";

/* One problem taken apart in the order it actually happened: what broke, why,
   what I did, what changed. The result line is the only thing here that isn't
   muted — it's the part a reader skimming four projects will stop on. */

const FIELD = {
  problem: { ko: "문제 상황", en: "Problem" },
  cause: { ko: "원인 분석", en: "Root cause" },
  solution: { ko: "해결 과정", en: "How I solved it" },
  result: { ko: "결과", en: "Result" },
  refs: { ko: "관련 자료", en: "References" },
};

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-[10px] font-semibold tracking-[0.12em] text-foreground-muted uppercase">
        {label}
      </dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

export function TroubleshootList({ items }: { items: Troubleshoot[] }) {
  const lang = useLang();
  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className="break-inside-avoid border-l-2 border-accent pl-4 md:pl-5">
          <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-accent uppercase">
            Trouble Shooting {i + 1}
          </p>
          <h5 className="mt-1 text-sm leading-snug font-semibold text-foreground md:text-base">
            <RichText>{item.title[lang]}</RichText>
          </h5>

          <dl className="mt-3 space-y-3 text-sm leading-relaxed text-foreground-muted md:text-[15px]">
            <Field label={FIELD.problem[lang]}>
              <p>
                <RichText>{item.problem[lang]}</RichText>
              </p>
            </Field>

            {item.cause ? (
              <Field label={FIELD.cause[lang]}>
                <p>
                  <RichText>{item.cause[lang]}</RichText>
                </p>
              </Field>
            ) : null}

            <Field label={FIELD.solution[lang]}>
              <ul className="list-disc space-y-1 pl-5 marker:text-accent">
                {item.solution[lang].map((line, j) => (
                  <li key={j}>
                    <RichText>{line}</RichText>
                  </li>
                ))}
              </ul>
            </Field>

            <Field label={FIELD.result[lang]}>
              <p className="font-medium text-foreground">
                <RichText>{item.result[lang]}</RichText>
              </p>
            </Field>

            {item.refs?.length ? (
              <Field label={FIELD.refs[lang]}>
                <div className="flex flex-wrap gap-2">
                  {item.refs.map((ref) => (
                    <a
                      key={ref.url}
                      href={ref.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-foreground-muted no-underline transition-colors hover:border-foreground hover:text-foreground"
                    >
                      {ref.label} ↗
                    </a>
                  ))}
                </div>
              </Field>
            ) : null}
          </dl>
        </div>
      ))}
    </div>
  );
}
