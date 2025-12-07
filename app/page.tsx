'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { SplineScene } from '@/components/ui/spline-scene'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { NoiseTexture } from '@/components/ui/noise-texture'
import { MagneticButton } from '@/components/ui/magnetic-button'

// Stagger animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 noise-overlay">
      <CustomCursor />
      <NoiseTexture opacity={0.02} />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass-dark"
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extralight text-amber-400 hover:text-amber-300 transition-colors tracking-wider">
            SKH
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {['Purpose', 'Mission', 'Service', 'Company'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-sm text-neutral-400 hover:text-amber-400 transition-colors link-underline"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <MagneticButton
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-sm rounded-full font-medium shadow-lg shadow-amber-500/20"
            >
              Contact
            </MagneticButton>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Hero Section with Spline 3D */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="min-h-screen w-full bg-black relative overflow-hidden"
      >
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <Card className="w-full h-screen bg-black/[0.96] border-0 rounded-none relative overflow-hidden">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={400} />

          <motion.div style={{ y: heroY }} className="flex h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-16 lg:p-24 relative z-10 flex flex-col justify-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div variants={staggerItem}>
                  <span className="inline-block px-5 py-2 border border-amber-500/30 rounded-full text-amber-400 text-xs tracking-[0.25em] uppercase bg-amber-500/5 backdrop-blur-sm">
                    Technology Company
                  </span>
                </motion.div>

                <motion.h1
                  variants={staggerItem}
                  className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight"
                >
                  未来を創造する
                  <br />
                  <span className="text-shimmer inline-block mt-2">テクノロジー</span>
                  <span className="text-white">の力</span>
                </motion.h1>

                <motion.p
                  variants={staggerItem}
                  className="text-lg md:text-xl text-neutral-400 font-light max-w-xl leading-relaxed"
                >
                  私たちは、AI・DX・AXの力で企業と人の可能性を解き放ち、
                  感動と喜びが連鎖する未来を共に創ります。
                </motion.p>

                <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 pt-4">
                  <MagneticButton
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full text-sm tracking-wide font-semibold shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-shadow"
                  >
                    お問い合わせ
                  </MagneticButton>
                  <MagneticButton
                    href="#purpose"
                    className="inline-flex items-center justify-center px-10 py-5 border border-neutral-700 text-neutral-300 rounded-full text-sm tracking-wide hover:border-amber-500/50 hover:text-amber-400 transition-all"
                  >
                    私たちについて
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </div>

            {/* Right content - 3D Spline */}
            <div className="flex-1 relative hidden md:block min-h-[600px]">
              <div className="absolute inset-0">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
              {/* Overlay gradient for smooth blend */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              className="flex flex-col items-center gap-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-[10px] text-neutral-500 tracking-[0.3em] uppercase">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent" />
            </motion.div>
          </motion.div>
        </Card>
      </motion.section>

      {/* Purpose Section */}
      <ParallaxSection className="py-40 md:py-56 px-8 bg-gradient-to-br from-amber-50 via-white to-stone-100 relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <motion.p
              variants={fadeInUp}
              className="text-amber-600 text-sm tracking-[0.4em] uppercase mb-10 font-medium"
            >
              Purpose
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight leading-[0.95] mb-16 tracking-tight"
            >
              AIの恩恵を
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700">
                すべての人へ
              </span>
              <br />
              届ける
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-stone-500 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light"
            >
              私たちは、AIテクノロジーの力を活用し、
              <br className="hidden md:block" />
              すべての人々がその恩恵を受けられる社会の実現を目指しています。
            </motion.p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Mission Section */}
      <ParallaxSection id="mission" className="py-32 md:py-40 px-8 bg-stone-950 text-white relative overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-premium opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            <motion.div variants={fadeInUp}>
              <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-6 font-medium">Mission</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-[0.95] tracking-tight">
                企業と個人が持つ
                <br />
                <span className="text-amber-400">可能性を解き放つ</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-neutral-400 text-xl leading-relaxed font-light">
              AI・DX・AXの導入支援を通じて、企業と個人が持つ潜在的な可能性を最大限に引き出します。
              テクノロジーの力で、ビジネスと人生を次のステージへ。
            </motion.p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800/50 rounded-2xl overflow-hidden"
          >
            {[
              { icon: '↗', title: 'Accelerate', desc: 'ビジネス変革を加速させ、競争優位性を確立します。' },
              { icon: '◈', title: 'Innovate', desc: '革新的なソリューションで新たな価値を創造します。' },
              { icon: '∞', title: 'Collaborate', desc: '共に成長するパートナーとして伴走します。' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="bg-stone-900/80 p-10 md:p-12 hover:bg-stone-800/80 transition-all duration-500 group"
              >
                <div className="text-5xl text-amber-400/40 group-hover:text-amber-400 transition-colors duration-500 mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-light mb-4 text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-500 group-hover:text-neutral-400 transition-colors leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Vision Section */}
      <ParallaxSection className="min-h-screen flex items-center justify-center px-8 bg-white relative overflow-hidden">
        {/* Concentric circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[800, 600, 400, 200].map((size, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-amber-200/30"
              style={{ width: size, height: size }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: i * 0.15 }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <motion.div variants={scaleIn}>
              <p className="text-amber-600 text-sm tracking-[0.4em] uppercase mb-10 font-medium">Vision</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-relaxed text-stone-800">
                日本中にAI人材を増やし
                <br />
                <motion.span
                  className="inline-block my-6 px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full text-2xl md:text-4xl font-light shadow-xl shadow-amber-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  感動と喜び
                </motion.span>
                <br />
                が連鎖している社会を実現する
              </h2>
            </motion.div>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Value Section */}
      <ParallaxSection className="py-32 md:py-40 px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <motion.p variants={fadeInUp} className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Value
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-extralight tracking-tight">
              私たちの価値観
            </motion.h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            {[
              { num: '01', title: '変化を楽しむ', sub: 'Embrace Change', desc: '毎日ターニングポイント。変化を恐れず、むしろ楽しみながら前進し続けます。' },
              { num: '02', title: '挑戦を続ける', sub: 'Keep Challenging', desc: 'さあ、始めよう。毎日。失敗を恐れず、常に新しいことに挑戦し続けます。' },
              { num: '03', title: '共創する', sub: 'Co-Create', desc: '共に成長し、共に勝つ。お客様と共に価値を創造し、成功を分かち合います。' },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group bg-white rounded-3xl p-8 md:p-14 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-transparent hover:border-amber-200"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <span className="text-8xl md:text-9xl font-extralight text-amber-100 group-hover:text-amber-300 transition-colors duration-500 leading-none">
                    {value.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-4 mb-3">
                      <h3 className="text-3xl md:text-4xl font-light group-hover:text-amber-700 transition-colors">
                        {value.title}
                      </h3>
                      <span className="text-amber-600 text-sm font-medium tracking-wide">{value.sub}</span>
                    </div>
                    <p className="text-stone-500 text-lg md:text-xl leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Service Section */}
      <ParallaxSection id="service" className="py-32 md:py-40 px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <motion.p variants={fadeInUp} className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Business
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight">
              事業内容
            </motion.h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {[
              { num: '01', name: 'Turning AX', category: '人材開発・人材教育事業', tagline: 'その企業のAI化のターニングポイントになる' },
              { num: '02', name: 'Solution AX', category: 'システム導入支援', tagline: '事業を見て、最適解を創る' },
              { num: '03', name: 'AX Partner', category: '顧問サービス', tagline: '伴走するAI顧問' },
              { num: '04', name: 'Turning AX Academy', category: '教育・スクール事業', tagline: '人生を前へ動かす、AIとAXの実装スクール' },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group relative bg-gradient-to-br from-amber-500/10 to-transparent p-10 md:p-14 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 overflow-hidden hover-lift"
              >
                {/* Large background number */}
                <div className="absolute -top-4 -right-4 text-[150px] font-extralight text-white/[0.03] group-hover:text-amber-500/10 transition-colors duration-500 leading-none">
                  {service.num}
                </div>

                <div className="relative z-10">
                  <p className="text-amber-400/70 text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                    {service.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-neutral-400 text-lg group-hover:text-neutral-300 transition-colors">
                    {service.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Message Section */}
      <ParallaxSection className="py-40 md:py-56 px-8 bg-amber-50 relative overflow-hidden">
        {/* Large quote mark */}
        <div className="absolute top-10 md:top-20 left-5 md:left-20 text-[200px] md:text-[400px] font-serif text-amber-200/30 leading-none select-none">
          "
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedSection className="text-center">
            <motion.p variants={fadeInUp} className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-12 font-medium">
              Message
            </motion.p>

            <motion.blockquote
              variants={scaleIn}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-tight text-stone-800 mb-16"
            >
              毎日が、
              <span className="text-amber-600">ターニングポイント</span>
              だ。
            </motion.blockquote>

            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto text-stone-600 leading-relaxed space-y-4 text-lg md:text-xl mb-16">
              <p>AIの時代が本格的に幕を開けました。この変化は、脅威ではなく、チャンスです。</p>
              <p>私たちSKHは、すべての企業、すべての人がAIの恩恵を受けられる社会を目指しています。</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-stone-400 text-sm mb-3 tracking-wide">代表取締役 CEO</p>
              <p className="text-3xl text-stone-800 tracking-wider font-light">世界野 博嗣</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Company Section */}
      <ParallaxSection id="company" className="py-32 md:py-40 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Company
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-extralight tracking-tight">
              会社概要
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeInUp} className="bg-stone-50 rounded-3xl p-8 md:p-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {[
                  { label: '会社名', value: '株式会社SKH' },
                  { label: '設立', value: '2024年' },
                  { label: '代表者', value: '世界野 博嗣' },
                  { label: '所在地', value: '東京都渋谷区' },
                ].map((item, i) => (
                  <div key={i} className="border-b border-amber-100 pb-6">
                    <p className="text-stone-400 text-sm mb-2 tracking-wide">{item.label}</p>
                    <p className="text-stone-800 text-xl font-light">{item.value}</p>
                  </div>
                ))}
                <div className="md:col-span-2 border-b border-amber-100 pb-6">
                  <p className="text-stone-400 text-sm mb-2 tracking-wide">事業内容</p>
                  <p className="text-stone-800 text-xl font-light">AI・DX・AX導入支援、人材育成、顧問サービス</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Contact Section */}
      <section className="py-32 md:py-40 px-8 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-8 font-medium">
              Contact
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-extralight mb-10 tracking-tight">
              お問い合わせ
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-neutral-400 text-xl mb-14 leading-relaxed">
              AI・DX・AXの導入に関するご相談、人材育成のご依頼など、
              <br className="hidden md:block" />
              お気軽にお問い合わせください。
            </motion.p>
            <motion.div variants={fadeInUp}>
              <MagneticButton
                href="/contact"
                className="inline-block px-14 py-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full text-lg tracking-wide font-semibold shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-shadow"
              >
                お問い合わせフォームへ
              </MagneticButton>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 bg-black text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
              <p className="text-4xl font-extralight text-amber-400 mb-3 tracking-wider">SKH</p>
              <p className="text-neutral-500 text-sm">© 2024 SKH Inc. All rights reserved.</p>
            </div>
            <div className="flex gap-10">
              {[
                { href: '/privacy', label: 'Privacy' },
                { href: '/terms', label: 'Terms' },
                { href: '/tokushoho', label: '特定商取引法' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-500 hover:text-amber-400 text-sm transition-colors link-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Animated Section Component
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax Section Component
function ParallaxSection({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])

  return (
    <section ref={ref} id={id} className={`relative ${className}`}>
      <motion.div style={{ y }} className="relative z-10">
        {children}
      </motion.div>
    </section>
  )
}
