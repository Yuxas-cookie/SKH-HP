'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { createContext, useContext, useState, useCallback } from 'react'

interface NavTransitionContextType {
  navigateTo: (targetId: string, label: string) => void
  isTransitioning: boolean
}

const NavTransitionContext = createContext<NavTransitionContextType | null>(null)

export function useNavTransition() {
  const context = useContext(NavTransitionContext)
  if (!context) {
    throw new Error('useNavTransition must be used within NavTransitionProvider')
  }
  return context
}

export function NavTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [targetLabel, setTargetLabel] = useState('')

  const navigateTo = useCallback((targetId: string, label: string) => {
    setTargetLabel(label)
    setIsTransitioning(true)

    // Wait for entrance animation, then scroll
    setTimeout(() => {
      const element = document.getElementById(targetId)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'auto', // instant scroll during transition
        })
      }

      // Wait a moment, then exit animation
      setTimeout(() => {
        setIsTransitioning(false)
      }, 400)
    }, 600)
  }, [])

  return (
    <NavTransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      {children}

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-none"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Multiple layers for depth effect */}
            <motion.div
              className="absolute inset-0 bg-black"
              variants={{
                initial: { scaleY: 0 },
                animate: {
                  scaleY: 1,
                  transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
                },
                exit: {
                  scaleY: 0,
                  transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
                },
              }}
              style={{ originY: 0 }}
            />

            {/* Accent line sweep */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"
              variants={{
                initial: { scaleX: 0, opacity: 0 },
                animate: {
                  scaleX: 1,
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.3, ease: [0.76, 0, 0.24, 1] }
                },
                exit: {
                  scaleX: 0,
                  opacity: 0,
                  transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
                },
              }}
            />

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, delay: 0.35 }
                  },
                  exit: {
                    opacity: 0,
                    y: -20,
                    transition: { duration: 0.2 }
                  },
                }}
              >
                {/* Logo */}
                <motion.div
                  className="text-4xl md:text-5xl font-extralight text-amber-400 tracking-wider mb-4"
                  variants={{
                    initial: { opacity: 0, scale: 0.8 },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.4, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }
                    },
                    exit: {
                      opacity: 0,
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    },
                  }}
                >
                  SKH
                </motion.div>

                {/* Section label */}
                <motion.div
                  className="text-sm text-neutral-400 tracking-[0.3em] uppercase"
                  variants={{
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { duration: 0.3, delay: 0.45 }
                    },
                    exit: {
                      opacity: 0,
                      transition: { duration: 0.15 }
                    },
                  }}
                >
                  {targetLabel}
                </motion.div>
              </motion.div>
            </div>

            {/* Particle effects */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-amber-400 rounded-full"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: '50%',
                  }}
                  variants={{
                    initial: { opacity: 0, scale: 0 },
                    animate: {
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      y: [0, -30 - i * 10, -60 - i * 15],
                      transition: {
                        duration: 0.8,
                        delay: 0.3 + i * 0.05,
                        ease: 'easeOut'
                      }
                    },
                    exit: { opacity: 0 },
                  }}
                />
              ))}
            </div>

            {/* Glow effect */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-[100px]"
              variants={{
                initial: { opacity: 0, scale: 0.5 },
                animate: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.2 }
                },
                exit: {
                  opacity: 0,
                  scale: 1.5,
                  transition: { duration: 0.3 }
                },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </NavTransitionContext.Provider>
  )
}
