export type Lang = "ko" | "en";
export type L<T> = { ko: T; en: T };

export const profile = {
  nameEn: "Taebin Kim",
  nameKr: "김태빈",
  roles: "ML Systems Engineer · Full-Stack Developer · École 42",
  tagline: "Systems from first principles",
  intro: {
    ko: "한때는 빠른 구현이 실력의 전부라고 믿었습니다. 기능반과 팀 리드 자리에서, 정해진 시간 안에 요구사항을 결과물로 만들어내는 속도로 실력을 증명했고 — 대회 입상과 국가대표 후보 훈련까지 받았습니다. 하지만 코드를 빠르게 짜는 일이 점점 도구의 몫이 되어가면서, 정작 중요한 건 그 밑에서 무슨 일이 일어나는지 아는 능력이라는 걸 깨달았습니다. 그래서 컴퓨터 사이언스와 수학을 밑바닥부터 다시 시작했습니다 — École 42에서 셸과 레이트레이서를 C로, 선형대수를 Rust로 프레임워크 없이 직접 만들고, 수학은 강의 없이 책을 풀며 해석학·선형대수를 쌓았습니다. 속도를 버린 건 아닙니다. LLM과 에이전트를 다루는 개발은 오히려 더 강해졌습니다 — 근본을 이해하는 사람이 도구를 다룰 때, 속도는 깊이를 배신하지 않습니다.",
    en: "I used to believe speed was the whole of skill. In skills-competition training and as a team lead, I proved that skill by shipping requirements into results inside a fixed window — competition placements and WorldSkills national-team candidate training followed. But as writing code fast increasingly became the tool's job, I realized what actually mattered was understanding what happens underneath. So I restarted computer science and math from scratch: at École 42, building a shell and a ray tracer in C and a linear-algebra library in Rust with no framework to hide behind, and working through analysis and linear algebra from books with no lectures. I haven't given up speed — if anything, building with LLMs and agents got stronger. When someone who understands the fundamentals picks up the tools, speed stops betraying depth.",
  } satisfies L<string>,
  techChips: ["C/C++", "Python", "Mathematics", "Systems Programming", "ML Infrastructure"],
  currentLine: {
    ko: "WTIA × UW CoMotion에서 활동 중 (Seattle, 2026.6–8)",
    en: "currently at WTIA × UW CoMotion (Seattle, Jun–Aug 2026)",
  } satisfies L<string>,
  socials: {
    github: "https://github.com/KimTaebin-ai",
    linkedin: "https://www.linkedin.com/in/tbkim02/",
    email: "bin065025@gmail.com",
  },
};

export const nav: { href: string; label: L<string> }[] = [
  { href: "#current", label: { ko: "현재", en: "Current" } },
  { href: "#build", label: { ko: "빌드", en: "Build" } },
  { href: "#stack", label: { ko: "스택", en: "Stack" } },
  { href: "#experience", label: { ko: "경력", en: "Experience" } },
];

export const current: { org: L<string>; period: L<string>; body: L<string[]> }[] = [
  {
    org: {
      ko: "WTIA × UW CoMotion Global Startup Program",
      en: "WTIA × UW CoMotion Global Startup Program",
    },
    period: { ko: "2026.6 – 8 (진행중) · Seattle", en: "Jun – Aug 2026 (ongoing) · Seattle" },
    body: {
      ko: [
        "ML 엔지니어링·인프라 인턴십을 목표로 Seattle에서 여름을 보내고 있습니다. Poma AI 캡스톤 프로젝트를 주도하며, ML systems performance · GPU optimization · distributed training을 파고드는 중입니다.",
      ],
      en: [
        "Spending the summer in Seattle aiming for an ML engineering / infrastructure internship. Leading the Poma AI capstone project and digging into ML systems performance, GPU optimization, and distributed training.",
      ],
    },
  },
  {
    org: { ko: "École 42 — Outer Circle", en: "École 42 — Outer Circle" },
    period: { ko: "2024 – 현재", en: "2024 – present" },
    body: {
      ko: [
        "교수도 강의도 없이, 프로젝트와 동료 평가만으로 컴퓨터 사이언스를 쌓고 있습니다. Inner Circle을 마치고 Transcendence · WebServ를 통과해 Outer Circle에 진입했습니다. C로 셸을 재구현하고, 레이트레이서로 선형대수를 확인하고, 회귀와 행렬 연산을 Rust로 바닥부터 다시 구현했습니다.",
      ],
      en: [
        "No professors, no lectures — just projects and peer evaluation, building computer science from scratch. Finished the Inner Circle, passed Transcendence and WebServ, and I'm now in the Outer Circle. Reimplemented a shell in C, verified linear algebra with a ray tracer, and rebuilt regression and matrix operations from scratch in Rust.",
      ],
    },
  },
  {
    org: { ko: "Mathematics — 독학", en: "Mathematics — Self-Taught" },
    period: { ko: "2024 – 현재", en: "2024 – present" },
    body: {
      ko: [
        "École 42에서 CS의 바닥에 수학이 있다는 걸 깨닫고, 수학의정석 2권을 두 번씩 풀어 기초를 다시 세웠습니다. 지금은 미적분·선형대수·확률론·최적화이론·해석학, 리군과 강체변환, 이산수학·조합론, 그리고 TAOCP를 — 강의 없이 책으로, 어려운 문제를 직접 풀며 올라가는 중입니다.",
      ],
      en: [
        "Realized at 42 that math sits underneath all of CS, so I rebuilt my foundations — working through two volumes of a classic Korean problem book twice each. Now I'm climbing through calculus, linear algebra, probability, optimization theory, real analysis, Lie groups and rigid-body transforms, discrete math and combinatorics, and TAOCP — no lectures, just books and hard problems, solved by hand.",
      ],
    },
  },
];

