"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { Rocket, Lightbulb, Users } from 'lucide-react'

export function AboutSection() {
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
      id="about"
      ref={ref}
      className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 bg-[#F8F9FA] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="tech-circles opacity-5">
        <div className="tech-circle" />
        <div className="tech-circle" />
      </div>
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
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          私たちについて
        </motion.h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <Card className="p-6 sm:p-8 bg-white hover:shadow-2xl transition-all duration-300 border-none relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-black transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
              <Rocket className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-black transition-transform group-hover:scale-110" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black">ミッション</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                テクノロジーを通じて、人々の生活をより豊かに、
                ビジネスをより効率的にすることを目指しています。
              </p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <Card className="p-6 sm:p-8 bg-white hover:shadow-2xl transition-all duration-300 border-none relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-black transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
              <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-black transition-transform group-hover:scale-110" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black">ビジョン</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                革新的なソリューションで、
                デジタルトランスフォーメーションをリードする
                グローバルカンパニーを目指します。
              </p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ y: -8 }}
            className="group sm:col-span-2 md:col-span-1"
          >
            <Card className="p-6 sm:p-8 bg-white hover:shadow-2xl transition-all duration-300 border-none relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-black transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
              <Users className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-black transition-transform group-hover:scale-110" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black">バリュー</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                チャレンジ精神、創造性、
                チームワークを大切にし、
                常に最高品質を追求します。
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}