import type React from "react";

export const profile = {
  name: "Jordan Katz",
  role: "Software & Sales Development Specialist",
  location: "Westport, CT",
  email: "me@jordankatz.dev",
  phone: "(203) 917-5930",
  website: "https://jordankatz.dev",
  github: "https://github.com/jordanbkatz",
  linkedin: "https://linkedin.com/in/jordan-b-katz",
  tagline:
    "Building modern full-stack web applications, executing targeted B2B sales development campaigns, and driving customer acquisition.",
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
      "Founded a web service agency delivering custom web-based software solutions and modern websites for growing businesses.",
      "Spearheaded B2B client acquisition via targeted cold outreach and lead generation campaigns, securing client contracts and managing the full sales cycle.",
      "Engineered automated business workflows and client management systems to streamline operations and project delivery.",
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
    "Katz Web Solutions LLC is a web service agency I founded to deliver high-performance web-based software solutions for businesses. We engineer custom web applications, responsive websites, and integrated digital tools designed to solve real business challenges, enhance digital presence, and drive measurable growth.",
  points: [
    {
      title: "Web-based software solutions",
      body: "From custom web applications to high-performance responsive websites, every solution is hand-engineered with clean code, modern architecture, and intuitive user experiences.",
    },
    {
      title: "Client acquisition",
      body: "Built and scaled the agency's client pipeline from scratch through targeted B2B cold outreach, lead qualification, and strategic relationship management.",
    },
    {
      title: "Streamlined operations",
      body: "Engineered automated business workflows and client management systems that eliminate administrative overhead and keep delivery fast and reliable.",
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

export interface SalesFeature {
  title: string;
  category: string;
  tagline: string;
  description: React.ReactNode;
  icon: string;
  points: string[];
}

export const sales = {
  heading: "Accelerating Customer Acquisition",
  sub: "Executing data-driven B2B lead generation, multi-channel outbound outreach, and full-cycle pipeline management to acquire high-value customers.",
  capabilities: [
    {
      title: "ICP Targeting & Lead Sourcing",
      category: "",
      tagline: "",
      description:
        "Identifying high-value Ideal Customer Profiles (ICPs) and sourcing verified decision-maker contact data. Combining online intelligence databases with custom scraping automation workflows to build clean, qualified prospect lists ready for conversion.",
      icon: "target",
      points: [
        "ICP definition, market segmentation, and hyper-targeted lead list curation",
        "Automated lead sourcing & contact enrichment using B2B databases and custom scrapers",
        "Thorough lead qualification and email verification to ensure high deliverability and response rates",
      ],
    },
    {
      title: "Multi-Channel Cold Outreach",
      category: "",
      tagline: "",
      description:
        "Executing multi-touch outbound campaigns across cold email and cold calling to spark meaningful conversations. Leveraging high-deliverability email infrastructure and strategic phone outreach with tailored messaging that converts cold prospects into booked discovery calls.",
      icon: "outreach",
      points: [
        "Multi-inbox cold email architecture, inbox rotation, and deliverability monitoring",
        "Direct cold calling campaigns targeting key decision-makers with compelling value propositions",
        "Personalized copy frameworks, objection-handling strategies, and continuous A/B test optimization",
      ],
    },
    {
      title: "Pipeline, CRM & Deal Execution",
      category: "",
      tagline: "",
      description:
        "Managing the sales pipeline from initial touch to deal completion. Keeping CRM data structured and actionable, driving appointment setting for discovery calls, qualifying prospect requirements, and assisting with closing when necessary.",
      icon: "pipeline",
      points: [
        "End-to-end CRM management, stage tracking, and seamless pipeline hygiene",
        "Frictionless appointment setting and calendar booking for qualified opportunities",
        "Prospect qualification, pipeline nurturing, and closing support across the deal cycle",
      ],
    },
  ],
};

export const automation = sales;

export const about = {
  heading: "My Story",
  sub: "Software & sales development specialist, agency founder, and builder of modern digital products.",
  headshot: "/images/headshot.jpg",
  paragraphs: [
    "My journey began while I was attending Staples High School, driven by a deep curiosity for building systems and solving real-world problems. When I was starting out, I was fully self-taught and highly ambitious, teaching myself how to read documentation to master new tools and technologies on demand. Some of my earliest projects included building an automated forex trading bot in MQL4, creating a meme-based social media platform using PHP and MySQL, and engineering a professional sports game outcome prediction model using PyTorch.",
    "Those formative experiences evolved into a relentless passion for building and scaling. I expanded from software engineering into full-cycle sales development and entrepreneurship, combining modern full-stack development with targeted B2B outbound campaigns, automated pipeline infrastructure, and high-impact customer acquisition strategies to build sustainable, revenue-generating systems from the ground up.",
    "Today, alongside engineering full-stack applications and driving sales development workflows for fast-growing companies, I run my own agency, Katz Web Solutions LLC, providing custom web-based software solutions. At my core, I am a builder and sales strategist driven to stay at the frontier of innovation, leveraging cutting-edge tools to elevate both my professional work and daily life.",
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
      { name: "n8n", icon: "n8n", url: "https://n8n.io" },
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
    category: "Sales",
    items: [
      { name: "Smartlead", icon: "smartlead", url: "https://smartlead.ai" },
      { name: "Instantly", icon: "instantly", url: "https://instantly.ai" },
      { name: "Mailchimp", icon: "mailchimp", url: "https://mailchimp.com" },
      { name: "Vapi", icon: "vapi", url: "https://vapi.ai" },
      { name: "Apollo", icon: "apollo", url: "https://apollo.io" },
      { name: "Linkedin Sales Navigator", icon: "linkedin", url: "https://business.linkedin.com/sales-solutions/sales-navigator" },
      { name: "Hubspot", icon: "hubspot", url: "https://hubspot.com" },
      { name: "Calendly", icon: "calendly", url: "https://calendly.com" },
    ],
  },
];
