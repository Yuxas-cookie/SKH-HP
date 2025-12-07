'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { NoiseTexture } from '@/components/ui/noise-texture'
import { MagneticButton } from '@/components/ui/magnetic-button'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <CustomCursor />
      <NoiseTexture opacity={0.03} />
      <Navigation variant="dark" />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden pt-20">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p
              variants={staggerItem}
              className="text-amber-400 text-sm tracking-[0.4em] uppercase mb-8 font-medium"
            >
              Contact
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] tracking-tight mb-8"
            >
              お問い合わせ
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed"
            >
              ご質問やご相談がございましたら、お気軽にお問い合わせください。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">
                  Email
                </h3>
                <p className="text-lg font-light">info@skh.co.jp</p>
              </div>

              <div>
                <h3 className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">
                  Location
                </h3>
                <p className="text-lg font-light">東京都</p>
              </div>

              <div>
                <h3 className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">
                  Business Hours
                </h3>
                <p className="text-lg font-light">
                  平日 9:00 - 18:00
                  <br />
                  <span className="text-neutral-500 text-sm">土日祝休み</span>
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-neutral-900/50 border border-amber-500/30 p-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light mb-4">送信完了</h3>
                  <p className="text-neutral-400">
                    お問い合わせありがとうございます。
                    <br />
                    担当者より2営業日以内にご連絡いたします。
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm text-neutral-500 mb-2">お名前 *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-neutral-500 mb-2">メールアドレス *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-500 mb-2">会社名</label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="株式会社〇〇"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-500 mb-2">お問い合わせ内容 *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors resize-none"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full text-sm tracking-wide font-semibold shadow-2xl shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    >
                      <span className={`transition-opacity ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                        送信する
                      </span>
                      {isSubmitting && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-32 px-8 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 text-sm tracking-[0.4em] uppercase mb-6 font-medium">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">よくあるご質問</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: '初回相談は無料ですか？',
                a: 'はい、初回のご相談は無料で承っております。お気軽にお問い合わせください。',
              },
              {
                q: 'プロジェクトの規模や期間の目安を教えてください。',
                a: 'プロジェクトの内容によって大きく異なりますが、小規模なAI導入で1-3ヶ月、大規模なDX推進プロジェクトで6ヶ月-1年程度が目安です。',
              },
              {
                q: '対応可能な業界に制限はありますか？',
                a: '特に制限はございません。製造業、金融、小売、医療など、幅広い業界での実績がございます。',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-neutral-800 pb-6"
              >
                <h3 className="text-lg font-medium mb-3">{item.q}</h3>
                <p className="text-neutral-400">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
