import { Card } from '../ui/Card'
import { portfolio } from '../../data/portfolio'

export function HeroCard({ index }: { index: number }) {
  const { name, role, tagline } = portfolio.personal
  return (
    <Card index={index} className="flex flex-col justify-center h-full">
      <h1 className="text-4xl lg:text-5xl font-bold text-gruvbox-text mb-2">{name}</h1>
      <p className="text-xl text-gruvbox-accent mb-4">{role}</p>
      <p className="text-gruvbox-text-secondary">{tagline}</p>
    </Card>
  )
}
