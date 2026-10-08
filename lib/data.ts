export type Lang = "ko" | "en";
export type L<T> = { ko: T; en: T };

/* Two credentials a reader may want to check rather than take on trust: what
   42's curriculum actually is, and what RNCP level 7 certifies. Written as
   [text](url) in body copy — see components/rich-text.tsx.

   Linked on the mentions that carry weight (hero affiliation, the Now section,
   the Education explainer), not on every repeat: the project cards below say
   "École 42" a dozen times and linking each one would just be noise. */
export const LINKS = {
  ecole42: "https://42.fr/en/what-is-42/42-program-explained/",
  rncp7: "https://www.francecompetences.fr/recherche/rncp/39774/",
} as const;

export const profile = {
  nameEn: "Taebin Kim",
  nameKr: "김태빈",
  /* Cycled in the hero — one title at a time rather than a slash-separated pile.
     "École 42" is rendered next to it, fixed. */
  roleRotation: [
    "Problem Solver",
    "Full-Stack Engineer",
    "AI Engineer",
    "Solo Founder",
  ],
  roleSuffix: "École 42",
  tagline: "Find a problem worth paying for. Build it. Prove it.",
  /* One sentence, no emphasis. Everything below the hero is the evidence for
     it, so this line does not need to argue. */
  intro: {
    ko: [
      "돈이 되는 문제를 찾아 직접 만들고, 트랙션으로 증명하는 엔지니어입니다.",
    ],
    en: [
      "I'm an engineer who finds problems people will pay to have solved, builds the solution myself, and proves it with traction.",
    ],
  } satisfies L<string[]>,
  techChips: ["Claude API · RAG", "Next.js", "Spring Boot", "Python", "TAM/SAM/SOM"],
  /* Two separate facts, so two lines: what I'm doing now, and what I'm looking
     for. Joined with a "·" they read as one long clause and the second half —
     the one a recruiter is scanning for — gets lost behind the first. */
  currentLines: {
    ko: [
      `[École 42](${LINKS.ecole42})에서 [RNCP7](${LINKS.rncp7}) 과정 중 DS · AI 과정을 진행하고 있습니다.`,
      "인턴십과 스타트업에 함께할 기회를 찾고 있습니다.",
    ],
    en: [
      `Working through the DS · AI track at [École 42](${LINKS.ecole42}), toward an [RNCP Level 7](${LINKS.rncp7}) qualification.`,
      "Open to internships and to joining a startup.",
    ],
  } satisfies L<string[]>,
  /* Shown in the hero contact card, under the name. */
  affiliation: {
    ko: `[École 42](${LINKS.ecole42}) (경산) · DS · AI 과정 ([RNCP 7](${LINKS.rncp7}))`,
    en: `[École 42](${LINKS.ecole42}) (Gyeongsan) · DS · AI track ([RNCP level 7](${LINKS.rncp7}))`,
  } satisfies L<string>,
  /* Four chips under the hero cards — the 3-second version of the page. Each
     one is backed by a project, an award, or an experience entry below. */
  highlights: [
    {
      ko: "Poma AI — 글로벌 로펌 2곳 파일럿 계약",
      en: "Poma AI — pilot contracts with 2 global law firms",
    },
    {
      ko: "WTIA AI Course LLM 경진대회 1위",
      en: "1st — WTIA AI Course LLM competition",
    },
    {
      ko: "UC Berkeley SCET 파이널 팀 프로젝트 1위",
      en: "1st — UC Berkeley SCET final team project",
    },
    {
      ko: "수입 · 판매 사업 월 매출 1,000만 원+",
      en: "Import & retail business — ₩10M+ monthly revenue",
    },
  ] satisfies L<string>[],
  /* The one paragraph that says what the rest of the page is evidence for.
     `lead` carries the accent weight; `body` stays body-colored. */
  callout: {
    lead: {
      ko: "판매, 병원, 로펌 — 매번 같은 순서로 일했습니다.",
      en: "Retail, hospitals, law firms — the same order every time.",
    },
    body: {
      ko: "중국 잡화와 의류를 직접 수입 · 판매할 때는 키워드 검색량으로 수요를 보고 소싱 원가와 경쟁 가격으로 마진을 설계해 **월 매출 `1,000만 원` 이상**을 만들었습니다. Softnet에서는 의료진이 실제로 보고 싶어 하는 지표를 끝까지 확인해 **대학병원 `3`곳**에 모니터링 대시보드를 배포했고, WTIA에서는 1주 만에 만든 MVP로 글로벌 로펌 `3`곳을 인터뷰해 **`2`곳과 파일럿 계약**을 맺었습니다. 문제를 먼저 확인하고, 직접 만들고, 숫자로 증명합니다.",
      en: "Importing and selling Chinese goods and clothing, I read demand from keyword search volume and set margins from sourcing cost and competitor prices — **₩`10M`+ in monthly revenue**. At Softnet I kept checking which metrics clinicians actually wanted to see and shipped monitoring dashboards to **`3` university hospitals**. At WTIA, an MVP built in one week got me interviews with `3` global law firms and **pilot contracts with `2`**. Confirm the problem first, build it myself, prove it with numbers.",
    },
  } satisfies { lead: L<string>; body: L<string> },
  socials: {
    github: "https://github.com/KimTaebin-ai",
    linkedin: "https://www.linkedin.com/in/tbkim02/",
    email: "bin065025@gmail.com",
  },
  /* What the contact card prints instead of the full URL. */
  socialHandles: {
    github: "github.com/KimTaebin-ai",
    linkedin: "linkedin.com/in/tbkim02",
  },
};

export const nav: { href: string; label: L<string> }[] = [
  { href: "#current", label: { ko: "현재", en: "Now" } },
  { href: "#projects", label: { ko: "프로젝트", en: "Projects" } },
  { href: "#stack", label: { ko: "스택", en: "Stack" } },
  { href: "#experience", label: { ko: "경력", en: "Experience" } },
  { href: "#awards", label: { ko: "수상", en: "Awards" } },
];

/* An image in public/images. `src` omits the basePath ("/images/foo.png") —
   next/image prefixes it. width/height are the file's true pixel dimensions;
   this build exports statically with images.unoptimized, so they are the only
   thing reserving layout space before the file loads. */
export type Media = {
  src: string;
  alt: L<string>;
  width: number;
  height: number;
  caption?: L<string>;
  /* Text-heavy captures (evaluation comments, logs) — keep at full column
     width instead of sharing a row, or the text shrinks past reading size. */
  wide?: boolean;
};

/* A screenshot that does not exist yet, drawn as the layout it would show.
   Real captures aren't ready, so instead of an empty slot each project says
   what its screen is made of: rows of labeled regions, sized relative to each
   other (`h` is a row's share of the height, `w` a cell's share of the row).
   Swap a `wireframes` entry for a `Media` entry once the real file lands. */
export type Wireframe = {
  caption: L<string>;
  frame?: "browser" | "terminal" | "screen";
  rows: {
    h?: number;
    cells: { label: L<string>; w?: number; tone?: "solid" | "muted" }[];
  }[];
};

export const current: {
  org: L<string>;
  period: L<string>;
  body: L<string[]>;
  ongoing?: boolean;
  media?: Media[];
  links?: { label: L<string>; href: string }[];
}[] = [
  {
    org: {
      ko: "École 42 — DS · AI 과정 진행 중",
      en: "École 42 — DS · AI track, in progress",
    },
    period: { ko: "2024.10 – 현재", en: "Oct 2024 – present" },
    ongoing: true,
    body: {
      ko: [
        `강의 없이 **프로젝트를 만들어 동료 평가로 통과**하는 [학교](${LINKS.ecole42})입니다. \`Transcendence\` · \`WebServ\`를 포함한 공통 과정을 마치고, 지금은 [RNCP7](${LINKS.rncp7}) 과정 중 **DS · AI 과정**을 진행하고 있습니다. WTIA에서 만든 \`14 CFR\` RAG 챗봇과 Poma AI MVP도 이 과정과 병행했습니다.`,
      ],
      en: [
        `A [school](${LINKS.ecole42}) with no lectures: **you pass by building projects and defending them through peer evaluation**. I've completed the core curriculum, \`Transcendence\` and \`WebServ\` included, and am now on the **DS · AI track** toward [RNCP level 7](${LINKS.rncp7}). The \`14 CFR\` RAG chatbot and the Poma AI MVP from WTIA were built alongside it.`,
      ],
    },
  },
  {
    org: {
      ko: "고려사이버대학교 — 경영학과 재학",
      en: "Korea Cyber University — Business Administration",
    },
    period: { ko: "2021.03 – 현재", en: "Mar 2021 – present" },
    ongoing: true,
    body: {
      ko: [
        "재직과 개인 사업을 병행하면서 경영학을 전공하고 있습니다. 직접 물건을 팔며 배운 수요 · 마진 감각을 **시장 규모 산정(TAM/SAM/SOM), 경쟁 분석, 가격 설계**로 정리해, Poma AI에서 그대로 썼습니다.",
      ],
      en: [
        "Studying business administration alongside work and running my own business. It turned the feel for demand and margin I got from selling things myself into **market sizing (TAM/SAM/SOM), competitive analysis, and pricing** — which I used directly on Poma AI.",
      ],
    },
  },
];

/* The "making of" section: a summary table, then two small flows — where the
   habit came from, and the loop it turned into. Section labels are English in
   both languages; the row and node copy still switches. */
export const making = {
  title: "How I got here",
  summary: [
    {
      label: "Sold",
      what: {
        ko: "수입 · 판매 사업 — 월 매출 1,000만 원+",
        en: "import & retail business — ₩10M+ a month",
      },
      when: { ko: "2019–2023", en: "2019–2023" },
    },
    {
      label: "Built",
      what: {
        ko: "Softnet — 대학병원 3곳 inPHR 플랫폼",
        en: "Softnet — inPHR platform for 3 university hospitals",
      },
      when: { ko: "2021–2022", en: "2021–2022" },
    },
    {
      label: "Led",
      what: {
        ko: "Ubase — 상담사 15명 팀 리더, QA 10%↑",
        en: "Ubase — team lead for 15 agents, QA +10%",
      },
      when: { ko: "2023–2024", en: "2023–2024" },
    },
    {
      label: "Founded",
      what: {
        ko: "Poma AI — 로펌 2곳 파일럿 계약",
        en: "Poma AI — 2 law-firm pilot contracts",
      },
      when: { ko: "2026", en: "2026" },
    },
    {
      label: "Now",
      what: {
        ko: "École 42 DS · AI 과정 · 인턴십 · 스타트업 기회를 찾는 중",
        en: "École 42 DS · AI track · open to internships and startups",
      },
      when: { ko: "2026–", en: "2026–" },
    },
  ] satisfies { label: string; what: L<string>; when: L<string> }[],
  origin: {
    label: "Where it came from",
    steps: [
      {
        title: { ko: "직접 판매", en: "Selling it myself" },
        sub: { ko: "수요 · 마진 · 상세페이지", en: "demand · margin · listings" },
      },
      {
        title: { ko: "실무 경험", en: "Industry" },
        sub: {
          ko: "병원 대시보드 · 팀 리드",
          en: "hospital dashboards · team lead",
        },
      },
      {
        title: { ko: "École 42", en: "École 42" },
        sub: {
          ko: "동료 평가로 배우는 CS",
          en: "CS through peer evaluation",
        },
      },
      {
        title: { ko: "WTIA · Poma AI", en: "WTIA · Poma AI" },
        sub: {
          ko: "시애틀 · Solo Founder",
          en: "Seattle · solo founder",
        },
      },
    ] satisfies { title: L<string>; sub: L<string> }[],
  },
  loop: {
    label: "What I repeat",
    steps: [
      {
        title: {
          ko: "돈이 되는 문제인지 확인한다",
          en: "Check the problem is worth paying for",
        },
        sub: {
          ko: "수요 · 지불 주체 · 경쟁",
          en: "demand · who pays · competition",
        },
      },
      {
        title: { ko: "가장 빨리 직접 만든다", en: "Build it myself, fast" },
        sub: { ko: "1주 MVP · 12시간 프로토타입", en: "1-week MVP · 12-hour prototype" },
      },
      {
        title: {
          ko: "트랙션으로 증명한다",
          en: "Prove it with traction",
        },
        sub: { ko: "매출 · 배포 · 파일럿", en: "revenue · deployments · pilots" },
      },
    ] satisfies { title: L<string>; sub: L<string> }[],
    feedback: {
      ko: "고객의 반응이 다음에 풀 문제를 알려준다",
      en: "what customers say points to the next problem",
    } satisfies L<string>,
  },
};

export type FlowStep = { label: L<string>; sub?: L<string> };

/* A commit, PR, or issue backing up a troubleshooting entry. */
export type Ref = { label: string; url: string };

/* One problem, taken apart. `cause` is optional because not every entry has a
   diagnosis distinct from the symptom — leave it off rather than pad it. */
export type Troubleshoot = {
  title: L<string>;
  problem: L<string>;
  cause?: L<string>;
  solution: L<string[]>;
  result: L<string>;
  refs?: Ref[];
};

/* `featured` projects get the two-column deep dive; `additional` get a compact
   card that expands. The split is about depth of evidence, not quality. */
export type Project = {
  id: string;
  tier: "featured" | "additional";
  name: L<string>;
  /* One line. Carries the whole project in the quick nav and compact cards. */
  headline: L<string>;
  period: L<string>;
  org?: L<string>;
  awards?: L<string>[];
  notice?: L<string>;
  team?: { members: L<string>; myRole: L<string> };
  /* Sidebar-only, and only worth writing when there is something specific to
     say — hence optional on both. */
  coreSkills?: L<string[]>;
  contributions?: L<string[]>;
  stack: string[];
  status: "complete" | "ongoing";
  wireframes?: Wireframe[];
  media?: Media[];
  /* Introduction: the problem, then what got built. */
  intro: L<string[]>;
  flow: FlowStep[];
  howItWorks?: L<string[]>;
  troubleshooting?: Troubleshoot[];
  keyResults?: L<string[]>;
  /* Outside evaluation of the project — what judges scored and said, kept
     apart from `learned` so the reader can tell their words from mine. */
  pitchFeedback?: PitchFeedback;
  learned: L<string[]>;
  links: { label: string; href: string }[];
};

export type PitchFeedback = {
  source: L<string>;
  scores: { label: L<string>; value: string }[];
  strengths: L<string[]>;
  improvements: L<string[]>;
};

