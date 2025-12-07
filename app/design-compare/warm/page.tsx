'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Design C: イラスト×温かみ (Notion/Slack style)
export default function WarmDesign() {
  return (
    <div className="min-h-screen bg-amber-50 text-zinc-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/80 backdrop-blur-xl border-b border-amber-200/50">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/design-compare" className="text-amber-600 hover:text-amber-800 text-sm transition-colors">
            ← 比較ページへ戻る
          </Link>
          <div className="flex items-center gap-8">
            <span className="text-sm text-zinc-600 hover:text-amber-600 transition-colors cursor-pointer">Purpose</span>
            <span className="text-sm text-zinc-600 hover:text-amber-600 transition-colors cursor-pointer">Service</span>
            <span className="text-sm text-zinc-600 hover:text-amber-600 transition-colors cursor-pointer">Company</span>
            <button className="px-5 py-2 bg-amber-500 text-white text-sm rounded-full hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/25">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6"
              >
                <span className="text-2xl">✨</span>
                <span className="text-sm text-amber-700 font-medium">Technology Company</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              >
                未来を創造する
                <br />
                <span className="text-amber-500">テクノロジー</span>の力
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-zinc-600 mb-8"
              >
                私たちは、AI・DX・AXの力で企業と人の可能性を解き放ち、
                感動と喜びが連鎖する未来を共に創ります。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4"
              >
                <button className="px-8 py-4 bg-amber-500 text-white rounded-2xl hover:bg-amber-600 transition-all hover:scale-105 shadow-lg shadow-amber-500/25 font-medium">
                  お問い合わせ 👋
                </button>
                <button className="px-8 py-4 bg-white border-2 border-amber-200 text-zinc-700 rounded-2xl hover:border-amber-500 transition-all font-medium">
                  詳しく見る
                </button>
              </motion.div>
            </div>

            {/* Illustration Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-12 relative overflow-hidden">
                {/* Abstract shapes representing AI/connectivity */}
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-2xl ${
                        i % 3 === 0 ? 'bg-amber-300' : i % 3 === 1 ? 'bg-orange-300' : 'bg-yellow-200'
                      } ${i % 2 === 0 ? 'animate-bounce' : ''}`}
                      style={{ animationDelay: `${i * 0.1}s`, animationDuration: '3s' }}
                    />
                  ))}
                </div>
                {/* Floating icons */}
                <div className="absolute top-4 right-4 text-4xl">🤖</div>
                <div className="absolute bottom-4 left-4 text-4xl">💡</div>
                <div className="absolute top-1/2 right-8 text-3xl">🚀</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-4xl mb-4 block">🎯</span>
            <p className="text-amber-500 text-sm tracking-wider uppercase mb-2">Purpose</p>
            <h2 className="text-4xl font-bold">AIの恩恵をすべての人へ届ける</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '100+', label: '支援企業数', icon: '🏢' },
              { number: '1000+', label: '育成AI人材', icon: '👨‍💻' },
              { number: '98%', label: '顧客満足度', icon: '😊' },
              { number: '24/7', label: 'サポート体制', icon: '🛟' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-amber-50 rounded-3xl hover:bg-amber-100 transition-colors">
                <span className="text-4xl block mb-3">{stat.icon}</span>
                <p className="text-3xl font-bold text-zinc-800 mb-1">{stat.number}</p>
                <p className="text-zinc-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-4xl mb-4 block">🛠️</span>
            <p className="text-amber-500 text-sm tracking-wider uppercase mb-2">Services</p>
            <h2 className="text-4xl font-bold">私たちのサービス</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: '01', name: 'Turning AX', desc: '人材開発・人材教育事業', icon: '📚', color: 'bg-blue-100 border-blue-200' },
              { num: '02', name: 'Solution AX', desc: 'システム導入支援', icon: '⚙️', color: 'bg-green-100 border-green-200' },
              { num: '03', name: 'AX Partner', desc: '顧問サービス', icon: '🤝', color: 'bg-purple-100 border-purple-200' },
              { num: '04', name: 'Academy', desc: '教育・スクール事業', icon: '🎓', color: 'bg-orange-100 border-orange-200' },
            ].map((service, i) => (
              <div
                key={i}
                className={`group p-8 ${service.color} border-2 rounded-3xl hover:scale-[1.02] transition-all cursor-pointer`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl">{service.icon}</span>
                  <div>
                    <p className="text-zinc-400 text-sm mb-1">{service.num}</p>
                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    <p className="text-zinc-600">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-amber-400 to-orange-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-5xl mb-6 block">💬</span>
          <p className="text-amber-100 text-sm tracking-wider uppercase mb-6">Message</p>
          <blockquote className="text-4xl md:text-5xl font-bold leading-relaxed mb-8">
            "毎日が、ターニングポイントだ。"
          </blockquote>
          <div className="inline-flex items-center gap-4 bg-white/20 px-6 py-3 rounded-full">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">👤</div>
            <div className="text-left">
              <p className="text-amber-100 text-sm">代表取締役 CEO</p>
              <p className="font-bold">世界野 博嗣</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-white border-t border-amber-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-zinc-400 text-sm">© 2024 SKH Inc. All rights reserved.</p>
          <p className="text-amber-300 text-xs">Design C: Warm Illustration</p>
        </div>
      </footer>
    </div>
  )
}
