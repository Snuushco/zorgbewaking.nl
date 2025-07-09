import { Card, CardContent } from '@/components/ui/card'
import { useLocation } from './LocationContext'

const testimonials = [
  {
    name: "Mevr. Jansen",
    role: "Directeur Verpleeghuis",
    location: "Maastricht",
    content: "De beveiligers van zorgbewaking.nl zijn een verrijking voor onze organisatie. Ze zijn discreet, professioneel en begrijpen de zorgomgeving perfect.",
    rating: 5
  },
  {
    name: "Dhr. Bakker",
    role: "Manager Zorginstelling",
    location: "Heerlen",
    content: "Sinds de komst van zorgbewaking.nl voelen onze bewoners en personeel zich veel veiliger. De beveiligers zijn betrouwbaar en altijd bereikbaar.",
    rating: 5
  },
  {
    name: "Mevr. de Vries",
    role: "Hoofd Beveiliging",
    location: "Roermond",
    content: "Professionele service, snelle reactietijden en beveiligers die echt oog hebben voor de bewoners. Een aanrader voor elke zorginstelling.",
    rating: 5
  }
]

export default function TestimonialsSection() {
  const { city } = useLocation();
  const testimonials = [
    {
      name: "Mevr. Jansen",
      role: "Directeur Verpleeghuis",
      location: city,
      content: "De beveiligers van zorgbewaking.nl zijn een verrijking voor onze organisatie. Ze zijn discreet, professioneel en begrijpen de zorgomgeving perfect.",
      rating: 5
    },
    {
      name: "Dhr. Bakker",
      role: "Manager Zorginstelling",
      location: city,
      content: "Sinds de komst van zorgbewaking.nl voelen onze bewoners en personeel zich veel veiliger. De beveiligers zijn betrouwbaar en altijd bereikbaar.",
      rating: 5
    },
    {
      name: "Mevr. de Vries",
      role: "Hoofd Beveiliging",
      location: city,
      content: "Professionele service, snelle reactietijden en beveiligers die echt oog hebben voor de bewoners. Een aanrader voor elke zorginstelling.",
      rating: 5
    }
  ]
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ontdek waarom zorginstellingen in Limburg kiezen voor zorgbewaking.nl
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Tevreden klanten</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Beschikbaarheid</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Jaar ervaring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">ND 6250</div>
              <div className="text-sm text-gray-600">Vergunningnummer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 