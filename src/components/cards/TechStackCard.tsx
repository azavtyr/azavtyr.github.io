import { Card } from '../ui/Card'
import { TechIcon } from '../ui/TechIcon'
import { portfolio } from '../../data/portfolio'

export function TechStackCard({ index }: { index: number }) {
  return (
    <Card index={index} className="h-full">
      <h2 className="text-lg font-semibold text-gruvbox-text mb-4">Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {portfolio.tech.map((item) => (
          <TechIcon key={item.slug} name={item.name} slug={item.slug} iconUrl={item.iconUrl} />
        ))}
      </div>
    </Card>
  )
}
