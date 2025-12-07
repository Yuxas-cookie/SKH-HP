'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
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

const services = [
  {
    id: 'ai',
    title: 'AI導入支援',
    subtitle: 'AI Implementation',
    description: '最先端のAI技術を、お客様のビジネスに最適な形で導入します。業務効率化、意思決定支援、顧客体験向上など、AIの力を最大限に活用します。',
    features: ['ChatGPT/LLM導入', '画像認識AI', '予測分析', '自然言語処理'],
  },
  {
    id: 'dx',
    title: 'DX推進',
    subtitle: 'Digital Transformation',
    description: 'デジタルトランスフォーメーションの戦略策定から実行まで、一貫したサポートを提供。既存ビジネスのデジタル化と新規事業創出を支援します。',
    features: ['DX戦略策定', 'システム刷新', 'データ基盤構築', '業務プロセス改革'],
  },
  {
    id: 'ax',
    title: 'AX推進',
    subtitle: 'AI Experience',
    description: 'AI時代の新しい体験価値を創造。AIによるエクスペリエンス変革で、顧客満足度と従業員エンゲージメントを飛躍的に向上させます。',
    features: ['AI チャットボット', 'パーソナライゼーション', 'レコメンドエンジン', 'UX最適化'],
  },
  {
    id: 'education',
    title: 'AI人材育成',
    subtitle: 'AI Education',
    description: '企業内でAIを活用できる人材を育成。実践的なプログラムで、即戦力となるAI人材を輩出します。',
    features: ['AI基礎研修', 'プロンプトエンジニアリング', 'データサイエンス講座', 'ハンズオンワークショップ'],
  },
]

export default function ServicePage() {
  const heroRef = useRef<HTMLElement>(null)
  const [activeService, setActiveService] = useState(services[0].id)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const activeServiceData = services.find((s) => s.id === activeService)!

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
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
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
              Service
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] tracking-tight mb-8"
            >
              最高の<span className="text-amber-600">体験</span>を
              <br />
              デザインする
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed"
            >
              AI・DX・AXの専門知識を結集し、お客様のビジネスに最適なソリューションを提供します。
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

      {/* Interactive Service Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-amber-600 text-sm tracking-[0.4em] uppercase mb-6 font-medium">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">サービス一覧</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Service tabs */}
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-6 border-l-2 transition-all duration-500 ${
                    activeService === service.id
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-stone-200 hover:border-amber-300 hover:bg-stone-50'
                  }`}
                >
                  <span className="text-xs text-stone-400 tracking-wider uppercase">
                    {service.subtitle}
                  </span>
                  <h3 className={`text-2xl font-light mt-2 ${
                    activeService === service.id ? 'text-amber-600' : ''
                  }`}>
                    {service.title}
                  </h3>
                </motion.button>
              ))}
            </div>

            {/* Service details */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-stone-100 to-amber-50 p-10 lg:p-12"
            >
              <span className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium">
                {activeServiceData.subtitle}
              </span>
              <h3 className="text-3xl md:text-4xl font-light mt-4 mb-6">
                {activeServiceData.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-8">
                {activeServiceData.description}
              </p>
              <div className="space-y-3">
                <p className="text-sm font-medium text-stone-800">主な提供内容</p>
                <ul className="grid grid-cols-2 gap-3">
                  {activeServiceData.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-8 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-amber-400 text-sm tracking-[0.4em] uppercase mb-6 font-medium">
              Process
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">プロジェクトの流れ</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'ヒアリング', desc: '課題と目標の明確化' },
              { step: '02', title: '企画・設計', desc: '最適なソリューション設計' },
              { step: '03', title: '開発・導入', desc: '段階的な実装と検証' },
              { step: '04', title: '運用・改善', desc: '継続的な最適化' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-6xl font-extralight text-amber-500/30">{item.step}</span>
                <h3 className="text-xl font-medium mt-4 mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extralight mb-8">
              最適なソリューションをご提案します
            </h2>
            <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
              まずはお気軽にご相談ください。貴社の課題に最適なサービスをご提案いたします。
            </p>
            <MagneticButton
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full text-sm tracking-wide font-semibold shadow-2xl shadow-amber-500/30"
            >
              無料相談を予約
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
