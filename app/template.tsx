'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TemplateProps {
  children: ReactNode
}

export default function Template({ children }: TemplateProps) {
  return (
    <>
      {/* Page transition overlay */}
      <motion.div
        className="fixed inset-0 z-[100] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-black origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-16 h-16 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
        </motion.div>
      </motion.div>

      {/* Gold accent line on top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent z-[99]"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
      />

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  )
}
