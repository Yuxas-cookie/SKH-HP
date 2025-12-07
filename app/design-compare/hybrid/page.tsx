'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

// 折衷案: 白ベース + 金アクセント (AとDの融合)
export default function HybridDesign() {
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-xl border-b border-amber-200/30">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/design-compare" className="text-stone-400 hover:text-amber-600 text-sm transition-colors">
              ← 戻る
            </Link>
            <span className="text-stone-300">|</span>
            <span className="text-xs text-stone-400">折衷案: White + Gold</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#purpose" className="text-sm text-stone-500 hover:text-amber-600 transition-colors">Purpose</a>
            <a href="#mission" className="text-sm text-stone-500 hover:text-amber-600 transition-colors">Mission</a>
            <a href="#service" className="text-sm text-stone-500 hover:text-amber-600 transition-colors">Service</a>
            <a href="#company" className="text-sm text-stone-500 hover:text-amber-600 transition-colors">Company</a>
            <button className="px-6 py-2 bg-amber-600 text-white text-sm rounded-full hover:bg-amber-700 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden"
      >
        {/* Subtle gold accent lines */}
        <div className="absolute left-0 top-1/3 w-32 h-px bg-gradient-to-r from-amber-300/50 to-transparent" />
        <div className="absolute right-0 bottom-1/3 w-32 h-px bg-gradient-to-l from-amber-300/50 to-transparent" />

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 border border-amber-300/50 rounded-full text-amber-600 text-xs tracking-[0.2em] uppercase">
              Technology Company
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] mb-8 tracking-tight"
          >
            未来を創造する
            <br />
            <span className="text-amber-600">テクノロジー</span>の力
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto my-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-stone-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            私たちは、AI・DX・AXの力で企業と人の可能性を解き放ち、
            感動と喜びが連鎖する未来を共に創ります。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-10 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all hover:scale-105 text-sm tracking-wide shadow-lg shadow-amber-600/20">
              お問い合わせ
            </button>
            <button className="px-10 py-4 border border-amber-300 text-amber-700 rounded-full hover:border-amber-600 hover:bg-amber-50 transition-all text-sm tracking-wide">
              私たちについて
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-stone-400 tracking-widest">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-10 bg-gradient-to-b from-amber-400 to-transparent"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Purpose Section */}
      <section id="purpose" className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-amber-400" />
                  <p className="text-xs text-amber-600 tracking-[0.3em] uppercase">Purpose</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-extralight leading-tight mb-8">
                  AIの恩恵を
                  <br />
                  <span className="text-amber-600">すべての人へ</span>
                  <br />
                  届ける
                </h2>
                <p className="text-stone-500 text-lg leading-relaxed mb-8">
                  私たちは、AIテクノロジーの力を活用し、すべての人々がその恩恵を受けられる社会の実現を目指しています。
                  技術の力で、ビジネスと人生を次のステージへ。
                </p>
                <button className="text-sm text-amber-600 border-b border-amber-400 pb-1 hover:text-amber-700 transition-colors">
                  詳しく見る →
                </button>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '100+', label: '支援企業数' },
                { number: '1,000+', label: '育成AI人材' },
                { number: '98%', label: '顧客満足度' },
                { number: '24/7', label: 'サポート体制' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-stone-50 border border-amber-100 rounded-xl hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100 transition-all"
                >
                  <p className="text-3xl md:text-4xl font-extralight text-amber-600 mb-2">{stat.number}</p>
                  <p className="text-stone-500 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-amber-400" />
              <p className="text-xs text-amber-600 tracking-[0.3em] uppercase">Mission</p>
              <div className="w-12 h-px bg-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight mb-8">
              企業と個人が持つ
              <br />
              <span className="text-amber-600">可能性を解き放つ</span>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              AI・DX・AXの導入支援を通じて、企業と個人が持つ潜在的な可能性を最大限に引き出します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '↗', title: 'Accelerate', desc: 'ビジネス変革を加速させ、競争優位性を確立します。' },
              { icon: '◈', title: 'Innovate', desc: '革新的なソリューションで新たな価値を創造します。' },
              { icon: '∞', title: 'Collaborate', desc: '共に成長するパートナーとして伴走します。' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-10 rounded-xl border border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center mb-6 text-2xl text-amber-600 group-hover:bg-amber-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-light mb-4">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-8 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-amber-400/50" />
            <p className="text-xs text-amber-400 tracking-[0.3em] uppercase">Vision</p>
            <div className="w-12 h-px bg-amber-400/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extralight leading-relaxed mb-8">
            日本中にAI人材を増やし
            <br />
            <span className="text-amber-400">「感動と喜び」</span>が連鎖している
            <br />
            社会を実現する
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['#AI人材育成', '#感動の連鎖', '#社会変革'].map((tag, i) => (
              <span key={i} className="px-5 py-2 border border-amber-500/30 rounded-full text-amber-400/80 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-amber-400" />
              <p className="text-xs text-amber-600 tracking-[0.3em] uppercase">Value</p>
              <div className="w-12 h-px bg-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight">私たちの価値観</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: '変化を楽しむ', sub: 'Embrace Change', desc: '毎日ターニングポイント。変化を恐れず、むしろ楽しみながら前進し続けます。' },
              { num: '02', title: '挑戦を続ける', sub: 'Keep Challenging', desc: 'さあ、始めよう。毎日。失敗を恐れず、常に新しいことに挑戦し続けます。' },
              { num: '03', title: '共創する', sub: 'Co-Create', desc: '共に成長し、共に勝つ。お客様と共に価値を創造し、成功を分かち合います。' },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-stone-50 rounded-xl border border-transparent hover:border-amber-200 hover:bg-white transition-all group"
              >
                <span className="text-5xl font-extralight text-amber-200 group-hover:text-amber-400 transition-colors">
                  {value.num}
                </span>
                <h3 className="text-2xl font-light mt-4 mb-2">{value.title}</h3>
                <p className="text-amber-600 text-sm mb-4">{value.sub}</p>
                <p className="text-stone-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-32 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-amber-400" />
              <p className="text-xs text-amber-600 tracking-[0.3em] uppercase">Business</p>
              <div className="w-12 h-px bg-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight">事業内容</h2>
          </div>

          <div className="space-y-4">
            {[
              { num: '01', name: 'Turning AX', category: '人材開発・人材教育事業', tagline: 'その企業のAI化のターニングポイントになる', features: ['AI/DX研修', 'ワークショップ', 'カスタマイズ研修'] },
              { num: '02', name: 'Solution AX', category: 'システム導入支援', tagline: '事業を見て、最適解を創る', features: ['現状分析', 'ロードマップ策定', 'システム開発'] },
              { num: '03', name: 'AX Partner', category: '顧問サービス', tagline: '伴走するAI顧問', features: ['月次アドバイザリー', 'オンデマンド相談', '技術情報提供'] },
              { num: '04', name: 'Turning AX Academy', category: '教育・スクール事業', tagline: '人生を前へ動かす、AIとAXの実装スクール', features: ['実践カリキュラム', '現役講師', 'キャリア支援'] },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-8 rounded-xl border border-amber-100 hover:border-amber-300 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <span className="text-3xl font-extralight text-amber-300 group-hover:text-amber-500 transition-colors">
                      {service.num}
                    </span>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-light group-hover:text-amber-600 transition-colors">{service.name}</h3>
                    <p className="text-stone-400 text-xs tracking-wider uppercase">{service.category}</p>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-stone-500">{service.tagline}</p>
                  </div>
                  <div className="lg:col-span-3 flex flex-wrap gap-2">
                    {service.features.map((f, j) => (
                      <span key={j} className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full group-hover:bg-amber-100 transition-colors">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="lg:col-span-1 text-right">
                    <span className="text-amber-300 group-hover:text-amber-600 group-hover:translate-x-2 inline-block transition-all">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-32 px-8 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-amber-400/50" />
            <p className="text-xs text-amber-400 tracking-[0.3em] uppercase">Message</p>
            <div className="w-12 h-px bg-amber-400/50" />
          </div>

          <blockquote className="text-4xl md:text-6xl font-extralight leading-relaxed mb-12">
            "毎日が、
            <span className="text-amber-400">ターニングポイント</span>
            だ。"
          </blockquote>

          <div className="max-w-2xl mx-auto text-stone-400 leading-relaxed space-y-4 text-left mb-12">
            <p>AIの時代が本格的に幕を開けました。この変化は、脅威ではなく、チャンスです。</p>
            <p>私たちSKHは、すべての企業、すべての人がAIの恩恵を受けられる社会を目指しています。</p>
            <p>変化を恐れず、共に挑戦し、共に成長していきましょう。</p>
          </div>

          <div>
            <p className="text-stone-500 text-sm mb-2">代表取締役 CEO</p>
            <p className="text-xl tracking-wider">世界野 博嗣</p>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-amber-400" />
                <p className="text-xs text-amber-600 tracking-[0.3em] uppercase">Company</p>
              </div>
              <h2 className="text-4xl font-extralight mb-8">会社概要</h2>
              <div className="space-y-6">
                {[
                  { label: '会社名', value: '株式会社SKH' },
                  { label: '設立', value: '2024年' },
                  { label: '代表者', value: '世界野 博嗣' },
                  { label: '所在地', value: '東京都渋谷区' },
                  { label: '事業内容', value: 'AI・DX・AX導入支援、人材育成、顧問サービス' },
                ].map((item, i) => (
                  <div key={i} className="flex border-b border-amber-100 pb-4">
                    <span className="w-32 text-stone-400 text-sm">{item.label}</span>
                    <span className="text-stone-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl p-12 flex items-center justify-center border border-amber-100">
              <div className="text-center">
                <p className="text-6xl font-extralight text-amber-400">SKH</p>
                <p className="text-stone-400 text-sm mt-4">Logo Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-8 bg-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-amber-400" />
            <p className="text-xs text-amber-600 tracking-[0.3em] uppercase">Contact</p>
            <div className="w-12 h-px bg-amber-400" />
          </div>
          <h2 className="text-4xl font-extralight mb-8">お問い合わせ</h2>
          <p className="text-stone-500 mb-12">
            AI・DX・AXの導入に関するご相談、人材育成のご依頼など、
            お気軽にお問い合わせください。
          </p>
          <button className="px-12 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all hover:scale-105 text-sm tracking-wide shadow-lg shadow-amber-600/20">
            お問い合わせフォームへ
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-white border-t border-amber-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-2xl font-extralight text-amber-400 mb-2">SKH</p>
              <p className="text-stone-400 text-sm">© 2024 SKH Inc. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-stone-400 hover:text-amber-600 text-sm transition-colors">Privacy</a>
              <a href="#" className="text-stone-400 hover:text-amber-600 text-sm transition-colors">Terms</a>
              <a href="#" className="text-stone-400 hover:text-amber-600 text-sm transition-colors">特定商取引法</a>
            </div>
          </div>
          <p className="text-center text-stone-300 text-xs mt-8">折衷案: White + Gold (A + D Hybrid)</p>
        </div>
      </footer>
    </div>
  )
}
