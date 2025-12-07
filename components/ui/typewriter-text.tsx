'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TypewriterTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  gradientClassName?: string
}

export function TypewriterText({
  children,
  className = '',
  delay = 0,
  duration = 0.05,
  gradientClassName,
}: TypewriterTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const characters = children.split('')

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className={`inline-block ${gradientClassName || ''}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.3,
            delay: delay + index * duration,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      {/* Cursor effect */}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-amber-500 ml-1 align-middle"
        initial={{ opacity: 0 }}
        animate={isInView ? {
          opacity: [0, 1, 1, 0],
        } : { opacity: 0 }}
        transition={{
          duration: 0.8,
          delay: delay + characters.length * duration,
          times: [0, 0.1, 0.9, 1],
        }}
      />
    </motion.span>
  )
}

// For titles with mixed styling (gradient + normal text)
interface TypewriterTitleProps {
  parts: {
    text: string
    isGradient?: boolean
    isLineBreak?: boolean
  }[]
  className?: string
  gradientClassName?: string
  delay?: number
  duration?: number
}

export function TypewriterTitle({
  parts,
  className = '',
  gradientClassName = 'bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700',
  delay = 0,
  duration = 0.05,
}: TypewriterTitleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Flatten all characters with their styling info
  const allChars: { char: string; isGradient: boolean; isLineBreak: boolean }[] = []
  parts.forEach((part) => {
    if (part.isLineBreak) {
      allChars.push({ char: '\n', isGradient: false, isLineBreak: true })
    } else {
      part.text.split('').forEach((char) => {
        allChars.push({ char, isGradient: part.isGradient || false, isLineBreak: false })
      })
    }
  })

  return (
    <motion.span
      ref={ref}
      className={`inline ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {allChars.map((item, index) => (
        item.isLineBreak ? (
          <br key={index} />
        ) : (
          <motion.span
            key={index}
            className={`inline-block ${item.isGradient ? gradientClassName : ''}`}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.3,
              delay: delay + index * duration,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {item.char === ' ' ? '\u00A0' : item.char}
          </motion.span>
        )
      ))}
      {/* Cursor effect */}
      <motion.span
        className="inline-block w-[3px] h-[0.8em] bg-amber-500 ml-1 align-middle"
        initial={{ opacity: 0 }}
        animate={isInView ? {
          opacity: [0, 1, 1, 0],
        } : { opacity: 0 }}
        transition={{
          duration: 0.8,
          delay: delay + allChars.length * duration,
          times: [0, 0.1, 0.9, 1],
        }}
      />
    </motion.span>
  )
}
