"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [dots, setDots] = useState<{ x: number; y: number; delay: number; id: number }[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const newDots = Array.from({ length: 80 }, (_, index) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      id: index
    }))
    setDots(newDots)
  }, [])

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Tech Circles */}
      <div className="tech-circles">
        <div className="tech-circle" />
        <div className="tech-circle" />
        <div className="tech-circle" />
      </div>

      {/* Tech Lines */}
      <div className="tech-lines">
        <div className="tech-line" />
        <div className="tech-line" />
        <div className="tech-line" />
        <div className="tech-line" />
      </div>

      {/* Digital Dots - Only render on client side */}
      {isClient && (
        <div className="digital-dots">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className="digital-dot"
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                animationDelay: `${dot.delay}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Content */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4 w-full max-w-6xl mx-auto"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 text-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="text-black inline-block hover-lift"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            未来
          </motion.span>
          を創造する
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          <motion.span 
            className="bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent inline-block hover-lift"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            テクノロジー
          </motion.span>
          の力
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          私たちは、革新的なテクノロジーソリューションで
          <br className="hidden sm:block" />
          ビジネスの可能性を広げます
        </motion.p>
        
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link href="#contact">
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white rounded-none px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl hover:opacity-90 transition-opacity"
              >
                <span className="flex items-center justify-center">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-2" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}