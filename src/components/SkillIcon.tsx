import type { ComponentType, CSSProperties } from "react";
import {
  Bot,
  Cable,
  Chrome,
  Clock,
  Cloud,
  CloudCog,
  Database,
  Globe,
  Linkedin,
  Mic,
  Radio,
  Send,
  Workflow,
  Zap,
} from "lucide-react";
import {
  SiAngular,
  SiCalendly,
  SiCloudflare,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGraphql,
  SiHubspot,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMailchimp,
  SiMongodb,
  SiN8N,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostcss,
  SiPostgresql,
  SiPuppeteer,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
  SiZapier,
} from "react-icons/si";

function PlaywrightLogo({ size = 13, style }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
      aria-hidden
    >
      <path d="M17.65 3.32a4.42 4.42 0 0 0-4.32 3.65 4.3 4.3 0 0 0-2.67-.93 4.41 4.41 0 0 0-4.41 4.41c0 .48.08.95.23 1.38a4.4 4.4 0 0 0-2.48 3.92c0 2.44 1.98 4.42 4.42 4.42 1.48 0 2.8-.73 3.61-1.85.74.8 1.78 1.3 2.94 1.3 2.22 0 4.02-1.8 4.02-4.02 0-.25-.03-.49-.07-.73 1.62-.64 2.78-2.22 2.78-4.07 0-2.44-1.98-4.42-4.42-4.42l-.34.03a4.34 4.34 0 0 0 .68-2.31c0-2.44-1.98-4.42-4.42-4.42-.18 0-.36.01-.53.04.14-.35.22-.72.22-1.12 0-1.8-1.46-3.26-3.26-3.26zM7.5 13.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9-4a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" />
    </svg>
  );
}

function SvelteLogo({ size = 13, style }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
      aria-hidden
    >
      <path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z" />
    </svg>
  );
}

function ApolloLogo({ size = 13, style, className }: { size?: number; style?: CSSProperties; className?: string }) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      style={style}
      className={className}
      aria-hidden
    >
      <g fill="currentColor">
        {angles.map((angle) => (
          <path
            key={angle}
            transform={`rotate(${angle} 50 50)`}
            d="M 45.2 6 L 54.5 7.8 C 53.6 21 53.1 31.5 52.6 39.8 C 52.1 44.8 47.6 47.5 42.6 48 L 36.8 48.5 L 36.3 43 L 42.2 42.5 C 45.2 42 46.7 39 47 35 L 45.2 6 Z"
          />
        ))}
      </g>
    </svg>
  );
}

interface IconConfig {
  icon: ComponentType<{ size?: number; style?: CSSProperties; className?: string }>;
  color: string;
}

const ICONS: Record<string, IconConfig> = {
  smartlead: { icon: Send, color: "#6366F1" },
  instantly: { icon: Zap, color: "#0066FF" },
  mailchimp: { icon: SiMailchimp, color: "#FFE01B" },
  vapi: { icon: Mic, color: "#10B981" },
  apollo: { icon: ApolloLogo, color: "#FACC15" },
  linkedin: { icon: Linkedin, color: "#0A66C2" },
  hubspot: { icon: SiHubspot, color: "#FF7A59" },
  calendly: { icon: SiCalendly, color: "#006BFF" },
  chrome: { icon: Chrome, color: "#4285F4" },
  webhooks: { icon: Radio, color: "#EC4899" },
  scraping: { icon: Globe, color: "#10B981" },
  pipeline: { icon: Zap, color: "#F59E0B" },
  database: { icon: Database, color: "#3B82F6" },
  bot: { icon: Bot, color: "#8B5CF6" },
  playwright: { icon: PlaywrightLogo, color: "#2EAD33" },
  zapier: { icon: SiZapier, color: "#FF4A00" },
  puppeteer: { icon: SiPuppeteer, color: "#00D8A2" },
  cron: { icon: Clock, color: "#F59E0B" },
  flutter: { icon: SiFlutter, color: "#02569B" },
  postcss: { icon: SiPostcss, color: "#DD3A0A" },
  react: { icon: SiReact, color: "#61DAFB" },
  vue: { icon: SiVuedotjs, color: "#4FC08D" },
  angular: { icon: SiAngular, color: "#DD0031" },
  nextjs: { icon: SiNextdotjs, color: "currentColor" }, // Next.js logo color is black/white depending on theme
  svelte: { icon: SvelteLogo, color: "#FF3E00" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  jest: { icon: SiJest, color: "#C21325" },
  vite: { icon: SiVite, color: "#646CFF" },
  node: { icon: SiNodedotjs, color: "#5FA04E" },
  express: { icon: SiExpress, color: "currentColor" },
  python: { icon: SiPython, color: "#3776AB" },
  rest: { icon: Cable, color: "#009688" },
  graphql: { icon: SiGraphql, color: "#E10098" },
  n8n: { icon: SiN8N, color: "#FF6584" },
  firebase: { icon: SiFirebase, color: "#FFCA28" },
  postgresql: { icon: SiPostgresql, color: "#4169E1" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  git: { icon: SiGit, color: "#F05032" },
  github: { icon: SiGithub, color: "currentColor" },
  gitlab: { icon: SiGitlab, color: "#FC6D26" },
  docker: { icon: SiDocker, color: "#2496ED" },
  kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  cloudflare: { icon: SiCloudflare, color: "#F38020" },
  netlify: { icon: SiNetlify, color: "#00C7B7" },
  vercel: { icon: SiVercel, color: "currentColor" },
  gcp: { icon: CloudCog, color: "#4285F4" },
  aws: { icon: Cloud, color: "#FF9900" },
  cicd: { icon: Workflow, color: "#10B981" },
};

export function SkillIcon({ name, size = 13 }: { name: string; size?: number }) {
  const config = ICONS[name] ?? { icon: Workflow, color: "currentColor" };
  const Icon = config.icon;
  return <Icon size={size} style={{ color: config.color }} aria-hidden />;
}
