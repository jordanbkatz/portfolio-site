export const profile = {
  name: "Jordan Katz",
  role: "Full-Stack Software Engineer",
  location: "Westport, CT",
  email: "me@jordankatz.dev",
  phone: "(203) 917-5930",
  website: "https://jordankatz.dev",
  github: "https://github.com/jordanbkatz",
  linkedin: "https://linkedin.com/in/jordan-b-katz",
  tagline:
    "Full-stack engineer and agency founder building high-performance web applications, real-time interactive systems, and modern digital experiences.",
};

export interface ExperienceItem {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  logo?: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Katz Web Solutions LLC",
    title: "Founder, CEO",
    location: "Westport, CT",
    period: "Aug 2024 - Present",
    current: true,
    logo: "/images/katz-web-solutions-logo.png",
    points: [
      "Founded a web development agency specializing in building modern, responsive websites for small businesses.",
      "Managed client outreach through cold outreach campaigns, securing contracts with restaurants and other local businesses to enhance their online presence.",
      "Engineered automated business workflows, reducing manual administrative tasks and streamlining client management processes.",
    ],
  },
  {
    company: "Aether Devs LLC",
    title: "Software Engineer",
    location: "Remote, CT",
    period: "Jul 2024 - Feb 2026",
    logo: "/images/aether-devs-llc-logo.svg",
    points: [
      "Engineered multi-platform software solutions, developing cross-platform systems using web, desktop and mobile applications to expand product reach across various environments.",
      "Designed high-throughput backend microservices and relational database schemas to process complex computational tasks for multi-tenant SaaS environments.",
      "Built automated background data pipelines to handle real-time data flow, system syncs, and large-scale event processing.",
    ],
  },
  {
    company: "Nodus Web Services",
    title: "Software Developer",
    location: "Remote, CT",
    period: "Oct 2023 - Jun 2024",
    logo: "/images/nodus-web-services-logo.svg",
    points: [
      "Architected full-stack enterprise web services, focusing on server-side rendering logic and high-concurrency API integrations.",
      "Optimized data retrieval layers by implementing multi-level caching strategies and database index tuning to maintain sub-100ms query performance.",
      "Integrated complex third-party platforms, including secure payment processing systems, authentication protocols, and headless content management systems.",
    ],
  },
];

export const business = {
  name: "Katz Web Solutions LLC",
  role: "Founder & CEO",
  url: "https://katzwebsolutions.com",
  since: "August 2024",
  heading: "My own agency, built from the ground up.",
  description:
    "Katz Web Solutions LLC is a web development agency I founded and continue to grow. We specialize in modern, responsive websites for small businesses, handling everything from design and engineering to automated back-office workflows.",
  points: [
    {
      title: "Client acquisition",
      body: "Built a client pipeline from scratch through cold outreach campaigns, landing contracts with restaurants and other local businesses.",
    },
    {
      title: "Modern, responsive builds",
      body: "Every site is hand-engineered to be fast, accessible, and beautiful on every device, with no page-builder templates.",
    },
    {
      title: "Automated operations",
      body: "Engineered automated business workflows that cut manual administrative work and streamline client management end-to-end.",
    },
  ],
};

