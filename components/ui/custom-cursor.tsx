'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [cursorX, cursorY, isVisible])

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className={`
            -translate-x-1/2 -translate-y-1/2 rounded-full bg-white
            transition-all duration-200
            ${isHovering ? 'w-4 h-4' : 'w-3 h-3'}
          `}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        animate={{
          scale: isClicking ? 0.9 : isHovering ? 1.8 : 1,
          opacity: isVisible ? (isHovering ? 0.5 : 0.3) : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-amber-400" />
      </motion.div>
    </>
  )
}
