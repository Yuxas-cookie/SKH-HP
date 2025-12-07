'use client'

import { useState } from 'react'
import Link from 'next/link'

const designs = [
  {
    id: 'A',
    name: 'ミニマル×プレミアム',
    subtitle: 'Minimal Premium',
    description: 'Apple / Stripe のような洗練されたミニマルデザイン。余白と文字で勝負。',
    impression: '信頼感、高級感、プロフェッショナル',
    path: '/design-compare/minimal-detail',
    isDetailed: true
  },
  {
    id: 'D',
    name: '和モダン×黒金',
    subtitle: 'Japanese Modern',
    description: '日本の伝統美と現代デザインの融合。格式と革新を表現。',
    impression: '日本発、伝統×革新、格式',
    path: '/design-compare/japanese-detail',
    isDetailed: true
  },
  {
    id: 'A+D',
    name: '折衷案（白×金）',
    subtitle: 'White + Gold Hybrid',
    description: 'Aの白ベース・ミニマルさとDの金アクセントを融合。両方の良さを取り入れ。',
    impression: '洗練、開放感、高級感',
    path: '/design-compare/hybrid',
    isDetailed: true,
    isHybrid: true
  },
  {
    id: 'B',
    name: 'グラデーション×モダン',
    subtitle: 'Gradient Modern',
    description: 'Linear / Vercel のようなモダンテック系。グラデーションと光の演出。',
    impression: '先進性、テクノロジー、革新',
    path: '/design-compare/gradient'
  },
  {
    id: 'C',
    name: 'イラスト×温かみ',
    subtitle: 'Warm Illustration',
    description: 'Notion / Slack のような親しみやすいデザイン。教育・サポートに最適。',
    impression: '親しみやすさ、教育、サポート',
    path: '/design-compare/warm'
  },
  {
    id: 'E',
    name: 'データビジュアル',
    subtitle: 'Data Visual',
    description: 'グラフ・チャートを活かしたインフォグラフィック。実績を視覚化。',
    impression: 'データドリブン、信頼性、実績',
    path: '/design-compare/data'
  }
]

export default function DesignComparePage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-light">デザイン比較</h1>
            <p className="text-zinc-500 text-sm">Design Comparison</p>
          </div>
          <Link
            href="/"
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition-colors"
          >
            メインサイトへ戻る
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">5つのデザイン提案</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              SKHの事業内容に合わせた5つのデザイン案です。
              各カードをクリックして詳細ページをご覧ください。
            </p>
          </div>

          {/* Design Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs.map((design) => (
              <Link
                key={design.id}
                href={design.path}
                className="group block"
                onMouseEnter={() => setHoveredId(design.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`
                  relative p-6 rounded-2xl border transition-all duration-500
                  ${hoveredId === design.id
                    ? 'bg-zinc-800/50 border-amber-500/50 scale-[1.02]'
                    : design.isDetailed
                      ? 'bg-zinc-900/70 border-amber-500/30 hover:border-amber-500/50'
                      : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                  }
                `}>
                  {/* ID Badge */}
                  <div className={`
                    absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center
                    text-lg font-light transition-colors duration-500
                    ${hoveredId === design.id ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-400'}
                  `}>
                    {design.id}
                  </div>

                  {/* Content */}
                  <div className="pr-12">
                    <h3 className="text-xl font-medium mb-1 group-hover:text-amber-400 transition-colors">
                      {design.name}
                    </h3>
                    <p className="text-zinc-500 text-sm mb-4">{design.subtitle}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {design.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {design.impression.split('、').map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className={`
                    mt-4 flex items-center gap-2 text-sm transition-all duration-300
                    ${hoveredId === design.id ? 'text-amber-400 translate-x-2' : 'text-zinc-500'}
                  `}>
                    <span>詳細を見る</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* A vs D vs Hybrid Comparison */}
          <div className="mt-16 p-8 bg-zinc-900/50 rounded-2xl border border-amber-500/20">
            <h3 className="text-2xl font-light mb-8 text-center">
              <span className="text-amber-400">A・D・折衷案</span> 詳細比較
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left p-4 text-zinc-400 font-normal">項目</th>
                    <th className="text-center p-4 text-zinc-400 font-normal">A: ミニマル</th>
                    <th className="text-center p-4 text-zinc-400 font-normal">D: 和モダン</th>
                    <th className="text-center p-4 text-amber-400 font-normal">折衷案</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: '背景色', a: '白', d: '黒', hybrid: '白（クリーム系）' },
                    { item: 'アクセント', a: 'ネイビー', d: '金', hybrid: '金' },
                    { item: '雰囲気', a: 'クリーン・洗練', d: '重厚・格式', hybrid: '洗練・高級感' },
                    { item: '読みやすさ', a: '◎', d: '○', hybrid: '◎' },
                    { item: '差別化', a: '△', d: '◎', hybrid: '○' },
                    { item: '親しみやすさ', a: '◎', d: '△', hybrid: '○' },
                    { item: '推奨度', a: '★★★★☆', d: '★★★☆☆', hybrid: '★★★★★' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                      <td className="p-4 text-zinc-300">{row.item}</td>
                      <td className="p-4 text-center text-zinc-400">{row.a}</td>
                      <td className="p-4 text-center text-zinc-400">{row.d}</td>
                      <td className="p-4 text-center text-amber-400">{row.hybrid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Compare Table */}
          <div className="mt-12">
            <h3 className="text-xl font-light mb-6 text-center text-zinc-500">その他のデザイン案</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left p-4 text-zinc-500 font-normal text-sm">提案</th>
                    <th className="text-left p-4 text-zinc-500 font-normal text-sm">印象</th>
                    <th className="text-center p-4 text-zinc-500 font-normal text-sm">推奨度</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 'B', name: 'グラデーション', impression: '先進・テック', stars: 4 },
                    { id: 'C', name: 'イラスト', impression: '親しみ・教育', stars: 4 },
                    { id: 'E', name: 'データ', impression: '実績・信頼', stars: 4 },
                  ].map((row) => (
                    <tr key={row.id} className="border-b border-zinc-800/50 hover:bg-zinc-900/50">
                      <td className="p-4">
                        <span className="text-zinc-600 mr-2">{row.id}</span>
                        <span className="text-zinc-400">{row.name}</span>
                      </td>
                      <td className="p-4 text-zinc-500 text-sm">{row.impression}</td>
                      <td className="p-4 text-center text-zinc-500 text-sm">
                        {'★'.repeat(row.stars)}{'☆'.repeat(5 - row.stars)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
