"use client";

import { useSyncExternalStore } from "react";

export type Lang = "ko" | "en";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Lang {
  return document.documentElement.lang === "en" ? "en" : "ko";
}

function getServerSnapshot(): Lang {
  return "ko";
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setLang(lang: Lang) {
  document.documentElement.lang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  listeners.forEach((listener) => listener());
}