export const projects: Project[] = [
  /* ---------------------------------------------------------------- featured */
  {
    id: "poma-ai",
    tier: "featured",
    name: { ko: "Poma AI — 로펌 사업개발 SaaS", en: "Poma AI — BD SaaS for Law Firms" },
    headline: {
      ko: "로펌 사업개발용 구독형 SaaS. `1주` 만에 만든 MVP로 글로벌 로펌 `3`곳을 반복 인터뷰해 `2`곳과 파일럿 계약",
      en: "A subscription SaaS for law-firm business development. An MVP built in `1 week` took me through repeat meetings with `3` global law firms and pilot contracts with `2`",
    },
    period: { ko: "2026.06 – 2026.08", en: "Jun – Aug 2026" },
    org: {
      ko: "WTIA Entrepreneurship & Technology Immersion Course · 시애틀",
      en: "WTIA Entrepreneurship & Technology Immersion Course · Seattle",
    },
    awards: [
      {
        ko: "🤝 글로벌 로펌 2곳 파일럿 계약",
        en: "🤝 Pilot contracts with 2 global law firms",
      },
      {
        ko: "🎤 투자자 Pitch Day 평균 7.78 / 10",
        en: "🎤 Investor Pitch Day — 7.78 / 10 average",
      },
    ],
    team: {
      members: { ko: "Solo Founder", en: "Solo founder" },
      myRole: {
        ko: "기획 · 시장조사 · 피치덱 · MVP 개발 · 고객 미팅 전 과정",
        en: "planning, market research, pitch deck, MVP, and every customer meeting",
      },
    },
    coreSkills: {
      ko: [
        "시장 규모 산정 (`TAM/SAM/SOM`) · 경쟁사 분석",
        "구독 가격 모델 설계",
        "고객 인터뷰 기반 피벗",
        "`Claude API` 기반 MVP 개발",
      ],
      en: [
        "Market sizing (`TAM/SAM/SOM`) and competitor analysis",
        "Subscription pricing design",
        "Pivoting on customer-interview evidence",
        "MVP development on the `Claude API`",
      ],
    },
    contributions: {
      ko: [
        "시장 규모와 경쟁사를 분석해 차별점을 정하고 구독 가격 모델 설계",
        "인터뷰로 사용자와 지불 주체가 다르다는 걸 확인하고 타겟을 로펌 사업개발로 피벗",
        "`Claude API` · `Next.js`로 리드 발굴 + 백테스트 MVP를 `1주` 만에 개발",
        "글로벌 로펌 `3`곳 반복 미팅 → `2`곳 파일럿 계약 → 투자자 Pitch Day 발표",
      ],
      en: [
        "Sized the market and mapped competitors to set the differentiation, then designed the subscription pricing",
        "Confirmed through interviews that the user and the payer were different people, and pivoted to law-firm business development",
        "Built a lead-discovery + backtest MVP on the `Claude API` and `Next.js` in `1 week`",
        "Repeat meetings with `3` global law firms → `2` pilot contracts → investor Pitch Day",
      ],
    },
    stack: ["Claude API", "Next.js", "React", "TAM/SAM/SOM", "Customer Interviews"],
    status: "complete",
    intro: {
      ko: [
        "WTIA 8주 창업 프로그램에서 혼자 시작한 스타트업입니다. 로펌이 새 의뢰를 따오는 **사업개발(BD) 과정**을 돕는 구독형 SaaS로, 잠재 고객 리드를 발굴하고 그 신호가 과거 데이터에서 실제로 맞았는지 백테스트 결과로 보여줍니다.",
        "처음 아이디어는 다른 산업이었습니다. 개발 중 고객 인터뷰에서 **문제를 겪는 사용자와 비용을 지불하는 고객이 다르다**는 걸 확인하고, 지불 주체인 로펌으로 타겟을 옮겼습니다. 이후 `1주` 만에 MVP를 만들어 글로벌 로펌 `3`곳과 반복 미팅했고, **`2`곳과 파일럿 계약**을 맺은 뒤 투자자 Pitch Day에서 발표했습니다.",
      ],
      en: [
        "A startup I started alone during WTIA's 8-week program. It's a subscription SaaS for **law-firm business development** — how firms win new matters: it surfaces prospective-client leads and backtests them against historical data to show whether the signal would actually have been right.",
        "The first idea was in a different industry. Mid-build, customer interviews showed me that **the people who had the problem were not the people who would pay for it**, so I moved the target to law firms, the ones holding the budget. I then built an MVP in `1 week`, held repeat meetings with `3` global law firms, **signed pilot contracts with `2`**, and presented at the investor Pitch Day.",
      ],
    },
    flow: [
      {
        label: { ko: "시장 · 경쟁 분석", en: "Market & competitors" },
        sub: { ko: "TAM/SAM/SOM", en: "TAM/SAM/SOM" },
      },
      {
        label: { ko: "고객 인터뷰", en: "Customer interviews" },
        sub: { ko: "사용자 ≠ 지불 주체", en: "user ≠ payer" },
      },
      { label: { ko: "로펌 BD로 피벗", en: "Pivot to law-firm BD" } },
      {
        label: { ko: "1주 MVP", en: "1-week MVP" },
        sub: { ko: "리드 발굴 · 백테스트", en: "leads · backtest" },
      },
      {
        label: { ko: "로펌 3곳 미팅", en: "Meet 3 law firms" },
        sub: { ko: "파일럿 2곳", en: "2 pilots" },
      },
    ],
    howItWorks: {
      ko: [
        "시장 규모를 `TAM/SAM/SOM`으로 나눠 산정하고 경쟁사를 정리해 차별점을 정한 뒤, 연 단위 구독 가격 모델을 설계",
        "인터뷰에서 '문제를 겪는 사용자'와 '비용을 내는 고객'을 따로 확인하고, 지불 주체인 로펌으로 타겟과 문제를 다시 정의",
        "`Claude API`와 `Next.js`로 잠재 고객 리드를 발굴하고, 과거 데이터 기반 백테스트로 그 리드가 실제 의뢰로 이어졌을지를 보여주는 MVP 개발",
        "MVP를 들고 글로벌 로펌 `3`곳과 반복 미팅 → `2`곳 파일럿 계약 → 투자자 Pitch Day 발표",
      ],
      en: [
        "Sized the market as `TAM/SAM/SOM`, mapped competitors to settle the differentiation, then designed an annual subscription price",
        "Checked separately in interviews who had the problem and who would pay, and redefined the target and the problem around law firms, the payer",
        "Built an MVP on the `Claude API` and `Next.js` that surfaces prospective-client leads and backtests them on historical data to show whether they'd have turned into matters",
        "Took the MVP into repeat meetings with `3` global law firms → `2` pilot contracts → investor Pitch Day",
      ],
    },
    troubleshooting: [
      {
        title: {
          ko: "문제를 겪는 사람과 돈을 내는 사람이 달랐다",
          en: "The people with the problem weren't the people who would pay",
        },
        problem: {
          ko: "처음 아이디어로 개발을 진행하던 중 고객 인터뷰를 해보니, 그 문제를 실제로 겪는 사용자와 비용을 지불할 고객이 서로 달랐습니다. 사용자만 보고 만들면 쓰는 사람은 있어도 살 사람이 없는 제품이 됩니다.",
          en: "Partway into building the first idea, customer interviews showed that the users who actually had the problem and the customers who would pay for a fix were different people. Build only for the user and you get a product with people who use it and nobody who buys it.",
        },
        solution: {
          ko: [
            "인터뷰 결과를 근거로 **타겟 산업과 해결할 문제를 로펌 사업개발로 피벗**",
            "바뀐 문제에 맞춰 `1주` 만에 MVP를 새로 만들고, 같은 로펌들과 반복 미팅하며 확인",
          ],
          en: [
            "On the strength of the interviews, **pivoted the target industry and the problem to law-firm business development**",
            "Rebuilt the MVP for the new problem in `1 week` and kept checking it in repeat meetings with the same firms",
          ],
        },
        result: {
          ko: "글로벌 로펌 `3`곳 중 **`2`곳과 파일럿 계약**을 맺었습니다.",
          en: "**Pilot contracts with `2`** of the `3` global law firms.",
        },
      },
    ],
    keyResults: {
      ko: [
        "MVP **`1주`** 만에 개발 (`Claude API` · `Next.js`)",
        "글로벌 로펌 `3`곳 반복 미팅 → **`2`곳 파일럿 계약**",
        "투자자 Pitch Day **평균 `7.78 / 10`** — Vision `8.67` · Market Potential `8.33` · Traction `8`",
      ],
      en: [
        "MVP built in **`1 week`** (`Claude API` · `Next.js`)",
        "Repeat meetings with `3` global law firms → **`2` pilot contracts**",
        "Investor Pitch Day **average `7.78 / 10`** — Vision `8.67` · Market Potential `8.33` · Traction `8`",
      ],
    },
    pitchFeedback: {
      source: {
        ko: "WTIA 투자자 Pitch Day (Day 2) · 평가자 3인의 점수와 코멘트 요약",
        en: "WTIA investor Pitch Day (Day 2) · scores and comments from 3 evaluators, summarized",
      },
      scores: [
        { label: { ko: "종합", en: "Overall" }, value: "7.78 / 10" },
        { label: { ko: "피치덱", en: "Pitch deck" }, value: "7.82 / 10" },
        { label: { ko: "핵심 내러티브", en: "Core narrative" }, value: "7.75 / 10" },
        { label: { ko: "전달력", en: "Delivery" }, value: "19.33 / 25" },
        { label: { ko: "Vision", en: "Vision" }, value: "8.67" },
        { label: { ko: "Traction", en: "Traction" }, value: "8.00" },
        { label: { ko: "Solution", en: "Solution" }, value: "7.00" },
        { label: { ko: "Business Model", en: "Business model" }, value: "7.00" },
      ],
      strengths: {
        ko: [
          "**트랙션이 가장 강한 근거였습니다.** 인터뷰와 후속 미팅을 이미 잡아뒀고 약 `10%` 전환율로 파일럿에 관심을 보인 로펌이 나왔다는 점을, 한 평가자는 \"excellent outcome\"이라고 평가했습니다.",
          "**로펌을 비치헤드로 좁힌 뒤 회계로 넓히는 순서**가 한계가 아니라 절제된 시퀀싱으로 읽혔습니다 (Vision `8.67`, Company Purpose `8.33`).",
          "시장 규모가 충실하게 조사됐고 시장 정의가 명확하다는 평가 (Market Potential `8.33`).",
          "이전 판매 경험으로 증명된 영업 능력, 질의응답에서의 자신감과 명확성이 좋게 언급됐습니다.",
        ],
        en: [
          "**Traction was the strongest evidence.** Interviews done, follow-ups already booked, and a firm interested in a pilot at roughly a `10%` conversion rate — one evaluator called it \"an excellent outcome.\"",
          "**Narrowing to law firms as a beachhead before expanding to accounting** read as disciplined sequencing rather than a limitation (Vision `8.67`, Company Purpose `8.33`).",
          "Market sizing was called well researched, with a clearly defined market (Market Potential `8.33`).",
          "Prior sales experience as proven selling ability, and confident, clear answers in Q&A, were both noted.",
        ],
      },
      improvements: {
        ko: [
          "**가장 낮은 Solution · Business Model(`7.0`)은 둘 다 명확성 문제였습니다.** 큰 그림은 이해되지만 고객이 정확히 무엇을 받는지는 모르겠다는 지적이 여러 번 나왔고, Intapp을 기존 솔루션이자 경쟁사로 동시에 설명해 혼동을 줬습니다.",
          "여러 입력 요소를 어떤 우선순위로 제품에 반영할지, 연 `$28K` 가격이 왜 seat · 사용량 기반이 아닌지에 대한 질문을 받았습니다.",
          "**공개 데이터에 의존하면 방어력이 약하다**는 지적이 반복됐습니다. 진짜 해자는 '법률 리스크 판단'이고, 독자 알고리즘과 시간이 갈수록 쌓이는 데이터로 그걸 말해야 한다는 조언을 받았습니다.",
          "신뢰도(Credibility `7.67`)를 높이려면 법률 자문가가 필요하다는 의견. 타겟이 전체 로펌인지 미국에 진출하는 한국 로펌인지 모호했고, 이중언어를 강점으로 내세우고도 Q&A를 한국어로 진행해 그걸 보여줄 기회를 놓쳤습니다.",
        ],
        en: [
          "**The lowest scores, Solution and Business Model (`7.0`), both came down to clarity.** Several judges understood Poma at a high level but not what the customer actually gets, and Intapp was presented so that it read as both an existing solution and a competitor.",
          "Questions on how the various inputs would be prioritized in the product, and why the `$28K` annual price isn't seat- or usage-based.",
          "**Defensibility on public data** came up repeatedly. The sharpest advice: the real moat is legal-risk judgment, built on proprietary algorithms and data that accumulates over time — and the pitch should say so.",
          "A legal advisor on the team would lift credibility (Credibility `7.67`). The market framing was ambiguous between all law firms and Korean firms expanding into the US, and after claiming bilingualism as an advantage, running the Q&A in Korean missed the chance to show it.",
        ],
      },
    },
    learned: {
      ko: [
        "**만들기 전에 누가 돈을 내는지부터 확인해야 했습니다.** 사용자와 지불 주체가 다르다는 걸 인터뷰로 확인하고 타겟을 바꾼 결정이 파일럿 계약까지 이어졌습니다.",
        "**트랙션이 있어도 설명이 흐리면 점수가 깎입니다.** Solution과 Business Model이 가장 낮았던 이유는 둘 다 '고객이 정확히 무엇을 받는가'가 한 문장으로 보이지 않았기 때문이었습니다.",
        "**해자는 데이터 출처가 아니라 판단에서 나온다는 걸 배웠습니다.** 공개 데이터라는 약점은 법률 리스크 판단 알고리즘과 쌓여가는 데이터로 다시 설명해야 합니다.",
        "**다음에 고칠 것:** 가격을 seat · 사용량 기준으로 다시 검토하고, 법률 자문가를 확보하고, 타겟 시장을 한 문장으로 정의하기.",
      ],
      en: [
        "**Before building, I needed to know who pays.** Confirming in interviews that the user and the payer were different, and moving the target accordingly, is what led to the pilot contracts.",
        "**Traction doesn't save a blurry explanation.** Solution and Business Model scored lowest because neither made 'what exactly does the customer get' visible in one sentence.",
        "**A moat comes from judgment, not from where the data comes from.** The public-data weakness has to be re-explained as legal-risk judgment plus data that accumulates.",
        "**Next to fix:** revisit pricing on a seat or usage basis, bring a legal advisor on board, and define the target market in one sentence.",
      ],
    },
    links: [],
  },
  {
    id: "rag-chatbot",
    tier: "featured",
    name: { ko: "14 CFR 규정 RAG 챗봇", en: "14 CFR RAG Chatbot" },
    headline: {
      ko: "`2`인 팀 팀장으로 `12`시간 만에 만든 항공법 RAG 챗봇. 경진대회 전체 `1`위, 처음 보는 질문 기준 recall `0.909`",
      en: "An aviation-law RAG chatbot built in `12` hours as lead of a team of `2`. 1st overall, recall `0.909` on unseen questions",
    },
    period: { ko: "2026.06", en: "Jun 2026" },
    org: {
      ko: "WTIA AI Course · CMU · UW LLM 커리큘럼 기반 경진대회",
      en: "WTIA AI Course · competition on a CMU / UW LLM curriculum",
    },
    awards: [
      {
        ko: "🏆 LLM 경진대회 전체 1위 · 강사 평가 9/10",
        en: "🏆 1st overall — LLM competition · instructor score 9/10",
      },
    ],
    team: {
      members: { ko: "2인 팀", en: "Team of 2" },
      myRole: {
        ko: "팀장 — 검색 파이프라인 · 평가 체계",
        en: "Team lead — retrieval pipeline, evaluation harness",
      },
    },
    coreSkills: {
      ko: [
        "검색 파이프라인 설계 — 게이트 · rerank · 확장",
        "자동 평가 하네스와 그리드서치",
        "프롬프트 캐싱 · 토큰 비용 최적화",
        "인용 검증 (§ citation)",
      ],
      en: [
        "Retrieval pipeline design — gate, rerank, expand",
        "Automated eval harness and grid search",
        "Prompt caching and token-cost optimization",
        "Citation verification (§ sources)",
      ],
    },
    contributions: {
      ko: [
        "PDF 정제 · §조항 청킹 파이프라인과 20개 후보 적응형 rerank 구현",
        "one-shot과 agentic 두 생성 경로를 나란히 두고 `45`개 설정을 밤새 자동 채점",
        "answer gate · 인용 재번호 · SSE 스트리밍",
      ],
      en: [
        "Built the PDF-cleaning and §-boundary chunking pipeline, plus adaptive rerank over 20 candidates",
        "Ran `45` configurations through an overnight automated grader, one-shot and agentic paths side by side",
        "Answer gate, citation renumbering, SSE streaming",
      ],
    },
    stack: ["Python", "Claude API", "LangChain", "Grid Search", "NumPy"],
    status: "complete",
    wireframes: [
      {
        caption: {
          ko: "챗 UI — 답변 안의 [n] 인용과, 그 근거 조항을 그대로 보여주는 우측 패널",
          en: "Chat UI — [n] citations inside the answer, with the cited clause itself in the right panel",
        },
        frame: "browser",
        rows: [
          {
            h: 1,
            cells: [
              {
                label: {
                  ko: "상단 바 — 대화 제목 · 모델 · one-shot / agentic 토글",
                  en: "Top bar — thread title · model · one-shot / agentic toggle",
                },
              },
            ],
          },
          {
            h: 6,
            cells: [
              {
                w: 2,
                label: {
                  ko: "메시지 스트림 — 질문, 토큰 단위로 흐르는 답변, 문장 끝의 [1][2][3]",
                  en: "Message stream — question, answer streaming token by token, [1][2][3] at the end of each claim",
                },
              },
              {
                w: 1,
                tone: "muted",
                label: {
                  ko: "근거 패널 — 인용된 § 조항 원문과 유사도 점수",
                  en: "Evidence panel — the cited § clause verbatim, with its similarity score",
                },
              },
            ],
          },
          {
            h: 1,
            cells: [{ label: { ko: "입력창 · 전송", en: "Composer · send" } }],
          },
        ],
      },
      {
        caption: {
          ko: "평가 리포트 — 45개 검색 설정을 blind holdout으로 채점한 결과",
          en: "Eval report — 45 retrieval configurations graded against a blind holdout",
        },
        frame: "screen",
        rows: [
          {
            h: 1,
            cells: [
              {
                label: {
                  ko: "요약 — 최고 설정, recall 0.909, 쿼리당 토큰",
                  en: "Summary — best config, recall 0.909, tokens per query",
                },
              },
            ],
          },
          {
            h: 4,
            cells: [
              {
                label: {
                  ko: "설정별 점수 표 — 청크 크기 × top-k × rerank on/off × 게이트 임계값",
                  en: "Per-config table — chunk size × top-k × rerank on/off × gate threshold",
                },
              },
            ],
          },
          {
            h: 3,
            cells: [
              { label: { ko: "recall 막대 그래프", en: "Recall bar chart" } },
              {
                tone: "muted",
                label: {
                  ko: "입력 토큰 비용 그래프",
                  en: "Input-token cost chart",
                },
              },
            ],
          },
        ],
      },
    ],
    intro: {
      ko: [
        "WTIA AI Course에서 CMU · UW의 LLM 커리큘럼을 바탕으로 열린 경진대회입니다. `1,297쪽`짜리 미국 연방 항공법(14 CFR)에서 질문에 맞는 조항(§)을 찾아 답하는 챗봇을 **`12`시간 안에** 만들어야 했고, 정확도 · 속도 · UI 등으로 채점했습니다. `2`인 팀의 팀장을 맡았습니다.",
        "법령을 페이지가 아니라 **조항 단위로 나눠** 질문에 맞는 조항이 1순위로 나오게 했고, 관련 없는 질문은 AI 호출 없이 걸러내고 검색 결과를 압축해 **재정렬 토큰을 약 `60%`** 줄였습니다. 검색 설정 `45`가지를 자동으로 채점하는 평가 체계를 만들어 처음 보는 질문 기준 **recall `0.909`** 설정을 골랐고, 강사 평가 `9/10`으로 **전체 1위**를 했습니다.",
      ],
      en: [
        "A competition in the WTIA AI Course built on CMU and UW's LLM curriculum. The task: in **`12` hours**, build a chatbot that answers questions about `1,297 pages` of U.S. federal aviation law (14 CFR) by finding the right clause (§), graded on accuracy, speed, UI, and more. I led a team of `2`.",
        "Splitting the law **by clause instead of by page** put the right clause at rank 1; filtering off-topic questions before any AI call and compressing search results cut **rerank tokens by about `60%`**. An evaluation harness that auto-graded `45` retrieval configurations picked the setting with **recall `0.909`** on unseen questions. Instructor score `9/10` — **1st overall**.",
      ],
    },
    flow: [
      {
        label: { ko: "PDF 정제 + §청킹", en: "Clean PDF + § chunking" },
        sub: { ko: "0.39→0.80 유사도", en: "0.39→0.80 similarity" },
      },
      { label: { ko: "쿼리 재작성 + 게이트", en: "Rewrite + gate query" } },
      {
        label: {
          ko: "검색: gate·rerank·확장",
          en: "Retrieve: gate·rerank·expand",
        },
      },
      {
        label: {
          ko: "one-shot / agentic 생성",
          en: "One-shot / agentic generation",
        },
      },
      {
        label: {
          ko: "인용 재번호 + 스트리밍",
          en: "Renumber citations + stream",
        },
      },
    ],
    howItWorks: {
      ko: [
        "PDF 추출 노이즈(줄바꿈 하이픈, 헤더, docket 인용)를 제거하고 §조항 경계로 청킹 — 답을 담은 청크의 유사도가 0.39 → 0.80으로 뛰었다",
        "질문 앞에 두 개의 관문: 후속 질문은 재작성으로 독립형 검색어로 바꾸고, 모호한 질문은 되묻고(CLARIFY), 도메인 밖 질문은 유사도 게이트가 걸러낸다",
        "검색 파이프라인: 최고 유사도 0.45 미만이면 0토큰으로 거절(answer gate) → 20개 후보 중 실제 필요한 것만 고르는 적응형 rerank → 인접 청크·교차참조(§ X.Y) 확장 → 중복 제거",
        "one-shot(저비용, 매번 새 컨텍스트)과 agentic 툴 루프(최대 3회 재검색, 프롬프트 캐싱 적용) 두 경로를 나란히 비교",
        "LLM이 건너뛴 인용 번호를 [1][2][3]으로 재정렬하고, SSE로 토큰 단위 스트리밍",
      ],
      en: [
        "Strip PDF extraction noise (line-break hyphenation, headers, docket citations) and chunk on § clause boundaries — similarity for the chunk that actually answers a question jumped from 0.39 to 0.80",
        "Two gates before the question reaches retrieval: rewrite resolves follow-ups into standalone queries, ambiguous questions get a clarifying question back (CLARIFY), and out-of-domain questions are caught by a similarity gate",
        "Retrieval pipeline: below 0.45 top similarity, reject for 0 tokens (answer gate) → adaptive rerank picks only what's actually needed from 20 candidates → expand with neighboring chunks and cross-references (§ X.Y) → dedupe",
        "Two generation paths side by side: one-shot (cheap, fresh context each time) vs. an agentic tool loop (up to 3 re-searches, with prompt caching)",
        "Renumbers any citations the model skipped into a clean [1][2][3], and streams the answer token-by-token over SSE",
      ],
    },
    troubleshooting: [
      {
        title: {
          ko: "정답이 들어 있는 조항이 검색 2,600위 밖에 있었다",
          en: "The clause holding the answer came back past rank 2,600",
        },
        problem: {
          ko: "고정 페이지 청킹에서는 `§61.109` 조항(비행시간 요건에 대한 정확한 답)이 유사도 `0.39`, 순위 `2600위` 밖으로 묻혔습니다.",
          en: "With naive page-by-page chunking, the passage that directly answers 'what flight hours are required' (`§61.109`) embedded at only `0.39` similarity, rank `~2600`.",
        },
        cause: {
          ko: "페이지 경계는 조항 경계와 일치하지 않고, PDF 추출 노이즈(줄바꿈 하이픈, 헤더, docket 인용)가 임베딩을 흐렸습니다.",
          en: "Page boundaries don't line up with clause boundaries, and PDF extraction noise — line-break hyphenation, headers, docket citations — blurred the embedding.",
        },
        solution: {
          ko: [
            "**§조항 경계로 청킹**하도록 분할 기준을 바꿈",
            "PDF 추출 노이즈(줄바꿈 하이픈, 헤더, docket 인용) 제거",
          ],
          en: [
            "Changed the split to **chunk on § clause boundaries**",
            "Stripped PDF extraction noise — line-break hyphenation, headers, docket citations",
          ],
        },
        result: {
          ko: "같은 조항이 유사도 `0.80`, **순위 `1위`**로 올라왔습니다.",
          en: "The same passage rose to `0.80` similarity, **rank `#1`**.",
        },
        // TODO(user): 이 트러블슈팅을 담은 커밋/PR 링크를 refs에 추가
      },
      {
        title: {
          ko: "agentic 루프가 입력 토큰을 너무 많이 썼다",
          en: "The agentic loop was burning too many input tokens",
        },
        problem: {
          ko: "넓은 열거형 질문에서는 agentic 루프가 입력 토큰을 `15k~55k`까지 썼습니다. 최악은 검색만 하다 답을 못 찾아 강제로 답하는 경로가 증거 pool 전체를 캐시 없이 재전송하는 경우였습니다 — 한 호출에 `12,157` 토큰.",
          en: "Broad enumerative questions pushed the agentic loop to `15k–55k` input tokens. Worst case was the forced-answer path — the loop runs out of search budget and has to answer anyway — re-sending the entire evidence pool with no cache, one call costing `12,157` tokens.",
        },
        solution: {
          ko: [
            "증거 pool에 상한을 두고, 툴 출력 스니펫을 축약",
            "forced-answer가 새 컨텍스트를 만들지 않고 **이미 캐시된 대화를 이어가도록** 변경",
          ],
          en: [
            "Capped the evidence pool and shortened tool-output snippets",
            "Made forced-answer **continue the already-cached conversation** instead of building a fresh context",
          ],
        },
        result: {
          ko: "그 호출이 `46` uncached 토큰으로, **전체적으로는 최대 `86%`까지** 줄었습니다 — 'drugs and alcohol' 질문 기준 `14,019 → 1,908`.",
          en: "That call dropped to `46` uncached tokens, **up to `86%` overall** — the 'drugs and alcohol' question went `14,019 → 1,908`.",
        },
        // TODO(user): 프롬프트 캐싱 전환 커밋 링크를 refs에 추가
      },
    ],
    keyResults: {
      ko: [
        "**Recall `0.909`** (처음 보는 질문, blind holdout)",
        "`12`시간 개발로 경진대회 **전체 `1`위** · 강사 평가 `9/10`",
        "관련 없는 질문 사전 차단 + 검색 결과 압축으로 **재정렬 토큰 약 `60%` 감소**",
        "Agentic 검색 루프 입력 토큰 **최대 `86%` 절감** — 'drugs and alcohol' 질문 `14,019 → 1,908`",
        "무관한 질문은 answer gate가 **`0`토큰으로 거절**",
        "모든 답변에 `§` citation — **검증 가능한 답만 출력**",
      ],
      en: [
        "**Recall `0.909`** (unseen questions, blind holdout)",
        "**1st overall** after `12` hours of development · instructor score `9/10`",
        "**About `60%` fewer rerank tokens** by filtering off-topic questions up front and compressing search results",
        "**Up to `86%` fewer input tokens** on the agentic search loop — e.g. the 'drugs and alcohol' question: `14,019 → 1,908`",
        "Answer gate rejects off-corpus questions for **`0` tokens**",
        "Every answer cites its `§` source — **only verifiable answers ship**",
      ],
    },
    learned: {
      ko: [
        "**병목은 생성이 아니라 검색이었습니다.** 모델을 바꾸는 것보다 청크 크기와 `top-k`를 조정하는 쪽이 점수를 훨씬 크게 움직였습니다.",
        "**프롬프트 캐싱은 컨텍스트가 턴마다 자라는 구조에서만 값어치가 있었습니다.** forced-answer를 캐시된 대화 이어가기로 바꾸자 한 호출이 `12,157 → 46` uncached 토큰이 됐습니다.",
        "**비용을 그래프로 보고 나서야 설정 선택 기준이 생겼습니다.** 같은 품질이면 싼 쪽을 고르면 된다는 걸 그전까지는 숫자로 확인해본 적이 없었습니다.",
        "**한계도 있습니다. 정답셋을 제가 만들고 채점도 제가 했습니다.** 문제를 낸 사람이 채점까지 하면 점수가 관대해지기 쉬워서, 다음에는 정답셋 제작과 평가를 분리하려고 합니다.",
      ],
      en: [
        "**The bottleneck was retrieval, not generation.** Tuning chunk size and `top-k` moved the score far more than swapping models did.",
        "**Prompt caching only pays off where the context grows turn over turn.** Switching forced-answer to continue the already-cached conversation took one call from `12,157` to `46` uncached tokens.",
        "**Seeing the cost on a chart is what gave me a rule for picking a config.** Until then I had never actually checked in numbers that at equal quality you just take the cheaper one.",
        "**It has a limitation: I wrote the answer key and I also did the grading.** When the person setting the questions grades them too, scores tend to run generous, so next time I want to separate writing the key from running the evaluation.",
      ],
    },
    media: [
      {
        src: "/images/rag-chatbot-demo.png",
        alt: {
          ko: "RAG 챗봇 UI — 질문과 답변, 우측 패널에 인용 근거",
          en: "RAG chatbot UI — question and answer, with cited sources in the right panel",
        },
        width: 2532,
        height: 1986,
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/KimTaebin-ai/rag-starter" },
      { label: "Demo", href: "https://youtu.be/jrPw8bBo-Dk" },
      {
        label: "etnews (전자신문)",
        href: "https://www.etnews.com/20260724000305",
      },
    ],
  },
  {
    id: "inphrdoc",
    tier: "featured",
    name: {
      ko: "inPHRDOC — 의료진용 PHR 모니터링",
      en: "inPHRDOC — PHR Monitoring for Clinicians",
    },
    headline: {
      ko: "환자의 PHR과 의무기록을 의료진이 실시간으로 보는 대시보드. 의료진이 실제로 보고 싶어 하는 지표를 끝까지 확인해 대학병원 `3`곳에 배포",
      en: "A dashboard where clinicians see patients' PHR and medical records in real time — built around the metrics they actually wanted, and shipped to `3` university hospitals",
    },
    period: { ko: "2021.01 – 2022.01", en: "Jan 2021 – Jan 2022" },
    org: {
      ko: "Softnet · 헬스케어 IoT사업본부 · Full-Stack Engineer",
      en: "Softnet · Healthcare IoT division · Full-stack engineer",
    },
    coreSkills: {
      ko: [
        "`Spring Boot` REST API 설계",
        "`Angular.js` SPA 대시보드 · 차트",
        "시계열 데이터 서버 단 집계 · 페이지네이션",
        "민감 의료 정보 `RBAC`",
      ],
      en: [
        "`Spring Boot` REST API design",
        "`Angular.js` SPA dashboard and charts",
        "Server-side aggregation and pagination of time-series data",
        "`RBAC` for sensitive medical data",
      ],
    },
    contributions: {
      ko: [
        "`Spring Boot` REST API와 `Angular.js` SPA로 의료진 전용 모니터링 대시보드 구축",
        "의료진이 실제로 보고 싶어 하는 지표 형태를 끝까지 확인해 차트로 구현 · 배포",
        "시계열 데이터에 서버 단 집계 · 필터링 · 페이지네이션 적용, 민감 정보에 `RBAC` 적용",
      ],
      en: [
        "Built the clinician-only monitoring dashboard on a `Spring Boot` REST API and an `Angular.js` SPA",
        "Kept checking which metrics clinicians actually wanted, and shipped them as charts",
        "Server-side aggregation, filtering, and pagination for time-series data; `RBAC` on sensitive fields",
      ],
    },
    stack: ["Java", "Spring Boot", "Angular.js", "MySQL", "RBAC"],
    status: "complete",
    intro: {
      ko: [
        "대학병원 `3`곳을 대상으로 한 inPHR 플랫폼(복약 · 정서 관리 · 의료진 모니터링) 중 **의료진이 쓰는 쪽**입니다. 환자가 쌓은 개인건강기록(PHR)과 병원의 의무기록을 의료진이 한 화면에서 실시간으로 조회합니다.",
        "데이터를 보여주는 것 자체보다 **의료진이 실제로 어떤 지표를 어떤 형태로 보고 싶어 하는지** 확인하는 데 시간을 많이 썼고, 그걸 차트로 구현해 배포했습니다.",
      ],
      en: [
        "The **clinician-facing side** of the inPHR platform (medication, emotional-health management, clinician monitoring) built for `3` university hospitals. Clinicians see patients' personal health records (PHR) and the hospital's medical records on one screen, in real time.",
        "More of the time went into confirming **which metrics clinicians actually wanted, and in what form**, than into displaying data as such — and that's what got built into charts and shipped.",
      ],
    },
    flow: [
      { label: { ko: "PHR · 의무기록 수집", en: "Collect PHR + records" } },
      {
        label: { ko: "서버 단 집계", en: "Server-side aggregation" },
        sub: { ko: "필터 · 페이지네이션", en: "filter · paginate" },
      },
      { label: { ko: "RBAC 권한 확인", en: "RBAC check" } },
      { label: { ko: "의료진 대시보드 차트", en: "Clinician dashboard charts" } },
    ],
    howItWorks: {
      ko: [
        "`Spring Boot` REST API가 환자 PHR과 의무기록을 제공하고, `Angular.js` SPA가 의료진 전용 대시보드로 보여줌",
        "계속 쌓이는 시계열 데이터는 서버에서 집계 · 필터링 · 페이지네이션한 뒤 내려보내 화면 속도를 유지",
        "민감한 건강 정보는 역할 기반 접근 제어(`RBAC`)로 열람 범위를 제한",
      ],
      en: [
        "A `Spring Boot` REST API serves patient PHR and medical records; an `Angular.js` SPA presents them as a clinician-only dashboard",
        "Ever-growing time-series data is aggregated, filtered, and paginated on the server before it's sent, keeping the screen fast",
        "Sensitive health data is scoped with role-based access control (`RBAC`)",
      ],
    },
    troubleshooting: [
      {
        title: {
          ko: "데이터는 다 있는데, 의료진이 보고 싶은 형태가 아니었다",
          en: "All the data was there — just not in the form clinicians wanted",
        },
        problem: {
          ko: "PHR과 의무기록을 그대로 보여주는 것만으로는 의료진이 실제 진료에서 쓰기 어려웠습니다.",
          en: "Showing PHR and medical records as-is wasn't something clinicians could actually use in practice.",
        },
        solution: {
          ko: [
            "의료진이 **실제로 보고 싶어 하는 지표와 형태를 끝까지 확인**",
            "확인한 지표를 기준으로 차트를 다시 구성해 구현",
          ],
          en: [
            "**Kept going back to confirm which metrics, in which form,** clinicians actually wanted",
            "Rebuilt the charts around those metrics",
          ],
        },
        result: {
          ko: "**대학병원 `3`곳**에 의료진 모니터링 대시보드를 배포했습니다.",
          en: "Shipped the clinician monitoring dashboard to **`3` university hospitals**.",
        },
      },
      {
        title: {
          ko: "시계열 데이터가 계속 쌓이면서 대시보드가 무거워졌다",
          en: "The dashboard got heavier as time-series data kept piling up",
        },
        problem: {
          ko: "측정값이 시간에 따라 계속 쌓이는 구조라, 원본을 그대로 내려보내면 데이터가 늘수록 대시보드가 느려집니다.",
          en: "Measurements accumulate over time, so sending raw data down means the dashboard slows as the data grows.",
        },
        solution: {
          ko: [
            "**집계 · 필터링 · 페이지네이션을 서버 단으로** 옮겨 필요한 만큼만 전송",
          ],
          en: [
            "**Moved aggregation, filtering, and pagination to the server**, sending only what's needed",
          ],
        },
        result: {
          ko: "데이터가 늘어도 **대시보드 속도를 유지**했습니다.",
          en: "**Dashboard speed held** as the data grew.",
        },
      },
    ],
    learned: {
      ko: [
        "**사용자가 원하는 건 데이터가 아니라 판단에 쓸 지표였습니다.** 무엇을 보여줄지를 사용자에게 끝까지 확인하는 습관이 여기서 생겼습니다.",
        "**데이터가 계속 쌓이는 서비스는 처음부터 서버에서 줄여 보내야 했습니다.** 화면 속도는 프론트보다 API 설계에서 정해졌습니다.",
        "**의료 데이터에서 권한은 기능이 아니라 전제였습니다.** `RBAC`를 먼저 정해야 화면과 API를 설계할 수 있었습니다.",
      ],
      en: [
        "**Users didn't want data — they wanted metrics they could make decisions with.** The habit of confirming with users what to show started here.",
        "**A service where data keeps piling up has to trim it on the server from the start.** Screen speed was decided by the API design more than by the frontend.",
        "**With medical data, permissions are a premise, not a feature.** `RBAC` had to be settled before the screens and APIs could be designed.",
      ],
    },
    links: [],
  },
  {
    id: "transcendence",
    tier: "featured",
    name: {
      ko: "Transcendence — 실시간 PvP Pong",
      en: "Transcendence — Real-time PvP Pong",
    },
    headline: {
      ko: "`4`인 팀에서 팀장을 맡은 실시간 대전 Pong. 프론트 · 백 · 인증 · 배포를 한 팀이 전부 만들었습니다",
      en: "Real-time PvP Pong as lead of a team of `4` — one team building the frontend, backend, auth, and deployment",
    },
    period: { ko: "2026.01 – 2026.02", en: "Jan – Feb 2026" },
    org: {
      ko: "École 42 — 공통 과정",
      en: "École 42 — core curriculum",
    },
    team: {
      members: { ko: "4인 팀", en: "Team of 4" },
      myRole: {
        ko: "팀장 — 아키텍처 · 스프린트 · 작업 분배",
        en: "Team lead — architecture, sprints, task allocation",
      },
    },
    coreSkills: {
      ko: [
        "실시간 상태 동기화 (`Socket.io`)",
        "`OAuth 2.0` + `2FA` 인증 설계",
        "커스텀 매치메이킹",
        "멀티 레포 아키텍처 분할 · 팀 리드",
      ],
      en: [
        "Real-time state synchronization (`Socket.io`)",
        "`OAuth 2.0` + `2FA` authentication design",
        "Custom matchmaking",
        "Multi-repo architecture split and team leadership",
      ],
    },
    contributions: {
      ko: [
        "`4`인 팀의 팀장 — 스프린트·아키텍처·작업 분배 조율",
        "레포를 프론트·백·배포로 분리하고 실시간 게임 상태 동기화를 설계",
        "`OAuth 2.0` + `2FA` 인증 계층과 커스텀 매치메이킹(셔플) 구현",
      ],
      en: [
        "Led the `4`-person team through sprints, architecture, and task allocation",
        "Split the repos into front, back, and deploy, and designed the real-time game-state sync",
        "Built the `OAuth 2.0` + `2FA` authentication layer and the custom matchmaking (shuffle)",
      ],
    },
    stack: ["Node.js", "Socket.io", "React/Vite", "OAuth 2.0", "2FA"],
    status: "complete",
    wireframes: [
      {
        caption: {
          ko: "대전 화면 — 코트 상태는 서버가 쥐고, 양쪽 클라이언트는 이벤트로만 따라온다",
          en: "Match screen — the server owns the court state; both clients follow it through events alone",
        },
        frame: "browser",
        rows: [
          {
            h: 1,
            cells: [
              {
                label: {
                  ko: "스코어보드 — 플레이어 A : B · 라운드",
                  en: "Scoreboard — Player A : B · round",
                },
              },
            ],
          },
          {
            h: 5,
            cells: [
              { w: 1, tone: "muted", label: { ko: "A 패들", en: "A paddle" } },
              {
                w: 4,
                label: {
                  ko: "실시간 코트 — 공 · 패들 좌표를 Socket.io 이벤트로 동기화",
                  en: "Live court — ball and paddle coordinates synced over Socket.io events",
                },
              },
              { w: 1, tone: "muted", label: { ko: "B 패들", en: "B paddle" } },
            ],
          },
          {
            h: 1,
            cells: [
              {
                label: {
                  ko: "연결 상태 · 지연 · 재접속 표시",
                  en: "Connection state · latency · reconnect indicator",
                },
              },
            ],
          },
        ],
      },
      {
        caption: {
          ko: "로그인 — OAuth 2.0 제공자 인증 뒤 2FA 코드 확인",
          en: "Login — OAuth 2.0 provider first, then the 2FA code check",
        },
        frame: "browser",
        rows: [
          {
            h: 1,
            cells: [{ label: { ko: "로고 · Sign in", en: "Logo · Sign in" } }],
          },
          {
            h: 2,
            cells: [
              {
                label: {
                  ko: "OAuth 2.0 제공자 버튼 → 콜백",
                  en: "OAuth 2.0 provider button → callback",
                },
              },
            ],
          },
          {
            h: 2,
            cells: [
              {
                label: {
                  ko: "2FA — 6자리 코드 입력 · 확인 · 재발송",
                  en: "2FA — 6-digit code entry · verify · resend",
                },
              },
            ],
          },
          {
            h: 1,
            cells: [
              {
                tone: "muted",
                label: { ko: "오류 / 잠금 안내", en: "Error / lockout notice" },
              },
            ],
          },
        ],
      },
    ],
    intro: {
      ko: [
        "42 공통 과정 후반의 큰 팀 과제입니다. 프론트엔드, 백엔드, 인증, 배포를 한 팀이 전부 만들어야 해서 **웹 풀스택을 처음부터 끝까지 직접 다뤄본 프로젝트**이기도 합니다.",
        "`Socket.io`로 실시간 대전 Pong을 만들고 커스텀 매치메이킹과 `OAuth 2.0` + `2FA` 인증을 붙였습니다. `4`명 팀의 팀장으로 아키텍처와 스프린트, 작업 분배를 맡았습니다.",
      ],
      en: [
        "The big team project late in École 42's core curriculum. One team has to build the frontend, the backend, authentication, and deployment, which makes it **the project where I handled web full-stack end to end myself**.",
        "We built real-time PvP Pong on `Socket.io` and added custom matchmaking and `OAuth 2.0` + `2FA` authentication. I led the team of `4` and owned the architecture, the sprints, and how the work was split.",
      ],
    },
    flow: [
      { label: { ko: "OAuth 2.0 + 2FA 로그인", en: "OAuth 2.0 + 2FA login" } },
      { label: { ko: "매치메이킹(셔플)", en: "Matchmaking shuffle" } },
      {
        label: {
          ko: "Socket.io 실시간 대전",
          en: "Real-time match (Socket.io)",
        },
      },
      { label: { ko: "양쪽 상태 동기화", en: "Sync state to both players" } },
    ],
    howItWorks: {
      ko: [
        "Socket.io로 실시간 게임 룸과 상태 동기화 구현",
        "커스텀 매치메이킹(셔플) 알고리즘으로 대전 상대 배정",
        "OAuth 2.0 + 2FA로 인증 계층 구성",
        "4인 팀의 리더로 스프린트·아키텍처·작업 분배 조율",
      ],
      en: [
        "Real-time game rooms and state sync via Socket.io",
        "Custom matchmaking (shuffle) algorithm to pair opponents",
        "Authentication layer: OAuth 2.0 + 2FA",
        "Led the 4-person team through sprints, architecture, and task allocation",
      ],
    },
    troubleshooting: [
      {
        title: {
          ko: "레포를 셋으로 나누고, 게임 상태는 서버 한 곳에 뒀다",
          en: "Split into three repos, and kept the game state in one place",
        },
        problem: {
          ko: "팀 `4`명이 동시에 작업하려면 프론트(`React/Vite`), 백엔드, 배포 설정을 분리해야 했습니다. 동시에 실시간 게임 상태는 프론트-백 양쪽에서 같은 값을 믿을 수 있어야 했습니다.",
          en: "With `4` people working in parallel, the frontend (`React/Vite`), backend, and deployment config had to be separated — while the real-time game state still had to be trustworthy on both ends at once.",
        },
        solution: {
          ko: [
            "레포를 `tsen-front` · `tsen-back` · `deployment`로 분리",
            "**실시간 게임 상태는 `Socket.io` 이벤트로만 동기화** — 클라이언트가 자체 판단으로 상태를 바꾸지 않도록",
          ],
          en: [
            "Split the work into `tsen-front`, `tsen-back`, and `deployment` repos",
            "Kept real-time game state **synchronized exclusively through `Socket.io` events** — no client mutating state on its own",
          ],
        },
        result: {
          ko: "**프론트-백 양쪽에서 같은 상태를 동시에 신뢰**할 수 있게 됐고, 세 레포가 서로를 막지 않고 병렬로 진행됐습니다.",
          en: "**Both ends could trust the same state at the same moment**, and the three repos moved in parallel without blocking each other.",
        },
        // TODO(user): tsen-front / tsen-back 커밋·PR 링크를 refs에 추가
      },
    ],
    learned: {
      ko: [
        "**실시간에서 제일 어려운 건 상태였습니다.** 프론트와 백이 같은 순간에 같은 값을 믿게 만드는 데 시간을 가장 많이 썼습니다.",
        "**팀 리딩은 코드 밖의 일이었습니다.** 작업을 어떻게 쪼개고 어떤 순서로 놓느냐가 진행 속도를 결정했습니다.",
        "**인증은 나중에 붙일 수 있는 게 아니었습니다.** `OAuth 2.0`과 `2FA`를 직접 설계해보니 세션과 라우팅 전체가 그 위에 얹히는 구조였습니다.",
      ],
      en: [
        "**In a real-time system the hard part was state.** Most of my time went into making the frontend and the backend trust the same value at the same moment.",
        "**Leading turned out to be the work outside the code.** How the work got split and sequenced decided how fast we moved.",
        "**Auth is not something you add later.** Designing `OAuth 2.0` and `2FA` myself showed me that sessions and routing all sit on top of it.",
      ],
    },
    links: [
      {
        label: "GitHub: tsen-immida",
        href: "https://github.com/orgs/tsen-immida/repositories",
      },
    ],
  },

  /* -------------------------------------------------------------- additional */
  {
    id: "inphrpill",
    tier: "additional",
    name: {
      ko: "inPHRPILL — IoT 복약 순응도 개선",
      en: "inPHRPILL — IoT Medication Adherence",
    },
    headline: {
      ko: "스마트 약통 센서와 연동해 처방부터 복용까지의 이력을 관리하고, 의료진 대시보드에서 실시간으로 확인",
      en: "Tracks medication from prescription to dose through a smart pill-box sensor, visible in real time on the clinician dashboard",
    },
    period: { ko: "2021.01 – 2022.01", en: "Jan 2021 – Jan 2022" },
    org: { ko: "Softnet · 헬스케어 IoT사업본부", en: "Softnet · Healthcare IoT division" },
    stack: ["Java", "Spring Boot", "IoT Sensors", "MySQL"],
    status: "complete",
    intro: {
      ko: [
        "inPHR 플랫폼의 복약 관리 쪽입니다. 스마트 약통 센서에서 들어오는 복약 행위 데이터를 수집해, **처방부터 실제 복용까지의 이력**을 남깁니다.",
        "복약 기록, 증상 설문, 시계열 측정값처럼 **형태가 서로 다른 데이터를 하나의 데이터 모델로 통합**해 의료진 대시보드(inPHRDOC)에서 실시간으로 볼 수 있게 연결했습니다.",
      ],
      en: [
        "The medication side of the inPHR platform. It collects dose events from a smart pill-box sensor and keeps **the history from prescription to the actual dose**.",
        "Medication logs, symptom surveys, and time-series measurements — **data of very different shapes — were unified into one data model** and wired through to the clinician dashboard (inPHRDOC) in real time.",
      ],
    },
    flow: [
      { label: { ko: "스마트 약통 센서", en: "Smart pill-box sensor" } },
      {
        label: { ko: "수집 · 정규화", en: "Collect · normalize" },
      },
      {
        label: { ko: "통합 데이터 모델", en: "Unified data model" },
        sub: { ko: "복약 · 설문 · 측정값", en: "doses · surveys · measurements" },
      },
      { label: { ko: "의료진 대시보드", en: "Clinician dashboard" } },
    ],
    howItWorks: {
      ko: [
        "스마트 약통 센서에서 들어오는 복약 행위 데이터를 수집 · 정규화",
        "복약 기록 · 증상 설문 · 시계열 측정값을 하나의 데이터 모델로 통합",
        "수집한 복약 이력을 의료진 대시보드에서 실시간으로 확인할 수 있게 연결",
      ],
      en: [
        "Collect and normalize dose events coming from the smart pill-box sensor",
        "Unify medication logs, symptom surveys, and time-series measurements into one data model",
        "Wire the collected dose history through to the clinician dashboard in real time",
      ],
    },
    learned: {
      ko: [
        "**센서 데이터는 받는 것보다 정리하는 게 일이었습니다.** 형태가 다른 데이터를 한 모델에 담을 기준을 먼저 정해야 대시보드가 단순해졌습니다.",
      ],
      en: [
        "**With sensor data, the work was in shaping it, not receiving it.** Settling how differently shaped data fits one model first is what kept the dashboard simple.",
      ],
    },
    links: [],
  },
  {
    id: "linear-regression-matrix",
    tier: "additional",
    name: {
      ko: "Linear Regression & Matrix — Rust",
      en: "Linear Regression & Matrix — in Rust",
    },
    headline: {
      ko: "정규방정식부터 `SVD`까지 수치 라이브러리 없이 `Rust`로 짜고, 손계산과 맞춰봤습니다",
      en: "Normal equations through `SVD` in `Rust` with no numerical libraries, checked against hand calculations",
    },
    period: { ko: "2026", en: "2026" },
    org: {
      ko: "École 42 — 심화 과정",
      en: "École 42 — advanced curriculum",
    },
    coreSkills: {
      ko: [
        "수치 최적화 — 경사하강 · 정규화 · 조건수",
        "선형대수 구현 — 고유분해 · `SVD`",
        "`Rust` 트레잇 기반 스칼라 추상화",
        "손계산 대조 검증",
      ],
      en: [
        "Numerical optimization — gradient descent, normalization, conditioning",
        "Linear algebra from scratch — eigendecomposition, `SVD`",
        "Trait-based scalar abstraction in `Rust`",
        "Verification against hand calculations",
      ],
    },
    contributions: {
      ko: [
        "정규방정식 → 최소제곱 → Ridge/Lasso 정규화를 `Rust`로 직접 구현",
        "transpose · 곱 · 역행렬 → 고유분해 → `SVD`를 `Gauss-Jordan` 엔진 하나 위에",
        "구현마다 손계산 결과와 코드 출력을 대조",
      ],
      en: [
        "Implemented normal equations → least squares → Ridge/Lasso regularization by hand in `Rust`",
        "Built transpose, multiply, inverse → eigendecomposition → `SVD` on a single `Gauss-Jordan` engine",
        "Checked every implementation's output against hand-calculated results",
      ],
    },
    stack: ["Rust", "No external math libraries"],
    status: "complete",
    wireframes: [
      {
        caption: {
          ko: "터미널 출력 — 반복별 손실, 학습된 θ, 손계산과의 오차 검증",
          en: "Terminal output — loss per iteration, the learned θ, and the check against hand calculation",
        },
        frame: "terminal",
        rows: [
          {
            h: 1,
            cells: [
              {
                label: {
                  ko: "$ cargo run --release",
                  en: "$ cargo run --release",
                },
              },
            ],
          },
          {
            h: 3,
            cells: [
              {
                label: {
                  ko: "iter 0 … N — loss, 학습률 α, 기울기 노름",
                  en: "iter 0 … N — loss, learning rate α, gradient norm",
                },
              },
            ],
          },
          {
            h: 2,
            cells: [
              {
                label: {
                  ko: "θ — 정규화 스케일에서 학습 후 원래 스케일로 역정규화",
                  en: "θ — trained on the normalized scale, denormalized back to the original",
                },
              },
            ],
          },
          {
            h: 1,
            cells: [
              {
                tone: "muted",
                label: {
                  ko: "assert |θ_code − θ_hand| < ε",
                  en: "assert |θ_code − θ_hand| < ε",
                },
              },
            ],
          },
        ],
      },
    ],
    intro: {
      ko: [
        "`numpy`에서 한 줄로 끝나는 계산들이 밑에서 어떻게 도는지 모른 채로 ML을 하고 싶지 않았습니다. 그래서 **수치 라이브러리 없이 `Rust`로 다시 짰습니다.** 책으로 공부한 수학을 코드로 확인하는 자리이기도 합니다.",
        "정규방정식과 최소제곱, Ridge/Lasso 정규화, 그리고 고유분해와 `SVD`까지 구현하고 결과를 손계산과 대조했습니다.",
      ],
      en: [
        "I didn't want to do ML without knowing what runs underneath the calculations that take one line in `numpy`. So I **rewrote them in `Rust` with no numerical libraries.** It's also where the math I've been studying from books gets checked against code.",
        "Implemented normal equations and least squares, Ridge/Lasso regularization, and eigendecomposition through `SVD`, then compared the output against hand calculations.",
      ],
    },
    flow: [
      { label: { ko: "정규방정식", en: "Normal equation" } },
      {
        label: {
          ko: "최소제곱 + 정규화",
          en: "Least squares + regularization",
        },
      },
      { label: { ko: "고유분해 · SVD", en: "Eigendecomposition · SVD" } },
      { label: { ko: "손계산으로 검증", en: "Verify by hand" } },
    ],
    howItWorks: {
      ko: [
        "Linear Regression(ftlr): 정규방정식(행렬 역행렬) → 최소제곱법 → Ridge/Lasso 정규화, 전부 Rust로 직접 구현",
        "Matrix(Enter-the-Matrix): transpose · multiplication · inverse → eigendecomposition → SVD",
        "구현마다 손계산 결과와 코드 출력을 대조해 검증",
      ],
      en: [
        "Linear Regression (ftlr): normal equations (matrix inverse) → least squares → Ridge/Lasso regularization, all hand-built in Rust",
        "Matrix (Enter-the-Matrix): transpose · multiplication · inverse → eigendecomposition → SVD",
        "Checked every implementation's output against hand-calculated results",
      ],
    },
    troubleshooting: [
      {
        title: {
          ko: "정규화 없이는 수렴하지 않았다 (Hessian 최대 고유값 `1.3×10¹⁰`)",
          en: "It wouldn't converge without normalization (max Hessian eigenvalue `1.3×10¹⁰`)",
        },
        problem: {
          ko: "원본 스케일(주행거리 km, 가격)로 그대로 경사하강을 돌리면 발산했습니다. 발산을 피하려면 학습률을 `1e-10`까지 낮춰야 하고, 그래도 수렴이 느렸습니다.",
          en: "Running gradient descent directly on the raw (km, price) scale diverged. The learning rate had to drop to `~1e-10` to avoid it, and even then it converged slowly.",
        },
        cause: {
          ko: "축마다 스케일이 크게 달라 손실 표면의 조건수가 극단적으로 나빴습니다 — 이 데이터셋에서 Hessian 최대 고유값이 약 `1.3×10¹⁰`까지 나왔습니다.",
          en: "The axes differ in scale by orders of magnitude, leaving a badly ill-conditioned loss surface — on this dataset the Hessian's max eigenvalue comes out to roughly `1.3×10¹⁰`.",
        },
        solution: {
          ko: [
            "**`x`·`y`를 각각 min-max 정규화**한 뒤 학습",
            "학습이 끝난 θ는 원래 스케일로 역정규화해 되돌림",
          ],
          en: [
            "**Min-max normalized `x` and `y` independently** before training",
            "Denormalized θ back to the original scale afterward",
          ],
        },
        result: {
          ko: "학습률 `0.1`로 **빠르게 수렴**했습니다 — 학습률을 `1e-10`까지 낮출 필요가 사라졌습니다.",
          en: "A plain `α = 0.1` **converged quickly** — no more crawling at `1e-10`.",
        },
        // TODO(user): ftlr 정규화 도입 커밋 링크를 refs에 추가
      },
      {
        title: {
          ko: "네 연산과 두 스칼라 타입을 소거 엔진 하나로 합쳤다",
          en: "Folded four operations and two scalar types into one elimination engine",
        },
        problem: {
          ko: "Matrix 과제는 row-echelon · determinant · inverse · rank 네 연산과, `f32`·`Complex` 두 스칼라 타입을 모두 요구했습니다.",
          en: "The Matrix project required four operations — row-echelon, determinant, inverse, rank — over two scalar types, `f32` and `Complex`.",
        },
        solution: {
          ko: [
            "네 연산을 **`Gauss-Jordan` 엔진 하나로 통일**",
            "`f32`와 `Complex`의 스칼라 차이는 `Operations` 트레잇 뒤로 감춤",
          ],
          en: [
            "Unified all four behind **a single `Gauss-Jordan` engine**",
            "Pushed the `f32`/`Complex` scalar difference behind an `Operations` trait",
          ],
        },
        result: {
          ko: "**소거 엔진 하나가 네 연산을 모두 처리**하고, 스칼라 타입은 호출부에서 보이지 않게 됐습니다.",
          en: "**One elimination engine now backs all four operations**, and the scalar type is invisible at the call site.",
        },
        // TODO(user): Enter-the-Matrix Gauss-Jordan 리팩터 커밋 링크를 refs에 추가
      },
    ],
    learned: {
      ko: [
        "**`SVD`를 직접 짜고 나서야 `PCA`가 이해됐습니다.** 주성분 분석과 데이터 압축이 결국 같은 분해라는 게 그제야 보였습니다.",
        "**스케일이 안 맞으면 학습률로 덮을 수 없었습니다.** 손실 표면의 조건수를 먼저 손봐야 학습률을 정상 범위에서 쓸 수 있었습니다.",
        "**`Rust`의 ownership이 수치 코드에서 도움이 됐습니다.** 행렬 버퍼를 잘못 공유하는 실수가 실행 전에 컴파일 단계에서 걸렸습니다.",
      ],
      en: [
        "**`PCA` only made sense to me after I wrote `SVD` myself.** That's when I saw that principal components and data compression are the same decomposition.",
        "**A scale mismatch is not something the learning rate can cover.** I had to fix the conditioning of the loss surface before the learning rate could sit in a normal range.",
        "**`Rust`'s ownership helped in numerical code.** Sharing a matrix buffer wrongly got caught at compile time instead of at runtime.",
      ],
    },
    media: [
      {
        src: "/images/ftlr-eval-1.png",
        alt: {
          ko: "ft_linear_regression 동료 평가 코멘트 — 125%, Outstanding",
          en: "ft_linear_regression peer-evaluation comment — 125%, Outstanding",
        },
        width: 2040,
        height: 552,
        caption: {
          ko: "ft_linear_regression 동료 평가 ① — 125% · Outstanding. 경사하강법과 최소제곱 정규방정식, 정규화를 하지 않으면 값이 폭발하는 이유까지 설명한 점을 평가",
          en: "ft_linear_regression peer evaluation ① — 125% · Outstanding. Credited the walkthrough of gradient descent, the least-squares normal equation, and why values blow up without normalization",
        },
        wide: true,
      },
      {
        src: "/images/ftlr-eval-2.png",
        alt: {
          ko: "ft_linear_regression 동료 평가 코멘트 — 125%, Outstanding",
          en: "ft_linear_regression peer-evaluation comment — 125%, Outstanding",
        },
        width: 2046,
        height: 428,
        caption: {
          ko: "ft_linear_regression 동료 평가 ② — 125% · Outstanding. 이전보다 idiomatic한 Rust 코드와 이미지로 렌더링한 결과를 평가",
          en: "ft_linear_regression peer evaluation ② — 125% · Outstanding. Noted more idiomatic Rust than before and results rendered as images",
        },
        wide: true,
      },
      {
        src: "/images/matrix-eval.png",
        alt: {
          ko: "Enter-the-Matrix 동료 평가 코멘트 — 125%",
          en: "Enter-the-Matrix peer-evaluation comment — 125%",
        },
        width: 2034,
        height: 1032,
        caption: {
          ko: "Enter-the-Matrix 동료 평가 — 125%. 복소수 벡터공간 보너스, 실수 · 복소수를 하나의 제네릭 함수로 처리한 설계, 엣지 케이스 테스트와 펜으로 풀어 보인 설명을 평가",
          en: "Enter-the-Matrix peer evaluation — 125%. Credited the complex-vector-space bonus, handling real and complex scalars with one generic function, edge-case tests, and explaining the logic worked out by pen",
        },
        wide: true,
      },
    ],
    links: [
      { label: "GitHub: ftlr", href: "https://github.com/KimTaebin-ai/ftlr" },
      {
        label: "GitHub: Enter-the-Matrix",
        href: "https://github.com/KimTaebin-ai/Enter-the-Matrix",
      },
    ],
  },
  {
    id: "turtlebot3",
    tier: "additional",
    name: {
      ko: "TurtleBot3 사람 추종 자율주행",
      en: "TurtleBot3 Person-Following Robot",
    },
    headline: {
      ko: "`YOLOv8`과 `LiDAR`를 묶어 사람을 따라다니는 `ROS2` 로봇. 주행하면서 `SLAM`으로 지도를 만듭니다",
      en: "A `ROS2` robot that follows a person by fusing `YOLOv8` with `LiDAR`, building a `SLAM` map as it drives",
    },
    period: { ko: "2026", en: "2026" },
    // TODO(user): 이 프로젝트의 소속(강의 과정 / 개인 / 팀)을 org에 채워주세요
    coreSkills: {
      ko: [
        "센서 융합 — 비전 + `LiDAR` 깊이",
        "`YOLOv8` 실시간 객체 인식",
        "`ROS2` 노드 아키텍처",
        "`SLAM` 실시간 지도화",
      ],
      en: [
        "Sensor fusion — vision + `LiDAR` depth",
        "Real-time object detection with `YOLOv8`",
        "`ROS2` node architecture",
        "Real-time mapping with `SLAM`",
      ],
    },
    contributions: {
      ko: [
        "`YOLOv8` 사람 감지와 `LiDAR` 깊이 스캔을 하나의 조향 명령으로 융합",
        "다양한 조명 조건에서 인식이 끊기지 않도록 인식 파이프라인 안정화",
        "`SLAM` 기반 실시간 환경 지도화",
      ],
      en: [
        "Fused `YOLOv8` person detection with `LiDAR` depth into a single steering command",
        "Stabilized the detection pipeline so tracking survives changing lighting",
        "Real-time environment mapping with `SLAM`",
      ],
    },
    stack: ["ROS2", "YOLOv8", "LiDAR", "Vision", "SLAM", "Kalman Filter"],
    status: "complete",
    wireframes: [
      {
        caption: {
          ko: "주행 데모 화면 — 카메라 프레임 위 바운딩박스, 그 아래 깊이와 조향 결정",
          en: "Driving demo — bounding box over the camera frame, depth and the steering decision below it",
        },
        frame: "screen",
        rows: [
          {
            h: 5,
            cells: [
              {
                label: {
                  ko: "카메라 프레임 — YOLOv8 사람 바운딩박스 + 중심 좌표",
                  en: "Camera frame — YOLOv8 person bounding box + center coordinates",
                },
              },
            ],
          },
          {
            h: 2,
            cells: [
              {
                label: {
                  ko: "LiDAR 거리 · 충돌 영역",
                  en: "LiDAR distance · collision zone",
                },
              },
              {
                tone: "muted",
                label: {
                  ko: "조향 명령 — vision + depth 융합 결과",
                  en: "Steering command — the fused vision + depth result",
                },
              },
            ],
          },
        ],
      },
      {
        caption: {
          ko: "SLAM 지도 — 실시간 점유 격자 위에 로봇 위치와 지나온 경로",
          en: "SLAM map — robot pose and travelled path over a live occupancy grid",
        },
        frame: "screen",
        rows: [
          {
            h: 1,
            cells: [
              {
                tone: "muted",
                label: {
                  ko: "툴바 — 지도 저장 / 리셋",
                  en: "Toolbar — save map / reset",
                },
              },
            ],
          },
          {
            h: 5,
            cells: [
              {
                label: {
                  ko: "점유 격자 지도 + 로봇 pose · 주행 경로",
                  en: "Occupancy-grid map + robot pose and path",
                },
              },
            ],
          },
        ],
      },
    ],
    intro: {
      ko: [
        "카메라는 무엇인지는 알지만 얼마나 먼지는 모르고, `LiDAR`는 그 반대입니다. **두 센서를 합치면 로봇이 사람을 알아보고 따라갈 수 있는지** 직접 해보고 싶었습니다.",
        "`YOLOv8`으로 사람을 찾고 `LiDAR` 깊이로 거리를 재서 조향 명령 하나로 합쳤습니다. 주행 중에는 `SLAM`으로 주변 지도를 만듭니다. **제가 `SLAM` 쪽을 계속 보게 된 것도 이 프로젝트 이후입니다.**",
      ],
      en: [
        "A camera knows what something is but not how far away it is; `LiDAR` is the other way round. I wanted to try fusing them and see **whether a robot could recognize a person and follow them**.",
        "`YOLOv8` finds the person, `LiDAR` depth gives the distance, and the two combine into a single steering command. While driving, `SLAM` builds a map of the surroundings. **This project is why I kept going in the `SLAM` direction.**",
      ],
    },
    flow: [
      { label: { ko: "YOLOv8 사람 감지", en: "YOLOv8 detects person" } },
      { label: { ko: "LiDAR 깊이 스캔", en: "LiDAR depth scan" } },
      { label: { ko: "비전 + 깊이 융합", en: "Fuse vision + depth" } },
      { label: { ko: "조향 명령 생성", en: "Steering command" } },
    ],
    howItWorks: {
      ko: [
        "비전: YOLOv8로 프레임에서 사람 중심 좌표 감지",
        "깊이: LiDAR point cloud로 거리·충돌 영역 계산",
        "융합: vision + depth 신호를 합쳐 steering command 생성",
        "지도: SLAM으로 실시간 환경 지도화",
      ],
      en: [
        "Vision: YOLOv8 detects the person's center coordinates per frame",
        "Depth: LiDAR point cloud computes distance and collision zones",
        "Fusion: combine vision + depth signals into a steering command",
        "Mapping: SLAM builds the environment map in real time",
      ],
    },
    troubleshooting: [
      {
        title: {
          ko: "직사광이 들어오면 추적이 끊겼다",
          en: "Tracking dropped whenever direct sunlight came in",
        },
        problem: {
          ko: "직사광이 들어오면 `YOLOv8` 인식이 흔들리고 사람 추적이 끊겼습니다.",
          en: "Direct sunlight threw off `YOLOv8` detection and broke person tracking.",
        },
        cause: {
          ko: "**융합 로직보다 조명이 더 큰 문제였습니다.** 융합은 들어오는 입력이 안정적일 때만 제 역할을 하는데, 인식 자체가 흔들리니 뒤쪽을 아무리 고쳐도 소용이 없었습니다.",
          en: "**Lighting was a bigger problem than the fusion logic.** Fusion only does its job when the inputs coming in are stable, so with detection itself wobbling, fixing anything downstream made no difference.",
        },
        solution: {
          ko: [
            "다양한 조명 조건에서 인식이 안정적으로 유지되도록 인식 단계를 다듬음",
          ],
          en: [
            "Tuned the detection stage until recognition held up across lighting conditions",
          ],
        },
        result: {
          ko: "결과적으로 가장 많은 시간이 **융합 알고리즘이 아니라 조명 대응**에 들어갔고, 그쪽을 잡고 나서야 추적이 끊기지 않았습니다.",
          en: "In the end most of the time went into **handling lighting rather than the fusion algorithm**, and tracking only stopped dropping once that was solid.",
        },
        // TODO(user): 인식 안정화 커밋 링크를 refs에 추가
      },
    ],
    learned: {
      ko: [
        "**가장 큰 변수는 햇빛이었습니다.** 융합 알고리즘을 고치는 것보다 조명 조건에서 인식을 안정시키는 데 시간을 훨씬 많이 썼습니다.",
        "**센서 융합의 어려움은 `sync`와 `latency`, `confidence` 관리에 있었습니다.** 두 신호를 어떻게 섞느냐보다 각각이 언제 찍힌 값인지가 문제였습니다.",
        "**`ROS2`의 topic/service 구조 덕에 모듈을 갈아끼울 수 있었습니다.** 비전과 깊이, 제어를 따로 고쳐도 나머지가 그대로 돌아갔습니다.",
        "**실시간에서는 정확도를 조금 내주는 편이 낫습니다.** 프레임을 못 맞추면 정확한 값도 늦은 값이 됩니다.",
      ],
      en: [
        "**The biggest variable was sunlight.** Far more of my time went into stabilizing detection across lighting conditions than into the fusion algorithm.",
        "**The hard part of sensor fusion was managing `sync`, `latency`, and `confidence`.** When each reading was taken mattered more than how the two got combined.",
        "**`ROS2`'s topic/service structure let me swap modules in and out.** I could change vision, depth, or control on its own and the rest kept running.",
        "**In real time you're better off giving up a little accuracy.** Miss the frame and an accurate value is just a late one.",
      ],
    },
    links: [
      { label: "YouTube: Presentation", href: "https://youtu.be/2eOp8Bp0UdI" },
      { label: "YouTube: Demo", href: "https://youtu.be/oBLanfJ3GZw" },
    ],
  },
  {
    id: "minirt",
    tier: "additional",
    name: { ko: "miniRT — C 레이트레이서", en: "miniRT — Ray Tracer in C" },
    headline: {
      ko: "GPU도 라이브러리도 없이 `C`로 만든 레이트레이서. 강체변환과 로드리게스 회전을 직접 짜서 씬을 움직입니다",
      en: "A ray tracer in `C` with no GPU and no library — rigid-body transforms and Rodrigues rotation written by hand to move the scene",
    },
    period: { ko: "2025.1 – 2025.2", en: "Jan – Feb 2025" },
    org: { ko: "École 42", en: "École 42" },
    coreSkills: {
      ko: [
        "3D 기하 — 광선-물체 교차, 표면 법선",
        "강체변환 — `4×4` 동차 행렬, 로드리게스 회전",
        "부분 피벗팅 `Gauss-Jordan` 역행렬",
        "핫루프 최적화 — 함수 포인터 디스패치",
      ],
      en: [
        "3D geometry — ray-object intersection, surface normals",
        "Rigid-body transforms — `4×4` homogeneous matrices, Rodrigues rotation",
        "`Gauss-Jordan` inversion with partial pivoting",
        "Hot-loop optimization — function-pointer dispatch",
      ],
    },
    contributions: {
      ko: [
        "구 · 평면 · 원기둥 · 원뿔 교차를 기하식과 이차방정식으로 각각 구현",
        "평행이동 · `Rx` · `Ry` · `Rz`를 `4×4` 행렬 하나로 합치고, 역행렬은 부분 피벗팅 `Gauss-Jordan`으로 계산",
        "함수 포인터 테이블 · 제곱거리 조기 종료 · 그림자 레이 오프셋으로 렌더 루프 정리",
        "보너스로 Phong 스페큘러, 다중 광원, 역제곱 감쇠, 절차적 UV 텍스처, 씬 편집 후 `.rt` 저장",
      ],
      en: [
        "Implemented sphere, plane, cylinder, and cone intersection — geometric form and quadratic solves",
        "Composed translation, `Rx`, `Ry`, `Rz` into a single `4×4` matrix, inverted with `Gauss-Jordan` and partial pivoting",
        "Tightened the render loop with a function-pointer table, squared-distance early-outs, and a shadow-ray offset",
        "Bonus: Phong specular, multiple lights, inverse-square falloff, procedural UV textures, and saving an edited scene back to `.rt`",
      ],
    },
    stack: [
      "C",
      "minilibx",
      "Ray Tracing",
      "Linear Algebra",
      "Rigid-Body Transforms",
    ],
    status: "complete",
    wireframes: [
      {
        caption: {
          ko: "렌더 창 — .rt 씬의 물체가 조명과 그림자를 받은 결과",
          en: "Render window — the objects from the .rt scene, lit and shadowed",
        },
        frame: "screen",
        rows: [
          {
            h: 1,
            cells: [
              {
                tone: "muted",
                label: {
                  ko: "창 제목 · 해상도 · 렌더 시간",
                  en: "Window title · resolution · render time",
                },
              },
            ],
          },
          {
            h: 6,
            cells: [
              {
                label: {
                  ko: "렌더된 3D 장면 — 픽셀당 광선 → 교점 → 법선 → 셰이딩",
                  en: "Rendered 3D scene — one ray per pixel → intersection → normal → shading",
                },
              },
            ],
          },
        ],
      },
      {
        caption: {
          ko: "보너스 — 창 안에서 물체와 카메라를 옮기고, 편집한 씬을 .rt로 저장",
          en: "Bonus — move objects and the camera inside the window, save the edited scene as .rt",
        },
        frame: "screen",
        rows: [
          {
            h: 5,
            cells: [
              {
                w: 3,
                label: {
                  ko: "장면 — 클릭으로 물체 선택, WASD로 이동, 방향키로 회전",
                  en: "Scene — click to select an object, WASD to move, arrows to rotate",
                },
              },
              {
                w: 1,
                tone: "muted",
                label: {
                  ko: "선택된 물체 — 위치 · 방향 · 크기",
                  en: "Selected object — position · orientation · size",
                },
              },
            ],
          },
          {
            h: 1,
            cells: [
              {
                tone: "muted",
                label: {
                  ko: "복사 · 붙여넣기 · .rt로 저장",
                  en: "Copy · paste · save to .rt",
                },
              },
            ],
          },
        ],
      },
    ],
    intro: {
      ko: [
        "42에서 배운 **선형대수를 처음으로 눈으로 확인한 과제**입니다. 내적과 외적, 회전 행렬이 화면에 그대로 나타나기 때문에 식이 틀리면 그림이 틀립니다.",
        "`.rt` 씬 파일을 읽어 픽셀마다 광선을 쏘고, 구 · 평면 · 원기둥 · 원뿔과의 교점을 풀어 조명과 그림자를 계산합니다. 보너스 빌드에서는 창 안에서 물체와 카메라를 움직이고 편집한 씬을 다시 `.rt`로 저장할 수 있습니다.",
      ],
      en: [
        "This is **where the linear algebra I'd been studying first became something I could see.** Dot products, cross products, and rotation matrices land straight on the screen, so a wrong equation means a wrong picture.",
        "It reads an `.rt` scene file, fires a ray per pixel, solves intersections against spheres, planes, cylinders, and cones, and computes lighting and shadows. In the bonus build you can move objects and the camera inside the window and save the edited scene back out to `.rt`.",
      ],
    },
    flow: [
      { label: { ko: ".rt 씬 파싱", en: "Parse .rt scene" } },
      {
        label: { ko: "카메라 → 광선 생성", en: "Camera → build ray" },
        sub: { ko: "raster → NDC → camera", en: "raster → NDC → camera" },
      },
      { label: { ko: "교점 · 표면 법선", en: "Intersection · normal" } },
      {
        label: { ko: "조명 · 그림자 셰이딩", en: "Lighting · shadow shading" },
      },
    ],
    howItWorks: {
      ko: [
        "핀홀 카메라 모델로 픽셀 좌표를 raster → NDC → screen → camera 공간으로 옮기고, 종횡비와 tan(fov/2)로 각 픽셀의 1차 광선을 만든다",
        "구는 중심을 광선에 투영해 제곱거리로 풀고, 원기둥과 원뿔은 a·t² + b·t + c = 0의 판별식을 푼 뒤 축 방향으로 잘라내고 뚜껑을 따로 검사한다",
        "물체의 이동과 회전은 평행이동 · Rx · Ry · Rz를 곱한 4×4 동차 행렬로 처리하고, 역행렬은 부분 피벗팅 Gauss-Jordan으로 구한다",
        "임의 축 회전은 로드리게스 공식으로, 두 방향 벡터를 맞추는 회전은 cross로 축을, acos(dot)로 각을 구해 만든다",
        "셰이딩은 Lambert 확산 max(0, N·L)에 반사 벡터 R = I − 2(I·N)N로 계산한 Phong 스페큘러와 역제곱 감쇠 brightness/(4πr²)를 더한다",
      ],
      en: [
        "A pinhole camera model moves pixel coordinates through raster → NDC → screen → camera space, using the aspect ratio and tan(fov/2) to build each primary ray",
        "Spheres project the center onto the ray and compare squared distances; cylinders and cones solve the discriminant of a·t² + b·t + c = 0, clamp the hit along the axis, and test the end caps separately",
        "Object translation and rotation go through one 4×4 homogeneous matrix composed of translation · Rx · Ry · Rz, inverted with Gauss-Jordan and partial pivoting",
        "Rotation about an arbitrary axis uses Rodrigues' formula; aligning one direction vector onto another takes the axis from cross and the angle from acos(dot)",
        "Shading is Lambert diffuse max(0, N·L) plus Phong specular off the reflection vector R = I − 2(I·N)N and inverse-square falloff brightness/(4πr²)",
      ],
    },
    troubleshooting: [
      {
        title: {
          ko: "핫루프의 타입 분기와 shadow acne를 같이 걷어냈다",
          en: "Cleared out both the hot-loop type branching and the shadow acne",
        },
        problem: {
          ko: "물체 타입마다 분기하는 코드는 초당 수백만 번 도는 렌더링 루프에서 부담이 됩니다. 그리고 그림자 레이가 자기 표면과 다시 교차해 `shadow acne`가 생겼습니다.",
          en: "Branching on object type costs real time in a render loop that runs millions of times a second — and shadow rays kept re-intersecting their own surface, producing `shadow acne`.",
        },
        solution: {
          ko: [
            "교차 계산 함수를 **타입으로 인덱싱하는 함수 포인터 테이블**(`t_func`)로 바꿔, 분기 대신 인덱싱 호출 하나로 처리",
            "`sqrt`를 부르기 전에 제곱거리(`d² > r²`)로 먼저 걸러내고, 뒤를 향한 광선(`tca < 0`)과 판별식 음수는 즉시 반환",
            "그림자 레이 시작점을 법선 방향으로 `0.01` 띄움",
          ],
          en: [
            "Moved intersection routines into a **function-pointer table indexed by type** (`t_func`) — one indexed call instead of a chain of ifs",
            "Rejected rays on squared distance (`d² > r²`) before any `sqrt`, and bailed out immediately on back-facing rays (`tca < 0`) and negative discriminants",
            "Offset the shadow-ray origin by `0.01` along the normal",
          ],
        },
        result: {
          ko: "핫루프에서 타입 분기가 사라졌고, 제곱거리 비교만으로 걸러내기 때문에 **정밀도를 잃지 않은 채** 그림자 아티팩트도 함께 없어졌습니다.",
          en: "Type branching left the hot loop, and because the rejection happens on squared distances alone, the shadow artifact went with it **without giving up precision**.",
        },
        // TODO(user): 함수 포인터 디스패치 커밋 링크를 refs에 추가
      },
      {
        title: {
          ko: "두 벡터가 정반대일 때 회전축이 정의되지 않았다",
          en: "The rotation axis was undefined when two vectors pointed opposite ways",
        },
        problem: {
          ko: "물체의 방향 벡터를 다른 방향으로 맞출 때 `cross`로 회전축을, `acos(dot)`으로 각을 구합니다. 그런데 두 벡터가 나란하거나 정반대면 외적이 영벡터가 되어 회전축을 정규화할 수 없습니다.",
          en: "To align an object's orientation onto another direction, the axis comes from `cross` and the angle from `acos(dot)`. But when the two vectors are parallel or antiparallel the cross product is the zero vector, so there is no axis to normalize.",
        },
        cause: {
          ko: "같은 방향이면 회전이 필요 없지만, 정반대면 회전은 필요한데 축이 하나로 정해지지 않습니다 — 수직인 축 어느 것으로든 `π`만큼 돌리면 되기 때문입니다.",
          en: "If they point the same way no rotation is needed, but if they point opposite ways a rotation is needed and the axis is not unique — any perpendicular axis turned by `π` gets there.",
        },
        solution: {
          ko: [
            "두 벡터가 같으면 입력을 그대로 반환해 불필요한 계산을 건너뜀",
            "외적의 길이가 `0`이면 일반 회전 경로 대신 **정반대 방향 전용 처리로 분기**",
          ],
          en: [
            "Return the input unchanged when the two vectors match, skipping the computation entirely",
            "When the cross product has length `0`, **branch to a dedicated opposite-direction path** instead of the general rotation",
          ],
        },
        result: {
          ko: "카메라나 물체를 정반대로 돌려도 `NaN` 없이 방향이 잡힙니다. 같은 문제가 강체변환을 다루는 곳마다 반복된다는 것도 여기서 알게 됐습니다.",
          en: "Flipping a camera or an object to face the opposite way now resolves without `NaN` — and this is where I learned the same edge case shows up anywhere rigid-body transforms are handled.",
        },
      },
    ],
    keyResults: {
      ko: [
        "구 · 평면 · 원기둥 · 원뿔 `4`종 프리미티브와 하드 섀도우",
        "핫루프에서 타입 분기 제거 — 함수 포인터 테이블 인덱싱 호출 하나로",
        "`sqrt` 호출 전 제곱거리 비교로 조기 종료",
        "보너스: 다중 광원 · Phong 스페큘러 · 역제곱 감쇠 · 절차적 UV 텍스처 · 씬 편집 후 `.rt` 저장",
        "`Makefile`이 `uname`으로 OS를 판별해 Linux는 X11, macOS는 OpenGL minilibx로 링크",
      ],
      en: [
        "`4` primitives — sphere, plane, cylinder, cone — with hard shadows",
        "No type branching in the hot loop: one indexed call through a function-pointer table",
        "Early-out on squared distance before any `sqrt` call",
        "Bonus: multiple lights, Phong specular, inverse-square falloff, procedural UV textures, and saving an edited scene to `.rt`",
        "The `Makefile` detects the OS with `uname` and links X11 minilibx on Linux, OpenGL on macOS",
      ],
    },
    learned: {
      ko: [
        "**`SLAM`에서 쓰는 수학을 여기서 먼저 만났습니다.** `4×4` 동차 변환과 로드리게스 회전은 카메라 포즈를 다루는 것과 같은 도구였고, 이 과제 이후에 리군과 강체변환을 따로 공부하기 시작했습니다.",
        "**행렬은 공식이 아니라 그림이었습니다.** 회전 행렬을 잘못 쓰면 물체가 어떻게 틀어지는지 화면에 바로 나와서, 식보다 기하로 먼저 생각하게 됐습니다.",
        "**정밀도와 속도를 같이 챙길 수 있는 자리가 있었습니다.** 제곱거리로 먼저 걸러내면 `sqrt`를 부르지 않고도 결과가 같습니다.",
        "**부동소수점 오차는 눈에 보입니다.** 그림자 레이가 자기 표면과 다시 만나 생기는 `shadow acne`가 그 예였습니다.",
      ],
      en: [
        "**This is where I first met the math `SLAM` runs on.** `4×4` homogeneous transforms and Rodrigues rotation are the same tools used for camera pose, and this project is what sent me off to study Lie groups and rigid-body transforms.",
        "**Matrices turned out to be pictures, not formulas.** Misuse a rotation matrix and you see exactly how the object skews, so I started reasoning geometrically before algebraically.",
        "**There are places where precision and speed aren't a trade.** Filtering on squared distance gives the same answer without ever calling `sqrt`.",
        "**Floating-point error is something you can look at.** `shadow acne`, where a shadow ray meets its own surface again, was the visible version of it.",
      ],
    },
    links: [
      { label: "GitHub", href: "https://github.com/KimTaebin-ai/miniRT" },
    ],
  },
  {
    id: "webserv",
    tier: "additional",
    name: { ko: "WebServ — C++ HTTP 서버", en: "WebServ — HTTP Server in C++" },
    headline: {
      ko: "설정 파일로 가상 서버를 구성하고 `non-blocking I/O`로 다중 연결을 처리하는 `HTTP/1.1` 서버",
      en: "An `HTTP/1.1` server — virtual hosts from a config file, concurrent connections on `non-blocking I/O`",
    },
    period: { ko: "2026", en: "2026" },
    org: {
      ko: "École 42 — 공통 과정",
      en: "École 42 — core curriculum",
    },
    stack: ["C++", "HTTP/1.1", "Non-blocking I/O", "CGI"],
    status: "complete",
    intro: {
      ko: [
        "브라우저가 요청을 보내면 `nginx` 안에서 무슨 일이 일어나는지 확인하고 싶어서 **`C++`로 직접 만들었습니다.**",
        "`nginx`와 비슷한 설정 파일로 가상 서버와 라우트를 구성하고, `non-blocking I/O`로 여러 연결을 동시에 처리하는 `HTTP/1.1` 서버입니다. `GET` · `POST` · `DELETE`와 CGI 실행을 지원합니다.",
      ],
      en: [
        "I wanted to see what happens inside `nginx` when a browser sends a request, so I **wrote the server myself in `C++`.**",
        "It builds virtual servers and routes from an `nginx`-style config file and handles many connections at once on `non-blocking I/O`. `GET`, `POST`, `DELETE`, and CGI execution are supported.",
      ],
    },
    flow: [
      { label: { ko: "설정 파일 파싱", en: "Parse config file" } },
      {
        label: { ko: "연결 수락", en: "Accept connections" },
        sub: { ko: "non-blocking I/O", en: "non-blocking I/O" },
      },
      {
        label: { ko: "요청 라우팅", en: "Route request" },
        sub: { ko: "GET·POST·DELETE·CGI", en: "GET·POST·DELETE·CGI" },
      },
      { label: { ko: "응답 반환", en: "Return response" } },
    ],
    howItWorks: {
      ko: [
        "설정 파일 파서로 서버 블록·라우트를 구성",
        "select/poll/epoll 기반 non-blocking I/O로 다중 클라이언트 동시 처리",
        "GET · POST · DELETE 메서드와 CGI 실행 지원",
      ],
      en: [
        "Config-file parser builds server blocks and routes",
        "Non-blocking I/O (select/poll/epoll) handles many clients concurrently",
        "Supports GET, POST, DELETE, and CGI execution",
      ],
    },
    learned: {
      ko: [
        "**HTTP는 읽기 쉬운데 파싱은 어려웠습니다.** 텍스트 프로토콜이라는 것과 깨진 요청까지 안정적으로 파싱한다는 것은 다른 문제였습니다.",
        "**이벤트 루프를 직접 짜보고 나서 서버 프레임워크가 뭘 대신 해주는지 알게 됐습니다.** 그 뒤로 백엔드 성능 이야기가 다르게 들립니다.",
      ],
      en: [
        "**HTTP is easy to read and hard to parse.** Being a text protocol and parsing it reliably, malformed requests included, are two different things.",
        "**Writing the event loop myself showed me what a server framework is actually doing for me.** Conversations about backend performance have sounded different since.",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
  {
    id: "bittorrent",
    tier: "additional",
    name: { ko: "BitTorrent 클라이언트 (C++)", en: "BitTorrent Client in C++" },
    headline: {
      ko: "프로토콜 명세만 보고 `C++`로 만드는 P2P 클라이언트. 피어가 중간에 사라져도 piece는 **정확히 한 번** 받습니다",
      en: "A P2P client written in `C++` from the spec alone. Peers drop mid-transfer and every piece still completes **exactly once**",
    },
    period: { ko: "2026", en: "2026" },
    org: { ko: "개인 프로젝트", en: "Personal project" },
    stack: ["C++", "Network Programming", "Protocols", "Threads"],
    status: "ongoing",
    intro: {
      ko: [
        "42 과제가 아니라 궁금해서 시작한 개인 프로젝트입니다. **중앙 서버 없이 파일이 오가는 구조**가 어떻게 되어 있는지 명세만 보고 만들어보는 중입니다.",
        "`.torrent` 메타파일 파싱, tracker 통신, DHT peer 탐색, 블록 단위 병렬 다운로드까지 `C++`로 구현하고 있습니다.",
      ],
      en: [
        "Not a 42 assignment — a personal project I started because I was curious. I'm working from the spec alone to see how **files move between people with no central server.**",
        "So far: parsing `.torrent` metafiles, talking to the tracker, DHT peer discovery, and parallel block downloads, all in `C++`.",
      ],
    },
    flow: [
      {
        label: { ko: ".torrent 파싱", en: "Parse .torrent" },
        sub: { ko: "bencode", en: "bencode" },
      },
      { label: { ko: "tracker 통신", en: "Contact tracker" } },
      { label: { ko: "DHT peer 탐색", en: "DHT peer discovery" } },
      { label: { ko: "블록 병렬 다운로드", en: "Parallel block download" } },
    ],
    howItWorks: {
      ko: [
        "bencode 포맷의 .torrent 메타파일 파싱",
        "tracker와 통신해 peer 목록 확보",
        "DHT로 peer discovery",
        "peer들과 블록 단위 병렬 다운로드",
      ],
      en: [
        "Parse .torrent metafiles in bencode format",
        "Talk to the tracker to get a peer list",
        "Peer discovery via DHT",
        "Download blocks from peers in parallel",
      ],
    },
    troubleshooting: [
      {
        title: {
          ko: "피어는 언제든 사라지는데 piece는 정확히 한 번만 받아야 한다",
          en: "Peers vanish whenever they like, but each piece must arrive exactly once",
        },
        problem: {
          ko: "피어마다 워커 스레드 하나로 병렬 다운로드하다 보니 작업 큐·완료 수·파일 쓰기 같은 공유 상태가 노출되고, 연결 끊김·타임아웃·해시 불일치는 언제든 일어납니다.",
          en: "With one worker thread per peer downloading in parallel, shared state — the work queue, the completed count, file writes — is exposed, and dropped connections, timeouts, and hash mismatches can happen at any moment.",
        },
        solution: {
          ko: [
            "작업 큐·완료 수·파일 쓰기 등 공유 상태를 `뮤텍스`로 보호",
            "끊김·타임아웃·해시 불일치가 나면 그 피어를 크래시 없이 버리고 piece를 큐에 다시 넣음",
            "한 라운드의 피어가 소진되면 트래커에 재announce, 여러 라운드 동안 진행이 없으면 안전하게 중단",
          ],
          en: [
            "Protected shared state — work queue, completed count, file writes — behind a `mutex`",
            "On a drop, timeout, or hash mismatch, discard that peer without crashing and requeue the piece",
            "Re-announce to the tracker once a round's peers are exhausted; abort safely if several rounds pass with no progress",
          ],
        },
        result: {
          ko: "**모든 piece가 정확히 한 번 완료**되고, 피어가 몇이 죽든 클라이언트는 크래시하지 않습니다.",
          en: "**Every piece completes exactly once**, and no number of dying peers crashes the client.",
        },
        // TODO(user): baby-torrent 워커/뮤텍스 관련 커밋 링크를 refs에 추가
      },
    ],
    learned: {
      ko: [
        "**`RFC` 읽는 법을 여기서 익히고 있습니다.** 예제 코드 없이 명세만 보고 맞춰가는 건 처음이었습니다.",
        "**프로토콜 구현의 절반은 상태 관리였습니다.** 조각 상태를 `비트마스크`로 들고 다니는 설계를 잡고 나서 나머지가 정리됐습니다.",
      ],
      en: [
        "**This is where I'm learning to read an `RFC`.** Working from a spec with no sample code to lean on was new to me.",
        "**Half of implementing a protocol was state management.** Everything else fell into place once I settled on carrying piece state in a `bitmask`.",
      ],
    },
    links: [
      { label: "GitHub", href: "https://github.com/KimTaebin-ai/baby-torrent" },
    ],
  },
  {
    id: "minishell",
    tier: "additional",
    name: { ko: "minishell — C로 만든 셸", en: "minishell — Bash Shell in C" },
    headline: {
      ko: "파싱 → `fork`/`execve` → 파이프·리다이렉션 → 시그널까지 bash의 핵심 동작을 `C`로 재구현",
      en: "Reimplemented bash's core in `C` — parsing, `fork`/`execve`, pipes and redirection, signal handling",
    },
    period: { ko: "2024", en: "2024" },
    org: { ko: "École 42", en: "École 42" },
    stack: ["C", "POSIX", "Signals", "Processes"],
    status: "complete",
    intro: {
      ko: [
        "매일 쓰는 셸이 **터미널에 친 한 줄을 어떻게 프로세스로 만드는지** 직접 만들어 확인했습니다.",
        "파싱부터 `fork`/`execve`, 파이프와 리다이렉션, 시그널 처리까지 bash의 핵심 동작을 `C`로 다시 구현했습니다.",
      ],
      en: [
        "I built it myself to see **how the shell I use every day turns a line typed into a terminal into a process.**",
        "Reimplemented bash's core behavior in `C`: parsing, `fork`/`execve`, pipes and redirection, and signal handling.",
      ],
    },
    flow: [
      {
        label: { ko: "파싱", en: "Parse" },
        sub: { ko: "따옴표 · 변수", en: "quotes · vars" },
      },
      { label: { ko: "fork / execve", en: "fork / execve" } },
      { label: { ko: "파이프 · 리다이렉션", en: "Pipes · redirects" } },
      { label: { ko: "시그널 처리", en: "Signal handling" } },
    ],
    howItWorks: {
      ko: [
        "파서: 따옴표·환경변수 확장을 처리하고 pipes·redirections 해석",
        "실행: fork/execve로 외부 명령, cd·export·unset 등은 빌트인으로",
        "파일 디스크립터 조작으로 파이프라인과 리다이렉션 구현",
        "SIGINT·SIGQUIT을 bash와 동일한 동작으로 처리",
      ],
      en: [
        "Parser: handles quote and environment-variable expansion, resolves pipes and redirections",
        "Execution: external commands via fork/execve; cd, export, unset, etc. as builtins",
        "File-descriptor manipulation implements pipelines and redirection",
        "SIGINT/SIGQUIT handled to match bash's exact behavior",
      ],
    },
    learned: {
      ko: [
        "**`fork`와 `execve`가 왜 나뉘어 있는지 알게 됐습니다.** 파이프를 직접 짜보면 그 사이에 무엇을 해야 하는지가 바로 보입니다.",
        "**셸은 파일 디스크립터로 설명됩니다.** 그게 보이기 시작하면 리다이렉션과 파이프라인이 대부분 따라옵니다.",
        "**시그널은 나중에 처리할 예외가 아니었습니다.** 설계에 넣지 않으면 뒤에 끼워넣을 자리가 없습니다.",
      ],
      en: [
        "**I found out why `fork` and `execve` are two separate calls.** Write the pipe handling yourself and what belongs in between becomes obvious.",
        "**A shell explains itself through file descriptors.** Once you see them, redirection and pipelines mostly follow.",
        "**Signals aren't an exception case to handle later.** If they aren't in the design, there's no place left to put them afterwards.",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
  {
    id: "inception",
    tier: "additional",
    name: {
      ko: "Inception — Docker 인프라",
      en: "Inception — Docker Infrastructure",
    },
    headline: {
      ko: "`.env` 하나와 `docker-compose up` 한 번으로 NGINX + WordPress + MariaDB가 `TLS`까지 걸고 기동",
      en: "One `.env` and one `docker-compose up` brings up NGINX + WordPress + MariaDB, `TLS` included",
    },
    period: { ko: "2024", en: "2024" },
    org: { ko: "École 42", en: "École 42" },
    stack: ["Docker", "Docker Compose", "NGINX", "WordPress", "MariaDB"],
    status: "complete",
    intro: {
      ko: [
        "`docker run` 한 줄이 감추고 있는 이미지 레이어, 네트워크, 볼륨을 직접 조립해봤습니다. **배포 환경을 손으로 만들어본 첫 과제**이고, 지금 MLOps 쪽을 보게 된 출발점이기도 합니다.",
        "`.env` 설정과 `docker-compose up` 한 번으로 NGINX + WordPress + MariaDB 스택이 `TLS`까지 걸고 올라옵니다.",
      ],
      en: [
        "I assembled the image layers, networking, and volumes that a single `docker run` hides. **It was the first time I built a deployment environment by hand**, and it's where my interest in MLOps started.",
        "One `.env` and a single `docker-compose up` bring up NGINX + WordPress + MariaDB with `TLS` terminated.",
      ],
    },
    flow: [
      { label: { ko: "NGINX + TLS", en: "NGINX + TLS" } },
      { label: { ko: "WordPress (PHP-FPM)", en: "WordPress (PHP-FPM)" } },
      { label: { ko: "MariaDB + 볼륨", en: "MariaDB + volume" } },
      { label: { ko: "격리된 docker network", en: "Isolated docker network" } },
    ],
    howItWorks: {
      ko: [
        "NGINX reverse proxy + TLS 종단",
        "WordPress(PHP-FPM) 애플리케이션 컨테이너",
        "MariaDB + persistent volume으로 데이터 영속성",
        "컨테이너 간 통신은 docker network로 격리",
      ],
      en: [
        "NGINX reverse proxy with TLS termination",
        "WordPress (PHP-FPM) application container",
        "MariaDB with a persistent volume for data durability",
        "Container-to-container traffic isolated on a docker network",
      ],
    },
    learned: {
      ko: [
        "**레이어 캐시를 이해하니 빌드 시간과 이미지 크기가 같이 줄었습니다.** `Dockerfile`에서 명령 순서를 바꾸는 것만으로도 차이가 났습니다.",
        "**시크릿을 코드에서 분리하는 건 편의 문제가 아니었습니다.** 이미지에 한 번 들어가면 레이어에 그대로 남습니다.",
      ],
      en: [
        "**Understanding the layer cache cut build time and image size together.** Just reordering commands in the `Dockerfile` made a difference.",
        "**Keeping secrets out of the code isn't about tidiness.** Once one goes into an image, it stays in the layer.",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
  {
    id: "kaggle-dacon",
    tier: "additional",
    name: { ko: "Kaggle & Dacon 대회", en: "Kaggle & Dacon Competitions" },
    headline: {
      ko: "정형 · 시계열 대회에 개인으로 참가해 꾸준히 **상위 `10%`**. `K-fold`를 기본값으로 넣고서야 로컬 점수가 맞기 시작했습니다",
      en: "Solo entries in tabular and time-series competitions, consistently **top `10%`**. Local scores only started tracking the board once `K-fold` became the default",
    },
    period: { ko: "2025 – 2026", en: "2025 – 2026" },
    org: { ko: "개인 참가", en: "Solo entries" },
    awards: [{ ko: "상위 10%", en: "Top 10%" }],
    stack: ["Python", "pandas", "scikit-learn", "XGBoost", "LightGBM"],
    status: "ongoing",
    intro: {
      ko: [
        "책과 과제로 배운 걸 **리더보드에서 확인해보려고** 개인으로 참가하고 있습니다.",
        "정형 데이터 분류·회귀와 시계열 예측 대회에 나가 꾸준히 **상위 `10%`**에 들었습니다.",
      ],
      en: [
        "I enter solo to **check what I've learned from books and coursework against a leaderboard.**",
        "Across tabular classification/regression and time-series forecasting competitions, I've consistently placed in the **top `10%`**.",
      ],
    },
    flow: [
      { label: { ko: "EDA", en: "EDA" } },
      { label: { ko: "피처 엔지니어링 + CV", en: "Feature engineering + CV" } },
      { label: { ko: "그래디언트 부스팅", en: "Gradient boosting" } },
      { label: { ko: "제출 및 순위", en: "Submit & rank" } },
    ],
    howItWorks: {
      ko: [
        "pandas · matplotlib · seaborn으로 탐색적 데이터 분석(EDA)",
        "피처 엔지니어링과 교차검증(cross-validation)으로 과적합 관리",
        "XGBoost · LightGBM · scikit-learn 기반 그래디언트 부스팅 모델",
        "전처리 → 학습 → 평가로 이어지는 파이프라인을 대회마다 재사용",
      ],
      en: [
        "Exploratory data analysis (EDA) with pandas, matplotlib, seaborn",
        "Feature engineering and cross-validation to manage overfitting",
        "Gradient boosting models via XGBoost, LightGBM, scikit-learn",
        "Reused a preprocess → train → evaluate pipeline across competitions",
      ],
    },
    troubleshooting: [
      {
        title: {
          ko: "로컬 점수는 좋은데 리더보드에서 순위가 떨어졌다",
          en: "Good local scores, worse rank once the leaderboard settled",
        },
        problem: {
          ko: "교차검증 없이 낸 제출은 로컬 점수가 좋아 보여도 실제 리더보드에서는 대부분 순위가 떨어졌습니다.",
          en: "Submissions made without cross-validation looked fine locally but mostly dropped in rank once the real leaderboard settled.",
        },
        cause: {
          ko: "단일 `train/test split`에 대한 확신은 실전에서 버티지 못했습니다.",
          en: "Confidence built on a single `train/test split` didn't hold up.",
        },
        solution: {
          ko: ["이후 **모든 대회에 `K-fold` 교차검증을 기본값으로** 적용"],
          en: [
            "Made **`K-fold` cross-validation the default for every competition** from then on",
          ],
        },
        result: {
          ko: "**로컬 점수와 리더보드 점수가 맞아떨어지기 시작**했습니다.",
          en: "**Local scores started tracking the leaderboard.**",
        },
      },
    ],
    learned: {
      ko: [
        "**교차검증 없이 낸 제출은 대부분 순위가 떨어졌습니다.** 단일 split에서 나온 점수를 믿을 수 없다는 걸 몇 번 겪고 나서야 알았습니다.",
        "**대부분의 대회에서 모델보다 피처가 점수를 더 움직였습니다.** 모델을 바꿔보는 건 마지막에 하는 일이었습니다.",
      ],
      en: [
        "**Submissions made without cross-validation mostly dropped in rank.** It took a few rounds of that before I stopped trusting a score from a single split.",
        "**In most competitions features moved the score more than the model did.** Swapping models turned out to be the last thing to try, not the first.",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
];

/* Awards and activities that were previously scattered through Education and
   Experience. This is now the single place they are listed — Education keeps
   only school information so nothing appears twice. */
export type Award = {
  year: string;
  title: L<string>;
  detail?: L<string>;
  href?: string;
};

export const awards: Award[] = [
  {
    year: "2026",
    title: {
      ko: "WTIA AI Course LLM 경진대회 1위",
      en: "1st — WTIA AI Course LLM competition",
    },
    detail: {
      ko: "WTIA Entrepreneurship & Technology Immersion Course · 14 CFR RAG 챗봇 구현 경진대회 · 강사 평가 9/10 · 전자신문 보도",
      en: "WTIA Entrepreneurship & Technology Immersion Course · 14 CFR RAG chatbot competition · instructor score 9/10 · covered by etnews",
    },
    href: "https://www.etnews.com/20260724000305",
  },
  {
    year: "2026",
    title: {
      ko: "WTIA 투자자 Pitch Day — Poma AI 발표",
      en: "WTIA investor Pitch Day — presented Poma AI",
    },
    detail: {
      ko: "평가자 3인 평균 7.78 / 10 · Vision 8.67 · Traction 8 · 이후 참가 교육생 중 유일하게 현지 VC 후속 미팅 및 인턴십 면접",
      en: "7.78 / 10 average from 3 evaluators · Vision 8.67 · Traction 8 · afterwards the only participant to get a follow-up meeting with a local VC and an internship interview",
    },
  },
  {
    year: "2026",
    title: {
      ko: "WTIA Entrepreneurship & Technology Immersion Course 선발",
      en: "Selected — WTIA Entrepreneurship & Technology Immersion Course",
    },
    detail: {
      ko: "42경산 · 42서울 전체 교육생 중 30명 · 과학기술정보통신부 · IITP 지원 8주 창업 프로그램 · 워싱턴대(UW) 연계",
      en: "30 chosen from all École 42 Gyeongsan and Seoul students · 8-week startup program backed by Korea's Ministry of Science and ICT and IITP · run with the University of Washington",
    },
    href: "https://www.etnews.com/20260622000084",
  },
  {
    year: "2024.12",
    title: {
      ko: "UC Berkeley SCET 파이널 팀 프로젝트 1위",
      en: "1st — UC Berkeley SCET final team project",
    },
    detail: {
      ko: "UC Berkeley SCET Intensive Program",
      en: "UC Berkeley SCET Intensive Program",
    },
  },
  {
    year: "2020 · 2019",
    title: {
      ko: "기능경기대회 웹 디자인 및 개발 직종 2위 · 3위",
      en: "2nd & 3rd — Regional Skills Competition, Web Design & Development",
    },
    detail: {
      ko: "대구 지방기능경기대회 · 2년 연속 입상",
      en: "Daegu Regional Skills Competition · placed two years running",
    },
  },
];

export const techStack: { title: string; items: L<string>[] }[] = [
  {
    title: "Language",
    items: [
      { ko: "Python", en: "Python" },
      { ko: "JavaScript", en: "JavaScript" },
      { ko: "TypeScript", en: "TypeScript" },
      { ko: "Java", en: "Java" },
      { ko: "C / C++", en: "C / C++" },
      { ko: "Rust", en: "Rust" },
    ],
  },
  {
    title: "Backend · Web",
    items: [
      { ko: "Spring Boot", en: "Spring Boot" },
      { ko: "Node.js", en: "Node.js" },
      { ko: "Socket.io", en: "Socket.io" },
      { ko: "React", en: "React" },
      { ko: "Next.js", en: "Next.js" },
      { ko: "Angular.js", en: "Angular.js" },
      { ko: "React Native", en: "React Native" },
      { ko: "MySQL", en: "MySQL" },
    ],
  },
  {
    title: "AI · Data",
    items: [
      { ko: "Claude API", en: "Claude API" },
      { ko: "RAG", en: "RAG" },
      { ko: "LangChain", en: "LangChain" },
      { ko: "PyTorch", en: "PyTorch" },
      { ko: "pandas", en: "pandas" },
      { ko: "scikit-learn", en: "scikit-learn" },
      { ko: "XGBoost", en: "XGBoost" },
      { ko: "LightGBM", en: "LightGBM" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { ko: "Docker", en: "Docker" },
      { ko: "NGINX", en: "NGINX" },
      { ko: "AWS", en: "AWS" },
      { ko: "Git", en: "Git" },
      { ko: "Linux", en: "Linux" },
    ],
  },
  {
    title: "Business",
    items: [
      { ko: "시장 규모 산정 (TAM/SAM/SOM)", en: "Market sizing (TAM/SAM/SOM)" },
      { ko: "경쟁사 분석", en: "Competitor analysis" },
      { ko: "구독 가격 설계", en: "Subscription pricing" },
      { ko: "고객 인터뷰", en: "Customer interviews" },
      { ko: "피치덱", en: "Pitch decks" },
      { ko: "소싱 · 마진 설계", en: "Sourcing & margin design" },
    ],
  },
];

export const experience: {
  org: L<string>;
  period: L<string>;
  bullets: L<string[]>;
  media?: Media[];
  links?: { label: L<string>; href: string }[];
}[] = [
  {
    org: {
      ko: "WTIA Entrepreneurship & Technology Immersion Course",
      en: "WTIA Entrepreneurship & Technology Immersion Course",
    },
    period: {
      ko: "2026.06 – 2026.08 · 미국 시애틀 · 워싱턴대(UW) 연계",
      en: "Jun – Aug 2026 · Seattle, USA · with the University of Washington",
    },
    bullets: {
      ko: [
        "42경산 · 42서울 전체 교육생 중 **`30`명 선발**, 과학기술정보통신부 · IITP 지원 `8주` 창업 프로그램",
        "Microsoft · Amazon 등 현지 기업 및 VC와 교류, **투자자 Pitch Day** 참여",
        "로펌 사업개발용 구독형 SaaS **'Poma AI' Solo Founder** — `1주` 만에 만든 MVP로 글로벌 로펌 `3`곳을 반복 인터뷰해 **`2`곳과 파일럿 계약**",
        "AI Course **LLM 경진대회 전체 `1`위** (14 CFR RAG 챗봇, 강사 평가 `9/10`), 전자신문 보도",
        "참가 교육생 중 **유일하게 현지 VC와의 후속 미팅 및 인턴십 면접** 진행",
      ],
      en: [
        "**One of `30` selected** from all École 42 Gyeongsan and Seoul students for an `8-week` startup program backed by Korea's Ministry of Science and ICT and IITP",
        "Met local companies such as Microsoft and Amazon and local VCs; took part in the **investor Pitch Day**",
        "**Solo founder of 'Poma AI'**, a subscription SaaS for law-firm business development — an MVP built in `1 week` led to repeat interviews with `3` global law firms and **pilot contracts with `2`**",
        "**1st overall in the AI Course LLM competition** (14 CFR RAG chatbot, instructor score `9/10`), covered by etnews",
        "**The only participant to get a follow-up meeting with a local VC and an internship interview**",
      ],
    },
    links: [
      {
        label: {
          ko: "전자신문 — 프로그램 출항 (2026.6)",
          en: "etnews — program launch (Jun 2026)",
        },
        href: "https://www.etnews.com/20260622000084",
      },
      {
        label: {
          ko: "전자신문 — 성과 보도 (2026.7)",
          en: "etnews — results coverage (Jul 2026)",
        },
        href: "https://www.etnews.com/20260724000305",
      },
    ],
  },
  {
    org: {
      ko: "Ubase — 프로젝트 팀 리더 · 쿠팡 고객센터",
      en: "Ubase — Project Team Leader · Coupang customer center",
    },
    period: {
      ko: "2023.08 – 2024.08",
      en: "Aug 2023 – Aug 2024",
    },
    bullets: {
      ko: [
        "쿠팡 고객센터 **상담사 `15`명**의 응대 품질과 운영 관리",
        "입사 **`3개월` 만에 팀 리더로 승진**",
        "업무 분배 · 매뉴얼 · 피드백 주기를 다시 짜서 센터 전체 **QA 점수 `10%` 향상**",
      ],
      en: [
        "Managed response quality and operations for **`15` agents** at Coupang's customer center",
        "**Promoted to team leader within `3 months`** of joining",
        "Redesigned task allocation, manuals, and the feedback cycle — **center-wide QA score up `10%`**",
      ],
    },
  },
  {
    org: {
      ko: "Softnet — Full-Stack Engineer",
      en: "Softnet — Full-Stack Engineer",
    },
    period: {
      ko: "2021.01 – 2022.01 · 헬스케어 IoT사업본부",
      en: "Jan 2021 – Jan 2022 · Healthcare IoT division",
    },
    bullets: {
      ko: [
        "**대학병원 `3`곳** 대상 inPHR 플랫폼(복약 · 정서 관리 · 의료진 모니터링) 설계 · 개발",
        "`Spring Boot` REST API + `Angular.js` SPA로 의료진 모니터링 대시보드(inPHRDOC) 구축 · 배포",
        "스마트 약통 센서 기반 복약 이력 수집과 이종 데이터 통합 모델(inPHRPILL)",
        "시계열 데이터 서버 단 집계 · 필터링 · 페이지네이션, 민감 정보 `RBAC`",
      ],
      en: [
        "Designed and built the inPHR platform (medication, emotional-health management, clinician monitoring) for **`3` university hospitals**",
        "Built and shipped the clinician monitoring dashboard (inPHRDOC) on a `Spring Boot` REST API + `Angular.js` SPA",
        "Smart pill-box dose collection and a unified model for heterogeneous data (inPHRPILL)",
        "Server-side aggregation, filtering, and pagination of time-series data; `RBAC` on sensitive fields",
      ],
    },
  },
  {
    org: {
      ko: "개인 사업 — 동대문 의류 · 중국 잡화 수입 · 판매",
      en: "Own business — Dongdaemun apparel & Chinese goods import/retail",
    },
    period: { ko: "2019 – 2023", en: "2019 – 2023" },
    bullets: {
      ko: [
        "중국 잡화와 의류를 직접 수입 · 판매해 **월 매출 `1,000만 원` 이상**",
        "키워드 검색량으로 수요를 판단하고, 경쟁 셀러 가격과 소싱 원가를 비교해 마진 설계",
        "차별화된 상세페이지 기획, 네이버 스마트스토어 운영 · 수입 소싱과 공급망 관리",
      ],
      en: [
        "Imported and sold Chinese goods and apparel myself — **₩`10M`+ in monthly revenue**",
        "Judged demand from keyword search volume; set margins by comparing competing sellers' prices with sourcing cost",
        "Planned differentiated product pages; ran a Naver Smart Store, import sourcing, and the supply chain",
      ],
    },
  },
  {
    org: {
      ko: "HiikTalk — Development Intern",
      en: "HiikTalk — Development Intern",
    },
    period: { ko: "2020.01", en: "Jan 2020" },
    bullets: {
      ko: [
        "**암호화폐 거래 시스템 백엔드** 개발",
        "`React Native` 거래 화면 구현",
        "`Selenium` 기반 실시간 시세 크롤러 구축",
      ],
      en: [
        "Built the **backend for a cryptocurrency trading system**",
        "Implemented the trading screens in `React Native`",
        "Built a real-time market-price crawler on `Selenium`",
      ],
    },
  },
];

/* Schools only. Competition placements and program selections that used to be
   listed here now live in `awards` — see the note above it. */
export const education: {
  org: L<string>;
  period: L<string>;
  body: L<string[]>;
}[] = [
  {
    org: {
      ko: "École 42 (경산캠퍼스) — 컴퓨터과학 · RNCP7",
      en: "École 42 (Gyeongsan) — Computer Science · RNCP 7",
    },
    period: { ko: "2024.10 – 현재", en: "Oct 2024 – present" },
    body: {
      ko: [
        `[École 42](${LINKS.ecole42})는 교수도 강의도 없이 **프로젝트를 만들어 동료 평가로 통과**하는 컴퓨터과학 교육기관입니다. 프랑스 국가직업자격체계 [**\`RNCP 7단계\` — 석사(Bac+5)에 준하는 등급**](${LINKS.rncp7}) 과정입니다.`,
        "`Transcendence` · `WebServ`를 포함한 공통 과정을 마치고, 현재 **DS · AI 과정**을 진행 중입니다.",
      ],
      en: [
        `[École 42](${LINKS.ecole42}) is a computer science school with no professors and no lectures — **you build projects and pass through peer evaluation**. The program is registered at [**\`RNCP level 7\`**](${LINKS.rncp7}) in the French national qualifications framework, **equivalent to a Master's (Bac+5)**.`,
        "Completed the core curriculum, including `Transcendence` and `WebServ`; **now on the DS · AI track**.",
      ],
    },
  },
  {
    org: {
      ko: "고려사이버대학교 — 경영학과",
      en: "Korea Cyber University — Business Administration",
    },
    period: { ko: "2021.03 – 현재 · 재학 중", en: "Mar 2021 – present · enrolled" },
    body: {
      ko: ["재직 · 개인 사업과 병행하며 경영학 전공"],
      en: ["Studying business administration alongside work and running my own business"],
    },
  },
  {
    org: {
      ko: "대구소프트웨어마이스터고 — 소프트웨어개발과",
      en: "Daegu Software Meister High School — Software Development",
    },
    period: { ko: "2018.03 – 2021.02 · 졸업", en: "Mar 2018 – Feb 2021 · graduated" },
    body: {
      ko: [
        "기능경기대회 웹디자인 및 개발 직종 입상(`2019` 3위, `2020` 2위), 국가대표 후보 훈련",
      ],
      en: [
        "Placed at the skills competition in Web Design & Development (3rd in `2019`, 2nd in `2020`); trained as a national-team candidate",
      ],
    },
  },
];
