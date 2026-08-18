import type { Project } from "@/lib/data";

/* Projects built but no longer listed on the site — the Build section reads
   better short, and these overlap with ones already there. Nothing imports this
   file, so none of it reaches the bundle; move an entry back into `projects` in
   lib/data.ts to publish it again. */
export const archivedProjects: Project[] = [

  {
    id: "transcendence",
    name: "Transcendence — Real-time PvP Pong",
    stack: "Node.js · Socket.io · OAuth 2.0 · 2FA",
    period: "2026",
    status: "complete",
    statusLabel: { ko: "완료", en: "Complete" },
    badge: {
      ko: "École 42 Inner Circle · 팀장, 4인 팀",
      en: "École 42 Inner Circle · Team Lead, team of 4",
    },
    overview: {
      problem: { ko: "실시간 대전은 프론트와 백이 같은 상태를 동시에 믿어야 한다.", en: "Real-time play means the front and back end have to trust the same state at the same moment." },
      result: { ko: "`Socket.io` 이벤트로만 상태를 동기화하고 `OAuth 2.0` + `2FA`를 직접 설계 — `4`명 팀 리드.", en: "Synced state exclusively through `Socket.io` events and designed `OAuth 2.0` + `2FA` from scratch — led a team of `4`." },
    },
    why: {
      ko: "École 42 Inner Circle 후반부에 처음 마주하는 대형 팀 프로젝트입니다. 실시간 통신과 인증을, **프레임워크 뒤에 숨지 않고 `4`명이 함께 설계·구현**해야 했습니다.",
      en: "The first large team project in the latter half of École 42's Inner Circle. Real-time communication and authentication had to be **designed and built by the four of us directly** — no framework to hide behind.",
    },
    solution: {
      ko: "**`WebSocket` 기반 실시간 대전 Pong**을 만들고, 커스텀 매치메이킹과 `OAuth 2.0` + `2FA` 인증까지 **팀을 이끌며** 구현했습니다.",
      en: "Built **real-time competitive Pong over `WebSockets`**, **leading the team** through custom matchmaking and `OAuth 2.0` + `2FA` authentication.",
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
    challenge: {
      label: {
        ko: "프론트·백·배포를 3개 레포로",
        en: "Splitting front, back, and deploy",
      },
      body: {
        ko: "팀 `4`명이 동시에 작업하려면 프론트(`React/Vite`), 백엔드, 배포 설정을 분리해야 했습니다. 레포를 `tsen-front` · `tsen-back` · `deployment`로 나누고, **실시간 게임 상태는 `Socket.io` 이벤트로만 동기화**해 프론트-백 양쪽에서 동시에 신뢰할 수 있게 했습니다.",
        en: "With `4` people working in parallel, the frontend (`React/Vite`), backend, and deployment config had to be separated. We split the work into `tsen-front`, `tsen-back`, and `deployment` repos, and kept real-time game state trustworthy on both ends by **synchronizing it exclusively through `Socket.io` events**.",
      },
    },
    whatILearned: {
      ko: [
        "실시간 시스템에서 **프론트엔드-백엔드 상태 동기화**가 가장 까다로운 지점이었다",
        "**팀 리딩은 코드가 아니었다 —** 작업을 쪼개고 순서를 정하는 일이 더 컸다",
        "**보안은 나중에 붙이는 기능이 아니다 —** 인증(`OAuth 2.0` · `2FA`)을 처음부터 설계해보고 체감했다",
      ],
      en: [
        "Keeping **frontend–backend state in sync** was the hardest part of the real-time system",
        "**Leading wasn't about code —** it was breaking the work into the right pieces and sequence",
        "**Security isn't a feature you bolt on later —** designing auth (`OAuth 2.0`, `2FA`) from scratch made that concrete",
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
    id: "webserv",
    name: "WebServ — HTTP Server in C++",
    stack: "C++ · HTTP/1.1 · Non-blocking I/O",
    period: "2026",
    status: "complete",
    statusLabel: { ko: "완료", en: "Complete" },
    badge: { ko: "École 42 Inner Circle", en: "École 42 Inner Circle" },
    overview: {
      problem: { ko: "브라우저가 요청을 보내면 nginx 뒤에서 무슨 일이 벌어지는가.", en: "What actually happens behind nginx when a browser sends a request?" },
      result: { ko: "설정 파일로 가상 서버를 구성하고 `non-blocking I/O`로 다중 연결을 처리하는 `HTTP/1.1` 서버를 `C++`로.", en: "An `HTTP/1.1` server in `C++` — virtual hosts from a config file, concurrent connections on `non-blocking I/O`." },
    },
    why: {
      ko: "**브라우저가 서버에 요청을 보내면 무슨 일이 일어나는가** — `nginx` 뒤에 숨겨진 HTTP 서버를 `C++`로 직접 구현해 확인하고 싶었습니다.",
      en: "**What actually happens when a browser sends a request to a server?** I wanted to implement the HTTP server hiding behind `nginx` myself, in `C++`, to find out.",
    },
    solution: {
      ko: "`nginx`와 유사한 설정 파일로 여러 가상 서버를 구성하고, **`non-blocking I/O`로 다중 연결을 처리**하는 `HTTP/1.1` 서버를 구현했습니다.",
      en: "Built an **`HTTP/1.1` server** that configures multiple virtual servers from an `nginx`-style config file and **handles concurrent connections with `non-blocking I/O`**.",
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
    whatILearned: {
      ko: [
        "**파싱은 전혀 다른 난이도 —** HTTP는 텍스트 프로토콜이지만, 이를 안정적으로 파싱하는 일은 달랐다",
        "`non-blocking I/O`로 다중 연결을 처리하며 **이벤트 루프의 설계를 몸으로 이해**했다",
      ],
      en: [
        "**Parsing is a different problem —** HTTP is a text protocol, but parsing it reliably is another level entirely",
        "Handling concurrent connections with `non-blocking I/O` made **the design of an event loop click**, hands-on",
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
    overview: {
      problem: { ko: "서버 없이 파일이 오간다는 건 어떻게 가능한가.", en: "How can files move between people with no server at all?" },
      result: { ko: "프로토콜 명세만 들고 `C++`로 P2P 구현 중 — 피어가 죽어도 모든 piece가 **정확히 한 번** 완료되도록.", en: "Building a P2P client in `C++` from the spec alone — every piece completes **exactly once**, even as peers drop." },
    },
    why: {
      ko: "42 과제가 아니라, 궁금해서 시작한 개인 프로젝트입니다. **서버 없이 파일이 오간다는 건 어떻게 가능한가** — 프로토콜 명세만 들고 `P2P` 네트워크를 바닥부터 구현하고 있습니다.",
      en: "Not a 42 assignment — a personal project I started out of curiosity. **How can files move between people with no server at all?** I'm implementing a `P2P` network from just the protocol spec, from scratch.",
    },
    solution: {
      ko: "`.torrent` 메타파일 파싱부터 tracker 통신, peer 발견, **블록 병렬 다운로드**까지 `C++`로 구현 중입니다.",
      en: "Building parsing for `.torrent` metafiles, tracker communication, peer discovery, and **parallel block downloads** in `C++`.",
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
    challenge: {
      label: {
        ko: "정확히 한 번, 크래시 없이",
        en: "Exactly once, never a crash",
      },
      body: {
        ko: "피어마다 워커 스레드 하나로 병렬 다운로드하다 보니, 작업 큐·완료 수·파일 쓰기 같은 공유 상태를 `뮤텍스`로 지켜야 했습니다. 연결이 끊기거나 타임아웃이 나거나 해시가 안 맞으면 그 피어를 크래시 없이 버리고 piece를 큐에 다시 넣어, **모든 piece가 정확히 한 번 완료되도록** 만들었습니다. 한 라운드의 피어가 전부 소진되면 트래커에 재announce해 새 피어를 받고, 여러 라운드 동안 진행이 없으면 안전하게 중단합니다.",
        en: "With one worker thread per peer downloading in parallel, shared state — the work queue, completed count, file writes — has to be protected by a `mutex`. A dropped connection, timeout, or hash mismatch discards that peer without crashing and requeues the piece, so **every piece completes exactly once**. Once a round's peers are exhausted, the client re-announces to the tracker for new ones, and safely aborts if several rounds pass with no progress.",
      },
    },
    whatILearned: {
      ko: [
        "네트워크 프로토콜을 명세 그대로 구현하며 **`RFC` 읽는 법을 익히는 중**",
        "**상태 관리가 프로토콜 구현의 절반 —** 조각 상태를 `비트마스크`로 관리하는 설계가 그랬다",
      ],
      en: [
        "Learning to **read `RFC`s properly** by implementing a network protocol straight from spec",
        "**State management is half the protocol —** managing piece state with `bitmasks` made that plain",
      ],
    },
    links: [
      { label: "GitHub", href: "https://github.com/KimTaebin-ai/baby-torrent" },
    ],
  },
  {
    id: "inception",
    name: "Inception — Docker Infrastructure",
    stack: "Docker · Docker Compose · NGINX · WordPress · MariaDB",
    period: "2024",
    status: "complete",
    statusLabel: { ko: "완료", en: "Complete" },
    overview: {
      problem: { ko: "`docker run` 한 줄이 이미지 레이어·네트워크·볼륨을 전부 감춘다.", en: "A single `docker run` hides image layers, networking, and volumes." },
      result: { ko: "`.env`와 `docker-compose up` 한 번으로 NGINX + WordPress + MariaDB가 `TLS`까지 걸고 올라오도록 직접 조립.", en: "Assembled it by hand — one `.env` and one `docker-compose up` brings up NGINX + WordPress + MariaDB, `TLS` included." },
    },
    why: {
      ko: "`docker run` 한 줄이 감추고 있는 것들 — 이미지 레이어, 네트워크, 볼륨 — 을 **직접 조립해봐야 컨테이너를 이해했다고** 말할 수 있다고 생각했습니다.",
      en: "The things a single `docker run` hides — image layers, networking, volumes — **I don't think you can say you understand containers until you've assembled them yourself**.",
    },
    solution: {
      ko: "`.env` 설정과 `docker-compose up` 한 번으로 **NGINX + WordPress + MariaDB 스택이 `TLS`까지 걸고** 올라옵니다.",
      en: "One `.env` config and a single `docker-compose up` bring up **NGINX + WordPress + MariaDB, `TLS` included**.",
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
        "`Docker` 레이어 캐시를 이해하니 **빌드 시간과 이미지 크기가 함께 줄었다**",
        "**시크릿 분리는 프로덕션의 최소 조건 —** 귀찮음의 문제가 아니다",
      ],
      en: [
        "Understanding `Docker`'s layer cache **cut both build time and image size**",
        "**Separating secrets is the minimum bar —** it is not busywork",
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
    overview: {
      problem: { ko: "매일 쓰는 셸에서, 터미널에 친 한 줄이 프로세스가 되기까지.", en: "From a line typed into the shell I use every day to it becoming a process." },
      result: { ko: "파싱 → `fork`/`execve` → 파이프·리다이렉션 → 시그널 처리까지 bash의 핵심 동작을 `C`로 재구현.", en: "Reimplemented bash's core in `C` — parsing, `fork`/`execve`, pipes and redirection, signal handling." },
    },
    why: {
      ko: "매일 쓰는 셸 — **터미널에 친 한 줄이 프로세스가 되기까지의 전 과정**을 직접 만들어 확인하고 싶었습니다.",
      en: "The shell I use every day — I wanted to **build the whole path myself, from a line typed into a terminal to it becoming a process**, to actually see it.",
    },
    solution: {
      ko: "파싱 → `fork`/`execve` → 파이프·리다이렉션 → 시그널 처리까지, **bash의 핵심 동작을 `C`로 재구현**했습니다.",
      en: "**Reimplemented bash's core behavior in `C`** — parsing, `fork`/`execve`, pipes and redirection, and signal handling.",
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
    whatILearned: {
      ko: [
        "UNIX 프로세스 모델 — **`fork`가 왜 그렇게 설계됐는지** 몸으로 이해했다",
        "**셸은 파일 디스크립터로 설명된다 —** 그게 보이기 시작하면 거의 모든 동작이 풀린다",
        "**시그널은 설계의 일부다 —** 예외 처리로 미룰 게 아니었다",
      ],
      en: [
        "The UNIX process model — understood hands-on **why `fork` is designed the way it is**",
        "**A shell explains itself through file descriptors —** once they are visible, almost everything it does follows",
        "**Signals belong in the design —** not in an exception handler bolted on after",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/KimTaebin-ai" }],
  },];
