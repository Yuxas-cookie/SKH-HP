'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MagneticButton } from '@/components/ui/magnetic-button'

const navItems = [
  { label: 'Purpose', href: '/purpose' },
  { label: 'Mission', href: '/mission' },
  { label: 'Service', href: '/service' },
  { label: 'Company', href: '/company' },
]

interface NavigationProps {
  variant?: 'dark' | 'light'
}

export function Navigation({ variant = 'dark' }: NavigationProps) {
  const pathname = usePathname()
  const isDark = variant === 'dark'

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'glass-dark' : 'glass'}`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link
          href="/"
          className={`text-2xl font-extralight tracking-wider transition-colors ${
            isDark ? 'text-amber-400 hover:text-amber-300' : 'text-amber-600 hover:text-amber-500'
          }`}
        >
          株式会社SKH
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-sm transition-colors link-underline ${
                    isActive
                      ? isDark
                        ? 'text-amber-400'
                        : 'text-amber-600'
                      : isDark
                      ? 'text-neutral-400 hover:text-amber-400'
                      : 'text-stone-600 hover:text-amber-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={`absolute -bottom-1 left-0 right-0 h-px ${
                        isDark ? 'bg-amber-400' : 'bg-amber-600'
                      }`}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}

          <MagneticButton
            href="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-sm rounded-full font-medium shadow-lg shadow-amber-500/20"
          >
            Contact
          </MagneticButton>
        </div>

        {/* Mobile menu button */}
        <button className={`md:hidden ${isDark ? 'text-white' : 'text-stone-900'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}
