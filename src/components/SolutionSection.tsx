'use client'

import { Check } from 'lucide-react'

export default function SolutionSection() {
  const benefits = [
    'Bekende gezichten op locatie',
    'Representatief en mensgericht',
    'Inzetbaar bij personeelstekorten'
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Waarom kiezen voor Zorgbewaking?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-6 bg-white rounded-lg shadow-sm transition-all duration-200 border border-transparent hover:shadow-xl hover:scale-105 hover:border-blue-500 cursor-pointer"
              onClick={() => {
                document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-lg text-gray-700 font-medium">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 