interface TagProps {
  label: string
}

export function Tag({ label }: TagProps) {
  return (
    <span className="px-2 py-1 text-xs font-medium font-mono bg-gruvbox-bg text-gruvbox-accent rounded-lg">
      {label}
    </span>
  )
}
