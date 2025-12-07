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

export default function MissionPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const missions = [
    {
      number: '01',
      title: 'AI導入支援',
      description: '最先端のAI技術を、お客様のビジネスに最適な形で導入。業務効率化から新規事業創出まで、幅広くサポートします。',
    },
    {
      number: '02',
      title: 'DX推進コンサルティング',
      description: 'デジタルトランスフォーメーションの戦略策定から実行まで、一貫したサポートを提供します。',
    },
    {
      number: '03',
      title: 'AI人材育成',
      description: '企業内でAIを活用できる人材を育成。実践的なプログラムで、即戦力となる人材を輩出します。',
    },
    {
      number: '04',
      title: 'AXによる変革',
      description: 'AI時代の新しい体験価値を創造。AIによるエクスペリエンス変革で、顧客満足度を飛躍的に向上させます。',
    },
  ]

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
        {/* Background elements */}
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
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
              Mission
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] tracking-tight mb-8"
            >
              テクノロジーで
              <br />
              <span className="text-shimmer">可能性</span>を解き放つ
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed"
            >
              AI・DX・AXの専門知識を駆使し、企業のデジタル変革を加速させます。
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

      {/* Mission Cards */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-amber-400 text-sm tracking-[0.4em] uppercase mb-6 font-medium">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">私たちの使命</h2>
          </motion.div>

          <div className="space-y-8">
            {missions.map((mission, i) => (
              <motion.div
                key={mission.number}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative border-l-2 border-neutral-800 hover:border-amber-500 pl-8 py-8 transition-colors duration-500"
              >
                <div className="absolute left-0 top-8 w-3 h-3 -translate-x-[7px] bg-neutral-800 group-hover:bg-amber-500 transition-colors duration-500" />
                <span className="text-5xl font-extralight text-neutral-800 group-hover:text-amber-500/50 transition-colors duration-500">
                  {mission.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-light mt-4 mb-4 group-hover:text-amber-400 transition-colors duration-500">
                  {mission.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed max-w-2xl">
                  {mission.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-8">
              私たちの<span className="text-amber-400">実績</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              これまでに多くの企業様のデジタル変革をサポートしてきました。
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-black">
              ミッションを共に遂行しませんか
            </h2>
            <p className="text-black/70 text-lg mb-12 max-w-2xl mx-auto">
              貴社のデジタル変革を、私たちがサポートします。
            </p>
            <MagneticButton
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-5 bg-black text-amber-400 rounded-full text-sm tracking-wide font-semibold shadow-2xl"
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
