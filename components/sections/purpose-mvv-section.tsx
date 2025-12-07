"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function PurposeMVVSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section
      id="purpose"
      ref={ref}
      className="relative bg-[var(--color-black)] overflow-hidden"
    >
      {/* Purpose Section */}
      <div className="section-padding border-b border-[var(--color-gray-900)]">
        <motion.div
          className="max-w-[90rem] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="mb-20 md:mb-32">
            <span className="inline-flex items-center gap-4 text-[var(--color-gray-500)] text-xs tracking-[0.3em] uppercase">
              <span className="w-12 h-px bg-[var(--color-accent)]" />
              Purpose
            </span>
          </motion.div>

          {/* Purpose Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <h2 className="text-section text-[var(--color-white)] mb-12">
                感動と喜びを
                <br />
                <span className="text-[var(--color-accent)]">届ける</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-5 lg:pt-8">
              <div className="space-y-8 text-[var(--color-gray-400)] text-lg leading-relaxed">
                <p>
                  新しい体験に出会ったとき。
                  未知の景色が開けたとき。
                  描いた理想が現実に触れたとき。
                </p>
                <p className="text-[var(--color-white)] text-xl font-light">
                  その瞬間に、人は心から感動する。
                </p>
                <p>
                  その喜びを、共に味わい、共に分かち合う。
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div className="section-padding">
        <motion.div
          className="max-w-[90rem] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-gray-900)]">
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="bg-[var(--color-black)] p-8 md:p-12 lg:p-16"
            >
              <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase mb-6 block">
                Mission
              </span>
              <h3 className="text-subsection text-[var(--color-white)] mb-8">
                前進する未来の
                <br />
                実現へ
              </h3>
              <div className="space-y-4 text-[var(--color-gray-400)] leading-relaxed">
                <p>
                  世界は日々変化し、時代の流れとともに、進むべき方向も、戦い方も変わり続けていく。
                </p>
                <p>
                  その変化の中にも、人にも企業にも、それぞれが思い描く理想の未来がある。
                </p>
                <p className="text-[var(--color-white)]">
                  私たちは、関わるすべての人を圧倒的に前へ進め、共に成長し、共に勝つ世界を創る。
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="bg-[var(--color-black)] p-8 md:p-12 lg:p-16"
            >
              <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase mb-6 block">
                Vision
              </span>
              <h3 className="text-subsection text-[var(--color-white)] mb-8">
                CHANGE
                <br />
                is NEAR
              </h3>
              <div className="space-y-4 text-[var(--color-gray-400)] leading-relaxed">
                <p>
                  私たちは、変化を身近に当たり前にするための仕組みと実行力を提供します。
                </p>
                <p className="text-[var(--color-white)]">
                  AI人材の内製化、DX化、AX化の導入成功率100％。
                </p>
                <p>
                  それを、業界の常識へと書き換える。
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div variants={itemVariants} className="mt-px">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-gray-900)]">
              {[
                {
                  title: "Win-Win or No Deal",
                  description: "片側だけの勝ちは、勝ちではない。全員で勝てる選択だけをします。"
                },
                {
                  title: "成果、実現にこだわる",
                  description: "努力や過程ではなく結果にこだわります。"
                },
                {
                  title: "共に勝つ",
                  description: "社員、顧客、パートナー、関わる全ての人と勝つ。味方を増やし、全員で勝ちにいく。"
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-black)] p-8 md:p-10 group hover:bg-[var(--color-gray-900)] transition-colors duration-500"
                >
                  <span className="text-[var(--color-gray-600)] text-xs tracking-[0.2em] uppercase mb-4 block">
                    Value 0{index + 1}
                  </span>
                  <h4 className="text-[var(--color-white)] text-lg md:text-xl font-light mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                    {value.title}
                  </h4>
                  <p className="text-[var(--color-gray-500)] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
