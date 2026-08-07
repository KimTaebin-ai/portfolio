"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/lang";

type DiagramNode = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  title: { ko: string; en: string };
  sub: { ko: string; en: string };
  variant: "past" | "loop" | "future";
};

const NODES: DiagramNode[] = [
  {
    id: "A",
    x: 20,
    y: 26,
    w: 250,
    h: 56,
    title: { ko: "42 Gyeongsan · 2024–", en: "42 Gyeongsan · 2024–" },
    sub: { ko: "밑바닥부터 CS — C, UNIX, 네트워크", en: "CS from scratch — C, UNIX, networks" },
    variant: "past",
  },
  {
    id: "B",
    x: 325,
    y: 26,
    w: 250,
    h: 56,
    title: { ko: "WTIA × UW CoMotion", en: "WTIA × UW CoMotion" },
    sub: { ko: "Seattle 2026 — ML 엔지니어링", en: "Seattle 2026 — ML engineering" },
    variant: "past",
  },
  {
    id: "F",
    x: 630,
    y: 26,
    w: 250,
    h: 56,
    title: { ko: "대규모 ML 시스템", en: "ML systems at scale" },
    sub: { ko: "GPU · 분산 학습", en: "GPU · distributed training" },
    variant: "future",
  },
  {
    id: "C",
    x: 20,
    y: 132,
    w: 250,
    h: 56,
    title: { ko: "기본 원리부터 시작", en: "Start from first principles" },
    sub: { ko: "프레임워크보다 수학 먼저", en: "math before frameworks" },
    variant: "loop",
  },
  {
    id: "D",
    x: 325,
    y: 132,
    w: 250,
    h: 56,
    title: { ko: "바닥부터 직접 만들기", en: "Build it from scratch" },
    sub: { ko: "셸 · 레이트레이서 · RAG · 로봇", en: "shell · raytracer · RAG · robot" },
    variant: "loop",
  },
  {
    id: "E",
    x: 630,
    y: 132,
    w: 250,
    h: 56,
    title: { ko: "측정하고 검증하기", en: "Measure & verify" },
    sub: { ko: "그리드서치 · 평가 · 동료 평가", en: "grid search · evals · peer review" },
    variant: "loop",
  },
];

/* Touring ball: an ambient dot walks the main path (the road so far, plus the
   loop I repeat); every 3rd lap it branches toward the goal node in amber.
   Coordinates are the authored viewBox values, so no CTM math is needed. */
const MAIN = ["A", "B", "C", "D", "E"];
const ALT = ["A", "B", "F"];
const SPEED = 115; // viewBox units / second
const PAUSE = 0.26; // seconds resting at each node
const FADE = 0.22; // seconds fading out/in between laps

function center(id: string) {
  const n = NODES.find((n) => n.id === id)!;
  return { x: n.x + n.w / 2, y: n.y + n.h / 2 };
}

const ARIA_LABEL = {
  ko: "커리어 경로: 2024년부터 42 Gyeongsan에서 컴퓨터 사이언스를 밑바닥부터, 지금은 2026년 Seattle의 WTIA × UW CoMotion에서, 대규모 ML 시스템을 향해 — 반복되는 루프로 움직입니다: 기본 원리부터 시작, 바닥부터 직접 만들기, 측정하고 검증하기.",
  en: "Career path: computer science from scratch at 42 Gyeongsan since 2024, now at WTIA × UW CoMotion in Seattle 2026, headed toward ML systems at scale — driven by a repeating loop: start from first principles, build it from scratch, measure and verify.",
};

const LOOP_CAPTION = {
  ko: "만들 때마다 다음 빈틈이 보인다",
  en: "every build reveals the next gap",
};

