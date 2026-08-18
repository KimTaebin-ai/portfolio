"use client";

import { profile } from "@/lib/data";
import { useLang } from "@/lib/lang";
import { RichText } from "@/components/rich-text";

/* The thesis the rest of the page is evidence for. It sits inside the hero,
   directly under the tech chips, so it reads as the closing beat of the
   introduction rather than a separate section — an accent rule and tint fill
   are all that set it apart. */
export function Callout() {
  const lang = useLang();
  return (
    <div className="mt-7 max-w-[640px] rounded-r-lg border-l-2 border-accent bg-accent-soft px-5 py-4 md:px-6 md:py-5">
      <p className="text-sm leading-[1.7] text-foreground-muted md:text-base">
        <strong className="font-semibold text-accent">{profile.callout.lead[lang]}</strong>{" "}
        <RichText>{profile.callout.body[lang]}</RichText>
      </p>
    </div>
  );
}
