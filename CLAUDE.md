# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.


## Who is this person?

The site belongs to Dmytro (username "azavtyr"). He's a self-taught tech enthusiast interested in Linux, networking, and cybersecurity. He runs a homelab, automates things, does system administration, and programs. He describes this website as his "shelter" on the Internet where he posts about cybersecurity, homelab, and programming topics. He doesn't use social media.


## What the site does

This is a personal portfolio website hosted on GitHub Pages at azavtyr.github.io. It's a single-page React app with a bento grid layout — Gruvbox Dark theme, responsive, animated with Apple-style typography. The license is CC0 1.0 Universal (public domain).


## Tech stack

- React + TypeScript + Vite
- Tailwind CSS v4 (via @tailwindcss/vite plugin)
- Framer Motion for animations
- Lucide React for icons
- Fonts: Inter (body) + JetBrains Mono (monospace labels) from Google Fonts
- Color scheme: Gruvbox Dark (#1d2021 bg, #3c3836 cards, #ebdbb2 text, #8ec07c accent)
- Deployed via GitHub Actions to GitHub Pages

### Commands

- `npm run dev` — Start dev server
- `npm run build` — Type-check with tsc then build with Vite
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint


## File structure

```
index.html                  — Entry HTML (loads /src/main.tsx)
vite.config.ts              — Vite config with React + Tailwind plugins
public/
  favicon.png               — Site favicon
  test.gpg                  — PGP public key for encrypted email
src/
  main.tsx                  — React entry point
  App.tsx                   — Root component (Gruvbox bg, BentoGrid, footer)
  index.css                 — Tailwind import, Gruvbox theme vars, font setup
  data/
    portfolio.ts            — All content: types, personal info, projects, tech, experience, education
  components/
    BentoGrid.tsx           — Grid layout assembling all cards with stagger indices
    ui/
      Card.tsx              — Base card wrapper (gruvbox-card bg, rounded-3xl, framer motion entrance)
      Tag.tsx               — Tag pill for project cards (monospace, accent color)
      TechIcon.tsx          — Icon from Simple Icons CDN + label (with iconUrl override)
    cards/
      HeroCard.tsx          — Name, role, tagline (2col x 2row on desktop)
      AboutCard.tsx          — Personal bio (2col)
      TechStackCard.tsx      — Tech icons grid (2col x 2row)
      ExperienceCard.tsx     — Timeline of roles (2col x 2row)
      EducationCard.tsx      — Education entries (2col)
      ProjectCard.tsx        — Project title, description, tags, link
      GitHubCard.tsx         — GitHub profile link + icon
      ContactCard.tsx        — Email, PGP download, docs link (full-width footer)
      LocationCard.tsx       — Location + availability badge
.github/workflows/deploy.yml — GitHub Pages deployment workflow
```


## Architecture

- Single-page app, no routing needed
- All content lives in `src/data/portfolio.ts` — edit this file to update any text, links, or projects
- BentoGrid component uses CSS grid: 4 columns (lg), 2 (md), 1 (mobile), max-width 1200px
- Card component applies framer-motion entrance animation with staggered delay based on index prop
- Cards have rounded-3xl borders with accent glow on hover
- Tech icons loaded from CDN: `https://cdn.simpleicons.org/{slug}/ebdbb2` (with iconUrl override for missing icons)
- Gruvbox theme colors defined as CSS custom properties via Tailwind @theme in index.css


## Links and contacts

- **Website**: azavtyr.github.io
- **Docs/Notes**: azavtyr.github.io/notes
- **GitHub profile**: github.com/azavtyr
- **Dotfiles repo**: github.com/azavtyr/dotfiles
- **This repo**: github.com/azavtyr/azavtyr.github.io
- **Email**: dmytro.m@tuta.io
- **PGP key**: public/test.gpg
