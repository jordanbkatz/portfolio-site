import type React from "react";

export const profile = {
  name: "Jordan Katz",
  role: "Software & Automation Engineer",
  location: "Westport, CT",
  email: "me@jordankatz.dev",
  phone: "(203) 917-5930",
  website: "https://jordankatz.dev",
  github: "https://github.com/jordanbkatz",
  linkedin: "https://linkedin.com/in/jordan-b-katz",
  tagline:
    "Building full-stack web applications, resilient automation systems, and leveraging frontier technologies to keep businesses ahead of the curve.",
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
    location: "Norwalk, CT",
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
    location: "Norwalk, CT",
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
  github: string;
  demo: string;
  highlights: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    name: "Eisenhower Matrices",
    slug: "eisenhower-matrices",
    tagline: "Real-time priority planning",
    description:
      "An Eisenhower Matrix app for prioritizing tasks by urgency and importance, featuring multiple boards, guest mode, and real-time sharing with teammates by email.",
    github: "https://github.com/jordanbkatz/eisenhower-matrices",
    demo: "https://eisenhower-matrices.jordankatz.dev",
    highlights: [
      "Real-time multi-user board collaboration",
      "Guest mode with localStorage persistence",
    ],
    image: "/projects/eisenhower-matrices.png",
  },
  {
    name: "BeatWeaver",
    slug: "beat-weaver",
    tagline: "Collaborative real-time audio sequencer",
    description:
      "A web-based DAW where multiple users join a shared room and build drum/synth loops together simultaneously. All audio is procedurally synthesized with the Web Audio API.",
    github: "https://github.com/jordanbkatz/beat-weaver",
    demo: "https://beat-weaver.jordankatz.dev",
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
      "A group trip planner featuring real-time venue search via OpenStreetMap's Nominatim API, drag-and-drop daily schedules, live friend cursors on the map, restaurant voting, and sidebar group chat in a Scandinavian travelogue aesthetic.",
    github: "https://github.com/jordanbkatz/wayfarer-hub",
    demo: "https://wayfarer-hub.jordankatz.dev",
    highlights: [
      "Live multi-cursor presence on an interactive Leaflet map",
      "Real-time collaborative itinerary editing and voting",
    ],
    image: "/projects/wayfarer-hub.png",
  },
  {
    name: "Face Chess",
    slug: "face-chess",
    tagline: "Multiplayer chess with FaceTime-style video",
    description:
      "A real-time multiplayer chess platform with built-in WebRTC video and audio streams, so players can see each other's reactions and talk while they compete.",
    github: "https://github.com/jordanbkatz/face-chess",
    demo: "https://face-chess.jordankatz.dev",
    highlights: [
      "Peer-to-peer WebRTC video/audio signaling through Firestore",
      "Live match state, timers, and chess FEN sync",
    ],
    image: "/projects/face-chess.png",
  },
  {
    name: "Thrift Flip",
    slug: "thriftflip",
    tagline: "Real-time auction marketplace",
    description:
      "A fast-paced auction marketplace for upcycled and vintage fashion with real-time bidding rooms and automated countdowns, styled in a 90s neo-brutalist zine aesthetic.",
    github: "https://github.com/jordanbkatz/thrift-flip",
    demo: "https://thrift-flip.jordankatz.dev",
    highlights: [
      "Live bidding rooms with automated countdown settlement",
      "Image uploads and listing management via Firebase Storage",
    ],
    image: "/projects/thrift-flip.png",
  },
  {
    name: "Agora Debates",
    slug: "agora-debates",
    tagline: "Structured debate platform",
    description:
      "A platform designed to bring order to public discussion, using a visual Pro vs. Con layout and a reliability-weighted voting consensus system.",
    github: "https://github.com/jordanbkatz/agora-debates",
    demo: "https://agora-debates.jordankatz.dev",
    highlights: [
      "Reliability-weighted consensus voting algorithm",
      "Nested argument/rebuttal threading with per-node votes",
    ],
    image: "/projects/agora-debates.png",
  },
  {
    name: "Snippet Forge",
    slug: "snippet-forge",
    tagline: "Collaborative code sandbox",
    description:
      "A multi-user code sandbox supporting HTML, CSS/SCSS, JavaScript, SVG, and HTML5 Canvas with live synchronized previews, per-field locking, presence, and server-side compilation.",
    github: "https://github.com/jordanbkatz/snippet-forge",
    demo: "https://snippet-forge.jordankatz.dev",
    highlights: [
      "Cloud Functions that compile SCSS and sanitize JS for safe previews",
      "Field-level locks and live presence for multi-editor sessions",
    ],
    image: "/projects/snippet-forge.png",
  },
  {
    name: "Neon Tetris 3D",
    slug: "neon-tetris-3d",
    tagline: "A full 3D spatial puzzle game in WebGL",
    description:
      "Tetris reimagined in three dimensions, featuring solid 3D polyomino bricks with pitch/yaw/roll rotation, camera-relative controls, and a live global leaderboard.",
    github: "https://github.com/jordanbkatz/neon-tetris-3d",
    demo: "https://neon-tetris-3d.jordankatz.dev",
    highlights: [
      "Custom 3D rotation system with camera-relative movement",
      "Trackpad panning, pinch zoom, and origin-rotation camera controls",
    ],
    image: "/projects/neon-tetris-3d.png",
  },
  {
    name: "AlphabeType",
    slug: "alphabetype",
    tagline: "Alphabet speed-typing trainer",
    description:
      "A minimalist typing game that times how fast you can type the alphabet, with a global leaderboard, custom keybinds, and error-continuation mechanics.",
    github: "https://github.com/jordanbkatz/alphabetype",
    demo: "https://alphabetype.jordankatz.dev",
    highlights: [
      "Global leaderboard with Google auth and guest mode",
      "Fully customizable keybindings",
    ],
    image: "/projects/alphabetype.png",
  },
];

