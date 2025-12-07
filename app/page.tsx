'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { SplineScene } from '@/components/ui/spline-scene'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'

// メインサイト: 折衷案デザイン (白ベース + 金アクセント)
export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extralight text-amber-400 hover:text-amber-300 transition-colors">
            SKH
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#purpose" className="text-sm text-neutral-400 hover:text-amber-400 transition-colors">Purpose</a>
            <a href="#mission" className="text-sm text-neutral-400 hover:text-amber-400 transition-colors">Mission</a>
            <a href="#service" className="text-sm text-neutral-400 hover:text-amber-400 transition-colors">Service</a>
            <a href="#company" className="text-sm text-neutral-400 hover:text-amber-400 transition-colors">Company</a>
            <Link href="/contact" className="px-6 py-2 bg-amber-500 text-black text-sm rounded-full hover:bg-amber-400 transition-colors font-medium">
              Contact
            </Link>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section with Spline 3D */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="min-h-screen w-full bg-black relative overflow-hidden"
      >
        <Card className="w-full h-screen bg-black/[0.96] border-0 rounded-none relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            size={400}
          />

          <div className="flex h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-1.5 border border-amber-500/30 rounded-full text-amber-400 text-xs tracking-[0.2em] uppercase bg-amber-500/5">
                  Technology Company
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
              >
                未来を創造する
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                  テクノロジー
                </span>
                の力
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-neutral-400 font-light max-w-xl mb-10 leading-relaxed"
              >
                私たちは、AI・DX・AXの力で企業と人の可能性を解き放ち、
                感動と喜びが連鎖する未来を共に創ります。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 text-sm tracking-wide font-semibold shadow-lg shadow-amber-500/25"
                >
                  お問い合わせ
                </Link>
                <a
                  href="#purpose"
                  className="px-8 py-4 border border-neutral-700 text-neutral-300 rounded-full hover:border-amber-500/50 hover:text-amber-400 transition-all text-sm tracking-wide"
                >
                  私たちについて
                </a>
              </motion.div>
            </div>

            {/* Right content - 3D Spline */}
            <div className="flex-1 relative hidden md:block">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-neutral-500 tracking-widest">SCROLL</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-px h-10 bg-gradient-to-b from-amber-400 to-transparent"
              />
            </div>
          </motion.div>
        </Card>
      </motion.section>

      {/* Purpose Section - グラデーション背景 + 大きな文字 */}
      <section id="purpose" className="py-40 px-8 bg-gradient-to-br from-amber-50 via-white to-stone-100 relative overflow-hidden">
        {/* 装飾的な円 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300/10 rounded-full blur-2xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-600 text-sm tracking-[0.4em] uppercase mb-8">Purpose</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] mb-12">
              AIの恩恵を
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700 font-light">
                すべての人へ
              </span>
              <br />
              届ける
            </h2>
            <p className="text-stone-500 text-xl leading-relaxed max-w-2xl mx-auto">
              私たちは、AIテクノロジーの力を活用し、すべての人々がその恩恵を受けられる社会の実現を目指しています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - 左寄せ + 横スクロールカード風 */}
      <section id="mission" className="py-32 px-8 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4">Mission</p>
              <h2 className="text-4xl md:text-6xl font-extralight leading-tight">
                企業と個人が持つ
                <br />
                <span className="text-amber-400">可能性を解き放つ</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-lg leading-relaxed"
            >
              AI・DX・AXの導入支援を通じて、企業と個人が持つ潜在的な可能性を最大限に引き出します。
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { icon: '↗', title: 'Accelerate', desc: 'ビジネス変革を加速させ、競争優位性を確立' },
              { icon: '◈', title: 'Innovate', desc: '革新的なソリューションで新たな価値を創造' },
              { icon: '∞', title: 'Collaborate', desc: '共に成長するパートナーとして伴走' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-stone-800/50 p-10 border-l border-amber-500/30 hover:bg-stone-800 hover:border-amber-400 transition-all group"
              >
                <div className="text-4xl text-amber-400/50 group-hover:text-amber-400 transition-colors mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-light mb-4 text-white">{item.title}</h3>
                <p className="text-neutral-500 group-hover:text-neutral-400 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - フルスクリーン中央配置 */}
      <section className="min-h-screen flex items-center justify-center px-8 bg-white relative overflow-hidden">
        {/* 背景の装飾線 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] border border-amber-100 rounded-full" />
          <div className="absolute w-[600px] h-[600px] border border-amber-100/50 rounded-full" />
          <div className="absolute w-[400px] h-[400px] border border-amber-100/30 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-amber-600 text-sm tracking-[0.4em] uppercase mb-8">Vision</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight leading-relaxed text-stone-800">
              日本中にAI人材を増やし
              <br />
              <span className="inline-block my-4 px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full text-2xl md:text-4xl">
                感動と喜び
              </span>
              <br />
              が連鎖している社会を実現する
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Value Section - 縦積みアコーディオン風 */}
      <section className="py-32 px-8 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4">Value</p>
            <h2 className="text-4xl md:text-5xl font-extralight">私たちの価値観</h2>
          </div>

          <div className="space-y-4">
            {[
              { num: '01', title: '変化を楽しむ', sub: 'Embrace Change', desc: '毎日ターニングポイント。変化を恐れず、むしろ楽しみながら前進し続けます。' },
              { num: '02', title: '挑戦を続ける', sub: 'Keep Challenging', desc: 'さあ、始めよう。毎日。失敗を恐れず、常に新しいことに挑戦し続けます。' },
              { num: '03', title: '共創する', sub: 'Co-Create', desc: '共に成長し、共に勝つ。お客様と共に価値を創造し、成功を分かち合います。' },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all border border-transparent hover:border-amber-200"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <span className="text-7xl md:text-8xl font-extralight text-amber-100 group-hover:text-amber-300 transition-colors">
                    {value.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-2">
                      <h3 className="text-2xl md:text-3xl font-light">{value.title}</h3>
                      <span className="text-amber-600 text-sm">{value.sub}</span>
                    </div>
                    <p className="text-stone-500 text-lg">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Section - カード形式 */}
      <section id="service" className="py-32 px-8 bg-gradient-to-b from-stone-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4">Business</p>
            <h2 className="text-4xl md:text-6xl font-extralight">事業内容</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: '01', name: 'Turning AX', category: '人材開発・人材教育事業', tagline: 'その企業のAI化のターニングポイントになる', color: 'from-amber-500/20 to-amber-600/5' },
              { num: '02', name: 'Solution AX', category: 'システム導入支援', tagline: '事業を見て、最適解を創る', color: 'from-amber-600/20 to-amber-700/5' },
              { num: '03', name: 'AX Partner', category: '顧問サービス', tagline: '伴走するAI顧問', color: 'from-amber-400/20 to-amber-500/5' },
              { num: '04', name: 'Turning AX Academy', category: '教育・スクール事業', tagline: '人生を前へ動かす、AIとAXの実装スクール', color: 'from-amber-500/20 to-amber-600/5' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative bg-gradient-to-br ${service.color} p-10 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all overflow-hidden`}
              >
                <div className="absolute top-6 right-6 text-8xl font-extralight text-white/5 group-hover:text-amber-500/10 transition-colors">
                  {service.num}
                </div>
                <div className="relative z-10">
                  <p className="text-amber-400/70 text-xs tracking-wider uppercase mb-2">{service.category}</p>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-4 group-hover:text-amber-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">{service.tagline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section - 引用符付き */}
      <section className="py-40 px-8 bg-amber-50 relative overflow-hidden">
        {/* 大きな引用符 */}
        <div className="absolute top-20 left-10 text-[300px] font-serif text-amber-200/30 leading-none">"</div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-8 text-center">Message</p>

            <blockquote className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight text-stone-800 text-center mb-16">
              毎日が、
              <span className="text-amber-600">ターニングポイント</span>
              だ。
            </blockquote>

            <div className="max-w-2xl mx-auto text-stone-600 leading-relaxed space-y-4 text-lg mb-12">
              <p>AIの時代が本格的に幕を開けました。この変化は、脅威ではなく、チャンスです。</p>
              <p>私たちSKHは、すべての企業、すべての人がAIの恩恵を受けられる社会を目指しています。</p>
            </div>

            <div className="text-center">
              <p className="text-stone-400 text-sm mb-2">代表取締役 CEO</p>
              <p className="text-2xl text-stone-800 tracking-wider">世界野 博嗣</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Section - 縦並び */}
      <section id="company" className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4">Company</p>
            <h2 className="text-4xl md:text-5xl font-extralight">会社概要</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { label: '会社名', value: '株式会社SKH' },
                { label: '設立', value: '2024年' },
                { label: '代表者', value: '世界野 博嗣' },
                { label: '所在地', value: '東京都渋谷区' },
              ].map((item, i) => (
                <div key={i} className="border-b border-amber-100 pb-4">
                  <p className="text-stone-400 text-sm mb-1">{item.label}</p>
                  <p className="text-stone-800 text-lg">{item.value}</p>
                </div>
              ))}
              <div className="md:col-span-2 border-b border-amber-100 pb-4">
                <p className="text-stone-400 text-sm mb-1">事業内容</p>
                <p className="text-stone-800 text-lg">AI・DX・AX導入支援、人材育成、顧問サービス</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - グラデーション + CTA */}
      <section className="py-32 px-8 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden">
        {/* 装飾 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-6">Contact</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8">お問い合わせ</h2>
            <p className="text-neutral-400 text-lg mb-12">
              AI・DX・AXの導入に関するご相談、人材育成のご依頼など、
              <br className="hidden md:block" />
              お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 text-base tracking-wide font-semibold shadow-2xl shadow-amber-500/30"
            >
              お問い合わせフォームへ
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-3xl font-extralight text-amber-400 mb-2">SKH</p>
              <p className="text-neutral-500 text-sm">© 2024 SKH Inc. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-neutral-500 hover:text-amber-400 text-sm transition-colors">Privacy</Link>
              <Link href="/terms" className="text-neutral-500 hover:text-amber-400 text-sm transition-colors">Terms</Link>
              <Link href="/tokushoho" className="text-neutral-500 hover:text-amber-400 text-sm transition-colors">特定商取引法</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
