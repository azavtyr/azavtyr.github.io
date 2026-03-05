import { ArrowUpRight } from 'lucide-react'
import { Card } from '../ui/Card'
import { Tag } from '../ui/Tag'
import type { Project } from '../../data/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card index={index} className="flex flex-col justify-between">
      <div>
        <h3 className="text-base font-semibold text-gruvbox-text mb-2">{project.title}</h3>
        <p className="text-sm text-gruvbox-text-secondary mb-4">{project.description}</p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gruvbox-text-secondary hover:text-gruvbox-accent transition-colors"
          aria-label={`View ${project.title} on GitHub`}
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </Card>
  )
}
