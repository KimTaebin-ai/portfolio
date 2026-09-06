"use client";

import type { ReactNode } from "react";
import { profile } from "@/lib/data";
import { useLang } from "@/lib/lang";
import { Chip } from "@/components/chip";
import { RichText } from "@/components/rich-text";
import { RotatingRole } from "@/components/rotating-role";

/* Three seconds, then thirty.

   The narrative paragraphs are the thirty-second version and they stay. What
   is new below them is the three-second one: a summary card carrying the
   thesis and the stack in a single glance, a contact card so nobody has to
   scroll for an email address, and four chips that name the results the rest
   of the page spends its length proving. */

const CONTACT = {
  name: { ko: "이름", en: "Name" },
  affiliation: { ko: "소속", en: "Affiliation" },
  email: { ko: "이메일", en: "Email" },
};

/* Rows share one grid on the <dl> (each row is `contents`) so the label column
   sizes itself to the longest label and every value still lines up — the two
   languages need visibly different widths for that column, and a fixed one
   would either clip "Affiliation" or strand the Korean labels. Values wrap
   rather than truncate: an affiliation cut off mid-word helps nobody. */
function ContactRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="contents">
      <dt className="pt-px font-mono text-[10px] font-semibold tracking-[0.12em] text-foreground-muted uppercase">
        {label}
      </dt>
      <dd className="min-w-0 text-[13px] leading-snug break-words">{children}</dd>
    </div>
  );
}

export function Hero() {
  const lang = useLang();
  return (
    <section id="top" className="scroll-mt-20 border-b border-border py-20 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6 md:px-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          {profile.nameEn}{" "}
          <span className="font-normal text-foreground-muted">· {profile.nameKr}</span>
        </h1>
        <p className="mt-5 text-base text-foreground-muted md:text-lg">
          <RotatingRole />
          <span className="text-foreground-muted"> · {profile.roleSuffix}</span>
        </p>
        <p className="mt-3 font-mono text-sm text-accent md:text-base">
          &ldquo;{profile.tagline}&rdquo;
        </p>

        <div className="mt-7 max-w-[640px] space-y-2.5 text-sm leading-[1.7] text-foreground-muted md:text-base">
          {profile.intro[lang].map((line, i) => (
            <p key={i}>
              <RichText>{line}</RichText>
            </p>
          ))}
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          {/* summary — the thesis the rest of the page is evidence for */}
          <div className="rounded-xl border-l-2 border-accent bg-accent-soft px-5 py-4 md:px-6 md:py-5">
            <p className="text-sm leading-[1.7] text-foreground-muted md:text-base">
              <strong className="font-semibold text-accent">{profile.callout.lead[lang]}</strong>{" "}
              <RichText>{profile.callout.body[lang]}</RichText>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.techChips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </div>
          </div>

          {/* contact */}
          <div className="rounded-xl border border-border px-5 py-4 md:px-6 md:py-5">
            <dl className="grid grid-cols-[max-content_minmax(0,1fr)] items-baseline gap-x-3 gap-y-2.5">
              <ContactRow label={CONTACT.name[lang]}>
                <span className="font-medium text-foreground">
                  {profile.nameEn} · {profile.nameKr}
                </span>
              </ContactRow>
              <ContactRow label={CONTACT.affiliation[lang]}>
                <span className="text-foreground-muted">{profile.affiliation[lang]}</span>
              </ContactRow>
              <ContactRow label={CONTACT.email[lang]}>
                <a href={`mailto:${profile.socials.email}`}>{profile.socials.email}</a>
              </ContactRow>
              <ContactRow label="GitHub">
                <a href={profile.socials.github} target="_blank" rel="noreferrer noopener">
                  {profile.socialHandles.github} ↗
                </a>
              </ContactRow>
              <ContactRow label="LinkedIn">
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer noopener">
                  {profile.socialHandles.linkedin} ↗
                </a>
              </ContactRow>
            </dl>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {profile.highlights.map((highlight) => (
            <span
              key={highlight.en}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent-muted bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
            >
              <span aria-hidden>★</span>
              {highlight[lang]}
            </span>
          ))}
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-foreground-muted md:text-base">
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" aria-hidden />
          {profile.currentLine[lang]}
        </p>
      </div>
    </section>
  );
}
