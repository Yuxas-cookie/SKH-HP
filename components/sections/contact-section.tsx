"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function ContactSection() {
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
      id="contact"
      ref={ref}
      className="relative bg-[var(--color-dark)] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[var(--color-accent)] opacity-[0.02] blur-[150px]" />

      <div className="section-padding-lg">
        <motion.div
          className="max-w-[90rem] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="mb-20 md:mb-32">
            <span className="section-label">Contact</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column - Text */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <h2 className="text-section text-[var(--color-white)] mb-10">
                お問い合わせ
              </h2>
              <p className="text-[var(--color-gray-400)] text-xl leading-relaxed font-light mb-16">
                AI・DX導入のご相談、人材育成のお問い合わせなど、どんなことでもお気軽にご連絡ください。
              </p>

              {/* Contact Info */}
              <div className="space-y-10">
                <div className="group">
                  <span className="text-[var(--color-gray-600)] text-xs tracking-[0.25em] uppercase block mb-3">
                    Email
                  </span>
                  <a
                    href="mailto:sekaino.hiroshi34@gmail.com"
                    className="text-[var(--color-white)] text-xl font-light hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    sekaino.hiroshi34@gmail.com
                  </a>
                </div>
                <div className="group">
                  <span className="text-[var(--color-gray-600)] text-xs tracking-[0.25em] uppercase block mb-3">
                    Phone
                  </span>
                  <a
                    href="tel:090-3618-4320"
                    className="text-[var(--color-white)] text-xl font-light hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    090-3618-4320
                  </a>
                </div>
                <div className="group">
                  <span className="text-[var(--color-gray-600)] text-xs tracking-[0.25em] uppercase block mb-3">
                    Address
                  </span>
                  <p className="text-[var(--color-white)] text-xl font-light">
                    〒565-0842<br />
                    大阪府吹田市千里山東2-4-3-201
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-16 pt-10 border-t border-[var(--color-gray-800)]">
                <p className="text-[var(--color-gray-500)] text-sm">
                  お問い合わせから<span className="text-[var(--color-accent)]">48時間以内</span>にご返信いたします。
                </p>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-[var(--color-gray-500)] text-xs tracking-[0.2em] uppercase mb-6">
                      お名前 <span className="text-[var(--color-accent)]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="input-premium"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--color-gray-500)] text-xs tracking-[0.2em] uppercase mb-6">
                      会社名
                    </label>
                    <input
                      type="text"
                      className="input-premium"
                      placeholder="株式会社〇〇"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[var(--color-gray-500)] text-xs tracking-[0.2em] uppercase mb-6">
                    メールアドレス <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="input-premium"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[var(--color-gray-500)] text-xs tracking-[0.2em] uppercase mb-6">
                    お問い合わせ内容 <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="input-premium resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>

                <div className="pt-6">
                  <button type="submit" className="btn-premium-fill w-full md:w-auto">
                    <span>送信する</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden opacity-20">
        <span className="text-[15vw] font-extralight text-[var(--color-gray-900)] leading-none">
          CONTACT
        </span>
      </div>
    </section>
  )
}
