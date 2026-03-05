import { MapPin } from 'lucide-react'
import { Card } from '../ui/Card'
import { portfolio } from '../../data/portfolio'

export function LocationCard({ index }: { index: number }) {
  const { location, availability } = portfolio.personal
  return (
    <Card index={index} className="flex flex-col items-center justify-center text-center">
      <MapPin className="w-6 h-6 text-gruvbox-text-secondary mb-2" />
      <span className="text-sm text-gruvbox-text font-medium">{location}</span>
      <span className="mt-2 px-3 py-1 text-xs font-medium font-mono bg-gruvbox-accent/10 text-gruvbox-accent rounded-full">
        {availability}
      </span>
    </Card>
  )
}
