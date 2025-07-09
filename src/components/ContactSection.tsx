'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLocation } from './LocationContext'

export default function ContactSection() {
  const { city } = useLocation();
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Neem direct contact op
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Klaar om uw zorgomgeving veiliger te maken? Neem contact op voor een vrijblijvend gesprek.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">📞</span>
                Telefoon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-2">+31 046 240 2401</p>
              <p className="text-blue-100 mb-4">24/7 bereikbaar voor spoed</p>
              <Button 
                className="w-full bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
                onClick={() => window.location.href = 'tel:+31462402401'}
              >
                Nu bellen
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">✉️</span>
                E-mail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold mb-2">zorg@praesidion.nl</p>
              <p className="text-blue-100 mb-4">Reactie binnen 2 uur</p>
              <Button 
                className="w-full bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
                onClick={() => window.location.href = 'mailto:zorg@praesidion.nl'}
              >
                E-mail versturen
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">📍</span>
                Vestigingen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold mb-2">{city}</p>
              <p className="text-blue-100 mb-4">Roermond • Sittard • Venlo</p>
              <Button 
                className="w-full bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
                onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Intakegesprek plannen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 