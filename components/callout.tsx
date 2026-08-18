"use client";

import { profile } from "@/lib/data";
import { useLang } from "@/lib/lang";
import { RichText } from "@/components/rich-text";

/* The thesis, set apart from the hero's narrative: an accent rule on the left
   and a tint fill, so it reads as a statement rather than another paragraph. */
export function Callout() {
  const lang = useLang();
  return (
    <section className="border-b border-border py-10 md:py-14">
      <div className="mx-auto max-w-[1080px] px-6 md:px-16">
        <div className="max-w-[720px] rounded-r-lg border-l-2 border-accent bg-accent-soft px-5 py-4 md:px-6 md:py-5">
          <p className="text-sm leading-[1.7] text-foreground-muted md:text-base">
            <strong className="font-semibold text-accent">{profile.callout.lead[lang]}</strong>{" "}
            <RichText>{profile.callout.body[lang]}</RichText>
          </p>
        </div>
      </div>
    </section>
  );
}
