'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import LogoZorgbewaking from './LogoZorgbewaking'
import { useLocation } from './LocationContext'

interface HeroSectionProps {
  branding?: string
  province?: string
}

const VESTIGINGEN = [
  { naam: 'Heerlen', lat: 50.888174, lon: 5.979499 },
  { naam: 'Maastricht', lat: 50.851368, lon: 5.690973 },
  { naam: 'Roermond', lat: 51.194167, lon: 5.9875 },
  { naam: 'Sittard', lat: 51.000833, lon: 5.866944 },
  { naam: 'Venlo', lat: 51.370374, lon: 6.172403 },
]

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a =
    0.5 - Math.cos(dLat)/2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    (1 - Math.cos(dLon))/2
  return R * 2 * Math.asin(Math.sqrt(a))
}

export default function HeroSection() {
  const { city, geoTried } = useLocation();

  useEffect(() => {
    if (!navigator.geolocation) {
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        let minDist = Infinity
        for (const v of VESTIGINGEN) {
          const dist = getDistance(latitude, longitude, v.lat, v.lon)
          if (dist < minDist) {
            minDist = dist
          }
        }
      },
      () => { },
      { enableHighAccuracy: false, timeout: 5000 }
    )
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100 overflow-hidden font-sans">
      {/* Background image with blur */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero.jpg"
          alt="Zorgomgeving met mensen"
          fill
          className="object-cover w-full h-full blur-sm scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <LogoZorgbewaking className="w-[180px] h-auto" />
        </div>
        {/* Locatie */}
        <div className="mb-2 text-sm text-sky-200 drop-shadow-sm">
          {geoTried && (
            <>Dichtstbijzijnde vestiging: <span className="font-semibold">{city}</span></>
          )}
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Zorg vraagt om meer dan beveiliging.
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow">
          Kies voor rust, discretie en mensgericht toezicht. Onze beveiligers brengen structuur en veiligheid in uw zorgomgeving.
        </p>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-base">
          <div className="flex items-center text-white">
            <span className="text-green-400 mr-2 text-lg">✓</span>
            <span>Vergunningnummer ND 6250</span>
          </div>
          <div className="flex items-center text-white">
            <span className="text-green-400 mr-2 text-lg">✓</span>
            <span>24/7 beschikbaar</span>
          </div>
          <div className="flex items-center text-white">
            <span className="text-green-400 mr-2 text-lg">✓</span>
            <span>Gratis intakegesprek</span>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-700 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            onClick={() => {
              document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Plan een gratis intakegesprek
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
            onClick={() => {
              window.location.href = 'tel:+31612345678'
            }}
          >
            <span className="mr-2">📞</span>Direct bellen
          </Button>
        </div>

        {/* Urgency element */}
        <div
          className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md inline-block text-sm font-medium border border-yellow-300 mt-2 transition-all duration-200 cursor-pointer hover:bg-yellow-200 hover:shadow-md"
          onClick={() => {
            document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="mr-2">⏰</span>Beperkte beschikbaarheid – Plan nu uw gratis intakegesprek
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-sky-100 rounded-full opacity-20 z-10"></div>
    </section>
  )
} 