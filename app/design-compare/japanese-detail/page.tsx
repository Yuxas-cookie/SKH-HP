'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

// Design D: 和モダン×黒金 (詳細版)
export default function JapaneseDetailDesign() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Subtle pattern overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/design-compare" className="text-zinc-600 hover:text-amber-400 text-sm transition-colors">
              ← 戻る
            </Link>
            <span className="text-zinc-800">|</span>
            <span className="text-xs text-zinc-600">Design D: Japanese Modern</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#purpose" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors tracking-wider">理念</a>
            <a href="#mission" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors tracking-wider">使命</a>
            <a href="#service" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors tracking-wider">事業</a>
            <a href="#company" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors tracking-wider">会社</a>
            <button className="px-6 py-2 border border-amber-500/50 text-amber-400 text-sm hover:bg-amber-500 hover:text-black transition-all tracking-wider">
              お問合せ
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="relative z-10 min-h-screen flex items-center justify-center px-8"
      >
        {/* Decorative elements */}
        <div className="absolute left-8 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute right-8 bottom-1/4 w-px h-32 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute top-32 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute bottom-32 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-12"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-amber-500/70 text-sm tracking-[0.5em] mb-8"
          >
            株式会社SKH
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mb-8"
          >
            <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-wider leading-tight">
              未来を創造する
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-light mt-4">
              <span className="text-amber-400">技術</span>の力
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-48 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto my-12"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-loose tracking-wide"
          >
            AI・DX・AXの力で
            <br />
            企業と人の可能性を解き放つ
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="group px-12 py-4 border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-black transition-all tracking-widest text-sm">
              詳細を見る
              <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-12 py-4 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white transition-all tracking-widest text-sm">
              お問合せ
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs text-zinc-600 tracking-[0.3em]">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-amber-500/50 to-transparent"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Purpose Section */}
      <section id="purpose" className="relative z-10 py-32 px-8 border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-amber-500/80 text-xs tracking-[0.4em] mb-6">理念 — PURPOSE</p>
                <h2 className="text-4xl md:text-5xl font-light leading-relaxed tracking-wide mb-8">
                  AIの恩恵を
                  <br />
                  <span className="text-amber-400">すべての人へ</span>
                  <br />
                  届ける
                </h2>
                <div className="w-24 h-px bg-gradient-to-r from-amber-500/50 to-transparent mb-8" />
                <p className="text-zinc-400 leading-loose tracking-wide">
                  私たちは、AIテクノロジーの力を活用し、
                  すべての人々がその恩恵を受けられる社会の実現を目指しています。
                  これが私たちの理念であり、存在意義です。
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-amber-500/20">
              {[
                { number: '100+', label: '支援企業数', kanji: '百' },
                { number: '1,000+', label: '育成AI人材', kanji: '千' },
                { number: '98%', label: '顧客満足度', kanji: '満' },
                { number: '24/7', label: 'サポート体制', kanji: '常' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-950 p-8 text-center group hover:bg-zinc-900 transition-colors"
                >
                  <span className="text-6xl font-light text-zinc-800 group-hover:text-amber-500/20 transition-colors absolute">
                    {stat.kanji}
                  </span>
                  <p className="text-3xl md:text-4xl font-light text-amber-400 mb-2 tracking-wider relative">{stat.number}</p>
                  <p className="text-zinc-500 text-xs tracking-wider relative">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="relative z-10 py-32 px-8 border-t border-amber-500/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-500/80 text-xs tracking-[0.4em] mb-8">使命 — MISSION</p>
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed tracking-wide mb-12">
            企業と個人が持つ
            <br />
            <span className="text-amber-400">可能性を解き放つ</span>
            <br />
            サポートを全力で行う
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-12" />
          <p className="text-zinc-400 max-w-2xl mx-auto leading-loose">
            AI・DX・AXの導入支援を通じて、企業と個人が持つ潜在的な可能性を最大限に引き出します。
            テクノロジーの力で、あなたのビジネスと人生を次のステージへ導きます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: '加', title: 'Accelerate', desc: 'ビジネス変革を加速' },
              { icon: '革', title: 'Innovate', desc: '革新的なソリューション' },
              { icon: '創', title: 'Collaborate', desc: '共に成長するパートナー' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 border border-amber-500/10 hover:border-amber-500/30 transition-colors"
              >
                <span className="text-4xl text-amber-500/30 font-light">{item.icon}</span>
                <h3 className="text-lg font-light mt-4 mb-2 tracking-wider">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-y border-amber-500/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-500/80 text-xs tracking-[0.4em] mb-8">志 — VISION</p>
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed tracking-wide">
            日本中にAI人材を増やし
            <br />
            <span className="text-amber-400">「感動と喜び」</span>が
            <br />
            連鎖している社会を実現する
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['AI人材育成', '感動の連鎖', '社会変革'].map((tag, i) => (
              <span key={i} className="px-6 py-2 border border-amber-500/20 text-amber-400/70 text-sm tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="relative z-10 py-32 px-8 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-500/80 text-xs tracking-[0.4em] mb-6">価値 — VALUE</p>
            <h2 className="text-4xl font-light tracking-wide">私たちの価値観</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
            {[
              { num: '壱', title: '変化を楽しむ', sub: 'Embrace Change', desc: '毎日ターニングポイント。変化を恐れず、むしろ楽しみながら前進し続けます。' },
              { num: '弐', title: '挑戦を続ける', sub: 'Keep Challenging', desc: 'さあ、始めよう。毎日。失敗を恐れず、常に新しいことに挑戦し続けます。' },
              { num: '参', title: '共創する', sub: 'Co-Create', desc: '共に成長し、共に勝つ。お客様と共に価値を創造し、成功を分かち合います。' },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 border border-amber-500/10 hover:bg-amber-500/5 transition-colors group"
              >
                <span className="text-5xl font-light text-amber-500/30 group-hover:text-amber-500/50 transition-colors">
                  {value.num}
                </span>
                <h3 className="text-2xl font-light mt-6 mb-2 tracking-wide">{value.title}</h3>
                <p className="text-amber-400/60 text-sm tracking-wider mb-4">{value.sub}</p>
                <p className="text-zinc-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="relative z-10 py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-500/80 text-xs tracking-[0.4em] mb-6">事業 — BUSINESS</p>
            <h2 className="text-4xl font-light tracking-wide">事業内容</h2>
          </div>

          <div className="space-y-px">
            {[
              { num: '壱', name: 'Turning AX', category: '人材開発・人材教育事業', tagline: 'その企業のAI化のターニングポイントになる' },
              { num: '弐', name: 'Solution AX', category: 'システム導入支援', tagline: '事業を見て、最適解を創る' },
              { num: '参', name: 'AX Partner', category: '顧問サービス', tagline: '伴走するAI顧問' },
              { num: '肆', name: 'Turning AX Academy', category: '教育・スクール事業', tagline: '人生を前へ動かす、AIとAXの実装スクール' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center justify-between p-8 border-b border-amber-500/10 hover:bg-amber-500/5 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-8">
                  <span className="text-3xl text-amber-500/40 font-light group-hover:text-amber-500 transition-colors">{service.num}</span>
                  <div>
                    <h3 className="text-2xl font-light tracking-wide group-hover:text-amber-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-zinc-600 text-xs tracking-wider">{service.category}</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-8">
                  <p className="text-zinc-500">{service.tagline}</p>
                  <span className="text-amber-500/30 group-hover:text-amber-500 group-hover:translate-x-2 transition-all text-xl">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-amber-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-500/80 text-xs tracking-[0.4em] mb-12">代表挨拶 — MESSAGE</p>

          <div className="relative py-12">
            <span className="absolute top-0 left-0 text-8xl text-amber-500/10 font-serif">"</span>
            <span className="absolute bottom-0 right-0 text-8xl text-amber-500/10 font-serif">"</span>

            <blockquote className="text-4xl md:text-6xl font-light leading-relaxed tracking-wide">
              毎日が、
              <span className="text-amber-400">転換点</span>
              だ。
            </blockquote>
          </div>

          <div className="max-w-2xl mx-auto text-zinc-400 leading-loose mt-12 space-y-6 text-left">
            <p>AIの時代が本格的に幕を開けました。この変化は、脅威ではなく、機会です。</p>
            <p>私たちSKHは、すべての企業、すべての人がAIの恩恵を受けられる社会を目指しています。</p>
            <p>変化を恐れず、共に挑戦し、共に成長していきましょう。毎日が、あなたにとっての転換点になるように。</p>
          </div>

          <div className="mt-16">
            <p className="text-zinc-600 text-sm tracking-wider mb-2">代表取締役 CEO</p>
            <p className="text-2xl tracking-[0.2em]">世界野 博嗣</p>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="relative z-10 py-32 px-8 border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-amber-500/80 text-xs tracking-[0.4em] mb-6">会社 — COMPANY</p>
              <h2 className="text-4xl font-light mb-12 tracking-wide">会社概要</h2>
              <div className="space-y-6">
                {[
                  { label: '会社名', value: '株式会社SKH' },
                  { label: '設立', value: '2024年' },
                  { label: '代表者', value: '世界野 博嗣' },
                  { label: '所在地', value: '東京都渋谷区' },
                  { label: '事業内容', value: 'AI・DX・AX導入支援、人材育成、顧問サービス' },
                ].map((item, i) => (
                  <div key={i} className="flex border-b border-amber-500/10 pb-4">
                    <span className="w-32 text-zinc-600 text-sm tracking-wider">{item.label}</span>
                    <span className="text-zinc-300">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-amber-500/20 flex items-center justify-center p-16">
              <div className="text-center">
                <p className="text-6xl font-light text-amber-500/30 tracking-widest">SKH</p>
                <p className="text-zinc-600 text-xs mt-4 tracking-wider">LOGO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-32 px-8 border-t border-amber-500/10 bg-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-500/80 text-xs tracking-[0.4em] mb-6">お問合せ — CONTACT</p>
          <h2 className="text-4xl font-light mb-8 tracking-wide">お問い合わせ</h2>
          <p className="text-zinc-500 mb-12 tracking-wide">
            AI・DX・AXの導入に関するご相談、人材育成のご依頼など、
            お気軽にお問い合わせください。
          </p>
          <button className="px-16 py-5 border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition-all tracking-widest text-sm">
            お問い合わせフォームへ →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-8 border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-3xl font-light text-amber-500/30 tracking-widest mb-2">SKH</p>
              <p className="text-zinc-600 text-sm tracking-wider">© 2024 SKH Inc.</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-zinc-600 hover:text-amber-400 text-sm transition-colors tracking-wider">Privacy</a>
              <a href="#" className="text-zinc-600 hover:text-amber-400 text-sm transition-colors tracking-wider">Terms</a>
              <a href="#" className="text-zinc-600 hover:text-amber-400 text-sm transition-colors tracking-wider">特定商取引法</a>
            </div>
          </div>
          <p className="text-center text-zinc-800 text-xs mt-8 tracking-wider">Design D: Japanese Modern (Detailed)</p>
        </div>
      </footer>
    </div>
  )
}
