'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  staggerChildren?: number
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  staggerChildren = 0.02,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const words = children.split(' ')

  return (
    <span ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + wordIndex * staggerChildren,
            }}
          >
            {word}
          </motion.span>
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}

interface SplitTextProps {
  children: string
  className?: string
  charClassName?: string
  delay?: number
}

export function SplitText({ children, className = '', charClassName = '', delay = 0 }: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const chars = children.split('')

  return (
    <motion.span ref={ref} className={`inline-block ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className={`inline-block ${charClassName}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            ease: [0.33, 1, 0.68, 1],
            delay: delay + i * 0.03,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
