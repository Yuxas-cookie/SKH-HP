"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function MessageSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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
      id="message"
      ref={ref}
      className="relative bg-[var(--color-dark)] overflow-hidden"
    >
      <div className="section-padding-lg">
        <motion.div
          className="max-w-[90rem] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="mb-20 md:mb-32">
            <span className="section-label">Message</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column - Photo & Name */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                {/* Photo */}
                <div className="aspect-[3/4] bg-[var(--color-gray-900)] mb-10 relative overflow-hidden">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[var(--color-gray-700)] text-sm tracking-[0.2em] uppercase">Photo</span>
                  </div>
                  {/* Decorative border */}
                  <div className="absolute inset-0 border border-[var(--color-gray-800)]" />
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-12 h-px bg-[var(--color-accent)]" />
                  <div className="absolute top-0 left-0 w-px h-12 bg-[var(--color-accent)]" />
                </div>

                {/* Name */}
                <div>
                  <span className="text-[var(--color-gray-600)] text-xs tracking-[0.25em] uppercase block mb-3">
                    Representative Director
                  </span>
                  <h3 className="text-[var(--color-white)] text-3xl md:text-4xl font-light mb-2">
                    片山 弘
                  </h3>
                  <span className="text-[var(--color-gray-500)] text-sm tracking-wider">
                    Hiroshi Katayama
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Message */}
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <h2 className="text-section text-[var(--color-white)] mb-16 md:mb-20">
                代表挨拶
              </h2>

              <div className="space-y-10 text-[var(--color-gray-400)] text-lg md:text-xl leading-[2] font-light">
                <p>
                  私は昔から、人に喜んでもらうことや、驚きと感動が生まれる瞬間をつくることが心から好きでした。
                </p>

                <p className="text-[var(--color-gray-500)]">
                  体育祭では応援団長、文化祭では舞台主演をするタイプです。
                </p>

                <p>
                  誰かの世界が広がる瞬間、未来の可能性に光が差す瞬間、一歩踏み出した表情が変わる瞬間——その場に立ち会えることに、深い喜びを感じてきました。
                </p>

                <p>
                  だから私は、その感動と喜びを、仲間へ、顧客へ、社会へと広げていきたい。誰かの人生や事業が前へ動き出す瞬間に寄り添い、その喜びを共に分かち合いたいのです。
                </p>

                {/* Highlight Quote */}
                <blockquote className="py-10 my-16 border-l-2 border-[var(--color-accent)] pl-10">
                  <p className="text-[var(--color-white)] text-2xl md:text-3xl font-light leading-relaxed">
                    アイデアだけで終わらせない。
                    <br />
                    流行の言葉を並べるだけでも終わらせない。
                  </p>
                </blockquote>

                <p>
                  現場で共に考え、共に悩み、共に動き、成果が出るまで伴走する。そして、確かな一歩の前進を必ず生み出す。
                </p>

                <p>
                  私たちが目指しているのは、共に成長し、共に勝つ世界。変化と挑戦を、当たり前に楽しむ文化。
                </p>

                <p>
                  その中心に立ち、人生と事業のターニングポイントを創り続けること。それがSKHの存在意義です。
                </p>

                <p className="text-[var(--color-white)] pt-8">
                  これからも、感動と喜びが連鎖する未来、理想を実現していける文化を、創っていきます。
                </p>
              </div>

              {/* Signature */}
              <div className="mt-20 pt-10 border-t border-[var(--color-gray-800)]">
                <p className="text-[var(--color-gray-600)] text-sm tracking-wider mb-2">
                  株式会社SKH
                </p>
                <p className="text-[var(--color-accent)] text-xl font-light">
                  代表取締役　片山 弘
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none overflow-hidden opacity-20">
        <span className="text-[15vw] font-extralight text-[var(--color-gray-900)] leading-none">
          MESSAGE
        </span>
      </div>
    </section>
  )
}
