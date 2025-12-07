'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Design B: グラデーション×モダン (Linear/Vercel style)
export default function GradientDesign() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Gradient Background Blobs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/design-compare" className="text-zinc-500 hover:text-white text-sm transition-colors">
            ← 比較ページへ戻る
          </Link>
          <div className="flex items-center gap-8">
            <span className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Purpose</span>
            <span className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Service</span>
            <span className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Company</span>
            <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm rounded-full hover:opacity-90 transition-opacity">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-zinc-400">Technology Company</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold leading-tight mb-8"
          >
            未来を創造する
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient bg-[length:200%_auto]">
              テクノロジーの力
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
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
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              <span className="flex items-center gap-2">
                お問い合わせ
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all">
              詳しく見る
            </button>
          </motion.div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="relative z-10 py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-sm tracking-[0.2em] uppercase mb-4">Purpose</p>
              <h2 className="text-5xl font-bold mb-8 leading-tight">
                AIの恩恵を
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  すべての人へ
                </span>
                届ける
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                私たちは、AIテクノロジーの力を活用し、すべての人々がその恩恵を受けられる社会の実現を目指しています。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '100+', label: '支援企業数', color: 'from-purple-500 to-indigo-500' },
                { number: '1000+', label: '育成AI人材', color: 'from-indigo-500 to-cyan-500' },
                { number: '98%', label: '顧客満足度', color: 'from-cyan-500 to-teal-500' },
                { number: '24/7', label: 'サポート体制', color: 'from-teal-500 to-purple-500' },
              ].map((stat, i) => (
                <div key={i} className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                  <p className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                    {stat.number}
                  </p>
                  <p className="text-zinc-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="relative z-10 py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-sm tracking-[0.2em] uppercase mb-4 text-center">Services</p>
          <h2 className="text-5xl font-bold mb-16 text-center">私たちのサービス</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: '01', name: 'Turning AX', desc: '人材開発・人材教育事業', icon: '🚀' },
              { num: '02', name: 'Solution AX', desc: 'システム導入支援', icon: '⚙️' },
              { num: '03', name: 'AX Partner', desc: '顧問サービス', icon: '🤝' },
              { num: '04', name: 'Academy', desc: '教育・スクール事業', icon: '🎓' },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all cursor-pointer"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="text-zinc-600 text-sm">{service.num}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                    {service.name}
                  </h3>
                  <p className="text-zinc-400">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="relative z-10 py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 rounded-3xl">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-sm tracking-[0.2em] uppercase mb-8">Message</p>
            <blockquote className="text-4xl md:text-5xl font-bold leading-relaxed mb-12">
              "毎日が、
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                ターニングポイント
              </span>
              だ。"
            </blockquote>
            <p className="text-zinc-500 mb-4">代表取締役 CEO</p>
            <p className="text-xl font-medium">世界野 博嗣</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-zinc-500 text-sm">© 2024 SKH Inc. All rights reserved.</p>
          <p className="text-zinc-700 text-xs">Design B: Gradient Modern</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
