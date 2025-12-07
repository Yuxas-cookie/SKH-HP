"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function ValuesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
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

  const values = [
    {
      number: "01",
      title: "Win-Win or No Deal",
      description: "片側だけの勝ちは、勝ちではない。全員で勝てる選択だけをします。"
    },
    {
      number: "02",
      title: "成果、実現にこだわる",
      description: "努力や過程ではなく結果にこだわります。"
    },
    {
      number: "03",
      title: "共に勝つ",
      description: "社員、顧客、パートナー、関わる全ての人と勝つ。味方を増やし、全員で勝ちにいく。"
    }
  ]

  return (
    <section
      className="relative bg-[var(--color-dark)] overflow-hidden"
    >
      <div className="section-padding-lg">
        <motion.div
          ref={ref}
          className="max-w-[90rem] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-32">
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <span className="section-label mb-8 block">Values</span>
              <h2 className="text-section text-[var(--color-white)]">
                私たちの価値観
              </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-6 lg:flex lg:items-end">
              <p className="text-[var(--color-gray-400)] text-lg leading-relaxed">
                SKHが大切にする3つの行動指針。すべての判断と行動の基盤となる価値観です。
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="space-y-0">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 md:py-20 border-t border-[var(--color-gray-800)] items-center">
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <span className="text-6xl md:text-8xl font-extralight text-[var(--color-gray-800)] group-hover:text-[var(--color-accent)] transition-colors duration-700">
                      {value.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-5">
                    <h3 className="text-2xl md:text-4xl font-light text-[var(--color-white)] group-hover:text-[var(--color-accent)] transition-colors duration-500">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="text-[var(--color-gray-400)] text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Hover Line Effect */}
                <div className="h-px bg-[var(--color-gray-800)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--color-accent)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Large Background Text */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none select-none overflow-hidden opacity-30">
        <span className="text-[15vw] font-extralight text-[var(--color-gray-900)] leading-none tracking-tighter">
          04
        </span>
      </div>
    </section>
  )
}
