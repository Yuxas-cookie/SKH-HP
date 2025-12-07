"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

export function PurposeSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
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

  return (
    <section
      id="purpose"
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-[var(--color-black)] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-premium opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-accent)] opacity-[0.02] blur-[150px]" />

      <div className="section-padding w-full">
        <motion.div
          ref={ref}
          className="max-w-[90rem] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24">
            <span className="section-label">Purpose</span>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left - Main Text */}
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <h2 className="text-display text-[var(--color-white)] mb-8">
                感動と喜びを
              </h2>
              <h2 className="text-display">
                <span className="text-gradient">届ける</span>
              </h2>
            </motion.div>

            {/* Right - Description */}
            <motion.div variants={itemVariants} className="lg:col-span-4 lg:flex lg:flex-col lg:justify-end">
              <div className="space-y-6 text-[var(--color-gray-400)] text-lg leading-relaxed">
                <p>
                  新しい体験に出会ったとき。
                </p>
                <p>
                  未知の景色が開けたとき。
                </p>
                <p>
                  描いた理想が現実に触れたとき。
                </p>
                <p className="text-[var(--color-white)] text-xl font-light pt-4">
                  その瞬間に、人は心から感動する。
                </p>
                <p className="text-[var(--color-gray-500)]">
                  その喜びを、共に味わい、共に分かち合う。
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Line */}
          <motion.div
            variants={itemVariants}
            className="mt-24 md:mt-40"
          >
            <div className="h-px bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-gray-800)] to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-extralight text-[var(--color-gray-900)] opacity-50 leading-none">
          01
        </span>
      </div>
    </section>
  )
}
