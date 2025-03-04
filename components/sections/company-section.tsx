"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CompanySection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section
      id="company"
      ref={ref}
      className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 bg-[#F8F9FA] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="tech-circles opacity-5">
        <div className="tech-circle" />
      </div>
      
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          企業情報
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-black">
              テクノロジーで、
              <br />
              より良い未来を創造する
            </h3>
            <p className="text-gray-600 mb-8 sm:mb-12 leading-relaxed text-base sm:text-lg">
              私たちは、最先端のテクノロジーを活用して、
              社会の課題解決に取り組んでいます。
              AI・機械学習などの技術を駆使し、
              より効率的で持続可能な社会の実現を目指しています。
            </p>
            <Button variant="outline" className="group border-2 border-black text-black hover:bg-black hover:text-white rounded-none px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300">
              詳しく見る
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-2" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden mt-8 md:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="オフィスの様子"
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 hover:bg-opacity-0" />
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">所在地</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              〒100-0004
              <br />
              東京都千代田区大手町1-1-1
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">設立</h4>
            <p className="text-gray-600 text-sm sm:text-base">2020年4月1日</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">資本金</h4>
            <p className="text-gray-600 text-sm sm:text-base">1億円</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}