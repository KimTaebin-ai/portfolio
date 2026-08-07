export const profile = {
  nameEn: "Taebin Kim",
  nameKr: "김태빈",
  roles: "ML Systems Engineer · Full-Stack Developer · 42 Gyeongsan",
  tagline: "Systems from first principles",
  techLine: "C/C++ · Python · Systems Programming · ML Infrastructure",
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
      "ML Engineering, ML Infrastructure 인턴십 목표로 참여.",
      "ML systems performance, GPU optimization, distributed training 관련 기술 탐색 중.",
    ],
  },
  {
    org: "42 Gyeongsan",
    period: "2024 – 현재",
    body: [
      "컴퓨터 사이언스를 밑바닥부터. C로 시작한 시스템 프로그래밍, 네트워크, 알고리즘까지.",
      "최근 완료: Linear Regression, Matrix 구현 (42 과제)",
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
  whatItDoes: string[];
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
    whatItDoes: [
      "1,297쪽 미국 연방 항공법(14 CFR)에서 정확한 조항(§)을 찾아 인용하는 RAG 챗봇.",
      "사람이 해도 어려운 작업을 자동화합니다.",
      "45개 설정을 밤새 그리드 서치로 최적화 → blind holdout에서 recall 0.909 달성 → 강사 평가 9/10.",
    ],
    howItWorks: [
      "법조문을 §단락 경계로 청킹 (coverage 0.41 → 0.86)",
      "45개 configuration 자동 그리드 서치 — embedding model, chunk size, top-k, retrieval method",
      "Single-shot retrieval(비용효율) vs Agentic loop(정확도) 트레이드오프 분석",
      "Claude API로 최종 답변 생성, 원본 조문 citation 첨부",
    ],
    keyResults: [
      "Recall: 0.909 (blind holdout)",
      "Cost optimization: 38% 토큰 절감",
      "Transparency: 각 답변마다 원본 법조문(§) citation 표시",
    ],
    whatILearned: [
      "RAG 성능의 80%는 retrieval에서 결정됨",
      "모델 바꾸기보다 chunk size, top-k 최적화가 효과적",
      "자동화 > 감: 데이터 기반 튜닝의 중요성",
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
    whatItDoes: [
      "카메라와 LiDAR 센서만으로 사람 위치를 인식(YOLOv8), 거리 측정 + 충돌 회피(LiDAR point cloud), 환경 지도화(SLAM)를 수행.",
      "결과: 로봇이 독립적으로 사람을 추적하고 장애물을 회피.",
    ],
    howItWorks: [
      "비전: YOLOv8으로 사람 중심 감지",
      "깊이: LiDAR로 거리·충돌 영역 계산",
      "융합: Vision + Depth 신호 → steering command",
      "지도: SLAM으로 실시간 환경 지도화",
    ],
    whatILearned: [
      "멀티모달 센서 융합의 복잡성 (sync, latency, confidence)",
      "ROS2 topic/service 아키텍처의 modularity",
      "실시간 성능 vs 정확도 트레이드오프",
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
    whatItDoes: [
      "42 Gyeongsan에서 최근 완성한 과제들 — 선형대수와 회귀를 밑바닥부터 구현.",
      "Linear Regression: 선형 방정식 시스템 풀이(행렬 역행렬), 최소제곱법, 정규화(Ridge, Lasso).",
      "Matrix: Transpose, Multiplication, Inverse, Eigenvalue Decomposition, SVD.",
    ],
    howItWorks: [
      "NumPy만으로 행렬 연산과 최소제곱 회귀를 직접 구현",
      "손계산과 코드 결과를 비교해 수학적으로 검증",
    ],
    whatILearned: [
      "미적분 기초, 행렬 연산의 의미",
      "선형대수의 기하학적 직관 (PCA, 데이터 압축에 응용)",
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
    whatItDoes: [
      ".rt 파일을 파싱해 3D 씬을 렌더링.",
      "기본 구현: 광선(ray) 발사 + 장면 교점 계산, 구/평면 렌더링, 조명 + 그림자.",
      "도전 과제: 부분 반사, 굴절, 텍스처 매핑.",
    ],
    howItWorks: [
      ".rt 파일 파서로 씬 그래프 구성",
      "광선-물체 교점 계산 (구, 평면)",
      "조명 모델 + 그림자 처리",
    ],
    whatILearned: [
      "3D 공간의 벡터 연산과 기하학",
      "광선-물체 교점 계산의 수학",
      "그래픽스 파이프라인 이해",
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
    whatItDoes: [
      "P2P 파일 공유 프로토콜 구현.",
      ".torrent 메타파일 파싱 → peer 탐색 → 병렬 다운로드.",
    ],
    howItWorks: [
      "Torrent 파일 파싱 (bencode)",
      "Tracker와 통신",
      "Peer discovery (DHT)",
      "P2P 블록 다운로드",
    ],
    whatILearned: [
      "네트워크 프로토콜의 실제 구현",
      "NAT penetration, hole punching",
      "비트마스크 연산, 상태 관리",
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
    whatItDoes: [
      "NGINX + WordPress + MariaDB를 컨테이너화.",
      ".env 설정 → docker-compose up → 전체 웹 스택 자동 실행.",
    ],
    howItWorks: [
      "NGINX reverse proxy + TLS",
      "WordPress PHP application",
      "MariaDB database",
      "영속성 볼륨(persistent volumes)",
    ],
    whatILearned: [
      "Docker 레이어 아키텍처",
      "컨테이너 간 통신 (docker network)",
      "프로덕션급 설정 (환경변수, 시크릿)",
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
    whatItDoes: [
      "bash 셸의 핵심 기능을 C로 재구현.",
      "명령어 파싱(pipes, redirections), 프로세스 포킹(fork, execve), 시그널 처리, 빌트인 명령어(cd, export, unset).",
    ],
    howItWorks: [
      "커스텀 파서로 pipes/redirections 처리",
      "fork/execve로 외부 명령 실행",
      "SIGINT/SIGQUIT 시그널 핸들링",
    ],
    whatILearned: [
      "UNIX 프로세스 모델",
      "파일 디스크립터와 I/O 리다이렉션",
      "시그널 핸들링의 복잡성",
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
    period: "2026.6 – 8 (진행중)",
    bullets: [
      "ML Engineering, ML Infrastructure 인턴십 목표",
      "Poma AI capstone project 주도",
      "42 Gyeongsan 관계자 및 VC와의 생태계 구축",
    ],
  },
  {
    org: "42 Gyeongsan",
    period: "2024 – 현재",
    bullets: ["Full-stack, systems programming (C/C++/Rust)", "42 curriculum (peer evaluation 기반)"],
  },
];

export const education = {
  org: "42 Gyeongsan — Computer Science Fundamentals",
  period: "2024 – present",
  body: [
    "École 42는 프랑스의 무상 컴퓨터공학 교육 기관으로, 교수 없이 프로젝트 기반 학습과 동료 평가를 중심으로 합니다.",
    "완료된 과제: minishell, BitTorrent, Docker, Ray Tracer, etc.",
  ],
};
