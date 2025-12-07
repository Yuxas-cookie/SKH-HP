"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { usePageTransition } from './page-transition'

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { navigateTo, isTransitioning } = usePageTransition()

  const navigation = {
    main: [
      { name: 'Purpose', href: '#purpose' },
      { name: 'Business', href: '#business' },
      { name: 'Message', href: '#message' },
      { name: 'Company', href: '#company' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Tokushoho', href: '/tokushoho' },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      if (isTransitioning) return
      navigateTo(href)
    }
  }

  return (
    <footer ref={ref} className="bg-[var(--color-black)] relative">
      {/* Top Border */}
      <div className="h-px bg-[var(--color-gray-800)]" />

      <motion.div
        className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <Link href="/" className="inline-block mb-10">
              <span className="text-[var(--color-white)] text-3xl font-extralight tracking-[0.2em]">
                SKH
              </span>
            </Link>
            <p className="text-[var(--color-gray-500)] text-base leading-[1.9] max-w-md mb-10 font-light">
              感動と喜びを届ける。<br />
              AI・DX・AXの力で企業と人の可能性を解き放ち、<br />
              共に成長し、共に勝つ未来を創る。
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-[var(--color-gray-600)] text-sm">
              <p>sekaino.hiroshi34@gmail.com</p>
              <p>090-3618-4320</p>
              <p>〒565-0842 大阪府吹田市千里山東2-4-3-201</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:col-start-8">
            <h4 className="text-[var(--color-gray-500)] text-xs tracking-[0.25em] uppercase mb-8">
              Navigation
            </h4>
            <ul className="space-y-5">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[var(--color-gray-400)] text-sm hover:text-[var(--color-white)] transition-colors duration-500 cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & CTA */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-[var(--color-gray-500)] text-xs tracking-[0.25em] uppercase mb-8">
              Legal
            </h4>
            <ul className="space-y-5 mb-12">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-gray-400)] text-sm hover:text-[var(--color-white)] transition-colors duration-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-premium text-[10px] py-3 px-6 inline-block cursor-pointer"
            >
              <span>Contact</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pt-10 border-t border-[var(--color-gray-900)]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[var(--color-gray-700)] text-xs tracking-[0.15em]">
              &copy; 2024 SKH Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-10">
              <Link
                href="#"
                className="text-[var(--color-gray-700)] text-xs tracking-wider hover:text-[var(--color-gray-500)] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/tokushoho"
                className="text-[var(--color-gray-700)] text-xs tracking-wider hover:text-[var(--color-gray-500)] transition-colors"
              >
                Tokushoho
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