export interface Project {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    name: "Face Chess",
    slug: "face-chess",
    tagline: "Multiplayer chess with FaceTime-style video",
    description:
      "A real-time multiplayer chess platform with built-in WebRTC video and audio streams, so players can see each other's reactions and talk while they compete.",
    tech: ["React", "TypeScript", "WebRTC", "Firebase", "Vite"],
    highlights: [
      "Peer-to-peer WebRTC video/audio signaling through Firestore",
      "Live match state, timers, and chess FEN sync",
    ],
    image: "/projects/face-chess.png",
  },
  {
    name: "BeatWeaver",
    slug: "beat-weaver",
    tagline: "Collaborative real-time audio sequencer",
    description:
      "A web-based DAW where multiple users join a shared room and build drum/synth loops together simultaneously. All audio is procedurally synthesized with the Web Audio API.",
    tech: ["React", "TypeScript", "Web Audio API", "Firestore", "Cloud Functions"],
    highlights: [
      "Zero-asset procedural sound synthesis in the browser",
      "Real-time 16-step grid sync across peers with playhead alignment",
    ],
    image: "/projects/beat-weaver.png",
  },
  {
    name: "Wayfarer Hub",
    slug: "wayfarer-hub",
    tagline: "Collaborative multi-stop travel planner",
    description:
      "A group trip planner with drag-and-drop daily schedules, live friend cursors on the map, restaurant voting, and sidebar group chat in a Scandinavian travelogue aesthetic.",
    tech: ["React", "TypeScript", "Leaflet", "Firebase", "Cloud Functions"],
    highlights: [
      "Live multi-cursor presence on an interactive Leaflet map",
      "Real-time collaborative itinerary editing and voting",
    ],
    image: "/projects/wayfarer-hub.png",
  },
  {
    name: "Neon Tetris 3D",
    slug: "neon-tetris-3d",
    tagline: "A full 3D spatial puzzle game in WebGL",
    description:
      "Tetris reimagined in three dimensions, featuring solid 3D polyomino bricks with pitch/yaw/roll rotation, camera-relative controls, and a live global leaderboard.",
    tech: ["React", "TypeScript", "Three.js", "WebGL", "Firebase"],
    highlights: [
      "Custom 3D rotation system with camera-relative movement",
      "Trackpad panning, pinch zoom, and origin-rotation camera controls",
    ],
    image: "/projects/neon-tetris-3d.png",
  },
  {
    name: "Agora Debates",
    slug: "agora-debates",
    tagline: "Structured debate platform",
    description:
      "A platform designed to bring order to public discussion, using a visual Pro vs. Con layout and a reliability-weighted voting consensus system.",
    tech: ["React", "TypeScript", "Firebase", "Cloud Functions", "Jest"],
    highlights: [
      "Reliability-weighted consensus voting algorithm",
      "Nested argument/rebuttal threading with per-node votes",
    ],
    image: "/projects/agora-debates.png",
  },
  {
    name: "ThriftFlip",
    slug: "thriftflip",
    tagline: "Real-time auction marketplace",
    description:
      "A fast-paced auction marketplace for upcycled and vintage fashion with real-time bidding rooms and automated countdowns, styled in a 90s neo-brutalist zine aesthetic.",
    tech: ["React", "TypeScript", "Firebase", "Storage", "Cloud Functions"],
    highlights: [
      "Live bidding rooms with automated countdown settlement",
      "Image uploads and listing management via Firebase Storage",
    ],
    image: "/projects/thrift-flip.png",
  },
  {
    name: "Snippet Forge",
    slug: "snippet-forge",
    tagline: "Collaborative code sandbox",
    description:
      "A multi-user HTML/CSS/JS sandbox with live previews, per-field locking, presence, and server-side SCSS compilation and JS sanitization.",
    tech: ["React", "TypeScript", "Prism", "Firebase", "Cloud Functions"],
    highlights: [
      "Cloud Functions that compile SCSS and sanitize JS for safe previews",
      "Field-level locks and live presence for multi-editor sessions",
    ],
    image: "/projects/snippet-forge.png",
  },
  {
    name: "Eisenhower Matrices",
    slug: "eisenhower-matrices",
    tagline: "Real-time priority planning",
    description:
      "An Eisenhower Matrix app for prioritizing tasks by urgency and importance, featuring multiple boards, guest mode, and real-time sharing with teammates by email.",
    tech: ["React", "TypeScript", "Firebase", "Vite", "Jest"],
    highlights: [
      "Real-time multi-user board collaboration",
      "Guest mode with localStorage persistence",
    ],
    image: "/projects/eisenhower-matrices.png",
  },
  {
    name: "AlphabeType",
    slug: "alphabetype",
    tagline: "Alphabet speed-typing trainer",
    description:
      "A minimalist typing game that times how fast you can type the alphabet, with a global leaderboard, custom keybinds, and error-continuation mechanics.",
    tech: ["React", "Firebase", "CSS"],
    highlights: [
      "Global leaderboard with Google auth and guest mode",
      "Fully customizable keybindings",
    ],
    image: "/projects/alphabetype.png",
  },
];

export const about = {
  heading: "My Story",
  sub: "Full-stack engineer, agency founder, and builder of modern digital products.",
  headshot: "/images/headshot.jpg",
  paragraphs: [
    "My journey as a software developer began while I was attending Staples High School, driven by a deep curiosity for building systems and solving real-world problems. When I was starting out, I was fully self-taught and highly ambitious, teaching myself how to read documentation to learn new tools and technologies on demand. Some of my earliest projects included building an automated forex trading bot in MQL4, creating a meme-based social media platform using PHP and MySQL, and engineering a sports prediction machine learning algorithm in Python (yes, I was doing AI before ChatGPT!).",
    "Those early projects sparked a lifelong passion for software engineering across every layer of the stack, spanning responsive frontend architectures, interactive UI platforms, high-performance microservices, automated pipelines, and custom client solutions.",
    "Today, alongside engineering full-stack applications, I run my own web development agency, Katz Web Solutions LLC. When I'm not coding, I enjoy strength training, hiking, reading, and following the latest developments in tech and AI.",
  ],
  interests: [
    {
      title: "Health & Fitness",
      blurb: "Strength training, clean nutrition, and physical wellness are core components of my daily routine.",
      icon: "dumbbell",
    },
    {
      title: "Hiking",
      blurb: "You'll usually find me outdoors exploring mountain trails, chasing scenic views, and enjoying fresh air.",
      icon: "mountain",
    },
    {
      title: "Mycology",
      blurb: "A fascination with fungi, from identifying mushrooms to understanding how they shape ecosystems.",
      icon: "mushroom",
    },
    {
      title: "Philosophy",
      blurb: "Exploring big questions about ethics, knowledge, and systems thinking to broaden perspective.",
      icon: "brain",
    },
    {
      title: "Journalism",
      blurb: "Drawn to in-depth investigative reporting, uncovering facts, and critical long-form analysis.",
      icon: "newspaper",
    },
    {
      title: "Videogames",
      blurb: "Avid gamer who enjoys strategy games, multiplayer matches, and roleplay servers.",
      icon: "gamepad",
    },
  ],
};

export interface Skill {
  name: string;
  icon: string;
}

export const skills: { category: string; items: Skill[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Vue", icon: "vue" },
      { name: "Angular", icon: "angular" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Svelte", icon: "svelte" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Jest", icon: "jest" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "Python", icon: "python" },
      { name: "REST APIs", icon: "rest" },
      { name: "GraphQL", icon: "graphql" },
      { name: "n8n", icon: "n8n" },
      { name: "Firebase", icon: "firebase" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    category: "Deployment",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "Vercel", icon: "vercel" },
      { name: "GCP", icon: "gcp" },
      { name: "AWS", icon: "aws" },
      { name: "CI/CD", icon: "cicd" },
    ],
  },
];
