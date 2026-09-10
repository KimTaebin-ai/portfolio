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
    "Web Full-Stack Developer",
    "AI Engineer",
    "MLOps Engineer",
    "SLAM Engineer",
  ],
  roleSuffix: "École 42",
  tagline: "Systems from first principles",
  /* One sentence, no emphasis. Everything below the hero is the evidence for
     it, so this line does not need to argue. */
  intro: {
    ko: [
      "복잡한 문제를 단순한 구조로 시각화하고, 로직의 처음부터 끝까지 직접 구축하는 것에 보람을 느낍니다.",
    ],
    en: [
      "What I get the most out of is turning a complicated problem into a structure I can see, and building the logic from one end to the other myself.",
    ],
  } satisfies L<string[]>,
  techChips: ["C/C++", "Python", "Mathematics", "SLAM", "Kubernetes"],
  /* Two separate facts, so two lines: what I'm doing now, and what I'm looking
     for. Joined with a "·" they read as one long clause and the second half —
     the one a recruiter is scanning for — gets lost behind the first. */
  currentLines: {
    ko: [
      `[École 42](${LINKS.ecole42})에서 [RNCP7](${LINKS.rncp7}) 취득을 위해 DS/AI 트랙 진행 중입니다.`,
      "인턴십과 스타트업에 함께할 기회를 찾고 있습니다.",
    ],
    en: [
      `On the DS/AI track at [École 42](${LINKS.ecole42}), working toward an [RNCP Level 7](${LINKS.rncp7}) qualification.`,
      "Open to internships and to joining a startup.",
    ],
  } satisfies L<string[]>,
  /* Shown in the hero contact card, under the name. */
  affiliation: {
    ko: `[École 42](${LINKS.ecole42}) (Gyeongsan) · DS/AI 트랙 ([RNCP 7](${LINKS.rncp7}))`,
    en: `[École 42](${LINKS.ecole42}) (Gyeongsan) · DS/AI track ([RNCP level 7](${LINKS.rncp7}))`,
  } satisfies L<string>,
  /* Four chips under the hero cards. Every one of these is an entry in
     `awards` below — this is the 3-second version of that section. */
  highlights: [
    {
      ko: "WTIA (워싱턴 기술 산업 협회) 기업가 정신 · AI 몰입 프로그램",
      en: "WTIA (Washington Technology Industry Association) — entrepreneurship & AI immersion program",
    },
    {
      ko: "WTIA 내 AI lecture LLM Competition 1위",
      en: "1st — LLM competition, WTIA AI lecture",
    },
    {
      ko: "UC Berkeley SCET final project 1위",
      en: "1st — UC Berkeley SCET final project",
    },
    { ko: "Kaggle / Dacon 상위 10%", en: "Kaggle / Dacon top 10%" },
  ] satisfies L<string>[],
  /* The one paragraph that says what the rest of the page is evidence for.
     `lead` carries the accent weight; `body` stays body-colored. */
  callout: {
    lead: {
      ko: "만들어봐야 아는 것들이 있습니다.",
      en: "Some things you only learn by building them.",
    },
    body: {
      ko: "셸과 레이트레이서는 `C`로, HTTP 서버는 `C++`로, 회귀와 행렬 연산은 `Rust`로 직접 짰습니다. 결과가 맞는지는 손계산이나 정답셋으로 확인합니다. 그렇게 해온 것들이 웹 풀스택 · AI · MLOps · SLAM 네 갈래로 모였고, 아래 프로젝트가 그 기록입니다.",
      en: "I wrote the shell and the ray tracer in `C`, the HTTP server in `C++`, and regression and matrix operations in `Rust`. To know whether the output is right, I check it against hand calculations or an answer key. That work has settled into four areas — web full-stack, AI, MLOps, and SLAM — and the projects below are the record.",
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
      ko: "École 42 — 심화 과정 진행 중",
      en: "École 42 — advanced curriculum, in progress",
    },
    period: { ko: "2024 – 현재", en: "2024 – present" },
    ongoing: true,
    body: {
      ko: [
        `교수도 강의도 없이 **프로젝트를 만들어 동료 앞에서 방어해야 통과**하는 [학교](${LINKS.ecole42})입니다. \`Transcendence\` · \`WebServ\`를 포함한 **공통 과정을 모두 마치고, 지금은 심화 과정을 진행 중**입니다. 셸을 \`C\`로 다시 만들고, 레이트레이서로 선형대수를 확인하고, 회귀와 행렬 연산을 \`Rust\`로 다시 구현했습니다.`,
      ],
      en: [
        `A [school](${LINKS.ecole42}) with no professors and no lectures: **you pass by building projects and defending them in front of peers**. I've **completed the core curriculum**, \`Transcendence\` and \`WebServ\` included, and am **now working through the advanced one**. Along the way I rebuilt a shell in \`C\`, checked my linear algebra against a ray tracer, and reimplemented regression and matrix operations in \`Rust\`.`,
      ],
    },
  },
  {
    org: { ko: "Mathematics — 독학", en: "Mathematics — Self-Taught" },
    period: { ko: "2024 – 현재", en: "2024 – present" },
    ongoing: true,
    body: {
      ko: [
        "42에서 공부하다가 **CS의 밑에 수학이 있다는 걸** 알게 됐습니다. 수학의정석 `2권`을 `두 번`씩 풀어 기초를 다시 세웠고, 지금은 미적분 · 선형대수 · 확률론 · 최적화이론 · 해석학, 리군과 강체변환, 이산수학 · 조합론, 그리고 `TAOCP`를 책으로 풀어가며 올라가는 중입니다. 리군과 강체변환은 `SLAM` 쪽을 제대로 보려고 따로 시작했습니다.",
      ],
      en: [
        "Studying at 42 is where I found that **math sits underneath CS**. I rebuilt my foundations by working through `two volumes` of a classic Korean problem book `twice` each, and I'm now climbing through calculus, linear algebra, probability, optimization theory, real analysis, Lie groups and rigid-body transforms, discrete math and combinatorics, and `TAOCP` — books and hard problems, worked by hand. Lie groups and rigid-body transforms I picked up specifically to go further into `SLAM`.",
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
      label: "Ran",
      what: {
        ko: "사업 — 고객과 매출",
        en: "a business — customers and revenue",
      },
      when: { ko: "2019–2024", en: "2019–2024" },
    },
    {
      label: "Studied",
      what: {
        ko: "École 42 · CS 바닥부터",
        en: "École 42 · CS from the bottom",
      },
      when: { ko: "2024–", en: "2024–" },
    },
    {
      label: "Repeat",
      what: { ko: "만들고 검증하기", en: "build it, then verify it" },
      when: { ko: "진행 중", en: "ongoing" },
    },
    {
      label: "Now",
      what: {
        ko: "스타트업 합류 · 인턴십 기회를 찾는 중",
        en: "open to startup roles and internships",
      },
      when: { ko: "2026–", en: "2026–" },
    },
  ] satisfies { label: string; what: L<string>; when: L<string> }[],
  origin: {
    label: "Where it came from",
    steps: [
      {
        title: { ko: "사업", en: "A business" },
        sub: { ko: "고객 · 운영", en: "customers · operations" },
      },
      {
        title: { ko: "실무 경험", en: "Industry" },
        sub: {
          ko: "병원 데이터 플랫폼 · 팀 리드",
          en: "hospital data platform · team lead",
        },
      },
      {
        title: { ko: "École 42", en: "École 42" },
        sub: {
          ko: "바닥부터 CS — C, UNIX, 네트워크",
          en: "CS from the bottom — C, UNIX, networks",
        },
      },
    ] satisfies { title: L<string>; sub: L<string> }[],
  },
  loop: {
    label: "What I repeat",
    steps: [
      {
        title: {
          ko: "왜 이렇게 동작하는지 파본다",
          en: "Dig into why it works this way",
        },
        sub: { ko: "문서보다 구현을 먼저", en: "implementation before docs" },
      },
      {
        title: { ko: "무엇을 만들지 정한다", en: "Decide what to build" },
        sub: { ko: "무엇을 안 만들지도", en: "and what not to" },
      },
      {
        title: {
          ko: "만들고 확인하고 다시 본다",
          en: "Build it, check it, look again",
        },
        sub: { ko: "숫자로 확인", en: "checked with numbers" },
      },
    ] satisfies { title: L<string>; sub: L<string> }[],
    feedback: {
      ko: "만들다 보면 다음에 볼 게 생긴다",
      en: "building it turns up the next thing to look at",
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
  learned: L<string[]>;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  /* ---------------------------------------------------------------- featured */
  {
    id: "rag-chatbot",
    tier: "featured",
    name: { ko: "14 CFR RAG Chatbot", en: "14 CFR RAG Chatbot" },
    headline: {
      ko: "`1,297`쪽 항공법에서 근거 조항까지 같이 내주는 RAG 챗봇. 검색 설정 `45`개를 자동 채점해 recall `0.909`",
      en: "A RAG chatbot over `1,297` pages of aviation law that hands back the clause it used. `45` retrieval configs auto-graded, recall `0.909`",
    },
    period: { ko: "2026.6", en: "Jun 2026" },
    org: {
      ko: "WTIA (워싱턴 기술 산업 협회) 프로그램 · AI 수업 competition 과제",
      en: "WTIA (Washington Technology Industry Association) program · AI lecture competition",
    },
    awards: [
      {
        ko: "🏆 AI 수업 LLM Competition 1위 · 강사 채점 9/10",
        en: "🏆 1st — AI lecture LLM competition · instructor score 9/10",
      },
    ],
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
        "WTIA(워싱턴 기술 산업 협회) 프로그램의 AI 수업에서 진행한 competition 과제입니다. 주제는 `1,297쪽`짜리 미국 연방 항공법(14 CFR)에서 질문에 맞는 조항(§)을 찾아 답하는 것이었습니다. 그럴듯하게 답하는 것과 근거를 대고 답하는 것은 다른 문제라, 둘을 어떻게 구분해서 측정할지부터 정하고 시작했습니다.",
        "검색 설정 `45`개를 만들어 밤새 자동으로 채점했고, blind holdout에서 **recall `0.909`**가 나온 설정을 골랐습니다. 강사 채점 `9/10`으로 **수강생 중 1위**를 했습니다.",
      ],
      en: [
        "The competition assignment in the AI lecture of the WTIA (Washington Technology Industry Association) program. The task was to answer questions about `1,297 pages` of U.S. federal aviation law (14 CFR) by finding the right clause (§). Answering plausibly and answering with evidence are two different problems, so I started by deciding how to measure the difference.",
        "I built `45` retrieval configurations, graded them automatically overnight, and picked the one that scored **recall `0.909`** on a blind holdout. The instructor scored it `9/10` — **first among the participants**.",
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
        "**Recall `0.909`** (blind holdout)",
        "Agentic 검색 루프 입력 토큰 **최대 `86%` 절감** — 'drugs and alcohol' 질문 `14,019 → 1,908`",
        "무관한 질문은 answer gate가 **`0`토큰으로 거절**",
        "모든 답변에 `§` citation — **검증 가능한 답만 출력**",
      ],
      en: [
        "**Recall `0.909`** (blind holdout)",
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
    period: { ko: "2026", en: "2026" },
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
  {
    id: "linear-regression-matrix",
    tier: "featured",
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
    tier: "featured",
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
    tier: "featured",
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

  /* -------------------------------------------------------------- additional */
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
      ko: "WTIA 글로벌 창업 프로그램 선발",
      en: "Selected — WTIA Global Startup Program",
    },
    detail: {
      ko: "워싱턴 기술 산업 협회 · 워싱턴 대학교 창업 교육 · 42경산·42서울 교육생 30명 · 전자신문 보도",
      en: "Washington Technology Industry Association · entrepreneurship program at the University of Washington · one of 30 trainees from École 42 Gyeongsan and Seoul · covered by etnews",
    },
    href: "https://www.etnews.com/20260724000305",
  },
  {
    year: "2026",
    title: {
      ko: "WTIA AI 수업 LLM Competition — 수강생 중 1위",
      en: "WTIA AI lecture LLM competition — 1st among participants",
    },
    detail: {
      ko: "14 CFR RAG 챗봇 · 강사 채점 9/10",
      en: "14 CFR RAG chatbot · instructor score 9/10",
    },
  },
  {
    year: "2024.12",
    title: {
      ko: "UC Berkeley SCET Intensive Program — 최종 팀 프로젝트 1위",
      en: "UC Berkeley SCET Intensive Program — 1st, final team project",
    },
    detail: { ko: "비디오 제작 캡스톤", en: "Video-production capstone" },
  },
  {
    year: "2025 – 2026",
    title: { ko: "Kaggle / Dacon 상위 10%", en: "Kaggle / Dacon — top 10%" },
  },
  {
    year: "2020",
    title: {
      ko: "지방기능경기대회 웹디자인·개발 2위",
      en: "Regional Skills Competition — 2nd, Web Design & Development",
    },
  },
  {
    year: "2019",
    title: {
      ko: "지방기능경기대회 웹디자인·개발 3위",
      en: "Regional Skills Competition — 3rd, Web Design & Development",
    },
  },
  {
    year: "2019 – 2021",
    title: {
      ko: "WorldSkills 국가대표 후보 훈련",
      en: "WorldSkills national-team candidate training",
    },
  },
];

export const techStack: { title: string; items: L<string>[] }[] = [
  {
    title: "Mathematics",
    items: [
      { ko: "Linear Algebra", en: "Linear Algebra" },
      { ko: "Calculus · Analysis", en: "Calculus · Analysis" },
      { ko: "Probability", en: "Probability" },
      { ko: "Optimization", en: "Optimization" },
      {
        ko: "Lie Groups · Rigid-Body Transforms",
        en: "Lie Groups · Rigid-Body Transforms",
      },
      {
        ko: "Discrete Math · Combinatorics",
        en: "Discrete Math · Combinatorics",
      },
    ],
  },
  {
    title: "Languages & Systems",
    items: [
      { ko: "Python", en: "Python" },
      { ko: "C", en: "C" },
      { ko: "C++", en: "C++" },
      { ko: "Rust (탐색 중)", en: "Rust (exploring)" },
      { ko: "JavaScript/TypeScript", en: "JavaScript/TypeScript" },
      { ko: "SQL", en: "SQL" },
    ],
  },
  {
    title: "ML & AI",
    items: [
      { ko: "PyTorch", en: "PyTorch" },
      { ko: "FastAPI", en: "FastAPI" },
      { ko: "Claude API", en: "Claude API" },
      { ko: "RAG", en: "RAG" },
      { ko: "LangChain (탐색 중)", en: "LangChain (exploring)" },
      { ko: "XGBoost", en: "XGBoost" },
      { ko: "LightGBM", en: "LightGBM" },
      { ko: "pandas", en: "pandas" },
    ],
  },
  {
    title: "Web & Backend",
    items: [
      { ko: "Node.js", en: "Node.js" },
      { ko: "Socket.io", en: "Socket.io" },
      { ko: "Spring Boot", en: "Spring Boot" },
      { ko: "Angular.js", en: "Angular.js" },
      { ko: "REST APIs", en: "REST APIs" },
      { ko: "OAuth 2.0", en: "OAuth 2.0" },
      { ko: "MySQL", en: "MySQL" },
    ],
  },
  {
    title: "Robotics & Systems",
    items: [
      { ko: "ROS2", en: "ROS2" },
      { ko: "YOLOv8", en: "YOLOv8" },
      { ko: "LiDAR/Vision", en: "LiDAR/Vision" },
      { ko: "SLAM", en: "SLAM" },
      { ko: "Kalman Filters", en: "Kalman Filters" },
    ],
  },
  {
    title: "DevOps & MLOps",
    items: [
      { ko: "Docker", en: "Docker" },
      { ko: "Docker Compose", en: "Docker Compose" },
      { ko: "Kubernetes (탐색 중)", en: "Kubernetes (exploring)" },
      { ko: "NGINX", en: "NGINX" },
      { ko: "Git", en: "Git" },
      { ko: "AWS/GCP (탐색 중)", en: "AWS/GCP (exploring)" },
    ],
  },
  {
    title: "Tools & Frameworks",
    items: [
      { ko: "Linux", en: "Linux" },
      { ko: "Git", en: "Git" },
      { ko: "VS Code", en: "VS Code" },
      {
        ko: "42 cursus projects (peer evaluation)",
        en: "42 cursus projects (peer evaluation)",
      },
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
      ko: "WTIA Global Startup Program",
      en: "WTIA Global Startup Program",
    },
    period: {
      ko: "2026.6 – 8.14 (수료) · Seattle",
      en: "Jun – Aug 14, 2026 (completed) · Seattle",
    },
    bullets: {
      ko: [
        "**WTIA(워싱턴 기술 산업 협회)**가 운영하고 **워싱턴 대학교에서 진행하는 창업·기업가 정신 교육** 프로그램으로, 과기정통부·IITP가 지원하는 실전형 AI·SW 창업 과정입니다. 수 많은 경쟁을 뚫고 최종 **42경산·42서울 교육생 `30명`으로 선발**됐습니다.",
        "`8주간` 시애틀 현지 과정 — Microsoft · Amazon · Boeing 등 현지 기업과 Voyager Capital · Trilogy Equity Partners 등 VC 연계, AI2(Allen Institute for AI) 방문, Seattle Tech Week 참가, **투자자 대상 최종 Pitch Day**로 마무리",
        "AI 수업의 **LLM Competition에서 1위** (14 CFR RAG 챗봇, 강사 채점 `9/10`) · AI 맞춤형 정보 탐색 실습 성과로 **전자신문에 소개**",
        "로펌에게 잠재 수임 신호를 잡아 파트너 변호사에게 알려주는 구독형 SaaS 스타트업 **'Poma AI' 기획·주도**",
        "`2026.8.14` 전 일정 수료 후 한국 복귀",
      ],
      en: [
        "Run by the **WTIA (Washington Technology Industry Association)** as an **entrepreneurship program held at the University of Washington**, and a hands-on AI/SW startup course backed by Korea's Ministry of Science and ICT and IITP. I was selected as one of the **final `30` trainees** from École 42 Gyeongsan and Seoul out of intense competition.",
        "An `8-week` on-site program in Seattle — access to local companies (Microsoft, Amazon, Boeing) and VCs (Voyager Capital, Trilogy Equity Partners), a visit to AI2 (Allen Institute for AI), Seattle Tech Week, closing with a **Pitch Day in front of investors**",
        "**Won the LLM competition** in the AI lecture (a 14 CFR RAG chatbot, instructor score `9/10`), and was **featured in etnews (전자신문)** for the results of an AI personalized-information-search exercise",
        "**Planned and led 'Poma AI'**, a subscription SaaS that catches early signals of potential legal cases and alerts partner attorneys at law firms",
        "Completed the full program on `Aug 14, 2026` and returned to Korea",
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
    org: { ko: "École 42", en: "École 42" },
    period: { ko: "2024 – 현재", en: "2024 – present" },
    bullets: {
      ko: [
        "시스템 프로그래밍부터 풀스택까지 — `C/C++/Rust`",
        "**강의 없이** 프로젝트와 동료 평가(peer evaluation)로만 진행되는 커리큘럼",
      ],
      en: [
        "Systems programming through full-stack — `C/C++/Rust`",
        "**No lectures** — a curriculum run entirely on projects and peer evaluation",
      ],
    },
  },
  {
    org: { ko: "Ubase — 프로젝트 팀장", en: "Ubase — Project Team Leader" },
    period: {
      ko: "2023.8 – 2024.8 · Seoul",
      en: "Aug 2023 – Aug 2024 · Seoul",
    },
    bullets: {
      ko: [
        "입사 `3개월` 만에 **프로젝트 리더로 승진**, 팀 관리 체계를 새로 구축",
        "운영 개선으로 센터 전체 **QA 점수 `10%` 향상**",
        "42 École의 기초 기술 교육에 끌려 팀을 떠나 심화 기술 학습으로 전환",
      ],
      en: [
        "**Promoted to project leader within `3 months`**; built a new team management framework",
        "Improved center-wide **QA scores by `10%`** through operational improvements",
        "Left to pursue deep technical foundations at École 42",
      ],
    },
  },
  {
    org: {
      ko: "Softnet — 풀스택 엔지니어",
      en: "Softnet — Full Stack Engineer",
    },
    period: {
      ko: "2021.1 – 2022.1 · Seoul",
      en: "Jan 2021 – Jan 2022 · Seoul",
    },
    bullets: {
      ko: [
        "서울대병원·고려대안암병원·충남대병원 **`3`개 대학병원의 이종 환자 데이터를 통합**하는 관계형 스키마·`ETL` 파이프라인 설계",
        "`Spring Boot` REST API + `Angular.js` SPA로 **통합 개인건강기록(PHR) 플랫폼** 구축",
        "시계열 임상 데이터의 서버 사이드 집계·필터링·페이지네이션 구현",
        "민감한 건강 데이터를 위한 **역할 기반 접근 제어(`RBAC`)**와 반응형 대시보드",
      ],
      en: [
        "Designed relational schemas and `ETL` pipelines **unifying heterogeneous patient data from `3` university hospitals** (SNUH, KU Anam, CNUH)",
        "Built an **integrated Personal Health Record (PHR) platform**: `Spring Boot` REST APIs + `Angular.js` SPA",
        "Implemented server-side aggregation, filtering, and pagination for time-series clinical data",
        "**Role-based access control (`RBAC`)** for sensitive health data, with responsive dashboards",
      ],
    },
  },
  {
    org: {
      ko: "HiikTalk — 소프트웨어 엔지니어 (인턴)",
      en: "HiikTalk — Software Engineer (Intern)",
    },
    period: { ko: "2020.1 · Sejong", en: "Jan 2020 · Sejong" },
    bullets: {
      ko: [
        "**암호화폐 거래 시스템 백엔드** 구축 — 주문·시세·계정 관리",
        "`React Native` 기반 거래 인터페이스 구현",
        "`Selenium` 기반 실시간 시세 크롤러 구축, 재시도 처리 포함",
      ],
      en: [
        "Built the **backend for a cryptocurrency trading system** — order flow, market data, account management",
        "Implemented a `React Native` trading interface",
        "Built a `Selenium`-based real-time market-data crawler with retry handling",
      ],
    },
  },
  {
    org: {
      ko: "개인 사업 — 상해 화장품 판매 · 네이버 스마트스토어",
      en: "Personal Business — Shanghai Cosmetics Sales · Naver Smart Store",
    },
    period: { ko: "2019 – 2021", en: "2019 – 2021" },
    bullets: {
      ko: ["중국 상해에서 화장품을 수입·판매", "네이버 스마트스토어 운영"],
      en: [
        "Imported and sold cosmetics in Shanghai, China",
        "Operated a Naver Smart Store",
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
      ko: "École 42 (Gyeongsan) — 컴퓨터 사이언스 기초",
      en: "École 42 (Gyeongsan) — Computer Science Fundamentals",
    },
    period: { ko: "2024 – 현재", en: "2024 – present" },
    body: {
      ko: [
        `[École 42](${LINKS.ecole42})는 \`2013년\` 파리에서 Xavier Niel이 설립한 무상 컴퓨터공학 교육기관으로, 현재 \`30여 개국\` \`50개 이상\` 캠퍼스를 가진 **세계 최대의 무료 개발자 교육 네트워크**입니다. 교수도 강의도 교재도 없이, **프로젝트를 만들어 동료 앞에서 방어해야 통과**하며, 캠퍼스는 \`24시간\` 열려 있고 정해진 시간표가 없습니다.`,
        `입학은 한 달간 \`C\`로만 진행되는 전일제 몰입 과정 **'라피신(La Piscine)'**을 통과해야 하고, 초반 과제부터 **'노름(the Norm)'**이라는 코딩 규칙(함수 \`25줄\` 제한, \`for\`·\`switch\` 금지)을 지켜야 자동 검증을 통과해 비로소 사람이 리뷰합니다. 프랑스 국가직업자격체계 [**\`RNCP 7단계\` — 석사(bac+5)에 준하는 등급**](${LINKS.rncp7})으로 등록되어 있습니다.`,
        "`Transcendence` · `WebServ`를 포함한 공통 과정을 모두 마치고, 지금은 **심화 과정(Outer Circle)을 진행 중**입니다.",
        "**정규 수업보다 실전으로 배우는 방식은 처음이 아니었습니다.** 고등학교 때도 기능반 훈련으로 같은 방식을 거쳤습니다. 수학도 같은 길이었습니다. 수학의정석 `2권`을 `두 번`씩 풀어 기초를 세우고, 지금은 해석학과 리군, `TAOCP`까지 책으로 직접 올라가고 있습니다.",
        "`C`로 셸을 재구현하고(`minishell`), Docker 스택을 바닥부터 조립하고(`Inception`), 레이트레이서로 선형대수를 확인하고(`miniRT`) — **커리큘럼 전체가 직접 만들어 통과하는 방식**입니다.",
      ],
      en: [
        `[École 42](${LINKS.ecole42}) is a tuition-free computer science school founded in Paris in \`2013\` by Xavier Niel — now the **world's largest free developer-education network**, with \`50+\` campuses across \`30+\` countries. No professors, lectures, or textbooks: **you build projects and defend them in front of peers to pass**, and campuses are open \`24/7\` with no fixed schedule.`,
        `Admission requires passing **La Piscine**, a month-long full-time immersion in \`C\`, and even the earliest projects must follow **the Norm** — a coding style (\`25-line\` function limit, no \`for\`-loops or \`switch\` statements) checked automatically before any human reviews it. The credential is registered at [**\`RNCP level 7\`**](${LINKS.rncp7}) in the French national qualifications framework, **roughly equivalent to a Master's (bac+5)**.`,
        "Completed the core curriculum, including `Transcendence` and `WebServ`, and I'm **now working through the advanced curriculum (the Outer Circle)**.",
        "**Learning by building rather than by lecture wasn't new to me.** High school ran the same way through skills-competition training. Math followed the same path: I rebuilt my foundations working through `two volumes` of a classic Korean problem book `twice` each, and I'm now climbing through analysis, Lie groups, and `TAOCP` straight from the books.",
        "Reimplementing a shell in `C` (`minishell`), assembling a Docker stack from scratch (`Inception`), verifying linear algebra with a ray tracer (`miniRT`) — **the whole curriculum is pass-by-building**.",
      ],
    },
  },
  {
    org: {
      ko: "경영학과 학사 과정",
      en: "B.B.A., Business Administration",
    },
    period: { ko: "2021 – 현재 · 4학년", en: "2021 – present · Senior" },
    body: { ko: [], en: [] },
  },
  {
    org: {
      ko: "고등학교 — 소프트웨어개발 전공",
      en: "High school — Software Development",
    },
    period: { ko: "2018.3 – 2021.2", en: "Mar 2018 – Feb 2021" },
    body: {
      ko: [
        "1학년 2학기부터 기능반 훈련에 들어가, 정규 수업보다 실전 대회 준비에 시간을 썼습니다. 기능경기대회 웹디자인·개발 부문에 나가 `2019`년 3위, `2020`년 2위를 했고, `2019`년부터 `2021`년까지 WorldSkills 국가대표 후보로 훈련했습니다.",
      ],
      en: [
        "From the second semester of freshman year I moved into the skills-training track, spending more time on competition preparation than on regular classes. I placed 3rd in `2019` and 2nd in `2020` in Web Design & Development at the regional skills competition, and trained as a WorldSkills national-team candidate from `2019` to `2021`.",
      ],
    },
  },
];
