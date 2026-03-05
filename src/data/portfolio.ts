export interface PersonalInfo {
  name: string
  username: string
  role: string
  tagline: string
  about: string
  email: string
  github: string
  location: string
  availability: string
  docsUrl: string
  pgpKey: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  url: string
}

export interface TechItem {
  name: string
  slug: string
  iconUrl?: string
}

export interface ExperienceItem {
  role: string
  period: string
  description: string
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
}

export interface PortfolioData {
  personal: PersonalInfo
  projects: Project[]
  tech: TechItem[]
  experience: ExperienceItem[]
  education: EducationItem[]
}

export const portfolio: PortfolioData = {
  personal: {
    name: 'Dmytro',
    username: 'azavtyr',
    role: 'Self-taught Tech Enthusiast',
    tagline: 'Linux, networking, cybersecurity, homelab, and programming.',
    about:
      "I'm a self-taught tech enthusiast passionate about Linux, networking, and cybersecurity. I run a homelab, automate things, do system administration, and program. This is my shelter on the Internet where I post about cybersecurity, homelab, and programming topics.",
    email: 'dmytro.m@tuta.io',
    github: 'github.com/azavtyr',
    location: 'Ukraine',
    availability: 'Open to opportunities',
    docsUrl: 'https://azavtyr.github.io/notes',
    pgpKey: '/test.gpg',
  },
  experience: [
    {
      role: 'Homelab Administrator',
      period: '2023 — Present',
      description:
        'Building and maintaining self-hosted infrastructure with Proxmox VE, Docker, and automated deployments.',
    },
    {
      role: 'System Administrator & Automation',
      period: '2022 — Present',
      description:
        'Automating workflows, managing Linux servers, and configuring networking and security.',
    },
    {
      role: 'Web Developer',
      period: '2023 — Present',
      description:
        'Building web projects with React, TypeScript, and Tailwind CSS.',
    },
  ],
  education: [
    {
      degree: 'Self-taught',
      institution: 'Online courses, documentation, and hands-on projects',
      period: '2022 — Present',
    },
  ],
  projects: [
    {
      title: 'Homelab Infrastructure',
      description:
        'Self-hosted infrastructure running on Proxmox VE with automated deployments and monitoring.',
      tags: ['Homelab', 'Linux'],
      url: 'https://github.com/azavtyr',
    },
    {
      title: 'Dotfiles & Terminal Setup',
      description:
        'Personal dotfiles with WezTerm, Neovim, and shell configurations managed via Git.',
      tags: ['CLI', 'Linux'],
      url: 'https://github.com/azavtyr/dotfiles',
    },
    {
      title: 'This Portfolio',
      description:
        'Personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.',
      tags: ['Web'],
      url: 'https://github.com/azavtyr/azavtyr.github.io',
    },
    {
      title: 'Self-Hosted Services',
      description:
        'Collection of self-hosted services including password management, note-taking, and more.',
      tags: ['Homelab', 'Linux'],
      url: 'https://github.com/azavtyr',
    },
  ],
  tech: [
    { name: 'Linux', slug: 'linux' },
    { name: 'macOS', slug: 'macos' },
    { name: 'Proxmox', slug: 'proxmox' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Neovim', slug: 'neovim' },
    { name: 'WezTerm', slug: 'wezterm' },
    { name: 'VSCode', slug: 'vscode', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Obsidian', slug: 'obsidian' },
    { name: 'Brave', slug: 'brave' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'React', slug: 'react' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
  ],
}
