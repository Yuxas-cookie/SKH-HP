'use client'

import { motion } from 'framer-motion'

interface GradientOrbProps {
  className?: string
  color?: 'amber' | 'purple' | 'blue' | 'cyan'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
}

const colors = {
  amber: 'from-amber-400/30 via-amber-500/20 to-orange-400/10',
  purple: 'from-purple-400/20 via-violet-500/15 to-fuchsia-400/10',
  blue: 'from-blue-400/20 via-cyan-500/15 to-teal-400/10',
  cyan: 'from-cyan-400/20 via-teal-500/15 to-emerald-400/10',
}

const sizes = {
  sm: 'w-32 h-32',
  md: 'w-64 h-64',
  lg: 'w-96 h-96',
  xl: 'w-[500px] h-[500px]',
}

export function GradientOrb({
  className = '',
  color = 'amber',
  size = 'lg',
  animate = true,
}: GradientOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-radial ${colors[color]} ${sizes[size]} blur-3xl ${className}`}
      animate={
        animate
          ? {
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }
          : undefined
      }
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
