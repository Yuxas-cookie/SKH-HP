'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showContent, setShowContent] = useState(false)

  // Generate random positions for particles (memoized to prevent re-renders)
  const particles = useMemo(() =>
    [...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    })), []
  )

  // Generate orbital dots
  const orbitalDots = useMemo(() =>
    [...Array(8)].map((_, i) => ({
      id: i,
      angle: (i * 45) * (Math.PI / 180),
      delay: i * 0.1,
    })), []
  )

  useEffect(() => {
    // Delay before showing content
    setTimeout(() => setShowContent(true), 200)

    const duration = 3000 // 3 seconds total
    const interval = 20 // Update every 20ms
    const steps = duration / interval

    let currentProgress = 0
    const timer = setInterval(() => {
      // Easing function for more natural progress
      const easeProgress = (t: number) => {
        if (t < 0.5) return 2 * t * t
        return 1 - Math.pow(-2 * t + 2, 2) / 2
      }

      currentProgress += (100 / steps)
      const easedProgress = easeProgress(currentProgress / 100) * 100

      if (currentProgress >= 100) {
        setProgress(100)
        clearInterval(timer)
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(onLoadingComplete, 1000)
        }, 500)
      } else {
        setProgress(Math.floor(easedProgress))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.2,
            filter: 'blur(20px)',
          }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Animated grid background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Radial gradient overlays */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.05)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,119,6,0.05)_0%,transparent_50%)]" />
          </motion.div>

          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-amber-400"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                y: [0, -50, -100],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Main content container */}
          {showContent && (
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Outer pulsing ring */}
              <motion.div
                className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border border-amber-500/10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Second pulsing ring */}
              <motion.div
                className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border border-amber-500/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.15, 0.4],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              />

              {/* Rotating gradient ring 1 */}
              <motion.div
                className="absolute w-56 h-56 md:w-64 md:h-64"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="ring1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
                      <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="95"
                    fill="none"
                    stroke="url(#ring1)"
                    strokeWidth="1.5"
                    strokeDasharray="200 400"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Rotating gradient ring 2 (opposite) */}
              <motion.div
                className="absolute w-48 h-48 md:w-56 md:h-56"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="ring2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#d97706" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="95"
                    fill="none"
                    stroke="url(#ring2)"
                    strokeWidth="1"
                    strokeDasharray="150 450"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Rotating gradient ring 3 */}
              <motion.div
                className="absolute w-40 h-40 md:w-48 md:h-48"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="ring3" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="95"
                    fill="none"
                    stroke="url(#ring3)"
                    strokeWidth="0.5"
                    strokeDasharray="100 500"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Orbital dots */}
              <motion.div
                className="absolute w-52 h-52 md:w-60 md:h-60"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                {orbitalDots.map((dot) => (
                  <motion.div
                    key={dot.id}
                    className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full"
                    style={{
                      left: `calc(50% + ${Math.cos(dot.angle) * 48}%)`,
                      top: `calc(50% + ${Math.sin(dot.angle) * 48}%)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: dot.delay,
                    }}
                  />
                ))}
              </motion.div>

              {/* Center glow */}
              <motion.div
                className="absolute w-32 h-32 bg-amber-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Logo container */}
              <motion.div
                className="relative z-10 mb-16"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {/* Logo glow */}
                <motion.div
                  className="absolute inset-0 blur-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.3em] text-amber-500/50">
                    SKH
                  </h1>
                </motion.div>

                {/* Main logo */}
                <motion.h1
                  className="text-5xl md:text-7xl font-extralight tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 relative"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  SKH
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-center text-neutral-600 text-xs tracking-[0.5em] mt-3 uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  Loading
                </motion.p>
              </motion.div>

              {/* Progress section */}
              <motion.div
                className="w-64 md:w-80 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {/* Progress bar background */}
                <div className="relative h-[1px] bg-neutral-800 rounded-full overflow-hidden">
                  {/* Animated background shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-700 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Progress fill */}
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />

                  {/* Progress glow */}
                  <motion.div
                    className="absolute inset-y-0 left-0 h-4 -top-1.5 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full blur-md opacity-60"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />

                  {/* Leading dot */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50"
                    style={{ left: `calc(${progress}% - 4px)` }}
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(245,158,11,0.5)',
                        '0 0 20px rgba(245,158,11,0.8)',
                        '0 0 10px rgba(245,158,11,0.5)',
                      ],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>

                {/* Progress percentage */}
                <motion.div
                  className="mt-6 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="relative">
                    <motion.span
                      className="text-4xl md:text-5xl font-extralight tabular-nums bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-300"
                      key={progress}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {progress}
                    </motion.span>
                    <span className="text-xl md:text-2xl font-extralight text-amber-400/60 ml-1">%</span>
                  </div>
                </motion.div>

                {/* Corner decorations */}
                <motion.div
                  className="absolute -left-4 -top-4 w-4 h-4 border-l border-t border-amber-500/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                />
                <motion.div
                  className="absolute -right-4 -top-4 w-4 h-4 border-r border-t border-amber-500/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                />
                <motion.div
                  className="absolute -left-4 -bottom-4 w-4 h-4 border-l border-b border-amber-500/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                />
                <motion.div
                  className="absolute -right-4 -bottom-4 w-4 h-4 border-r border-b border-amber-500/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                />
              </motion.div>
            </motion.div>
          )}

          {/* Decorative lines */}
          <motion.div
            className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-amber-500/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ transformOrigin: 'top' }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-amber-500/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ transformOrigin: 'bottom' }}
          />
          <motion.div
            className="absolute top-1/4 left-0 h-px w-24 bg-gradient-to-r from-amber-500/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-0 h-px w-24 bg-gradient-to-l from-amber-500/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ transformOrigin: 'right' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
