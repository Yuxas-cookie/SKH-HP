'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
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

export default function PurposePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <CustomCursor />
      <NoiseTexture opacity={0.02} />
      <Navigation variant="light" />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Background elements */}
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-6xl mx-auto px-8 text-center relative z-10"
        >
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p
              variants={staggerItem}
              className="text-amber-600 text-sm tracking-[0.4em] uppercase mb-8 font-medium"
            >
              Purpose
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] tracking-tight mb-8"
            >
              感動と喜びが
              <br />
              <span className="text-amber-600">連鎖</span>する未来へ
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed"
            >
              私たちは、テクノロジーの力で人々の可能性を解き放ち、
              新しい価値を創造し続けます。
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
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

      {/* Content Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
                なぜ私たちは
                <br />
                存在するのか
              </h2>
              <div className="w-16 h-px bg-amber-400 mb-8" />
            </div>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                テクノロジーは、人々の生活を豊かにし、企業の成長を加速させる力を持っています。
                しかし、その恩恵を受けられる人々はまだ限られています。
              </p>
              <p>
                私たちSKHは、AI・DX・AXの専門知識と実践経験を活かし、
                すべての企業と人々がテクノロジーの力を享受できる社会を実現します。
              </p>
              <p>
                一人ひとりの成功が、次の誰かの成功を生み出す。
                そんな感動と喜びの連鎖を、私たちは創り出していきます。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 px-8 bg-gradient-to-br from-stone-100 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-amber-600 text-sm tracking-[0.4em] uppercase mb-6 font-medium">
              Our Values
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">大切にしている価値観</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: '常に新しい可能性を追求し、既存の枠を超えた解決策を提案します。' },
              { title: 'Partnership', desc: 'お客様と共に歩み、真のパートナーとして成功を共有します。' },
              { title: 'Excellence', desc: '妥協のない品質と、期待を超える成果を追求し続けます。' },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 hover:shadow-xl transition-shadow duration-500"
              >
                <span className="text-6xl font-extralight text-amber-200">0{i + 1}</span>
                <h3 className="text-xl font-medium mt-4 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-neutral-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-8">
              共に未来を創りませんか
            </h2>
            <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
              私たちのパーパスに共感いただけましたら、ぜひお気軽にお問い合わせください。
            </p>
            <MagneticButton
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full text-sm tracking-wide font-semibold shadow-2xl shadow-amber-500/30"
            >
              お問い合わせ
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
