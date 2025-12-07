'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Purpose', href: '/purpose' },
    { label: 'Mission', href: '/mission' },
    { label: 'Service', href: '/service' },
    { label: 'Company', href: '/company' },
    { label: 'Contact', href: '/contact' },
  ]

  const legalLinks = [
    { label: 'プライバシーポリシー', href: '/privacy' },
    { label: '特定商取引法に基づく表記', href: '/tokushoho' },
  ]

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-extralight text-amber-400 tracking-wider">
              SKH
            </Link>
            <p className="mt-6 text-sm leading-relaxed max-w-md">
              AI・DX・AXの力で企業と人の可能性を解き放ち、
              感動と喜びが連鎖する未来を共に創ります。
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {currentYear} SKH Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-neutral-600">
              Crafted with precision
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-amber-400"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
