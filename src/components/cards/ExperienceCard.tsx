import { Card } from '../ui/Card'
import { portfolio } from '../../data/portfolio'

export function ExperienceCard({ index }: { index: number }) {
  return (
    <Card index={index} className="h-full">
      <h2 className="text-lg font-semibold text-gruvbox-text mb-4">Experience</h2>
      <div className="space-y-4">
        {portfolio.experience.map((item) => (
          <div key={item.role} className="relative pl-4 border-l-2 border-gruvbox-border">
            <span className="text-xs font-mono text-gruvbox-accent">{item.period}</span>
            <h3 className="text-sm font-semibold text-gruvbox-text mt-1">{item.role}</h3>
            <p className="text-xs text-gruvbox-text-secondary mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
