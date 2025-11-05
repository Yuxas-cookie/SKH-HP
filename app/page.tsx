"use client"

import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesSection } from '@/components/sections/services-section'
import { CompanySection } from '@/components/sections/company-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CompanySection />
      <ContactSection />
      <Footer />
    </main>
  )
}