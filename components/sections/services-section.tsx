"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { Code2, Building2, Users } from 'lucide-react'

export function ServicesSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Code2,
      title: "システム開発",
      description: "最新技術を活用した、スケーラブルで高性能なシステムを開発します。"
    },
    {
      icon: Building2,
      title: "DXコンサルティング",
      description: "デジタル化による業務効率化と新規ビジネス創出をサポートします。"
    },
    {
      icon: Users,
      title: "AIソリューション",
      description: "機械学習と深層学習を活用した、革新的なAIソリューションを提供します。"
    }
  ]

  return (
    <section
      id="services"
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
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          サービス
        </motion.h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="p-6 sm:p-8 bg-white hover:shadow-2xl transition-all duration-300 border-none relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-black transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-black transition-transform group-hover:scale-110" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}