export interface AutomationFeature {
  title: string;
  category: string;
  tagline: string;
  description: React.ReactNode;
  icon: string;
  points: string[];
}

export const automation = {
  heading: "Engineered for Efficiency",
  sub: "Designing robust systems that eliminate manual bottlenecks, aggregate critical data, and drive business growth autonomously.",
  capabilities: [
    {
      title: "Web Scraping & Lead Generation",
      category: "",
      tagline: "",
      description:
        "Engineered end-to-end web scraping architectures and automated extraction pipelines purpose-built for business intelligence and lead generation. From scheduled crawlers that ingest unstructured web data into clean databases to custom tools and browser extensions that crawl target website lists to automatically extract verified contact details and lead metadata.",
      icon: "database",
      points: [
        "Automated extraction of high-intent market and lead data into structured databases or spreadsheet platforms",
        "Scheduled crawler syncs, webhook dispatching, and automated lead enrichment data pipelines",
        "Resilient browser automation architectures featuring dynamic DOM parsing, proxy rotation, and anti-bot evasions",
      ],
    },
    {
      title: "Custom Business & Operational Workflows",
      category: "",
      tagline: "",
      description:
        "Designing custom automated back-office workflows that eliminate tedious, repetitive manual tasks so teams can focus on high-impact strategic work. Handling end-to-end client onboarding, automated invoice generation, document parsing, asynchronous event handling, and instant system notifications.",
      icon: "zap",
      points: [
        "Custom automated workflows that eliminate recurring administrative overhead and human error",
        "Automated client onboarding, dynamic contract generation, and scheduled billing routines",
        "Multi-branch event routing, asynchronous queue management, and automated error recovery alerts",
      ],
    },
    {
      title: "Outreach & Communication Systems",
      category: "",
      tagline: "",
      description:
        "Developing scalable outbound and customer engagement engines that automate outreach, capture leads from form submissions, and maintain clean bi-directional sync with CRMs. Specializing in high-deliverability cold email campaign infrastructure, automated marketing newsletters, and real-time response routing.",
      icon: "email",
      points: [
        "Multi-inbox cold email campaign architecture, automated warmup, and deliverability monitoring",
        "Automated inbound lead capture, instant form submission triggers, and audience segmentation",
        "Real-time bi-directional customer sync and pipeline updates across leading CRM platforms",
      ],
    },
  ],
};

