import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  index?: number
  className?: string
}

export function Card({ children, index = 0, className = '' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`h-full bg-gruvbox-card border border-gruvbox-border rounded-3xl p-6 hover:-translate-y-1 hover:border-gruvbox-accent/50 hover:shadow-lg hover:shadow-gruvbox-accent/5 transition-all duration-200 ${className}`}
    >
      {children}
    </motion.div>
  )
}
