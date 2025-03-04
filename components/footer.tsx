"use client"

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  const navigation = {
    company: [
      { name: '企業情報', href: '#company' },
      { name: '事業紹介', href: '#services' },
      { name: '採用情報', href: '#careers' },
      { name: 'お知らせ', href: '#news' },
    ],
    legal: [
      { name: 'プライバシーポリシー', href: '#' },
      { name: '特定商取引法に基づく表記', href: '#' },
      { name: '利用規約', href: '#' },
      { name: 'お問い合わせ', href: '#contact' },
    ],
    social: [
      { name: 'Facebook', icon: Facebook, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
    ],
  }

  return (
    <footer className="bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] hover:bg-[center_right_1rem] transition-[background-position] duration-300">
              株式会社SKH
            </Link>
            <p className="mt-4 text-xs sm:text-sm text-gray-600">
              最先端のテクノロジーで、
              <br />
              より良い未来を創造する
            </p>
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900">企業情報</h3>
            <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900">法的情報</h3>
            <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900">ソーシャルメディア</h3>
            <ul role="list" className="mt-3 sm:mt-4 flex space-x-4 sm:space-x-6">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-500 hover:text-black transition-colors">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8">
          <p className="text-xs text-gray-500">&copy; 2024 株式会社SKH All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}