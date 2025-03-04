"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function NewsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const news = [
    {
      date: '2024.03.15',
      category: 'プレスリリース',
      title: '新しいAIソリューションの提供を開始',
    },
    {
      date: '2024.03.01',
      category: '採用情報',
      title: '2025年度新卒採用エントリー受付開始',
    },
    {
      date: '2024.02.20',
      category: 'お知らせ',
      title: '本社オフィスを移転いたしました',
    }
  ]

  return (
    <section
      id="news"
      ref={ref}
      className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="tech-lines opacity-5">
        <div className="tech-line" />
        <div className="tech-line" />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            お知らせ
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <Button variant="outline" className="group border-2 border-black text-black hover:bg-black hover:text-white rounded-none px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300">
              一覧を見る
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-2" />
            </Button>
          </motion.div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -4 }}
            >
              <Card className="p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-none group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-black transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <span className="text-gray-500 font-medium text-sm sm:text-base">{item.date}</span>
                    <span className="px-2 sm:px-4 py-1 bg-black text-white text-xs sm:text-sm inline-block w-fit">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg text-black group-hover:translate-x-2 transition-transform mt-2 sm:mt-0">
                    {item.title}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 text-center md:hidden"
        >
          <Button variant="outline" className="w-full group border-2 border-black text-black hover:bg-black hover:text-white rounded-none px-4 py-3 text-sm sm:text-base transition-all duration-300">
            一覧を見る
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-2" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}