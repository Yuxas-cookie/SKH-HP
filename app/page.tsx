'use client'

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { SplineScene } from '@/components/ui/spline-scene'
import { Card } from '@/components/ui/card'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { NoiseTexture } from '@/components/ui/noise-texture'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { EvervaultCard } from '@/components/ui/evervault-card'
import { WarpBackground } from '@/components/ui/warp-background'
import { NavTransitionProvider, useNavTransition } from '@/components/ui/nav-transition'
import { TypewriterText, TypewriterTitle } from '@/components/ui/typewriter-text'
import { LoadingScreen } from '@/components/ui/loading-screen'

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
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      <NavTransitionProvider>
        <HomeContent />
      </NavTransitionProvider>
    </>
  )
}

function HomeContent() {
  const { navigateTo } = useNavTransition()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'purpose', label: 'Purpose' },
    { id: 'mission', label: 'Mission' },
    { id: 'service', label: 'Service' },
    { id: 'company', label: 'Company' },
  ]

  const handleMobileNavClick = (id: string, label: string) => {
    setIsMobileMenuOpen(false)
    navigateTo(id, label)
  }

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
            株式会社SKH
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <button
                  onClick={() => navigateTo(item.id, item.label)}
                  className="text-sm text-neutral-400 hover:text-amber-400 transition-colors link-underline cursor-pointer bg-transparent border-none"
                >
                  {item.label}
                </button>
              </motion.div>
            ))}
            <MagneticButton
              onClick={() => navigateTo('contact', 'Contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-sm rounded-full font-medium shadow-lg shadow-amber-500/20"
            >
              Contact
            </MagneticButton>
          </div>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-8 py-6 space-y-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <button
                      onClick={() => handleMobileNavClick(item.id, item.label)}
                      className="block w-full text-left text-lg text-neutral-300 hover:text-amber-400 transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <button
                    onClick={() => handleMobileNavClick('contact', 'Contact')}
                    className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-sm rounded-full font-medium"
                  >
                    Contact
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section with Spline 3D */}
      <section className="min-h-screen w-full bg-black relative overflow-hidden">
        <Card className="w-full min-h-screen md:h-screen bg-black/[0.96] border-0 rounded-none relative overflow-hidden">

          <div className="flex flex-col md:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-16 lg:p-24 relative z-10 flex flex-col justify-center pt-24 md:pt-0">
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
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] md:leading-[0.95] tracking-tight"
                >
                  未来を創造する
                  <br />
                  <span className="text-shimmer inline-block mt-1 md:mt-2">テクノロジー</span>
                  <span className="text-white">の力</span>
                </motion.h1>

                <motion.p
                  variants={staggerItem}
                  className="text-base sm:text-lg md:text-xl text-neutral-400 font-light max-w-xl leading-relaxed"
                >
                  私たちは、AI・DX・AXの力で企業と人の可能性を解き放ち、感動と喜びが連鎖する未来を共に創ります。
                </motion.p>

                <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 pt-4">
                  <MagneticButton
                    onClick={() => navigateTo('contact', 'Contact')}
                    className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full text-sm tracking-wide font-semibold shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-shadow"
                  >
                    お問い合わせ
                  </MagneticButton>
                  <MagneticButton
                    onClick={() => navigateTo('purpose', 'Purpose')}
                    className="inline-flex items-center justify-center px-10 py-5 border border-neutral-700 text-neutral-300 rounded-full text-sm tracking-wide hover:border-amber-500/50 hover:text-amber-400 transition-all"
                  >
                    私たちについて
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </div>

            {/* Right content - 3D Spline */}
            <div className="flex-1 relative min-h-[400px] md:min-h-[600px] -mx-8 md:mx-0">
              <div className="absolute inset-0">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
              {/* Overlay gradient for smooth blend */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none md:hidden" />
            </div>
          </div>

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

      </section>

      {/* Purpose Section */}
      <ParallaxSection id="purpose" className="py-40 md:py-56 px-8 bg-gradient-to-br from-amber-50 via-white to-stone-100 relative overflow-hidden">
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
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-16 tracking-tight">
              <TypewriterTitle
                parts={[
                  { text: '感動と喜び', isGradient: true },
                  { text: 'を届ける', isGradient: false },
                ]}
                delay={0.3}
              />
            </h2>
            <motion.div
              variants={fadeInUp}
              className="text-stone-600 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light space-y-6"
            >
              <p>
                新しい体験に出会ったとき。
                <br />
                未知の景色が開けたとき。
                <br />
                描いた理想が現実に触れたとき。
              </p>
              <p className="text-stone-800 text-2xl md:text-3xl font-normal">
                その瞬間に、人は心から感動する。
              </p>
              <p>
                その喜びを、
                <br />
                共に味わい、共に分かち合う。
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Mission Section */}
      <ParallaxSection id="mission" className="py-32 md:py-40 px-8 bg-black text-white relative overflow-hidden">
        {/* Evervault card background effect */}
        <EvervaultCard className="pointer-events-auto" />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-20">
            <motion.p variants={fadeInUp} className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              Mission
            </motion.p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight mb-8 md:mb-12">
              <TypewriterTitle
                parts={[
                  { text: '前進する未来', isGradient: true },
                  { text: 'の', isGradient: false },
                  { text: '', isLineBreak: true },
                  { text: '実現へ', isGradient: false },
                ]}
                gradientClassName="text-amber-400"
                delay={0.3}
              />
            </h2>
            <motion.div variants={fadeInUp} className="text-neutral-400 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto font-light space-y-4 md:space-y-6">
              <p>
                世界は日々変化し、時代の流れとともに、<br className="hidden md:block" />進むべき方向も、戦い方も変わり続けていく。
              </p>
              <p>
                その変化の中にも、<br className="hidden md:block" />人にも企業にも、それぞれが思い描く理想の未来がある。
              </p>
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal pt-2 md:pt-4">
                私たちは、関わるすべての人を圧倒的に前へ進め、<br className="hidden md:block" />共に成長し、共に勝つ世界を創る。
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Vision Section */}
      <WarpBackground
        className="py-32 md:py-40 bg-white border-0 rounded-none p-8"
        beamsPerSide={8}
        beamSize={5}
        beamDelayMax={3}
        beamDelayMin={0}
        beamDuration={3}
        perspective={100}
        gridColor="rgba(217, 119, 6, 0.15)"
      >
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 shadow-lg shadow-amber-100/50">
              <motion.p variants={fadeInUp} className="text-amber-600 text-xs sm:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase mb-6 md:mb-10 font-medium">
                Vision
              </motion.p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 md:mb-12">
                <TypewriterText
                  className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700"
                  delay={0.3}
                >
                  CHANGE is NEAR
                </TypewriterText>
              </h2>
              <motion.div variants={fadeInUp} className="text-stone-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-light space-y-4 md:space-y-6">
                <p>
                  私たちは、変化を身近に当たり前にするための<br className="hidden md:block" />仕組みと実行力を提供します。
                </p>
                <p className="text-stone-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal pt-2 md:pt-4">
                  AI人材の内製化、DX化、AX化の導入成功率100％。<br className="hidden md:block" />それを、業界の常識へと書き換える。
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </WarpBackground>

      {/* Value Section */}
      <ParallaxSection className="py-32 md:py-40 px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <motion.p variants={fadeInUp} className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Value
            </motion.p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <TypewriterText delay={0.3}>私たちの価値観</TypewriterText>
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            {[
              { num: '01', title: 'Win-Win or No Deal', desc: '片側だけの勝ちは、勝ちではない。全員で勝てる選択だけをします。' },
              { num: '02', title: '成果、実現にこだわる', desc: '努力や過程ではなく結果にこだわります。' },
              { num: '03', title: '共に勝つ', desc: '社員、顧客、パートナー、関わる全ての人と勝つ。味方を増やし、全員で勝ちにいく。' },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-14 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-transparent hover:border-amber-200"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <span className="text-6xl sm:text-7xl md:text-9xl font-extralight text-amber-100 group-hover:text-amber-300 transition-colors duration-500 leading-none">
                    {value.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-light group-hover:text-amber-700 transition-colors mb-2 md:mb-4">
                      {value.title}
                    </h3>
                    <p className="text-stone-500 text-sm sm:text-base md:text-xl leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Service Section */}
      <ParallaxSection id="service" className="py-32 md:py-40 px-8 bg-gradient-to-b from-black via-stone-950 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <motion.p variants={fadeInUp} className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Business
            </motion.p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <TypewriterText className="text-white" delay={0.3}>事業内容</TypewriterText>
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {[
              {
                num: '01',
                name: 'Turning AX',
                category: '人材開発・人材教育事業',
                tagline: 'その企業のAI化のターニングポイントになる',
                desc: 'DX化人材、AX化人材の内製化支援サービス',
              },
              {
                num: '02',
                name: 'Solution AX',
                category: 'AX化システム導入支援',
                tagline: '事業を見て、最適解を創る',
                desc: '変化の起点を共創するAX実装。課題の可視化から実装まで、一気通貫サービス',
              },
              {
                num: '03',
                name: 'AX Partner',
                category: 'AI顧問サービス',
                tagline: '伴走するAI顧問',
                desc: 'Turning AXの後に継続的に伴走。AI活用を定着させるパートナー',
              },
              {
                num: '04',
                name: 'Turning AX Academy',
                category: 'AIエンジニア・AX人材育成',
                tagline: '人生を前へ動かす、AIとAXの実装スクール',
                desc: 'あなたのターニングポイントになる学びとスキルを',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group relative bg-gradient-to-br from-amber-500/10 to-transparent p-6 sm:p-8 md:p-14 rounded-2xl md:rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 overflow-hidden hover-lift"
              >
                {/* Large background number */}
                <div className="absolute -top-4 -right-4 text-[100px] md:text-[150px] font-extralight text-white/[0.03] group-hover:text-amber-500/10 transition-colors duration-500 leading-none">
                  {service.num}
                </div>

                <div className="relative z-10">
                  <p className="text-amber-400/70 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 md:mb-4 font-medium">
                    {service.category}
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2 md:mb-3 group-hover:text-amber-300 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-amber-400/80 text-sm sm:text-base md:text-lg mb-2 md:mb-3 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-neutral-500 text-sm sm:text-base group-hover:text-neutral-400 transition-colors leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Message Section */}
      <ParallaxSection className="py-32 md:py-48 px-4 sm:px-8 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            {/* Section header */}
            <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-12">
              <motion.div
                className="inline-block mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="px-6 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs tracking-[0.4em] uppercase font-medium">
                  Message
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <TypewriterText className="text-white" delay={0.3}>代表メッセージ</TypewriterText>
              </h2>
            </motion.div>

            {/* Letter style container */}
            <motion.div
              className="relative bg-[#faf8f5] rounded-sm shadow-2xl shadow-black/50 p-8 sm:p-12 md:p-16 lg:p-20 border border-amber-200/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    transparent,
                    transparent 35px,
                    rgba(180, 160, 140, 0.15) 35px,
                    rgba(180, 160, 140, 0.15) 36px
                  )
                `,
                backgroundPosition: '0 24px',
              }}
            >
              {/* Letter decorative top border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700" />

              {/* Subtle paper texture overlay */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none rounded-sm" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }} />

            {/* First text block */}
            <div className="leading-[2.2] space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl mb-10 md:mb-14 relative z-10" style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', serif" }}>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-stone-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                私は昔から、人に喜んでもらうことや、驚きと感動が生まれる瞬間をつくることが<span className="text-amber-800 font-medium">心から好きでした。</span>
              </motion.p>
              <motion.p
                className="text-stone-500 text-sm sm:text-base md:text-lg italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                体育祭では応援団長、文化祭では舞台主演をするタイプです。
              </motion.p>
              <motion.p
                className="text-stone-600 text-sm sm:text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                誰かの世界が広がる瞬間、未来の可能性に光が差す瞬間、一歩踏み出した表情が変わる瞬間。その場に立ち会えることに、深い喜びを感じてきました。
              </motion.p>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-stone-700 font-medium pt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                だから私は、その感動と喜びを、仲間へ、顧客へ、社会へと広げていきたい。
              </motion.p>
              <motion.p
                className="text-stone-600 text-sm sm:text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                誰かの人生や事業が前へ動き出す瞬間に寄り添い、その喜びを共に分かち合いたいのです。
              </motion.p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 my-10 md:my-14 relative z-10">
              <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-amber-600/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-amber-600/40" />
            </div>

            {/* Second text block */}
            <div className="leading-[2.2] space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl mb-10 md:mb-14 relative z-10" style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', serif" }}>
              <motion.p
                className="text-stone-700 font-medium text-base sm:text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                アイデアだけで終わらせない。流行の言葉を並べるだけでも終わらせない。
              </motion.p>
              <motion.p
                className="text-stone-600 text-sm sm:text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                現場で共に考え、共に悩み、共に動き、成果が出るまで伴走する。そして、確かな一歩の前進を必ず生み出す。
              </motion.p>
              <motion.p
                className="text-stone-600 text-sm sm:text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                私たちが目指しているのは、<span className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-800">共に成長し、共に勝つ世界。</span>変化と挑戦を、当たり前に楽しむ文化。
              </motion.p>
              <motion.p
                className="text-stone-600 text-sm sm:text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                その中心に立ち、人生と事業のターニングポイントを創り続けること。それがSKHの存在意義です。
              </motion.p>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-medium pt-2 text-stone-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                これからも、<span className="text-amber-800">感動と喜びが連鎖する未来、</span>理想を実現していける文化を、創っていきます。
              </motion.p>
            </div>

            {/* Signature */}
            <motion.div
              className="text-right mt-12 md:mt-16 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', serif" }}
            >
              <p className="text-stone-500 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em]">株式会社SKH　代表取締役　片山 弘</p>
            </motion.div>

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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <TypewriterText delay={0.3}>会社概要</TypewriterText>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeInUp} className="bg-stone-50 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {[
                  { label: '会社名', value: '株式会社SKH' },
                  { label: '代表者', value: '片山 弘' },
                  { label: '所在地', value: '大阪府吹田市千里山東2-4-3-201' },
                  { label: '電話番号', value: '090-3618-4320' },
                  { label: 'メールアドレス', value: 'sekaino.hiroshi34@gmail.com' },
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
      <section id="contact" className="py-32 md:py-40 px-8 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 md:mb-8 font-medium">
              Contact
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
              <TypewriterText className="text-white" delay={0.3}>お問い合わせ</TypewriterText>
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg md:text-xl leading-relaxed">
              AI・DX・AXの導入に関するご相談、人材育成のご依頼など、<br className="hidden md:block" />お気軽にお問い合わせください。
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
            action="https://formspree.io/f/sekaino.hiroshi34@gmail.com"
            method="POST"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-neutral-500 mb-2">お名前 *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-500 mb-2">メールアドレス *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-neutral-500 mb-2">会社名</label>
              <input
                type="text"
                name="company"
                className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                placeholder="株式会社〇〇"
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-500 mb-2">お問い合わせ内容 *</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-14 py-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full text-lg tracking-wide font-semibold shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-shadow"
              >
                送信する
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 px-6 md:px-8 bg-black text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-extralight text-amber-400 mb-2 md:mb-3 tracking-wider">SKH</p>
              <p className="text-neutral-500 text-xs sm:text-sm">© 2024 SKH Inc. All rights reserved.</p>
            </div>
            <div className="flex gap-10">
              <Link
                href="/tokushoho"
                className="text-neutral-500 hover:text-amber-400 text-sm transition-colors link-underline"
              >
                特定商取引法
              </Link>
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

