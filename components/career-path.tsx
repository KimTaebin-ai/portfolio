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
  variant: "past" | "current" | "loop" | "future";
};

const TOP_Y = 26;
const LOOP_Y = 146;
const NODE_H = 56;

const NODES: DiagramNode[] = [
  {
    id: "Z",
    x: 20,
    y: TOP_Y,
    w: 215,
    h: NODE_H,
    title: { ko: "마이스터고 · 산업 경력", en: "Trade school · industry" },
    sub: { ko: "2018–2024 · Ubase 팀장 외", en: "2018–2024 · incl. team lead" },
    variant: "past",
  },
  {
    id: "A",
    x: 282,
    y: TOP_Y,
    w: 225,
    h: NODE_H,
    title: { ko: "École 42 · 2024–", en: "École 42 · 2024–" },
    sub: { ko: "밑바닥부터 CS — C, UNIX, 네트워크", en: "CS from scratch — C, UNIX, networks" },
    variant: "past",
  },
  {
    id: "B",
    x: 554,
    y: TOP_Y,
    w: 215,
    h: NODE_H,
    title: { ko: "WTIA × UW CoMotion", en: "WTIA × UW CoMotion" },
    sub: { ko: "Seattle 2026.6–8", en: "Seattle Jun–Aug 2026" },
    variant: "past",
  },
  {
    id: "N",
    x: 816,
    y: TOP_Y,
    w: 230,
    h: NODE_H,
    title: { ko: "지금 · 기회를 찾는 중", en: "Now · open to work" },
    sub: { ko: "스타트업 합류 · 인턴십", en: "startup roles · internships" },
    variant: "current",
  },
  {
    id: "F",
    x: 1093,
    y: TOP_Y,
    w: 187,
    h: NODE_H,
    title: { ko: "대규모 ML 시스템", en: "ML systems at scale" },
    sub: { ko: "GPU · 분산 학습", en: "GPU · distributed training" },
    variant: "future",
  },
  {
    id: "C",
    x: 20,
    y: LOOP_Y,
    w: 380,
    h: NODE_H,
    title: { ko: "1차 원리에서 문제 정의", en: "Frame from first principles" },
    sub: { ko: "추상화 이전에 수학과 명세", en: "math and spec before abstraction" },
    variant: "loop",
  },
  {
    id: "D",
    x: 460,
    y: LOOP_Y,
    w: 380,
    h: NODE_H,
    title: { ko: "밑바닥부터 구현", en: "Implement from the ground up" },
    sub: { ko: "셸 · 레이트레이서 · RAG · 로보틱스", en: "shell · ray tracer · RAG · robotics" },
    variant: "loop",
  },
  {
    id: "E",
    x: 900,
    y: LOOP_Y,
    w: 380,
    h: NODE_H,
    title: { ko: "정량 측정과 검증", en: "Measure and validate" },
    sub: { ko: "그리드서치 · 정량 평가 · 동료 리뷰", en: "grid search · quantitative evals · peer review" },
    variant: "loop",
  },
];

/* Touring ball: an ambient dot walks the main path (the road so far, plus the
   loop I repeat); every 3rd lap it branches toward the goal node in amber.
   Coordinates are the authored viewBox values, so no CTM math is needed. */
const MAIN = ["Z", "A", "B", "N", "C", "D", "E"];
const ALT = ["Z", "A", "B", "N", "F"];
const SPEED = 130; // viewBox units / second
const PAUSE = 0.24; // seconds resting at each node
const FADE = 0.22; // seconds fading out/in between laps

function center(id: string) {
  const n = NODES.find((n) => n.id === id)!;
  return { x: n.x + n.w / 2, y: n.y + n.h / 2 };
}

const ARIA_LABEL = {
  ko: "커리어 경로: 2018년 마이스터고와 4년의 산업 경력(Ubase 프로젝트 팀장 포함)에서 시작해, 2024년부터 École 42에서 컴퓨터 사이언스를 밑바닥부터, 2026년 여름 Seattle의 WTIA × UW CoMotion 수료를 거쳐, 현재는 스타트업 합류와 인턴십 기회를 찾고 있으며, 대규모 ML 시스템을 향해 — 반복되는 루프로 움직입니다: 1차 원리에서 문제 정의, 밑바닥부터 구현, 정량 측정과 검증.",
  en: "Career path: starting in 2018 with trade school and 4 years across industry (including a stint as project team lead at Ubase), then computer science from scratch at École 42 since 2024, through WTIA × UW CoMotion in Seattle over the summer of 2026, currently open to startup roles and internships, headed toward ML systems at scale — driven by a repeating loop: frame from first principles, implement from the ground up, measure and validate.",
};

const LOOP_CAPTION = {
  ko: "구현할 때마다 다음 문제가 정의된다",
  en: "each implementation defines the next problem",
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
        viewBox="0 0 1300 260"
        role="img"
        aria-label={ARIA_LABEL[lang]}
        className="min-w-[900px]"
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
          y="136"
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

        {/* top-row edges: Z → A → B → N (now) ⇢ F (goal) */}
        <path d="M 235 54 L 274 54" stroke="var(--accent)" strokeWidth="1.8" fill="none" markerEnd="url(#cp-arrow)" />
        <path d="M 507 54 L 546 54" stroke="var(--accent)" strokeWidth="1.8" fill="none" markerEnd="url(#cp-arrow)" />
        <path d="M 769 54 L 808 54" stroke="var(--accent)" strokeWidth="1.8" fill="none" markerEnd="url(#cp-arrow)" />
        <path
          d="M 1046 54 L 1085 54"
          stroke="var(--accent)"
          strokeWidth="1.8"
          fill="none"
          strokeDasharray="5 4"
          opacity="0.75"
          markerEnd="url(#cp-arrow)"
        />

        {/* elbow: N (current) drops into the loop */}
        <path
          d="M 931 82 L 931 98 Q 931 106 923 106 L 218 106 Q 210 106 210 114 L 210 142"
          stroke="var(--accent)"
          strokeWidth="1.8"
          fill="none"
          markerEnd="url(#cp-arrow)"
        />

        {/* loop-row edges: C → D → E */}
        <path d="M 400 174 L 452 174" stroke="var(--accent)" strokeWidth="1.8" fill="none" markerEnd="url(#cp-arrow)" />
        <path d="M 840 174 L 892 174" stroke="var(--accent)" strokeWidth="1.8" fill="none" markerEnd="url(#cp-arrow)" />

        {/* loop-back: E returns to C */}
        <path
          d="M 1090 202 L 1090 218 Q 1090 226 1082 226 L 218 226 Q 210 226 210 218 L 210 206"
          stroke="var(--accent)"
          strokeWidth="1.8"
          fill="none"
          strokeDasharray="5 4"
          opacity="0.75"
          markerEnd="url(#cp-arrow)"
        />
        <text
          x="650"
          y="246"
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
              fill={n.variant === "current" ? "var(--accent-soft)" : "var(--background)"}
              stroke={
                n.variant === "past" || n.variant === "current"
                  ? "var(--accent)"
                  : n.variant === "future"
                    ? "var(--foreground-muted)"
                    : "var(--border)"
              }
              strokeWidth={n.variant === "current" ? 2.2 : 1.4}
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
