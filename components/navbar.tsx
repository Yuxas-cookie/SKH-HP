"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePageTransition } from './page-transition'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { navigateTo, isTransitioning } = usePageTransition()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '#purpose', label: 'Purpose' },
    { href: '#business', label: 'Business' },
    { href: '#message', label: 'Message' },
    { href: '#company', label: 'Company' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (isTransitioning) return
    navigateTo(href)
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[var(--color-black)]/90 backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo */}
          <Link
            href="/"
            className="relative group"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="text-[var(--color-white)] text-2xl font-extralight tracking-[0.2em]">
              株式会社SKH
            </span>
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-[var(--color-accent)] transition-all duration-700 group-hover:w-full" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-16">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.8 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-[var(--color-gray-400)] text-[11px] tracking-[0.25em] uppercase hover:text-[var(--color-white)] transition-colors duration-500 group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-[var(--color-accent)] transition-all duration-700 group-hover:w-full" />
                </a>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-premium text-[10px] py-3 px-8 cursor-pointer"
              >
                <span>Contact</span>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-7 h-5">
              <span
                className={`absolute left-0 w-full h-px bg-[var(--color-white)] transition-all duration-500 ${
                  isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-[var(--color-white)] transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 w-full h-px bg-[var(--color-white)] transition-all duration-500 ${
                  isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[var(--color-black)] border-t border-[var(--color-gray-900)]"
          >
            <div className="px-6 py-10 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-5 text-[var(--color-gray-400)] text-sm tracking-[0.2em] uppercase hover:text-[var(--color-white)] transition-colors border-b border-[var(--color-gray-900)] cursor-pointer"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="pt-8"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="btn-premium-fill w-full text-center block cursor-pointer"
                >
                  <span>Contact</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Border */}
      <div className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-700 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      } bg-[var(--color-gray-900)]`} />
    </motion.nav>
  )
}
