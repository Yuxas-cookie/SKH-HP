"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { usePageTransition } from '../page-transition'

export function BusinessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { navigateTo, isTransitioning } = usePageTransition()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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

  const businesses = [
    {
      number: "01",
      name: "Turning AX",
      category: "人材開発・人材教育事業",
      tagline: "その企業のAI化のターニングポイントになる",
      description: "DX化人材、AX化人材の内製化支援サービス"
    },
    {
      number: "02",
      name: "Solution AX",
      category: "システム導入支援",
      tagline: "事業を見て、最適解を創る",
      description: "変化の起点を共創するAX実装。課題の可視化から実装まで、一気通貫サービス。"
    },
    {
      number: "03",
      name: "AX Partner",
      category: "顧問サービス",
      tagline: "伴走するAI顧問",
      description: "Turning AXの後に伴走してほしい方へ、AI顧問サービスを提供します。"
    },
    {
      number: "04",
      name: "Turning AX Academy",
      category: "教育・スクール事業",
      tagline: "人生を前へ動かす、AIとAXの実装スクール",
      description: "AIエンジニア、AX人材開発の講座。あなたのターニングポイントになる学びとスキルを。"
    }
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (isTransitioning) return
    navigateTo(href)
  }

  return (
    <section
      id="business"
      ref={ref}
      className="relative bg-[var(--color-black)] overflow-hidden"
    >
      <div className="section-padding-lg">
        <motion.div
          className="max-w-[90rem] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 md:mb-40">
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <span className="section-label mb-8 block">Business</span>
              <h2 className="text-section text-[var(--color-white)]">
                事業内容
              </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-6 lg:flex lg:items-end">
              <p className="text-[var(--color-gray-400)] text-xl leading-relaxed max-w-xl font-light">
                AI・DX・AXの導入から人材育成まで、変革の全プロセスを一気通貫でサポートします。
              </p>
            </motion.div>
          </div>

          {/* Business List */}
          <div className="space-y-0">
            {businesses.map((business, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block cursor-pointer"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-12 md:py-16 border-t border-[var(--color-gray-800)] items-start lg:items-center">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span className="text-5xl md:text-6xl font-extralight text-[var(--color-gray-800)] group-hover:text-[var(--color-accent)] transition-colors duration-700">
                        {business.number}
                      </span>
                    </div>

                    {/* Name & Category */}
                    <div className="lg:col-span-4">
                      <h3 className="text-2xl md:text-4xl font-light text-[var(--color-white)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                        {business.name}
                      </h3>
                      <span className="text-[var(--color-gray-600)] text-xs tracking-[0.2em] uppercase">
                        {business.category}
                      </span>
                    </div>

                    {/* Tagline */}
                    <div className="lg:col-span-4">
                      <p className="text-[var(--color-gray-300)] text-xl font-light leading-relaxed">
                        {business.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-3">
                      <p className="text-[var(--color-gray-500)] text-sm leading-relaxed">
                        {business.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Line */}
                  <div className="h-px bg-[var(--color-gray-800)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Large Background Text */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 pointer-events-none select-none overflow-hidden opacity-30">
        <span className="text-[20vw] font-extralight text-[var(--color-gray-900)] leading-none tracking-tighter whitespace-nowrap">
          BUSINESS
        </span>
      </div>
    </section>
  )
}
