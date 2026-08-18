"use client";

import Image from "next/image";
import type { Media } from "@/lib/data";
import { asset } from "@/lib/asset";
import { useLang } from "@/lib/lang";

/* Images live in public/images and are authored without the basePath, which
   asset() prepends here. next/image does NOT do it for us: images.unoptimized
   short-circuits the loader that would normally add the prefix, so a bare
   "/images/x.png" resolves against the domain root and 404s on GitHub Pages.

   Width and height are the file's real pixel size and are required — the static
   export never probes the file, so they are the only thing holding layout space
   open while it loads. */
export function Figure({ media, priority = false }: { media: Media; priority?: boolean }) {
  const lang = useLang();
  return (
    <figure className="min-w-0">
      <Image
        src={asset(media.src)}
        alt={media.alt[lang]}
        width={media.width}
        height={media.height}
        priority={priority}
        sizes="(min-width: 768px) 640px, 100vw"
        className="h-auto w-full rounded-lg border border-border bg-chip"
      />
      {media.caption ? (
        <figcaption className="mt-2 text-xs leading-relaxed text-foreground-muted md:text-[13px]">
          {media.caption[lang]}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* One image runs full width; several share a row and wrap on narrow screens. */
export function FigureGrid({ media }: { media: Media[] }) {
  if (!media.length) return null;
  return (
    <div className={"grid gap-4 " + (media.length > 1 ? "sm:grid-cols-2" : "")}>
      {media.map((m, i) => (
        <Figure key={m.src} media={m} priority={i === 0} />
      ))}
    </div>
  );
}
