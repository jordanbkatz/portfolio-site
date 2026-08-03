# Portfolio Site

Jordan Katz's personal full-stack software engineer portfolio — showcasing work history, shipped projects, skills, and Katz Web Solutions LLC.

## Subproject Configuration

- **Subproject Slug**: `portfolio-site`
- **Firebase**: None. This subproject is a fully static frontend and uses no Firebase resources. The `portfolio-site` slug is reserved should resources ever be added (collections would use the `portfolio-site_` prefix).

## Features

- **5 visually distinct themes** — Cyberpunk, Retro, Minimal, Neubrutal, and Terminal — each with **light and dark modes** (10 total combinations), switchable from the header. Beyond color and fonts, each theme changes the structure and treatment of the page (HUD frames, matted prints, Swiss hairlines, sticker labels, terminal window chrome). Choices persist in `localStorage` and respect `prefers-color-scheme` on first visit.
- **Sections**: Hero, Experience timeline, Katz Web Solutions LLC agency spotlight, Projects grid, Skills with brand icons, About (headshot + concise profile + personal interests), and a Contact section with an inquiry form.
- **Contact form**: Composes a pre-filled `mailto:` message in the visitor's email app — zero backend required. Swap for Formspree/Cloud Function later if desired.
- **Footer**: navigation, contact info, socials, and a back-to-top link.
- **Headshot**: served from `public/images/headshot.jpg` and shown beside the About copy.
- **Fully responsive** from mobile to desktop, with scroll-reveal animations and reduced-motion support.
- Project preview images are placeholders — drop image paths into `src/data/content.ts` (`image` field per project) to populate them.

## Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Hand-rolled modern CSS (cascade layers, custom properties, `color-mix`), no framework
- **Icons**: lucide-react

## Setup & Running

```bash
npm install
npm run dev
```

Build & typecheck for production:

```bash
npm run build
```

## Theming Architecture

- Themes are applied via `<html data-theme="..." data-mode="...">` and defined as design tokens in `src/styles/themes.css`.
- Component styles live in `src/styles/main.css` and consume only tokens, so every component automatically adapts to all 10 theme/mode combinations.
- Theme state is managed by `src/hooks/useTheme.ts`.

---
*a Jordan Katz project*
