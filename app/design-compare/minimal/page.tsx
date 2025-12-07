'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Design A: ミニマル×プレミアム (Apple/Stripe style)
export default function MinimalDesign() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/design-compare" className="text-zinc-400 hover:text-zinc-600 text-sm">
            ← 比較ページへ戻る
          </Link>
          <div className="flex items-center gap-8">
            <span className="text-sm text-zinc-500 tracking-wide">Purpose</span>
            <span className="text-sm text-zinc-500 tracking-wide">Service</span>
            <span className="text-sm text-zinc-500 tracking-wide">Company</span>
            <button className="px-5 py-2 bg-zinc-900 text-white text-sm rounded-full hover:bg-zinc-800 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-zinc-400 text-sm tracking-[0.3em] uppercase mb-8"
          >
            Technology Company
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extralight leading-tight mb-8"
          >
            未来を創造する
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900">
              テクノロジーの力
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-zinc-500 font-light max-w-2xl mx-auto mb-12"
          >
            私たちは、AI・DX・AXの力で企業と人の可能性を解き放ち、
            感動と喜びが連鎖する未来を共に創ります。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all hover:scale-105">
              お問い合わせ
            </button>
            <button className="px-8 py-4 border border-zinc-300 text-zinc-600 rounded-full hover:border-zinc-900 hover:text-zinc-900 transition-all">
              詳しく見る
            </button>
          </motion.div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-32 px-8 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-zinc-400 tracking-[0.2em] uppercase mb-4">Purpose</p>
              <h2 className="text-5xl font-extralight mb-8 leading-tight">
                AIの恩恵を
                <br />
                すべての人へ届ける
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed">
                私たちは、AIテクノロジーの力を活用し、すべての人々がその恩恵を受けられる社会の実現を目指しています。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '100+', label: '支援企業数' },
                { number: '1000+', label: '育成AI人材' },
                { number: '98%', label: '顧客満足度' },
                { number: '24/7', label: 'サポート体制' },
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl shadow-sm border border-zinc-100">
                  <p className="text-4xl font-extralight text-zinc-900 mb-2">{stat.number}</p>
                  <p className="text-zinc-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-zinc-400 tracking-[0.2em] uppercase mb-4 text-center">Services</p>
          <h2 className="text-5xl font-extralight mb-16 text-center">私たちのサービス</h2>

          <div className="space-y-8">
            {[
              { num: '01', name: 'Turning AX', desc: '人材開発・人材教育事業' },
              { num: '02', name: 'Solution AX', desc: 'システム導入支援' },
              { num: '03', name: 'AX Partner', desc: '顧問サービス' },
              { num: '04', name: 'Academy', desc: '教育・スクール事業' },
            ].map((service, i) => (
              <div
                key={i}
                className="group flex items-center justify-between p-8 border-b border-zinc-200 hover:bg-zinc-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-8">
                  <span className="text-zinc-300 text-sm">{service.num}</span>
                  <div>
                    <h3 className="text-2xl font-light group-hover:text-zinc-600 transition-colors">{service.name}</h3>
                    <p className="text-zinc-400 text-sm">{service.desc}</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-zinc-300 group-hover:text-zinc-600 group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-32 px-8 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-zinc-500 tracking-[0.2em] uppercase mb-8">Message</p>
          <blockquote className="text-4xl md:text-5xl font-extralight leading-relaxed mb-12">
            "毎日が、
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
              ターニングポイント
            </span>
            だ。"
          </blockquote>
          <p className="text-zinc-400 mb-8">代表取締役 CEO</p>
          <p className="text-xl">世界野 博嗣</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-zinc-400 text-sm">© 2024 SKH Inc. All rights reserved.</p>
          <p className="text-zinc-300 text-xs">Design A: Minimal Premium</p>
        </div>
      </footer>
    </div>
  )
}
