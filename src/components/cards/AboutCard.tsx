import { Card } from '../ui/Card'
import { portfolio } from '../../data/portfolio'

export function AboutCard({ index }: { index: number }) {
  return (
    <Card index={index} className="h-full">
      <h2 className="text-lg font-semibold text-gruvbox-text mb-3">About</h2>
      <p className="text-gruvbox-text-secondary leading-relaxed">{portfolio.personal.about}</p>
    </Card>
  )
}
