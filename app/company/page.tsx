'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
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

const companyInfo = [
  { label: '会社名', value: '株式会社SKH' },
  { label: '設立', value: '2024年' },
  { label: '代表者', value: '代表取締役' },
  { label: '所在地', value: '東京都' },
  { label: '事業内容', value: 'AI導入支援、DX推進コンサルティング、AI人材育成' },
]

export default function CompanyPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <CustomCursor />
      <NoiseTexture opacity={0.03} />
      <Navigation variant="dark" />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-6xl mx-auto px-8 text-center relative z-10"
        >
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p
              variants={staggerItem}
              className="text-amber-400 text-sm tracking-[0.4em] uppercase mb-8 font-medium"
            >
              Company
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] tracking-tight mb-8"
            >
              私たちに<span className="text-shimmer">ついて</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed"
            >
              テクノロジーで未来を創る。SKHの企業情報をご紹介します。
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Company Info */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-amber-400 text-sm tracking-[0.4em] uppercase mb-6 font-medium">
              Company Information
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">会社概要</h2>
          </motion.div>

          <div className="space-y-0">
            {companyInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid md:grid-cols-4 gap-4 py-6 border-b border-neutral-800"
              >
                <span className="text-neutral-500 text-sm tracking-wider">{item.label}</span>
                <span className="md:col-span-3 font-light">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-amber-400 text-sm tracking-[0.4em] uppercase mb-6 font-medium">
              Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8">私たちの哲学</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Vision',
                content: 'AI・DX・AXで、すべての企業と人の可能性を解き放つ世界を実現する',
              },
              {
                title: 'Mission',
                content: 'テクノロジーの力で、感動と喜びが連鎖する未来を共に創る',
              },
              {
                title: 'Value',
                content: 'Innovation・Partnership・Excellence の3つの価値観を軸に行動する',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900/50 border border-neutral-800 p-10 hover:border-amber-500/30 transition-colors duration-500"
              >
                <h3 className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium mb-6">
                  {item.title}
                </h3>
                <p className="text-lg font-light leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from CEO */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-400 text-sm tracking-[0.4em] uppercase mb-6 font-medium">
              Message
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-12">代表メッセージ</h2>

            <div className="relative">
              <span className="absolute -top-8 -left-4 text-8xl text-amber-500/10 font-serif">"</span>
              <div className="space-y-6 text-lg font-light leading-relaxed text-neutral-300">
                <p>
                  私たちSKHは、テクノロジーの力で人々の可能性を解き放つことを使命としています。
                </p>
                <p>
                  AI、DX、AXという言葉が広く知られるようになった今日でも、
                  その恩恵を十分に受けられている企業や人々はまだまだ限られています。
                </p>
                <p>
                  私たちは、この状況を変えたい。一社でも多くの企業が、一人でも多くの人が、
                  テクノロジーの力を活用して成長できる世界を実現したいと考えています。
                </p>
                <p>
                  感動と喜びの連鎖を、私たちと共に創りましょう。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-black">
              一緒に働きませんか
            </h2>
            <p className="text-black/70 text-lg mb-12 max-w-2xl mx-auto">
              私たちと共に、テクノロジーで未来を創る仲間を募集しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center justify-center px-12 py-5 bg-black text-amber-400 rounded-full text-sm tracking-wide font-semibold shadow-2xl"
              >
                お問い合わせ
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
