import type { ComponentType, CSSProperties } from "react";
import { Cable, Cloud, CloudCog, Workflow } from "lucide-react";
import {
  SiAngular,
  SiCloudflare,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiN8N,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";

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

interface IconConfig {
  icon: ComponentType<{ size?: number; style?: CSSProperties; className?: string }>;
  color: string;
}

const ICONS: Record<string, IconConfig> = {
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
