import { GraduationCap } from 'lucide-react'
import { Card } from '../ui/Card'
import { portfolio } from '../../data/portfolio'

export function EducationCard({ index }: { index: number }) {
  return (
    <Card index={index} className="h-full">
      <h2 className="text-lg font-semibold text-gruvbox-text mb-4">Education</h2>
      <div className="space-y-3">
        {portfolio.education.map((item) => (
          <div key={item.degree} className="flex gap-3">
            <GraduationCap className="w-5 h-5 text-gruvbox-yellow mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-gruvbox-text">{item.degree}</h3>
              <p className="text-xs text-gruvbox-text-secondary">{item.institution}</p>
              <span className="text-xs font-mono text-gruvbox-accent">{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
