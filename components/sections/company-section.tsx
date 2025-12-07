"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function CompanySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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

  const companyInfo = [
    { label: "会社名", value: "株式会社SKH" },
    { label: "所在地", value: "〒565-0842 大阪府吹田市千里山東2-4-3-201" },
    { label: "代表者", value: "代表取締役 片山 弘" },
    { label: "設立", value: "2024年" },
    { label: "事業内容", value: "AI人材育成 / DX・AX導入支援 / AI顧問サービス / 教育スクール事業" },
  ]

  return (
    <section
      id="company"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-32">
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <span className="section-label mb-8 block">Company</span>
              <h2 className="text-section text-[var(--color-white)]">
                企業情報
              </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-6 lg:flex lg:items-end">
              <p className="text-[var(--color-gray-400)] text-xl leading-relaxed max-w-xl font-light">
                テクノロジーの力で、人と企業の可能性を解き放つ。それが私たちの使命です。
              </p>
            </motion.div>
          </div>

          {/* Company Info Table */}
          <motion.div variants={itemVariants} className="mb-24 md:mb-40">
            <div className="border-t border-[var(--color-gray-800)]">
              {companyInfo.map((item, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-start md:items-center">
                    <div className="md:col-span-3">
                      <span className="text-[var(--color-gray-500)] text-sm tracking-[0.15em] uppercase">
                        {item.label}
                      </span>
                    </div>
                    <div className="md:col-span-9">
                      <span className="text-[var(--color-white)] text-lg md:text-xl font-light group-hover:text-[var(--color-accent)] transition-colors duration-500">
                        {item.value}
                      </span>
                    </div>
                  </div>
                  <div className="h-px bg-[var(--color-gray-800)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[var(--color-accent)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-gray-800)]">
              {[
                { number: "100", unit: "%", label: "導入成功率" },
                { number: "4", unit: "事業", label: "コア事業" },
                { number: "2024", unit: "年", label: "設立" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-black)] p-10 md:p-16 text-center group hover:bg-[var(--color-gray-900)] transition-colors duration-700"
                >
                  <div className="flex items-baseline justify-center gap-2 mb-6">
                    <span className="text-6xl md:text-8xl font-extralight text-[var(--color-white)] group-hover:text-[var(--color-accent)] transition-colors duration-700">
                      {stat.number}
                    </span>
                    <span className="text-[var(--color-gray-500)] text-xl font-light">
                      {stat.unit}
                    </span>
                  </div>
                  <span className="text-[var(--color-gray-500)] text-xs tracking-[0.25em] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Large Background Text */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-10 pointer-events-none select-none overflow-hidden opacity-20">
        <span className="text-[18vw] font-extralight text-[var(--color-gray-900)] leading-none tracking-tighter">
          COMPANY
        </span>
      </div>
    </section>
  )
}
