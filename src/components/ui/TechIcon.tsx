interface TechIconProps {
  name: string
  slug: string
  iconUrl?: string
}

export function TechIcon({ name, slug, iconUrl }: TechIconProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={iconUrl ?? `https://cdn.simpleicons.org/${slug}/ebdbb2`}
        alt={name}
        className="w-8 h-8 brightness-0 invert"
        loading="lazy"
      />
      <span className="text-xs font-mono text-gruvbox-text-secondary">{name}</span>
    </div>
  )
}