export type FlowStep = { label: L<string>; sub?: L<string> };

export type Project = {
  id: string;
  name: string;
  stack: string;
  period: string;
  status: "complete" | "in-progress";
  statusLabel: L<string>;
  badge?: L<string>;
  why: L<string>;
  solution: L<string>;
  flow: FlowStep[];
  howItWorks: L<string[]>;
  challenge?: { label: L<string>; body: L<string> };
  keyResults?: L<string[]>;
  whatILearned: L<string[]>;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "rag-chatbot",
    name: "14 CFR RAG Chatbot",
    stack: "Python · Claude API · LangChain · Grid Search · NumPy",
    period: "2026.6",
    status: "complete",
    statusLabel: { ko: "완료", en: "Complete" },
    badge: { ko: "🏆 1위 — WTIA LLM Competition", en: "🏆 1st Place — WTIA LLM Competition" },
    why: {
      ko: "1,297쪽 미국 연방 항공법(14 CFR)에서 정확한 조항(§)을 찾아 인용하는 일은 사람에게도 어렵습니다. '그럴듯한 답'과 '검증 가능한 답'의 간격을 감이 아니라 데이터로 메우고 싶었습니다.",
      en: "Finding and citing the exact clause (§) in 1,297 pages of U.S. federal aviation law (14 CFR) is hard even for a person. I wanted to close the gap between a ‘plausible answer’ and a ‘verifiable answer’ with data, not intuition.",
    },
    solution: {
      ko: "45개 검색 설정을 밤새 자동 그리드서치로 채점 — blind holdout에서 recall 0.909, 강사 평가 9/10, 참가자 중 1등.",
      en: "Graded 45 retrieval configurations in an overnight automated grid search — recall 0.909 on a blind holdout, instructor score 9/10, 1st place among participants.",
    },
    flow: [
      { label: { ko: "PDF 정제 + §청킹", en: "Clean PDF + § chunking" }, sub: { ko: "0.39→0.80 유사도", en: "0.39→0.80 similarity" } },
      { label: { ko: "쿼리 재작성 + 게이트", en: "Rewrite + gate query" } },
      { label: { ko: "검색: gate·rerank·확장", en: "Retrieve: gate·rerank·expand" } },
      { label: { ko: "one-shot / agentic 생성", en: "One-shot / agentic generation" } },
      { label: { ko: "인용 재번호 + 스트리밍", en: "Renumber citations + stream" } },
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
    challenge: {
      label: { ko: "유사도 ≠ 관련성, 그리고 비용", en: "Similarity ≠ relevance — and cost" },
      body: {
        ko: "고정 페이지 청킹에서는 §61.109 조항(비행시간 요건에 대한 정확한 답)이 유사도 0.39, 순위 2600위 밖으로 묻혔습니다. §조항 경계로 청킹하고 PDF 노이즈를 제거하자 같은 조항이 유사도 0.80, 1위로 올라왔습니다. 넓은 열거형 질문에서는 agentic 루프가 입력 토큰을 15k~55k까지 썼는데, 최악은 검색만 하다 답을 못 찾아 강제로 답하는 경로가 증거 pool 전체를 캐시 없이 재전송하는 경우였습니다(한 호출 12,157 토큰). pool 상한과 스니펫 축약, 그리고 forced-answer가 이미 캐시된 대화를 이어가도록 바꾸자 그 호출은 46 uncached 토큰으로, 전체적으로는 최대 86%까지 줄었습니다.",
        en: "With naive page-by-page chunking, the passage that directly answers 'what flight hours are required' (§61.109) embedded at only 0.39 similarity, rank ~2600. Chunking on section boundaries and stripping PDF noise lifted the same passage to 0.80 similarity, rank #1. Separately, broad enumerative questions pushed the agentic loop to 15k–55k input tokens — worst case was the forced-answer path (the loop runs out of search budget and has to answer anyway) re-sending the entire evidence pool with no cache, one call costing 12,157 tokens. Capping the pool, shortening tool-output snippets, and having forced-answer continue the already-cached conversation instead dropped that call to 46 uncached tokens — up to 86% overall.",
      },
    },
    keyResults: {
      ko: [
        "Recall 0.909 (blind holdout)",
        "Agentic 검색 루프 입력 토큰 최대 86% 절감 — 'drugs and alcohol' 질문 14,019 → 1,908",
        "무관한 질문은 answer gate가 0토큰으로 거절",
        "모든 답변에 § citation — 검증 가능한 답만 출력",
      ],
      en: [
        "Recall 0.909 (blind holdout)",
        "Up to 86% fewer input tokens on the agentic search loop — e.g. the 'drugs and alcohol' question: 14,019 → 1,908",
        "Answer gate rejects off-corpus questions for 0 tokens",
        "Every answer cites its § source — only verifiable answers ship",
      ],
    },
    whatILearned: {
      ko: [
        "RAG 성능 차이는 대부분 검색 단계에서 갈린다 — 모델 교체보다 청크 크기·top-k 조정이 점수를 훨씬 크게 움직였다",
        "프롬프트 캐싱은 컨텍스트가 매 턴 자라는 구조에서만 값어치가 있다 — forced-answer를 캐시된 대화 이어가기로 바꾸자 한 호출이 12,157 → 46 uncached 토큰으로 줄었다",
        "비용도 성능이다 — 같은 품질이면 싼 구성이 이긴 구성이다",
        "한계도 하나 남았다: 채점 정답셋을 제가 직접 만들며 테스트했다 — 문제를 낸 사람이 채점까지 하면 점수는 관대해지기 쉽다. 다음엔 정답셋 제작과 평가를 분리하려 한다",
      ],
      en: [
        "Most of the RAG performance gap comes from retrieval, not generation — tuning chunk size and top-k moved the score far more than swapping models",
        "Prompt caching only pays off when the context grows turn over turn — switching forced-answer to continue the already-cached conversation dropped one call from 12,157 to 46 uncached tokens",
        "Cost is a performance metric too — at equal quality, the cheaper configuration wins",
        "One limitation remains: I built and ran the answer key myself — when the person who writes the questions also grades them, scores tend to run generous. Next time I'd separate answer-key creation from evaluation.",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai/rag-starter" }],
  },
  {
    id: "transcendence",
    name: "Transcendence — Real-time PvP Pong",
    stack: "Node.js · Socket.io · OAuth 2.0 · 2FA",
    period: "2026",
    status: "complete",
    statusLabel: { ko: "완료", en: "Complete" },
    badge: { ko: "42 Outer Circle · 팀장, 4인 팀", en: "42 Outer Circle · Team Lead, team of 4" },
    why: {
      ko: "42 Inner Circle을 마치고 처음 마주하는 대형 팀 프로젝트입니다. 실시간 통신과 인증을, 프레임워크 뒤에 숨지 않고 4명이 함께 설계·구현해야 했습니다.",
      en: "The first large team project after finishing 42's Inner Circle. Real-time communication and authentication had to be designed and built by the four of us directly — no framework to hide behind.",
    },
    solution: {
      ko: "WebSocket 기반 실시간 대전 Pong을 만들고, 커스텀 매치메이킹과 OAuth 2.0 + 2FA 인증까지 팀을 이끌며 구현했습니다.",
      en: "Built real-time competitive Pong over WebSockets, leading the team through custom matchmaking and OAuth 2.0 + 2FA authentication.",
    },
    flow: [
      { label: { ko: "OAuth 2.0 + 2FA 로그인", en: "OAuth 2.0 + 2FA login" } },
      { label: { ko: "매치메이킹(셔플)", en: "Matchmaking shuffle" } },
      { label: { ko: "Socket.io 실시간 대전", en: "Real-time match (Socket.io)" } },
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
    challenge: {
      label: { ko: "프론트·백·배포를 3개 레포로", en: "Splitting front, back, and deploy" },
      body: {
        ko: "팀 4명이 동시에 작업하려면 프론트(React/Vite), 백엔드, 배포 설정을 분리해야 했습니다. 레포를 tsen-front · tsen-back · deployment로 나누고, 실시간 게임 상태는 프론트-백 양쪽에서 동시에 신뢰할 수 있게 Socket.io 이벤트로만 동기화했습니다.",
        en: "With 4 people working in parallel, the frontend (React/Vite), backend, and deployment config had to be separated. We split the work into tsen-front, tsen-back, and deployment repos, and kept real-time game state trustworthy on both ends by synchronizing it exclusively through Socket.io events.",
      },
    },
    whatILearned: {
      ko: [
        "실시간 시스템에서 프론트엔드-백엔드 상태 동기화가 가장 까다로운 지점이었다",
        "팀 리딩은 코드보다 작업을 쪼개고 순서를 정하는 일이 더 컸다",
        "인증(OAuth 2.0 · 2FA)을 처음부터 설계해보니 보안은 나중에 붙이는 기능이 아니라는 걸 체감했다",
      ],
      en: [
        "Frontend–backend state sync was the hardest part of the real-time system",
        "Leading a team was less about code and more about breaking work into the right pieces and sequence",
        "Designing auth (OAuth 2.0, 2FA) from scratch made it clear security isn't a feature you bolt on later",
      ],
    },
    links: [{ label: "GitHub: tsen-immida", href: "https://github.com/orgs/tsen-immida/repositories" }],
  },
  {
    id: "webserv",
    name: "WebServ — HTTP Server in C++",
    stack: "C++ · HTTP/1.1 · Non-blocking I/O",
    period: "2026",
    status: "complete",
    statusLabel: { ko: "완료", en: "Complete" },
    badge: { ko: "42 Outer Circle", en: "42 Outer Circle" },
    why: {
      ko: "브라우저가 서버에 요청을 보내면 무슨 일이 일어나는가 — nginx 뒤에 숨겨진 HTTP 서버를 C++로 직접 구현해 확인하고 싶었습니다.",
      en: "What actually happens when a browser sends a request to a server? I wanted to implement the HTTP server hiding behind nginx myself, in C++, to find out.",
    },
    solution: {
      ko: "nginx와 유사한 설정 파일로 여러 가상 서버를 구성하고, non-blocking I/O로 다중 연결을 처리하는 HTTP/1.1 서버를 구현했습니다.",
      en: "Built an HTTP/1.1 server that configures multiple virtual servers from an nginx-style config file and handles concurrent connections with non-blocking I/O.",
    },
    flow: [
      { label: { ko: "설정 파일 파싱", en: "Parse config file" } },
      { label: { ko: "연결 수락", en: "Accept connections" }, sub: { ko: "non-blocking I/O", en: "non-blocking I/O" } },
      { label: { ko: "요청 라우팅", en: "Route request" }, sub: { ko: "GET·POST·DELETE·CGI", en: "GET·POST·DELETE·CGI" } },
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
    whatILearned: {
      ko: [
        "HTTP는 텍스트 프로토콜이지만, 이를 안정적으로 파싱하는 일은 전혀 다른 난이도였다",
        "non-blocking I/O로 다중 연결을 처리하며 이벤트 루프의 설계를 몸으로 이해했다",
      ],
      en: [
        "HTTP is a text protocol, but parsing it reliably is a completely different level of difficulty",
        "Handling concurrent connections with non-blocking I/O made the design of an event loop click, hands-on",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
  {
    id: "turtlebot3",
    name: "TurtleBot3 Person-Following Robot",
    stack: "ROS2 · YOLOv8 · LiDAR · Vision · SLAM · Kalman Filter",
    period: "2026",
    status: "complete",
    statusLabel: { ko: "완료", en: "Complete" },
    why: {
      ko: "카메라와 LiDAR, 각각은 불완전한 센서입니다. 둘을 합치면 로봇이 사람을 알아보고 스스로 따라다닐 수 있을까 — 직접 확인하고 싶었습니다.",
      en: "Camera and LiDAR are each an imperfect sensor on their own. I wanted to find out, hands-on, whether fusing them could let a robot recognize a person and follow them on its own.",
    },
    solution: {
      ko: "YOLOv8 비전과 LiDAR 깊이 정보를 융합해, 로봇이 사람을 추적하며 장애물을 피해 따라갑니다 — 발표·시연 영상으로 기록.",
      en: "Fused YOLOv8 vision with LiDAR depth so the robot tracks a person and avoids obstacles while following — captured on video in a talk and a demo.",
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
    challenge: {
      label: { ko: "진짜 변수는 알고리즘이 아니었다", en: "The real variable wasn't the algorithm" },
      body: {
        ko: "센서 융합 로직보다 조명이 더 큰 문제였습니다 — 직사광이 들어오면 YOLOv8 인식이 흔들리고 추적이 끊겼습니다. 결국 가장 많은 시간을 쓴 건 융합 알고리즘이 아니라, 다양한 조명 조건에서 인식이 안정적으로 유지되도록 다듬는 일이었습니다.",
        en: "Lighting turned out to be a bigger problem than the fusion logic itself — direct sunlight threw off YOLOv8 detection and broke tracking. Most of the engineering time went into stabilizing recognition across lighting conditions, not into the fusion algorithm.",
      },
    },
    whatILearned: {
      ko: [
        "가장 큰 변수는 알고리즘이 아니라 햇빛이었다 — 직사광 노이즈에 객체 인식이 흔들려, 조명 조건에서의 인식 안정화에 가장 많은 시간을 썼다",
        "센서 융합의 어려움은 sync · latency · confidence 관리에 있었다",
        "ROS2 topic/service 구조 덕에 비전·깊이·제어를 독립 모듈로 갈아끼울 수 있었다",
        "실시간 시스템에선 정확도를 조금 내주는 결정이 전체 반응성을 살린다",
      ],
      en: [
        "The biggest variable wasn't the algorithm — it was sunlight. Direct-light noise threw off object detection, so most of my time went into stabilizing recognition across lighting conditions",
        "The hard part of sensor fusion was managing sync, latency, and confidence",
        "ROS2's topic/service architecture let me swap vision, depth, and control in and out as independent modules",
        "In real-time systems, trading a little accuracy is often what keeps the whole thing responsive",
      ],
    },
    links: [
      { label: "YouTube: Presentation", href: "https://youtu.be/2eOp8Bp0UdI" },
      { label: "YouTube: Demo", href: "https://youtu.be/oBLanfJ3GZw" },
    ],
  },
  {
    id: "linear-regression-matrix",
    name: "Linear Regression & Matrix — in Rust",
    stack: "Rust · No external math libraries",
    period: "2026",
    status: "complete",
    statusLabel: { ko: "완료", en: "Complete" },
    why: {
      ko: "라이브러리를 부르면 한 줄인 것들 — 그 한 줄 밑에서 무슨 일이 벌어지는지 모른 채 ML을 하고 싶지 않았습니다. 프레임워크 없이, Rust로 다시 짜기로 했습니다. 책으로 쌓아온 수학이 코드로 검증되는 프로젝트이기도 합니다.",
      en: "Things that are one line when you call a library — I didn't want to do ML without knowing what happens underneath that line. So I rewrote it in Rust, with no framework. It's also where the math I've been building from books gets checked against code.",
    },
    solution: {
      ko: "최소제곱법부터 SVD까지, 외부 수치 라이브러리 없이 순수 Rust로 구현하고 손계산과 대조해 검증했습니다.",
      en: "Implemented everything from least squares to SVD in pure Rust with no external numerical libraries, and checked it against hand calculations.",
    },
    flow: [
      { label: { ko: "정규방정식", en: "Normal equation" } },
      { label: { ko: "최소제곱 + 정규화", en: "Least squares + regularization" } },
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
    challenge: {
      label: { ko: "정규화 없인 수렴하지 않는다", en: "Nothing converges without normalization" },
      body: {
        ko: "원본 스케일(주행거리 km, 가격)로 그대로 경사하강을 돌리면 손실 표면의 조건수가 극단적으로 나쁩니다 — 이 데이터셋에서 Hessian 최대 고유값이 약 1.3×10¹⁰까지 나와, 발산을 피하려면 학습률을 1e-10까지 낮춰야 하고 그래도 수렴이 느립니다. x·y를 각각 min-max 정규화하고 나서야 학습률 0.1로 빠르게 수렴했고, θ는 이후 원래 스케일로 역정규화했습니다. Matrix 쪽에서는 row-echelon·determinant·inverse·rank 네 연산을 Gauss-Jordan 엔진 하나로 통일하고, f32와 Complex 스칼라 차이는 Operations 트레잇 뒤로 감췄습니다.",
        en: "Running gradient descent directly on the raw (km, price) scale leaves a badly ill-conditioned loss surface — on this dataset the Hessian's max eigenvalue comes out to roughly 1.3×10¹⁰, so the learning rate would have to drop to ~1e-10 to avoid diverging, and even then converge slowly. Min-max normalizing x and y independently let a plain α = 0.1 converge quickly; θ is denormalized back to the original scale afterward. On the Matrix side, a single Gauss-Jordan engine powers row-echelon, determinant, inverse, and rank, with the f32/Complex scalar difference pushed behind an Operations trait.",
      },
    },
    whatILearned: {
      ko: [
        "행렬 연산을 공식이 아니라 기하학적 그림으로 이해하게 됐다",
        "SVD를 직접 짜보니 PCA와 데이터 압축이 같은 원리의 응용임이 보였다",
        "Rust의 ownership/borrowing이 수치 연산 코드에서 버그를 컴파일 타임에 먼저 잡아준다는 걸 체감했다",
      ],
      en: [
        "Started seeing matrix operations as geometry, not just formulas",
        "Writing SVD by hand made it obvious that PCA and data compression are the same idea applied twice",
        "Felt firsthand how Rust's ownership/borrowing catches numerical bugs at compile time before they become runtime bugs",
      ],
    },
    links: [
      { label: "GitHub: ftlr", href: "https://github.com/KimTaebin-ai/ftlr" },
      { label: "GitHub: Enter-the-Matrix", href: "https://github.com/KimTaebin-ai/Enter-the-Matrix" },
    ],
  },
  {
    id: "kaggle-dacon",
    name: "Kaggle & Dacon Competitions",
    stack: "Python · pandas · scikit-learn · XGBoost · LightGBM",
    period: "2025 – 2026",
    status: "in-progress",
    statusLabel: { ko: "진행중 · 상위 10%", en: "Ongoing · Top 10%" },
    why: {
      ko: "정형 데이터와 시계열 문제에 개인으로 참가해, 배운 것을 실제 리더보드로 검증하고 있습니다.",
      en: "Competing solo on tabular and time-series problems, checking what I've learned against a real leaderboard.",
    },
    solution: {
      ko: "정형 분류·회귀, 시계열 예측 대회에 참가해 꾸준히 상위 10% 안에 들었습니다.",
      en: "Entered tabular classification/regression and time-series forecasting competitions, consistently finishing in the top 10%.",
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
    challenge: {
      label: { ko: "리더보드는 지름길을 봐준다", en: "The leaderboard punishes shortcuts" },
      body: {
        ko: "교차검증 없이 낸 제출은 로컬 점수가 좋아 보여도 실제 리더보드에서는 대부분 순위가 떨어졌습니다 — 단일 train/test split에 대한 확신은 실전에서 버티지 못했습니다. 이후 모든 대회에 K-fold 교차검증을 기본값으로 넣고 나서야 로컬 점수와 리더보드 점수가 맞아떨어지기 시작했습니다.",
        en: "Submissions made without cross-validation looked fine locally but mostly dropped in rank once the real leaderboard settled — confidence from a single train/test split didn't hold up. Making K-fold cross-validation the default for every competition is what finally made local scores track the leaderboard.",
      },
    },
    whatILearned: {
      ko: [
        "리더보드는 감을 배신한다 — 교차검증 없이 낸 제출은 대부분 순위가 떨어졌다",
        "모델보다 피처가 점수를 더 많이 움직인 대회가 많았다",
      ],
      en: [
        "The leaderboard betrays intuition — submissions without cross-validation mostly dropped in rank",
        "In most competitions, features moved the score more than the model choice did",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
  {
    id: "minirt",
    name: "miniRT — 3D Ray Tracer in C",
    stack: "C · Raytracing · Linear Algebra · Graphics",
    period: "2026",
    status: "complete",
    statusLabel: { ko: "완료", en: "Complete" },
    why: {
      ko: "화면의 픽셀 하나가 색을 갖기까지 무슨 일이 일어나는가 — 그래픽스를 GPU도 라이브러리도 없이, C와 수학만으로 재현해보고 싶었습니다.",
      en: "What happens before a single pixel on screen gets its color? I wanted to reproduce graphics with no GPU and no library — just C and math.",
    },
    solution: {
      ko: ".rt 씬 파일을 파싱해 광선을 쏘고, 교점을 풀고, 조명과 그림자를 계산해 3D 장면을 렌더링합니다.",
      en: "Parse an .rt scene file, fire rays, solve intersections, and compute lighting and shadows to render a 3D scene.",
    },
    flow: [
      { label: { ko: ".rt 씬 파싱", en: "Parse .rt scene" } },
      { label: { ko: "광선-물체 교점", en: "Ray-object intersection" } },
      { label: { ko: "조명 · 그림자", en: "Lighting & shadows" } },
      { label: { ko: "픽셀 렌더링", en: "Render pixel" } },
    ],
    howItWorks: {
      ko: [
        ".rt 파서로 카메라·조명·물체를 씬으로 구성",
        "픽셀마다 광선을 쏘아 구·평면과의 교점을 방정식으로 계산",
        "조명 모델과 그림자 처리",
      ],
      en: [
        "An .rt parser assembles the camera, lights, and objects into a scene",
        "Fire a ray per pixel and solve its intersection with spheres and planes algebraically",
        "Lighting model and shadow handling",
      ],
    },
    challenge: {
      label: { ko: "정밀도를 잃지 않고 빠르게", en: "Speed without losing precision" },
      body: {
        ko: "물체 타입마다 분기하는 코드는 초당 수백만 번 도는 렌더링 핫루프에서 느립니다 — 교차 계산 함수를 타입별 함수 포인터 배열로 바꿔, 분기 대신 인덱싱 호출 하나로 처리했습니다. 모든 광선은 sqrt를 부르기 전에 제곱거리로 먼저 걸러내고요. 그림자 레이가 자기 표면과 다시 교차해 생기는 shadow acne는, 레이 시작점을 법선 방향으로 0.01만큼 띄워서 없앴습니다.",
        en: "Branching per object type in a rendering hot loop that runs millions of times a second is slow, so intersection routines are dispatched through a function-pointer table indexed by type — one indexed call instead of a chain of ifs. Every ray is rejected on squared distance before any sqrt is called. Shadow rays re-intersecting their own surface (shadow acne) was fixed by offsetting the ray origin 0.01 along the normal.",
      },
    },
    whatILearned: {
      ko: [
        "벡터 내적·외적이 3D 공간에서 실제로 무엇을 뜻하는지 손으로 확인했다",
        "광선-물체 교점은 결국 방정식 풀이 — 그래픽스는 수학을 픽셀로 번역하는 일이었다",
      ],
      en: [
        "Confirmed by hand what dot and cross products actually mean in 3D space",
        "Ray-object intersection is just solving an equation — graphics turned out to be math translated into pixels",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
  {
    id: "bittorrent",
    name: "BitTorrent Client in C++",
    stack: "C++ · Network Programming · Protocols",
    period: "2026",
    status: "in-progress",
    statusLabel: { ko: "진행중", en: "In Progress" },
    why: {
      ko: "42 과제가 아니라, 궁금해서 시작한 개인 프로젝트입니다. 서버 없이 파일이 오간다는 건 어떻게 가능한가 — 프로토콜 명세만 들고 P2P 네트워크를 바닥부터 구현하고 있습니다.",
      en: "Not a 42 assignment — a personal project I started out of curiosity. How can files move between people with no server at all? I'm implementing a P2P network from just the protocol spec, from scratch.",
    },
    solution: {
      ko: ".torrent 메타파일 파싱부터 tracker 통신, peer 발견, 블록 병렬 다운로드까지 C++로 구현 중입니다.",
      en: "Building parsing for .torrent metafiles, tracker communication, peer discovery, and parallel block downloads in C++.",
    },
    flow: [
      { label: { ko: ".torrent 파싱", en: "Parse .torrent" }, sub: { ko: "bencode", en: "bencode" } },
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
    challenge: {
      label: { ko: "정확히 한 번, 크래시 없이", en: "Exactly once, never a crash" },
      body: {
        ko: "피어마다 워커 스레드 하나로 병렬 다운로드하다 보니, 작업 큐·완료 수·파일 쓰기 같은 공유 상태를 뮤텍스로 지켜야 했습니다. 연결이 끊기거나 타임아웃이 나거나 해시가 안 맞으면 그 피어를 크래시 없이 버리고 piece를 큐에 다시 넣어, 모든 piece가 정확히 한 번 완료되도록 만들었습니다. 한 라운드의 피어가 전부 소진되면 트래커에 재announce해 새 피어를 받고, 여러 라운드 동안 진행이 없으면 안전하게 중단합니다.",
        en: "With one worker thread per peer downloading in parallel, shared state — the work queue, completed count, file writes — has to be protected by a mutex. A dropped connection, timeout, or hash mismatch discards that peer without crashing and requeues the piece, so every piece completes exactly once. Once a round's peers are exhausted, the client re-announces to the tracker for new ones, and safely aborts if several rounds pass with no progress.",
      },
    },
    whatILearned: {
      ko: [
        "네트워크 프로토콜을 명세 그대로 구현하며 RFC 읽는 법을 익히는 중",
        "조각 상태를 비트마스크로 관리하는 설계 — 상태 관리가 프로토콜 구현의 절반이다",
      ],
      en: [
        "Learning to read RFCs properly by implementing a network protocol straight from spec",
        "Managing piece state with bitmasks — state management turns out to be half of implementing a protocol",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai/baby-torrent" }],
  },
  {
    id: "inception",
    name: "Inception — Docker Infrastructure",
    stack: "Docker · Docker Compose · NGINX · WordPress · MariaDB",
    period: "2024",
    status: "complete",
    statusLabel: { ko: "완료", en: "Complete" },
    why: {
      ko: "docker run 한 줄이 감추고 있는 것들 — 이미지 레이어, 네트워크, 볼륨 — 을 직접 조립해봐야 컨테이너를 이해했다고 말할 수 있다고 생각했습니다.",
      en: "The things a single `docker run` hides — image layers, networking, volumes — I don't think you can say you understand containers until you've assembled them yourself.",
    },
    solution: {
      ko: ".env 설정과 docker-compose up 한 번으로 NGINX + WordPress + MariaDB 스택이 TLS까지 걸고 올라옵니다.",
      en: "One `.env` config and a single `docker-compose up` bring up NGINX + WordPress + MariaDB, TLS included.",
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
    whatILearned: {
      ko: [
        "Docker 레이어 캐시를 이해하니 빌드 시간과 이미지 크기가 함께 줄었다",
        "환경변수·시크릿 분리는 귀찮음이 아니라 프로덕션의 최소 조건이다",
      ],
      en: [
        "Understanding Docker's layer cache cut both build time and image size",
        "Separating env vars and secrets isn't busywork — it's the minimum bar for production",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
  {
    id: "minishell",
    name: "minishell — Bash Shell in C",
    stack: "C · POSIX · Signals · Processes",
    period: "2024",
    status: "complete",
    statusLabel: { ko: "완료", en: "Complete" },
    why: {
      ko: "매일 쓰는 셸 — 터미널에 친 한 줄이 프로세스가 되기까지의 전 과정을 직접 만들어 확인하고 싶었습니다.",
      en: "The shell I use every day — I wanted to build the whole path myself, from a line typed into a terminal to it becoming a process, to actually see it.",
    },
    solution: {
      ko: "파싱 → fork/execve → 파이프·리다이렉션 → 시그널 처리까지, bash의 핵심 동작을 C로 재구현했습니다.",
      en: "Reimplemented bash's core behavior in C — parsing, fork/execve, pipes and redirection, and signal handling.",
    },
    flow: [
      { label: { ko: "파싱", en: "Parse" }, sub: { ko: "따옴표 · 변수", en: "quotes · vars" } },
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
    whatILearned: {
      ko: [
        "UNIX 프로세스 모델 — fork가 왜 그렇게 설계됐는지 몸으로 이해했다",
        "파일 디스크립터가 보이기 시작하면 셸의 거의 모든 동작이 설명된다",
        "시그널은 예외 처리가 아니라 설계의 일부여야 한다",
      ],
      en: [
        "The UNIX process model — understood hands-on why fork is designed the way it is",
        "Once file descriptors become visible, almost everything a shell does explains itself",
        "Signals need to be part of the design, not an exception handler bolted on after",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
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
      { ko: "Lie Groups · Rigid-Body Transforms", en: "Lie Groups · Rigid-Body Transforms" },
      { ko: "Discrete Math · Combinatorics", en: "Discrete Math · Combinatorics" },
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
    title: "DevOps & Cloud",
    items: [
      { ko: "Docker", en: "Docker" },
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
      { ko: "42 cursus projects (peer evaluation)", en: "42 cursus projects (peer evaluation)" },
    ],
  },
];

export const experience: { org: L<string>; period: L<string>; bullets: L<string[]> }[] = [
  {
    org: { ko: "WTIA × UW CoMotion Global Startup Program", en: "WTIA × UW CoMotion Global Startup Program" },
    period: { ko: "2026.6 – 8 (진행중) · Seattle", en: "Jun – Aug 2026 (ongoing) · Seattle" },
    bullets: {
      ko: [
        "ML Engineering · ML Infrastructure 인턴십을 목표로 참여",
        "Poma AI 캡스톤 프로젝트 주도",
        "École 42 관계자·VC를 잇는 생태계 구축",
      ],
      en: [
        "Aiming for an ML Engineering / ML Infrastructure internship",
        "Leading the Poma AI capstone project",
        "Building connections between École 42 contacts and VCs",
      ],
    },
  },
  {
    org: { ko: "École 42", en: "École 42" },
    period: { ko: "2024 – 현재", en: "2024 – present" },
    bullets: {
      ko: [
        "시스템 프로그래밍부터 풀스택까지 — C/C++/Rust",
        "강의 없이 프로젝트와 동료 평가(peer evaluation)로만 진행되는 커리큘럼",
      ],
      en: [
        "Systems programming through full-stack — C/C++/Rust",
        "No lectures — a curriculum run entirely on projects and peer evaluation",
      ],
    },
  },
  {
    org: { ko: "Ubase — 프로젝트 팀장", en: "Ubase — Project Team Leader" },
    period: { ko: "2023.8 – 2024.8 · Seoul", en: "Aug 2023 – Aug 2024 · Seoul" },
    bullets: {
      ko: [
        "입사 3개월 만에 프로젝트 리더로 승진, 팀 관리 체계를 새로 구축",
        "운영 개선으로 센터 전체 QA 점수 10% 향상",
        "42 École의 기초 기술 교육에 끌려 팀을 떠나 심화 기술 학습으로 전환",
      ],
      en: [
        "Promoted to project leader within 3 months; built a new team management framework",
        "Improved center-wide QA scores by 10% through operational improvements",
        "Left to pursue deep technical foundations at École 42",
      ],
    },
  },
  {
    org: { ko: "Softnet — 풀스택 엔지니어", en: "Softnet — Full Stack Engineer" },
    period: { ko: "2021.1 – 2022.1 · Seoul", en: "Jan 2021 – Jan 2022 · Seoul" },
    bullets: {
      ko: [
        "서울대병원·고려대안암병원·충남대병원 3개 대학병원의 이종 환자 데이터를 통합하는 관계형 스키마·ETL 파이프라인 설계",
        "Spring Boot REST API + Angular.js SPA로 통합 개인건강기록(PHR) 플랫폼 구축",
        "시계열 임상 데이터의 서버 사이드 집계·필터링·페이지네이션 구현",
        "민감한 건강 데이터를 위한 역할 기반 접근 제어(RBAC)와 반응형 대시보드",
      ],
      en: [
        "Designed relational schemas and ETL pipelines unifying heterogeneous patient data from 3 university hospitals (SNUH, KU Anam, CNUH)",
        "Built an integrated Personal Health Record (PHR) platform: Spring Boot REST APIs + Angular.js SPA",
        "Implemented server-side aggregation, filtering, and pagination for time-series clinical data",
        "Role-based access control (RBAC) for sensitive health data, with responsive dashboards",
      ],
    },
  },
  {
    org: { ko: "HiikTalk — 소프트웨어 엔지니어 (인턴)", en: "HiikTalk — Software Engineer (Intern)" },
    period: { ko: "2020.1 · Sejong", en: "Jan 2020 · Sejong" },
    bullets: {
      ko: [
        "암호화폐 거래 시스템 백엔드 구축 — 주문·시세·계정 관리",
        "React Native 기반 거래 인터페이스 구현",
        "Selenium 기반 실시간 시세 크롤러 구축, 재시도 처리 포함",
      ],
      en: [
        "Built the backend for a cryptocurrency trading system — order flow, market data, account management",
        "Implemented a React Native trading interface",
        "Built a Selenium-based real-time market-data crawler with retry handling",
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
      en: ["Imported and sold cosmetics in Shanghai, China", "Operated a Naver Smart Store"],
    },
  },
];

export const education: { org: L<string>; period: L<string>; body: L<string[]> }[] = [
  {
    org: {
      ko: "École 42 (Gyeongsan) — 컴퓨터 사이언스 기초",
      en: "École 42 (Gyeongsan) — Computer Science Fundamentals",
    },
    period: { ko: "2024 – 현재", en: "2024 – present" },
    body: {
      ko: [
        "École 42는 파리에서 시작된 무상 컴퓨터공학 교육 기관입니다. 교수도 강의도 교재도 없이, 프로젝트를 만들어 동료 앞에서 방어해야 통과합니다. Inner Circle을 마치고 Transcendence · WebServ를 통과해 Outer Circle에 있습니다.",
        "정규 수업보다 실전으로 배우는 방식은 처음이 아닙니다 — 고등학교 때도 기능반 훈련으로 같은 방식을 거쳤습니다. 수학도 같은 길이었습니다: 수학의정석 2권을 두 번씩 풀어 기초를 세우고, 지금은 해석학과 리군, TAOCP까지 책으로 직접 올라가고 있습니다.",
        "C로 셸을 재구현하고(minishell), Docker 스택을 바닥부터 조립하고(Inception), 레이트레이서로 선형대수를 확인하는(miniRT) — 이 사이트의 Build 섹션 대부분이 이 과정에서 나왔습니다.",
      ],
      en: [
        "École 42 is a tuition-free computer science school founded in Paris. No professors, no lectures, no textbooks — you build projects and defend them in front of peers to pass. I finished the Inner Circle, passed Transcendence and WebServ, and I'm now in the Outer Circle.",
        "Learning by building rather than by lecture isn't new to me — high school ran the same way through skills-competition training. Math followed the same path: I rebuilt my foundations working through two volumes of a classic Korean problem book twice each, and I'm now climbing through analysis, Lie groups, and TAOCP straight from the books.",
        "Reimplementing a shell in C (minishell), assembling a Docker stack from scratch (Inception), verifying linear algebra with a ray tracer (miniRT) — most of this site's Build section came out of this program.",
      ],
    },
  },
  {
    org: { ko: "UC Berkeley SCET Intensive Program", en: "UC Berkeley SCET Intensive Program" },
    period: { ko: "2024.12.2 – 12.6", en: "Dec 2 – 6, 2024" },
    body: {
      ko: [
        "🏆 1위 — 짧은 시간 안에 스타트업이 목표를 달성해가는 과정을 비디오로 제작하는 캡스톤 프로젝트에서 1등을 했습니다.",
      ],
      en: [
        "🏆 1st Place — won a capstone project centered on producing, in a short window, a video depicting a startup's path to achieving its goals.",
      ],
    },
  },
  {
    org: { ko: "고려사이버대학교 — 경영학과", en: "The Cyber University of Korea — B.B.A., Business Administration" },
    period: { ko: "2021 – 현재 · 4학년", en: "2021 – present · Senior" },
    body: { ko: [], en: [] },
  },
  {
    org: {
      ko: "대구소프트웨어마이스터고등학교 — 소프트웨어개발과",
      en: "Daegu Software Meister High School — Software Development",
    },
    period: { ko: "2018.3 – 2021.2", en: "Mar 2018 – Feb 2021" },
    body: {
      ko: [
        "1학년 2학기부터 기능반 훈련에 집중하며 정규 수업보다 실전 대회 준비에 시간을 썼습니다. Daegu Skills 웹 디자인·개발 부문에서 3위(2019)·2위(2020)를 했고, WorldSkills 국가대표 후보 훈련까지 받았습니다.",
      ],
      en: [
        "From the second semester of freshman year, I focused on skills-competition training, spending more time preparing for contests than attending regular classes. Placed 3rd (2019) and 2nd (2020) in Web Design & Development at Daegu Skills, and trained as a WorldSkills national-team candidate.",
      ],
    },
  },
];
