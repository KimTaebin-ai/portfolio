export const profile = {
  nameEn: "Taebin Kim",
  nameKr: "김태빈",
  roles: "ML Systems Engineer · Full-Stack Developer · 42 Gyeongsan",
  tagline: "Systems from first principles",
  intro:
    "컴퓨터 사이언스를 밑바닥부터 — 42 Gyeongsan에서 C로 셸과 레이트레이서를 프레임워크 없이 직접 만들며 배웁니다. 지금은 Seattle의 WTIA × UW CoMotion에서 ML 엔지니어링으로 그 기반을 넓히는 중입니다. 도메인이 바뀌어도 질문은 하나입니다 — 이건 밑에서 어떻게 동작하는가.",
  techChips: ["C/C++", "Python", "Systems Programming", "ML Infrastructure"],
  currentLine: "currently at WTIA × UW CoMotion (Seattle, Jun–Aug 2026)",
  socials: {
    github: "https://github.com/KimTaebin-ai",
    linkedin: "https://www.linkedin.com/in/tbkim02/",
    email: "bin065025@gmail.com",
  },
};

export const nav = [
  { href: "#current", label: "Current" },
  { href: "#build", label: "Build" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
];

export const current = [
  {
    org: "WTIA × UW CoMotion Global Startup Program",
    period: "2026.6 – 8 (진행중) · Seattle",
    body: [
      "ML 엔지니어링·인프라 인턴십을 목표로 Seattle에서 여름을 보내고 있습니다. Poma AI 캡스톤 프로젝트를 주도하며, ML systems performance · GPU optimization · distributed training을 파고드는 중입니다.",
    ],
  },
  {
    org: "42 Gyeongsan",
    period: "2024 – 현재",
    body: [
      "교수도 강의도 없이, 프로젝트와 동료 평가만으로 컴퓨터 사이언스를 쌓고 있습니다. C로 셸을 재구현하고, 레이트레이서로 선형대수를 확인하고, 최근엔 회귀와 행렬 연산을 NumPy로 바닥부터 구현했습니다.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  stack: string;
  period: string;
  status: "complete" | "in-progress";
  statusLabel: string;
  badge?: string;
  why: string;
  solution: string;
  howItWorks: string[];
  keyResults?: string[];
  whatILearned: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "rag-chatbot",
    name: "14 CFR RAG Chatbot",
    stack: "Python · Claude API · LangChain · Grid Search · NumPy",
    period: "2026.6",
    status: "complete",
    statusLabel: "Complete",
    badge: "🏆 1st Place — WTIA LLM Competition",
    why: "1,297쪽 미국 연방 항공법(14 CFR)에서 정확한 조항(§)을 찾아 인용하는 일은 사람에게도 어렵습니다. '그럴듯한 답'과 '검증 가능한 답'의 간격을 감이 아니라 데이터로 메우고 싶었습니다.",
    solution:
      "45개 검색 설정을 밤새 자동 그리드서치로 채점 — blind holdout에서 recall 0.909, 강사 평가 9/10, 참가자 중 1등.",
    howItWorks: [
      "법조문을 §조항 경계로 청킹 — 고정 청킹 대비 coverage 0.41 → 0.86",
      "embedding model × chunk size × top-k × 검색 방식, 45개 설정 야간 자동 그리드서치",
      "single-shot(저비용) vs agentic loop(고정확)를 측정으로 비교 — 품질이 같으면 싼 쪽을 채택",
      "모든 답변에 원본 조항(§) citation을 붙여 검증 가능하게",
    ],
    keyResults: [
      "Recall 0.909 (blind holdout)",
      "동일 품질 기준 토큰 38% 절감",
      "모든 답변에 § citation — 검증 가능한 답만 출력",
    ],
    whatILearned: [
      "RAG 성능 차이는 대부분 검색 단계에서 갈린다 — 모델 교체보다 청크 크기·top-k 조정이 점수를 훨씬 크게 움직였다",
      "감이 아니라 측정: 밤새 돌린 채점표가 어떤 직감보다 정확했다",
      "비용도 성능이다 — 같은 품질이면 싼 구성이 이긴 구성이다",
    ],
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai/rag-starter" }],
  },
  {
    id: "turtlebot3",
    name: "TurtleBot3 Person-Following Robot",
    stack: "ROS2 · YOLOv8 · LiDAR · Vision · SLAM · Kalman Filter",
    period: "2026",
    status: "complete",
    statusLabel: "Complete",
    why: "카메라와 LiDAR, 각각은 불완전한 센서입니다. 둘을 합치면 로봇이 사람을 알아보고 스스로 따라다닐 수 있을까 — 직접 확인하고 싶었습니다.",
    solution:
      "YOLOv8 비전과 LiDAR 깊이 정보를 융합해, 로봇이 사람을 추적하며 장애물을 피해 따라갑니다 — 발표·시연 영상으로 기록.",
    howItWorks: [
      "비전: YOLOv8로 프레임에서 사람 중심 좌표 감지",
      "깊이: LiDAR point cloud로 거리·충돌 영역 계산",
      "융합: vision + depth 신호를 합쳐 steering command 생성",
      "지도: SLAM으로 실시간 환경 지도화",
    ],
    whatILearned: [
      "센서 융합의 어려움은 알고리즘보다 sync · latency · confidence 관리에 있었다",
      "ROS2 topic/service 구조 덕에 비전·깊이·제어를 독립 모듈로 갈아끼울 수 있었다",
      "실시간 시스템에선 정확도를 조금 내주는 결정이 전체 반응성을 살린다",
    ],
    links: [
      { label: "YouTube: Presentation", href: "https://youtu.be/2eOp8Bp0UdI" },
      { label: "YouTube: Demo", href: "https://youtu.be/oBLanfJ3GZw" },
    ],
  },
  {
    id: "linear-regression-matrix",
    name: "Linear Regression & Matrix Implementations",
    stack: "Python · NumPy · scikit-learn",
    period: "2026",
    status: "complete",
    statusLabel: "Complete",
    why: "라이브러리를 부르면 한 줄인 것들 — 그 한 줄 밑에서 무슨 일이 벌어지는지 모른 채 ML을 하고 싶지 않았습니다.",
    solution:
      "최소제곱법부터 SVD까지 NumPy로 바닥부터 구현하고, 손계산과 대조해 수학적으로 검증했습니다.",
    howItWorks: [
      "Linear Regression: 정규방정식(행렬 역행렬) → 최소제곱법 → Ridge/Lasso 정규화",
      "Matrix: transpose · multiplication · inverse → eigendecomposition → SVD",
      "구현마다 손계산 결과와 코드 출력을 대조해 검증",
    ],
    whatILearned: [
      "행렬 연산을 공식이 아니라 기하학적 그림으로 이해하게 됐다",
      "SVD를 직접 짜보니 PCA와 데이터 압축이 같은 원리의 응용임이 보였다",
    ],
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
  {
    id: "minirt",
    name: "miniRT — 3D Ray Tracer in C",
    stack: "C · Raytracing · Linear Algebra · Graphics",
    period: "2026",
    status: "in-progress",
    statusLabel: "In Progress",
    why: "화면의 픽셀 하나가 색을 갖기까지 무슨 일이 일어나는가 — 그래픽스를 GPU도 라이브러리도 없이, C와 수학만으로 재현해보고 싶었습니다.",
    solution:
      ".rt 씬 파일을 파싱해 광선을 쏘고, 교점을 풀고, 조명과 그림자를 계산해 3D 장면을 렌더링합니다.",
    howItWorks: [
      ".rt 파서로 카메라·조명·물체를 씬으로 구성",
      "픽셀마다 광선을 쏘아 구·평면과의 교점을 방정식으로 계산",
      "조명 모델과 그림자 처리 — 다음 목표: 반사·굴절·텍스처 매핑",
    ],
    whatILearned: [
      "벡터 내적·외적이 3D 공간에서 실제로 무엇을 뜻하는지 손으로 확인했다",
      "광선-물체 교점은 결국 방정식 풀이 — 그래픽스는 수학을 픽셀로 번역하는 일이었다",
    ],
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
  {
    id: "bittorrent",
    name: "BitTorrent Client in C++",
    stack: "C++ · Network Programming · Protocols",
    period: "2026",
    status: "in-progress",
    statusLabel: "In Progress",
    why: "서버 없이 파일이 오간다는 건 어떻게 가능한가 — 프로토콜 명세만 들고 P2P 네트워크를 바닥부터 구현해보고 싶었습니다.",
    solution:
      ".torrent 메타파일 파싱부터 tracker 통신, peer 발견, 블록 병렬 다운로드까지 C++로 구현 중입니다.",
    howItWorks: [
      "bencode 포맷의 .torrent 메타파일 파싱",
      "tracker와 통신해 peer 목록 확보",
      "DHT로 peer discovery",
      "peer들과 블록 단위 병렬 다운로드",
    ],
    whatILearned: [
      "네트워크 프로토콜을 명세 그대로 구현하며 RFC 읽는 법을 익히는 중",
      "조각 상태를 비트마스크로 관리하는 설계 — 상태 관리가 프로토콜 구현의 절반이다",
    ],
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
  {
    id: "inception",
    name: "Inception — Docker Infrastructure",
    stack: "Docker · Docker Compose · NGINX · WordPress · MariaDB",
    period: "2024",
    status: "complete",
    statusLabel: "Complete",
    why: "docker run 한 줄이 감추고 있는 것들 — 이미지 레이어, 네트워크, 볼륨 — 을 직접 조립해봐야 컨테이너를 이해했다고 말할 수 있다고 생각했습니다.",
    solution:
      ".env 설정과 docker-compose up 한 번으로 NGINX + WordPress + MariaDB 스택이 TLS까지 걸고 올라옵니다.",
    howItWorks: [
      "NGINX reverse proxy + TLS 종단",
      "WordPress(PHP-FPM) 애플리케이션 컨테이너",
      "MariaDB + persistent volume으로 데이터 영속성",
      "컨테이너 간 통신은 docker network로 격리",
    ],
    whatILearned: [
      "Docker 레이어 캐시를 이해하니 빌드 시간과 이미지 크기가 함께 줄었다",
      "환경변수·시크릿 분리는 귀찮음이 아니라 프로덕션의 최소 조건이다",
    ],
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
  {
    id: "minishell",
    name: "minishell — Bash Shell in C",
    stack: "C · POSIX · Signals · Processes",
    period: "2024",
    status: "complete",
    statusLabel: "Complete",
    why: "매일 쓰는 셸 — 터미널에 친 한 줄이 프로세스가 되기까지의 전 과정을 직접 만들어 확인하고 싶었습니다.",
    solution:
      "파싱 → fork/execve → 파이프·리다이렉션 → 시그널 처리까지, bash의 핵심 동작을 C로 재구현했습니다.",
    howItWorks: [
      "파서: 따옴표·환경변수 확장을 처리하고 pipes·redirections 해석",
      "실행: fork/execve로 외부 명령, cd·export·unset 등은 빌트인으로",
      "파일 디스크립터 조작으로 파이프라인과 리다이렉션 구현",
      "SIGINT·SIGQUIT을 bash와 동일한 동작으로 처리",
    ],
    whatILearned: [
      "UNIX 프로세스 모델 — fork가 왜 그렇게 설계됐는지 몸으로 이해했다",
      "파일 디스크립터가 보이기 시작하면 셸의 거의 모든 동작이 설명된다",
      "시그널은 예외 처리가 아니라 설계의 일부여야 한다",
    ],
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },
];

export const techStack = [
  {
    title: "Languages & Systems",
    items: ["Python", "C", "C++", "Rust (exploring)", "JavaScript/TypeScript", "SQL"],
  },
  {
    title: "ML & AI",
    items: ["PyTorch", "FastAPI", "Claude API", "RAG", "LangChain (exploring)"],
  },
  {
    title: "Robotics & Systems",
    items: ["ROS2", "YOLOv8", "LiDAR/Vision", "SLAM", "Kalman Filters"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "Git", "AWS/GCP (탐색 중)"],
  },
  {
    title: "Tools & Frameworks",
    items: ["Linux", "Git", "VS Code", "42 cursus projects (peer evaluation)"],
  },
];

export const experience = [
  {
    org: "WTIA × UW CoMotion Global Startup Program",
    period: "2026.6 – 8 (진행중) · Seattle",
    bullets: [
      "ML Engineering · ML Infrastructure 인턴십을 목표로 참여",
      "Poma AI 캡스톤 프로젝트 주도",
      "42 Gyeongsan 관계자·VC를 잇는 생태계 구축",
    ],
  },
  {
    org: "42 Gyeongsan",
    period: "2024 – 현재",
    bullets: [
      "시스템 프로그래밍부터 풀스택까지 — C/C++/Rust",
      "강의 없이 프로젝트와 동료 평가(peer evaluation)로만 진행되는 커리큘럼",
    ],
  },
];

export const education = {
  org: "42 Gyeongsan — Computer Science Fundamentals",
  period: "2024 – present",
  body: [
    "École 42는 파리에서 시작된 무상 컴퓨터공학 교육 기관입니다. 교수도 강의도 교재도 없이, 프로젝트를 만들어 동료 앞에서 방어해야 통과합니다.",
    "C로 셸을 재구현하고(minishell), Docker 스택을 바닥부터 조립하고(Inception), 레이트레이서로 선형대수를 확인하는(miniRT) — 이 사이트의 Build 섹션 대부분이 이 과정에서 나왔습니다.",
  ],
};
