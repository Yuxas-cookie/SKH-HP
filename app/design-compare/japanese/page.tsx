'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Design D: 和モダン×黒金 (Japanese Modern)
export default function JapaneseDesign() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Subtle texture overlay */}
      <div
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-amber-500/10">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/design-compare" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors">
            ← 比較ページへ戻る
          </Link>
          <div className="flex items-center gap-10">
            <span className="text-sm text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer tracking-wider">理念</span>
            <span className="text-sm text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer tracking-wider">事業</span>
            <span className="text-sm text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer tracking-wider">会社</span>
            <button className="px-6 py-2 border border-amber-500 text-amber-400 text-sm hover:bg-amber-500 hover:text-black transition-all tracking-wider">
              お問合せ
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-12"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-amber-500/80 text-sm tracking-[0.5em] mb-8"
          >
            株式会社SKH
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <span className="block text-6xl md:text-8xl font-light tracking-wider mb-4">
              未来を創造する
            </span>
            <span className="block text-5xl md:text-7xl font-light">
              <span className="text-amber-400">技術</span>の力
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-12"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-zinc-400 text-lg max-w-xl mx-auto leading-loose tracking-wide"
          >
            AI・DX・AXの力で
            <br />
            企業と人の可能性を解き放つ
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16"
          >
            <button className="group px-12 py-4 border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-black transition-all tracking-widest text-sm">
              詳細を見る
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>

        {/* Side decorations */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
        </div>
      </section>

      {/* Purpose Section */}
      <section className="relative z-10 py-32 px-8 border-t border-amber-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-amber-500 text-xs tracking-[0.3em] mb-6">理念 — PURPOSE</p>
              <h2 className="text-4xl font-light leading-relaxed tracking-wide mb-8">
                AIの恩恵を
                <br />
                <span className="text-amber-400">すべての人へ</span>
                <br />
                届ける
              </h2>
              <div className="w-16 h-px bg-amber-500/50 mb-8" />
              <p className="text-zinc-400 leading-loose">
                私たちは、AIテクノロジーの力を活用し、
                すべての人々がその恩恵を受けられる社会の実現を目指しています。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-amber-500/20">
              {[
                { number: '100+', label: '支援企業数' },
                { number: '1000+', label: '育成AI人材' },
                { number: '98%', label: '顧客満足度' },
                { number: '24/7', label: 'サポート体制' },
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-950 p-8 text-center">
                  <p className="text-4xl font-light text-amber-400 mb-2 tracking-wider">{stat.number}</p>
                  <p className="text-zinc-500 text-xs tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="relative z-10 py-32 px-8 border-t border-amber-500/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-500 text-xs tracking-[0.3em] mb-6 text-center">事業 — SERVICES</p>
          <h2 className="text-4xl font-light text-center mb-16 tracking-wide">私たちの事業</h2>

          <div className="space-y-px">
            {[
              { num: '壱', name: 'Turning AX', desc: '人材開発・人材教育事業' },
              { num: '弐', name: 'Solution AX', desc: 'システム導入支援' },
              { num: '参', name: 'AX Partner', desc: '顧問サービス' },
              { num: '肆', name: 'Academy', desc: '教育・スクール事業' },
            ].map((service, i) => (
              <div
                key={i}
                className="group flex items-center justify-between p-8 border-b border-amber-500/10 hover:bg-amber-500/5 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-8">
                  <span className="text-amber-500/50 text-2xl font-light">{service.num}</span>
                  <div>
                    <h3 className="text-2xl font-light tracking-wide group-hover:text-amber-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-zinc-500 text-sm tracking-wider">{service.desc}</p>
                  </div>
                </div>
                <span className="text-amber-500/30 group-hover:text-amber-500 group-hover:translate-x-2 transition-all">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="relative z-10 py-32 px-8 border-t border-amber-500/10 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-500 text-xs tracking-[0.3em] mb-8">代表挨拶 — MESSAGE</p>

          <div className="relative py-12">
            {/* Decorative quotes */}
            <span className="absolute top-0 left-0 text-6xl text-amber-500/20 font-serif">"</span>
            <span className="absolute bottom-0 right-0 text-6xl text-amber-500/20 font-serif">"</span>

            <blockquote className="text-4xl md:text-5xl font-light leading-relaxed tracking-wide">
              毎日が、
              <span className="text-amber-400">転換点</span>
              だ。
            </blockquote>
          </div>

          <div className="mt-12">
            <p className="text-zinc-500 text-sm tracking-wider mb-2">代表取締役 CEO</p>
            <p className="text-xl tracking-widest">世界野 博嗣</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-8 border-t border-amber-500/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-zinc-600 text-sm tracking-wider">© 2024 SKH Inc.</p>
          <p className="text-zinc-700 text-xs tracking-wider">Design D: Japanese Modern</p>
        </div>
      </footer>
    </div>
  )
}
