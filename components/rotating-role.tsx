"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const HOLD = 2600; // ms a title stays put
const FADE = 260; // ms cross-fade, matches the transition below

/* One title at a time instead of a slash-separated pile. The longest title
   reserves the width (an invisible sizer) so the line beside it never jumps.
   Users who ask for reduced motion get the first title, static. */
export function RotatingRole() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const out = setTimeout(() => setVisible(false), HOLD);
    const swap = setTimeout(() => {
      setI((n) => (n + 1) % profile.roleRotation.length);
      setVisible(true);
    }, HOLD + FADE);
    return () => {
      clearTimeout(out);
      clearTimeout(swap);
    };
  }, [i]);

  const widest = profile.roleRotation.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <span className="inline-grid align-bottom">
      <span aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {widest}
      </span>
      <span
        className={
          "col-start-1 row-start-1 whitespace-nowrap text-foreground transition-opacity duration-[260ms] " +
          (visible ? "opacity-100" : "opacity-0")
        }
      >
        {profile.roleRotation[i]}
      </span>
    </span>
  );
}