export function CareerPath() {
  const lang = useLang();
  const svgRef = useRef<SVGSVGElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const dot = dotRef.current;
    if (!svg || !dot) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dot.style.display = "none";
      return;
    }

    const main = MAIN.map(center);
    const alt = ALT.map(center);
    const a = {
      lap: 0,
      seg: 0,
      t: 0,
      phase: "pause" as "pause" | "move" | "restart",
      ph: 0,
      path: main,
    };

    function place(from: { x: number; y: number }, to: { x: number; y: number }, t: number) {
      dot!.setAttribute("cx", String(from.x + (to.x - from.x) * t));
      dot!.setAttribute("cy", String(from.y + (to.y - from.y) * t));
    }

    function startLap() {
      a.lap++;
      const useAlt = a.lap % 3 === 0;
      a.path = useAlt ? alt : main;
      dot!.setAttribute("fill", useAlt ? "var(--warning)" : "var(--success)");
      a.seg = 0;
      a.t = 0;
      a.phase = "pause";
      a.ph = 0;
      dot!.style.opacity = "1";
      place(a.path[0], a.path[0], 0);
    }

    function dist(p: { x: number; y: number }, q: { x: number; y: number }) {
      return Math.hypot(q.x - p.x, q.y - p.y);
    }

    function update(dt: number) {
      const p = a.path;
      const last = p.length - 1;
      if (a.phase === "pause") {
        a.ph += dt;
        if (a.ph >= PAUSE) {
          a.ph = 0;
          a.phase = "move";
        }
        return;
      }
      if (a.phase === "restart") {
        a.ph += dt;
        if (a.ph < FADE) {
          dot!.style.opacity = String(1 - a.ph / FADE);
          return;
        }
        startLap();
        return;
      }
      const toIdx = a.seg + 1;
      if (toIdx > last) {
        a.phase = "restart";
        a.ph = 0;
        return;
      }
      const from = p[a.seg];
      const to = p[toIdx];
      a.t += (SPEED * dt) / (dist(from, to) || 1);
      if (a.t >= 1) {
        a.t = 0;
        a.seg = toIdx;
        a.phase = "pause";
        place(to, to, 0);
        return;
      }
      place(from, to, a.t);
    }

    let visible = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          visible = e.isIntersecting;
        });
      },
      { threshold: 0.12 }
    );
    io.observe(svg);

    let raf = 0;
    let prev: number | null = null;
    function tick(ts: number) {
      const dt = prev == null ? 0 : Math.min(0.05, (ts - prev) / 1000);
      prev = ts;
      if (visible) update(dt);
      raf = requestAnimationFrame(tick);
    }

    startLap();
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <div className="overflow-x-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 900 240"
        role="img"
        aria-label={ARIA_LABEL[lang]}
        className="min-w-[640px]"
        style={{ width: "100%" }}
      >
        <defs>
          <marker
            id="cp-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
          </marker>
        </defs>

        <text
          x="20"
          y="14"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            fill: "var(--foreground-muted)",
          }}
        >
          THE PATH
        </text>
        <text
          x="20"
          y="122"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            fill: "var(--foreground-muted)",
          }}
        >
          THE LOOP
        </text>

        {/* edges */}
        <path d="M 270 54 L 317 54" stroke="var(--accent)" strokeWidth="1.8" fill="none" markerEnd="url(#cp-arrow)" />
        <path
          d="M 575 54 L 622 54"
          stroke="var(--accent)"
          strokeWidth="1.8"
          fill="none"
          strokeDasharray="5 4"
          opacity="0.75"
          markerEnd="url(#cp-arrow)"
        />
        <path
          d="M 450 82 L 450 98 Q 450 106 442 106 L 153 106 Q 145 106 145 114 L 145 128"
          stroke="var(--accent)"
          strokeWidth="1.8"
          fill="none"
          markerEnd="url(#cp-arrow)"
        />
        <path d="M 270 160 L 317 160" stroke="var(--accent)" strokeWidth="1.8" fill="none" markerEnd="url(#cp-arrow)" />
        <path d="M 575 160 L 622 160" stroke="var(--accent)" strokeWidth="1.8" fill="none" markerEnd="url(#cp-arrow)" />
        <path
          d="M 755 188 L 755 204 Q 755 212 747 212 L 153 212 Q 145 212 145 204 L 145 192"
          stroke="var(--accent)"
          strokeWidth="1.8"
          fill="none"
          strokeDasharray="5 4"
          opacity="0.75"
          markerEnd="url(#cp-arrow)"
        />
        <text
          x="450"
          y="230"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-geist-mono)", fontSize: 10.5, fill: "var(--foreground-muted)" }}
        >
          {LOOP_CAPTION[lang]}
        </text>

        {/* nodes */}
        {NODES.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx={7}
              fill="var(--background)"
              stroke={n.variant === "past" ? "var(--accent)" : n.variant === "future" ? "var(--foreground-muted)" : "var(--border)"}
              strokeWidth={1.4}
              strokeDasharray={n.variant === "future" ? "4 3" : undefined}
            />
            <text
              x={n.x + n.w / 2}
              y={n.y + 24}
              textAnchor="middle"
              style={{ fontSize: 13.5, fontWeight: 600, fill: "var(--foreground)" }}
            >
              {n.title[lang]}
            </text>
            <text
              x={n.x + n.w / 2}
              y={n.y + 42}
              textAnchor="middle"
              style={{ fontSize: 11.5, fill: "var(--foreground-muted)" }}
            >
              {n.sub[lang]}
            </text>
          </g>
        ))}

        <circle
          ref={dotRef}
          r={6}
          fill="var(--success)"
          pointerEvents="none"
          style={{ filter: "drop-shadow(0 0 3px rgba(0,0,0,.28))" }}
        />
      </svg>
    </div>
  );
}
