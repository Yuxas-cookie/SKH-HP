'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Design E: データビジュアル (Infographic style)
export default function DataDesign() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/design-compare" className="text-slate-400 hover:text-blue-600 text-sm transition-colors">
            ← 比較ページへ戻る
          </Link>
          <div className="flex items-center gap-8">
            <span className="text-sm text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">Purpose</span>
            <span className="text-sm text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">Service</span>
            <span className="text-sm text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">Company</span>
            <button className="px-5 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Data Visualization */}
      <section className="min-h-screen flex items-center px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm mb-6"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Technology Company
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              >
                未来を創造する
                <br />
                <span className="text-blue-600">テクノロジー</span>の力
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-600 mb-8"
              >
                AI・DX・AXの力で企業と人の可能性を解き放ち、
                感動と喜びが連鎖する未来を共に創ります。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4"
              >
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium">
                  お問い合わせ
                </button>
                <button className="px-8 py-4 border border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-medium">
                  詳しく見る
                </button>
              </motion.div>
            </div>

            {/* Data Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-sm text-slate-500 mb-6">Growth Metrics</h3>
              <div className="space-y-6">
                <AnimatedBar label="支援企業数" value={85} color="bg-blue-500" />
                <AnimatedBar label="AI人材育成" value={92} color="bg-indigo-500" />
                <AnimatedBar label="顧客満足度" value={98} color="bg-cyan-500" />
                <AnimatedBar label="プロジェクト成功率" value={95} color="bg-teal-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm font-medium mb-2">Our Impact</p>
            <h2 className="text-4xl font-bold">実績で証明する価値</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 100, suffix: '+', label: '支援企業数', description: '累計導入企業' },
              { number: 1000, suffix: '+', label: '育成AI人材', description: '研修修了者数' },
              { number: 98, suffix: '%', label: '顧客満足度', description: 'NPS調査結果' },
              { number: 24, suffix: '/7', label: 'サポート', description: '365日対応' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl">
                <CountUpNumber target={stat.number} suffix={stat.suffix} />
                <p className="text-slate-800 font-medium mb-1">{stat.label}</p>
                <p className="text-slate-400 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Section with Flow */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm font-medium mb-2">Services</p>
            <h2 className="text-4xl font-bold">サービスフロー</h2>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { step: '01', name: 'Turning AX', desc: '人材育成', icon: '📚' },
                { step: '02', name: 'Solution AX', desc: '導入支援', icon: '⚙️' },
                { step: '03', name: 'AX Partner', desc: '顧問伴走', icon: '🤝' },
                { step: '04', name: 'Academy', desc: 'スクール', icon: '🎓' },
              ].map((service, i) => (
                <div key={i} className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center relative z-10 hover:shadow-xl transition-shadow">
                    {/* Step indicator */}
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {service.step}
                    </div>
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-slate-500">{service.desc}</p>
                  </div>
                  {/* Arrow */}
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-24 px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 text-center md:text-left">
              <div className="w-32 h-32 bg-slate-800 rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center text-5xl">
                👤
              </div>
              <p className="text-slate-400 text-sm">代表取締役 CEO</p>
              <p className="text-xl font-medium">世界野 博嗣</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-blue-400 text-sm font-medium mb-4">CEO Message</p>
              <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
                "毎日が、<span className="text-blue-400">ターニングポイント</span>だ。"
              </blockquote>
              <p className="text-slate-400 leading-relaxed">
                AIの時代が本格的に幕を開けました。この変化は、脅威ではなく、チャンスです。
                私たちSKHは、すべての企業、すべての人がAIの恩恵を受けられる社会を目指しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 SKH Inc. All rights reserved.</p>
          <p className="text-slate-300 text-xs">Design E: Data Visual</p>
        </div>
      </footer>
    </div>
  )
}

// Animated Bar Component
function AnimatedBar({ label, value, color }: { label: string; value: number; color: string }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 500)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-slate-600 text-sm">{label}</span>
        <span className="text-slate-800 font-medium">{value}%</span>
      </div>
      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

// Count Up Number Component
function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return (
    <p className="text-4xl font-bold text-blue-600 mb-2">
      {count}{suffix}
    </p>
  )
}
