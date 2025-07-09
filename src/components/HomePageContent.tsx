'use client'

import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'
import { LocationProvider, useLocation } from '@/components/LocationContext'

function HomePageContentInner() {
  const { province } = useLocation();
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TestimonialsSection />
      <ContactSection />
      <IntakeForm />
      <Footer />
    </main>
  )
}

export default function HomePageContent() {
  return (
    <LocationProvider>
      <HomePageContentInner />
    </LocationProvider>
  )
} 