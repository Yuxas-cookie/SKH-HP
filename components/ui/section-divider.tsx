'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface SectionDividerProps {
  variant?: 'wave' | 'angle' | 'curve' | 'line'
  color?: string
  flip?: boolean
}

export function SectionDivider({ variant = 'curve', color = '#fafaf9', flip = false }: SectionDividerProps) {
  const paths = {
    wave: 'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    angle: 'M0,160L1440,0L1440,320L0,320Z',
    curve: 'M0,224L1440,96L1440,320L0,320Z',
    line: 'M0,256L1440,256L1440,320L0,320Z',
  }

  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-auto block"
        preserveAspectRatio="none"
        style={{ marginBottom: '-1px' }}
      >
        <path fill={color} d={paths[variant]} />
      </svg>
    </div>
  )
}

export function ParallaxDivider() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div ref={ref} className="relative h-32 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/10 to-transparent"
      />
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
    </div>
  )
}
