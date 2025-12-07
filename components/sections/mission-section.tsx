"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

export function MissionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center bg-[var(--color-dark)] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-premium opacity-20" />

      <div className="section-padding w-full">
        <motion.div
          ref={ref}
          className="max-w-[90rem] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <span className="section-label">Mission</span>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <p className="text-[var(--color-gray-500)] text-sm tracking-[0.2em] uppercase">
                私たちの使命
              </p>
            </motion.div>
          </div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24">
            <h2 className="text-display text-[var(--color-white)]">
              前進する未来の
            </h2>
            <h2 className="text-display mt-2">
              <span className="text-gradient">実現へ</span>
            </h2>
          </motion.div>

          {/* Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div variants={itemVariants} className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-6 text-[var(--color-gray-400)] text-lg leading-[1.9]">
                <p>
                  世界は日々変化し、時代の流れとともに、進むべき方向も、戦い方も変わり続けていく。
                </p>
                <p>
                  その変化の中にも、人にも企業にも、それぞれが思い描く理想の未来がある。
                </p>
                <p className="text-[var(--color-white)] text-xl font-light pt-4 border-l-2 border-[var(--color-accent)] pl-6">
                  私たちは、関わるすべての人を圧倒的に前へ進め、共に成長し、共に勝つ世界を創る。
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Line */}
          <motion.div
            variants={lineVariants}
            className="mt-24 md:mt-40 h-px bg-gradient-to-r from-transparent via-[var(--color-gray-800)] to-[var(--color-accent)] origin-left"
          />
        </motion.div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-extralight text-[var(--color-gray-900)] opacity-50 leading-none">
          02
        </span>
      </div>
    </section>
  )
}
