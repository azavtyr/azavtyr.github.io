import { Github } from 'lucide-react'
import { Card } from '../ui/Card'
import { portfolio } from '../../data/portfolio'

export function GitHubCard({ index }: { index: number }) {
  return (
    <Card index={index} className="flex items-center justify-center">
      <a
        href={`https://${portfolio.personal.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-3 text-gruvbox-text-secondary hover:text-gruvbox-accent transition-colors"
      >
        <Github className="w-10 h-10" />
        <span className="text-sm font-medium font-mono">@{portfolio.personal.username}</span>
      </a>
    </Card>
  )
}
