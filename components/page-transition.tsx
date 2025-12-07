"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TransitionContextType {
  navigateTo: (href: string) => void
  isTransitioning: boolean
}

const TransitionContext = createContext<TransitionContextType | null>(null)

export function usePageTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error('usePageTransition must be used within PageTransitionProvider')
  }
  return context
}

interface PageTransitionProviderProps {
  children: ReactNode
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [targetHref, setTargetHref] = useState<string | null>(null)

  const navigateTo = useCallback((href: string) => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setTargetHref(href)

    // Wait for overlay animation, then scroll
    setTimeout(() => {
      if (href.startsWith('#')) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'instant' })
        }
      }
    }, 600)

    // Complete transition
    setTimeout(() => {
      setIsTransitioning(false)
      setTargetHref(null)
    }, 1200)
  }, [isTransitioning])

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      {children}

      {/* Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <TransitionOverlay targetHref={targetHref} />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  )
}

interface TransitionOverlayProps {
  targetHref: string | null
}

function TransitionOverlay({ targetHref }: TransitionOverlayProps) {
  // Get section name from href
  const getSectionName = (href: string | null): string => {
    if (!href) return ''
    const name = href.replace('#', '').toUpperCase()
    return name || 'HOME'
  }

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* First Layer - Fast sweep */}
      <motion.div
        className="absolute inset-0 bg-[var(--color-accent)]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1.2,
          times: [0, 0.4, 0.6, 1],
          ease: [0.76, 0, 0.24, 1]
        }}
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Second Layer - Delayed sweep */}
      <motion.div
        className="absolute inset-0 bg-[var(--color-black)]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1.2,
          times: [0, 0.4, 0.6, 1],
          ease: [0.76, 0, 0.24, 1],
          delay: 0.1
        }}
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Section Name */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.2,
          times: [0, 0.3, 0.7, 1],
          ease: "easeInOut"
        }}
      >
        <motion.span
          className="text-[var(--color-white)] text-6xl md:text-8xl font-extralight tracking-[0.3em]"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: [40, 0, 0, -40], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.2,
            times: [0, 0.3, 0.7, 1],
            ease: [0.76, 0, 0.24, 1]
          }}
        >
          {getSectionName(targetHref)}
        </motion.span>
      </motion.div>

      {/* Corner Lines */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-px bg-[var(--color-white)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{
          duration: 1.2,
          times: [0, 0.4, 0.6, 1],
          ease: [0.76, 0, 0.24, 1],
          delay: 0.2
        }}
        style={{ transformOrigin: 'left' }}
      />
      <motion.div
        className="absolute top-8 left-8 w-px h-16 bg-[var(--color-white)]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{
          duration: 1.2,
          times: [0, 0.4, 0.6, 1],
          ease: [0.76, 0, 0.24, 1],
          delay: 0.2
        }}
        style={{ transformOrigin: 'top' }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-px bg-[var(--color-white)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{
          duration: 1.2,
          times: [0, 0.4, 0.6, 1],
          ease: [0.76, 0, 0.24, 1],
          delay: 0.2
        }}
        style={{ transformOrigin: 'right' }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-px h-16 bg-[var(--color-white)]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{
          duration: 1.2,
          times: [0, 0.4, 0.6, 1],
          ease: [0.76, 0, 0.24, 1],
          delay: 0.2
        }}
        style={{ transformOrigin: 'bottom' }}
      />
    </div>
  )
}