export const about = {
  heading: "My Story",
  sub: "Software & automation engineer, agency founder, and builder of modern digital products.",
  headshot: "/images/headshot.jpg",
  paragraphs: [
    "My journey began while I was attending Staples High School, driven by a deep curiosity for building systems and solving real-world problems. When I was starting out, I was fully self-taught and highly ambitious, teaching myself how to read documentation to master new tools and technologies on demand. Some of my earliest projects included building an automated forex trading bot in MQL4, creating a meme-based social media platform using PHP and MySQL, and engineering a professional sports game outcome prediction model using PyTorch.",
    "Those early projects sparked a lifelong passion for software and automation engineering across every layer of the stack; from responsive frontend architectures and interactive UI platforms to high-performance microservices, automated data pipelines, custom web scrapers, and automated business workflows.",
    "Today, alongside engineering full-stack applications and automated workflow systems for a select few startup companies, I run my own web development agency, Katz Web Solutions LLC, which specializes in the restaurant and food service industry. At my core, I am a technologist driven to stay at the frontier of innovation, leveraging cutting-edge tools to elevate both my professional work and daily life.",
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
  url: string;
}

export const skills: { category: string; items: Skill[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react", url: "https://react.dev" },
      { name: "Vue", icon: "vue", url: "https://vuejs.org" },
      { name: "Angular", icon: "angular", url: "https://angular.dev" },
      { name: "Svelte", icon: "svelte", url: "https://svelte.dev" },
      { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: "typescript", url: "https://www.typescriptlang.org" },
      { name: "Tailwind CSS", icon: "tailwind", url: "https://tailwindcss.com" },
      { name: "PostCSS", icon: "postcss", url: "https://postcss.org" },
      { name: "Jest", icon: "jest", url: "https://jestjs.io" },
      { name: "Vite", icon: "vite", url: "https://vite.dev" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Next.js", icon: "nextjs", url: "https://nextjs.org" },
      { name: "Node.js", icon: "node", url: "https://nodejs.org" },
      { name: "Express.js", icon: "express", url: "https://expressjs.com" },
      { name: "Flutter", icon: "flutter", url: "https://flutter.dev" },
      { name: "REST APIs", icon: "rest", url: "https://en.wikipedia.org/wiki/REST" },
      { name: "GraphQL", icon: "graphql", url: "https://graphql.org" },
      { name: "Firebase", icon: "firebase", url: "https://firebase.google.com" },
      { name: "PostgreSQL", icon: "postgresql", url: "https://www.postgresql.org" },
      { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com" },
    ],
  },
  {
    category: "Deployment",
    items: [
      { name: "Git", icon: "git", url: "https://git-scm.com" },
      { name: "GitHub", icon: "github", url: "https://github.com" },
      { name: "GitLab", icon: "gitlab", url: "https://about.gitlab.com" },
      { name: "Docker", icon: "docker", url: "https://www.docker.com" },
      { name: "Kubernetes", icon: "kubernetes", url: "https://kubernetes.io" },
      { name: "Cloudflare", icon: "cloudflare", url: "https://www.cloudflare.com" },
      { name: "Vercel", icon: "vercel", url: "https://vercel.com" },
      { name: "GCP", icon: "gcp", url: "https://cloud.google.com" },
      { name: "AWS", icon: "aws", url: "https://aws.amazon.com" },
      { name: "CI/CD", icon: "cicd", url: "https://en.wikipedia.org/wiki/CI/CD" },
    ],
  },
  {
    category: "Automation",
    items: [
      { name: "n8n", icon: "n8n", url: "https://n8n.io" },
      { name: "Zapier", icon: "zapier", url: "https://zapier.com" },
      { name: "Python", icon: "python", url: "https://www.python.org" },
      { name: "Puppeteer", icon: "puppeteer", url: "https://pptr.dev" },
      { name: "Cron Jobs", icon: "cron", url: "https://en.wikipedia.org/wiki/Cron" },
      { name: "Webhooks", icon: "webhooks", url: "https://en.wikipedia.org/wiki/Webhook" },
      { name: "Web Scraping", icon: "scraping", url: "https://en.wikipedia.org/wiki/Web_scraping" },
      { name: "Mailchimp", icon: "mailchimp", url: "https://mailchimp.com" },
      { name: "Smartlead", icon: "smartlead", url: "https://smartlead.ai" },
    ],
  },
];
