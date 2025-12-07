"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePageTransition } from '../page-transition'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { navigateTo, isTransitioning } = usePageTransition()

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.6 + i * 0.05
      }
    })
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        delay: 1.5
      }
    }
  }

  const mainText = "未来を創造する"
  const subText = "テクノロジーの力"

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (isTransitioning) return
    navigateTo(href)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-black)]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-premium opacity-40" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-[150px]" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.02] blur-[120px]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-black)]" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
      >
        {/* Top Label */}
        <motion.div variants={itemVariants} className="mb-16 md:mb-24">
          <span className="section-label">
            Technology Company
          </span>
        </motion.div>

        {/* Main Heading - Line 1 */}
        <div className="overflow-hidden mb-4">
          <div className="flex flex-wrap">
            {mainText.split('').map((char, index) => (
              <motion.span
                key={`main-${index}`}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                className="text-hero text-[var(--color-white)]"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Main Heading - Line 2 */}
        <div className="overflow-hidden mb-16 md:mb-24">
          <div className="flex flex-wrap">
            {subText.split('').map((char, index) => (
              <motion.span
                key={`sub-${index}`}
                custom={index + mainText.length}
                variants={letterVariants}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                className={`text-hero ${index < 7 ? 'text-gradient' : 'text-[var(--color-white)]'}`}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Description */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <p className="text-[var(--color-gray-400)] text-xl md:text-2xl leading-relaxed font-light">
              私たちは、AI・DX・AXの力で企業と人の可能性を解き放ち、
              感動と喜びが連鎖する未来を共に創ります。
            </p>
          </motion.div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* CTA */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-premium cursor-pointer"
            >
              <span>Contact Us</span>
            </a>
            <a
              href="#purpose"
              onClick={(e) => handleNavClick(e, '#purpose')}
              className="btn-premium cursor-pointer"
            >
              <span>Our Purpose</span>
            </a>
          </motion.div>
        </div>

        {/* Decorative Line */}
        <motion.div
          variants={lineVariants}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent origin-center opacity-50"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-[var(--color-gray-600)] text-[10px] tracking-[0.4em] uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-[var(--color-accent)] to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Corner Accent */}
      <motion.div
        className="absolute top-8 right-8 text-[var(--color-gray-700)] text-xs tracking-[0.3em] font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        EST. 2024
      </motion.div>
    </section>
  )
}
