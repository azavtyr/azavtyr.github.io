import { Mail, Lock, FileText } from 'lucide-react'
import { Card } from '../ui/Card'
import { portfolio } from '../../data/portfolio'

export function ContactCard({ index }: { index: number }) {
  const { email, pgpKey, docsUrl } = portfolio.personal
  return (
    <Card index={index} className="h-full">
      <h2 className="text-lg font-semibold text-gruvbox-text mb-4">Contact</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 text-gruvbox-text-secondary hover:text-gruvbox-accent transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span className="text-sm font-mono">{email}</span>
        </a>
        <a
          href={pgpKey}
          download
          className="flex items-center gap-2 text-gruvbox-text-secondary hover:text-gruvbox-accent transition-colors"
        >
          <Lock className="w-5 h-5" />
          <span className="text-sm">PGP Key</span>
        </a>
        <a
          href={docsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gruvbox-text-secondary hover:text-gruvbox-accent transition-colors"
        >
          <FileText className="w-5 h-5" />
          <span className="text-sm">Docs</span>
        </a>
      </div>
    </Card>
  )
}
