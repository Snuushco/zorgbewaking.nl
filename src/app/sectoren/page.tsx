import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import LogoZorgbewaking from '@/components/LogoZorgbewaking'
import LogoBouwbeveiliging from '@/components/LogoBouwbeveiliging'
import LogoEvenementenbeveiliging from '@/components/LogoEvenementenbeveiliging'
import LogoKantoorbeveiliging from '@/components/LogoKantoorbeveiliging'
import LogoIndustrielebeveiliging from '@/components/LogoIndustrielebeveiliging'
import LogoLogistiek from '@/components/LogoLogistiek'
import LogoBouwbeveiligingNL from '@/components/LogoBouwbeveiligingNL'

export const metadata: Metadata = {
  title: 'Andere Sectorpagina&apos;s | zorgbewaking.nl',
  description: 'Ontdek andere sectorpagina&apos;s van Praesidion Security B.V. Naast zorgbewaking.nl bieden wij beveiliging voor diverse sectoren.',
  openGraph: {
    title: 'Andere Sectorpagina&apos;s | zorgbewaking.nl',
    description: 'Ontdek andere sectorpagina&apos;s van Praesidion Security B.V.',
    type: 'website',
    locale: 'nl_NL',
  },
}

const sectors = [
  {
    title: 'Zorgbewaking',
    description: 'Professionele beveiliging voor zorginstellingen in Limburg',
    url: '/',
    current: true,
    features: ['Vaste beveiligers', 'Zorginzicht', 'Discrete aanpak', '24/7 beschikbaarheid']
  },
  {
    title: 'Evenementenbeveiliging',
    description: 'Beveiliging voor evenementen, festivals en bijeenkomsten',
    url: '#',
    current: false,
    features: ['Crowd management', 'Toegangscontrole', 'Incidentenbeheer', 'Flexibele inzet']
  },
  {
    title: 'Kantoorbeveiliging',
    description: 'Beveiliging voor kantoren en bedrijfspanden',
    url: '#',
    current: false,
    features: ['Receptie', 'Toegangscontrole', 'Surveillance', 'Noodhulp']
  },
  {
    title: 'Industriële beveiliging',
    description: 'Beveiliging voor fabrieken en industriële locaties',
    url: '#',
    current: false,
    features: ['Perimetertoegang', 'Brandpreventie', 'Veiligheidscontroles', 'Noodprocedures']
  },
  {
    title: 'Logistiek',
    description: 'Beveiliging voor logistieke centra, magazijnen en distributie',
    url: '#',
    current: false,
    features: ['Magazijnbeveiliging', 'Transportbegeleiding', 'Goederencontrole', 'Perimetertoegang']
  },
  {
    title: 'Bouw',
    description: 'Beveiliging voor bouwplaatsen en projecten',
    url: 'https://bouwbeveiligingnederland.nl',
    current: false,
    features: ['Bouwplaatsbeveiliging', 'Materieelbescherming', 'Toegangscontrole', 'Surveillance']
  }
]

