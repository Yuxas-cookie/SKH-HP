"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function VisionSection() {
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

  const letterVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4 + i * 0.08
      }
    })
  }

  const visionText = "CHANGE is NEAR"

  return (
    <section
      className="relative min-h-screen flex items-center bg-[var(--color-black)] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)] opacity-[0.02] blur-[150px]" />

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
              <span className="section-label">Vision</span>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <p className="text-[var(--color-gray-500)] text-sm tracking-[0.2em] uppercase">
                私たちが目指す世界
              </p>
            </motion.div>
          </div>

          {/* Main Heading - Character by Character Animation */}
          <div className="mb-16 md:mb-24 overflow-hidden">
            <div className="flex flex-wrap">
              {visionText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className={`text-hero ${char === ' ' ? 'w-[0.3em]' : ''} ${
                    index >= 7 ? 'text-gradient' : 'text-[var(--color-white)]'
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="space-y-6 text-[var(--color-gray-400)] text-lg leading-[1.9]">
                <p>
                  私たちは、変化を身近に当たり前にするための仕組みと実行力を提供します。
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-5 lg:col-start-8">
              <div className="space-y-6">
                <p className="text-[var(--color-white)] text-2xl md:text-3xl font-light leading-relaxed">
                  AI人材の内製化、DX化、AX化の導入成功率<span className="text-gradient">100％</span>。
                </p>
                <p className="text-[var(--color-gray-500)] text-lg">
                  それを、業界の常識へと書き換える。
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
          03
        </span>
      </div>
    </section>
  )
}