export default function SectorenPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Andere Sectorpagina&apos;s</h1>
              <p className="text-blue-100 mt-2">zorgbewaking.nl - Onderdeel van Praesidion Security B.V.</p>
            </div>
            <Link href="/">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 border-white font-semibold">
                ← Terug naar home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Praesidion Security B.V. - Uw partner in beveiliging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naast zorgbewaking.nl biedt Praesidion Security B.V. professionele beveiligingsdiensten 
            voor diverse sectoren. Ontdek hieronder onze andere specialisaties en sectorpagina&apos;s.
          </p>
        </div>

        {/* Company Info */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Over Praesidion Security B.V.</h3>
              <p className="text-gray-700 mb-4">
                Praesidion Security B.V. is een toonaangevend beveiligingsbedrijf met jarenlange 
                ervaring in diverse sectoren. Wij leveren hoogwaardige beveiligingsdiensten met 
                aandacht voor klanttevredenheid en professionele uitvoering.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Vergunningnummer:</strong> ND 6250</p>
                <p><strong>KvK:</strong> 97640794</p>
                <p><strong>BTW:</strong> NL002280171B48</p>
                <p><strong>IBAN:</strong> NL23 KNAB 0616 6155 90</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Onze Kernwaarden</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Professionaliteit:</strong> Hoogopgeleide en ervaren beveiligers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Betrouwbaarheid:</strong> Altijd beschikbaar en punctueel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Discretie:</strong> Vertrouwelijke behandeling van alle informatie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Klantgerichtheid:</strong> Maatwerk en persoonlijke aandacht</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            sector.current ? (
              <Link
                key={index}
                href="/"
                className="block cursor-pointer hover:shadow-lg transition-shadow"
              >
                <Card className={`h-full ring-2 ring-blue-500`}>
                  <CardHeader>
                    <div className="flex justify-center mb-2">
                      <LogoZorgbewaking className="w-36" />
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{sector.title}</CardTitle>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        Huidige pagina
                      </span>
                    </div>
                    <CardDescription className="text-gray-600">
                      {sector.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-sm">Kenmerken:</h4>
                      <ul className="space-y-1">
                        {sector.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-blue-600 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <Button className="w-full" disabled>
                          Huidige pagina
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ) : sector.title === 'Bouw' ? (
              <Link
                key={index}
                href={sector.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer hover:shadow-lg transition-shadow"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-2">
                      <LogoBouwbeveiligingNL className="w-72 h-auto" />
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{sector.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">
                      {sector.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-sm">Kenmerken:</h4>
                      <ul className="space-y-1">
                        {sector.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-blue-600 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <Button className="w-full" variant="outline">
                          Naar bouwbeveiligingnederland.nl
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ) : sector.title === 'Evenementenbeveiliging' ? (
              <Card key={index} className={`h-full cursor-pointer hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <LogoEvenementenbeveiliging className="w-36" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{sector.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">Kenmerken:</h4>
                    <ul className="space-y-1">
                      {sector.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button className="w-full" variant="outline">
                        Naar evenementenbeveiliging.nl
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : sector.title === 'Kantoorbeveiliging' ? (
              <Card key={index} className={`h-full cursor-pointer hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <LogoKantoorbeveiliging className="w-36" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{sector.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">Kenmerken:</h4>
                    <ul className="space-y-1">
                      {sector.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button className="w-full" variant="outline">
                        Naar kantoorbeveiliging.nl
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : sector.title === 'Industriële beveiliging' ? (
              <Card key={index} className={`h-full cursor-pointer hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <LogoIndustrielebeveiliging className="w-36" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{sector.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">Kenmerken:</h4>
                    <ul className="space-y-1">
                      {sector.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button className="w-full" variant="outline">
                        Naar industrielebeveiliging.nl
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : sector.title === 'Logistiek' ? (
              <Card key={index} className={`h-full cursor-pointer hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <LogoLogistiek className="w-36" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{sector.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">Kenmerken:</h4>
                    <ul className="space-y-1">
                      {sector.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button className="w-full" variant="outline">
                        Naar logistiek.nl
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card key={index} className={`h-full cursor-pointer hover:shadow-lg transition-shadow ${sector.current ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader>
                  {sector.current && (
                    <div className="flex justify-center mb-2">
                      <LogoZorgbewaking className="w-36" />
                    </div>
                  )}
                  {sector.title === 'Bouw' && (
                    <div className="flex justify-center mb-2">
                      <LogoBouwbeveiliging className="w-36" />
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{sector.title}</CardTitle>
                    {sector.current && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        Huidige pagina
                      </span>
                    )}
                  </div>
                  <CardDescription className="text-gray-600">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">Kenmerken:</h4>
                    <ul className="space-y-1">
                      {sector.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      {sector.title === 'Bouw' ? (
                        <Button className="w-full" variant="outline">
                          Naar bouwbeveiligingnederland.nl
                        </Button>
                      ) : sector.current ? (
                        <Button className="w-full" disabled>
                          Huidige pagina
                        </Button>
                      ) : (
                        <Button className="w-full" variant="outline" disabled>
                          Binnenkort beschikbaar
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-lg p-8 mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Interesse in onze diensten?
            </h3>
            <p className="text-blue-800 mb-6">
              Neem contact op met Praesidion Security B.V. voor een vrijblijvend gesprek over 
              uw beveiligingswensen. Wij helpen u graag verder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Terug naar zorgbewaking.nl
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Contact opnemen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 