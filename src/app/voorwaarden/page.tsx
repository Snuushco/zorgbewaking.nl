import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | zorgbewaking.nl',
  description: 'Algemene voorwaarden van zorgbewaking.nl, onderdeel van Praesidion Security B.V. Lees de voorwaarden voor onze dienstverlening.',
  openGraph: {
    title: 'Algemene Voorwaarden | zorgbewaking.nl',
    description: 'Algemene voorwaarden van zorgbewaking.nl, onderdeel van Praesidion Security B.V.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function VoorwaardenPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Algemene Voorwaarden</h1>
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Laatst bijgewerkt</h2>
            <p className="text-gray-600">1 januari 2025</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 1 - Definities</h2>
            <p className="text-gray-700 mb-4">
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>zorgbewaking.nl:</strong> zorgbewaking.nl, onderdeel van Praesidion Security B.V., gevestigd te [adres], ingeschreven in het handelsregister onder nummer 97640794</li>
              <li><strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die een overeenkomst aangaat met zorgbewaking.nl</li>
              <li><strong>Overeenkomst:</strong> de overeenkomst tussen zorgbewaking.nl en de opdrachtgever</li>
              <li><strong>Diensten:</strong> alle door zorgbewaking.nl te verrichten werkzaamheden op het gebied van beveiliging en toezicht</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 2 - Toepasselijkheid</h2>
            <p className="text-gray-700 mb-4">
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en 
              dienstverlening van zorgbewaking.nl, tenzij uitdrukkelijk anders is overeengekomen.
            </p>
            <p className="text-gray-700">
              Afwijkingen van deze voorwaarden zijn alleen geldig indien deze schriftelijk zijn 
              overeengekomen tussen zorgbewaking.nl en de opdrachtgever.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 3 - Aanbiedingen en totstandkoming overeenkomst</h2>
            <p className="text-gray-700 mb-4">
              Alle aanbiedingen van zorgbewaking.nl zijn vrijblijvend en 30 dagen geldig, tenzij 
              anders vermeld. Een overeenkomst komt tot stand door aanvaarding van de aanbieding 
              door de opdrachtgever.
            </p>
            <p className="text-gray-700">
              zorgbewaking.nl is gerechtigd om een opdracht te weigeren zonder opgave van redenen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 4 - Uitvoering van de diensten</h2>
            <p className="text-gray-700 mb-4">
              zorgbewaking.nl zal de overeengekomen diensten naar beste inzicht en vermogen uitvoeren, 
              rekening houdend met de belangen van de opdrachtgever.
            </p>
            <p className="text-gray-700 mb-4">
              De opdrachtgever is verplicht om alle informatie te verstrekken die zorgbewaking.nl 
              redelijkerwijs nodig heeft voor de uitvoering van de overeenkomst.
            </p>
            <p className="text-gray-700">
              zorgbewaking.nl is gerechtigd om de uitvoering van de diensten te laten verrichten 
              door derden, mits de opdrachtgever hiervan vooraf in kennis wordt gesteld.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 5 - Prijzen en betaling</h2>
            <p className="text-gray-700 mb-4">
              Alle genoemde prijzen zijn in euro's en inclusief BTW, tenzij anders vermeld.
            </p>
            <p className="text-gray-700 mb-4">
              Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan, tenzij anders 
              overeengekomen.
            </p>
            <p className="text-gray-700">
              Bij late betaling is de opdrachtgever in verzuim en is zorgbewaking.nl gerechtigd 
              om de wettelijke rente te berekenen over het openstaande bedrag.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 6 - Aansprakelijkheid</h2>
            <p className="text-gray-700 mb-4">
              De aansprakelijkheid van zorgbewaking.nl is beperkt tot het bedrag dat in het 
              desbetreffende geval onder de aansprakelijkheidsverzekering wordt uitbetaald, 
              vermeerderd met het eigen risico.
            </p>
            <p className="text-gray-700 mb-4">
              zorgbewaking.nl is niet aansprakelijk voor indirecte schade, waaronder maar niet 
              beperkt tot bedrijfsschade, winstderving en immateriële schade.
            </p>
            <p className="text-gray-700">
              De opdrachtgever vrijwaart zorgbewaking.nl tegen alle vorderingen van derden 
              die het gevolg zijn van de uitvoering van de overeenkomst.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 7 - Duur en opzegging</h2>
            <p className="text-gray-700 mb-4">
              Overeenkomsten worden aangegaan voor onbepaalde tijd, tenzij anders overeengekomen.
            </p>
            <p className="text-gray-700 mb-4">
              Beide partijen kunnen de overeenkomst opzeggen met inachtneming van een opzegtermijn 
              van 30 dagen, tenzij anders overeengekomen.
            </p>
            <p className="text-gray-700">
              zorgbewaking.nl is gerechtigd om de overeenkomst onmiddellijk op te zeggen indien 
              de opdrachtgever in gebreke blijft met het nakomen van zijn verplichtingen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 8 - Geheimhouding</h2>
            <p className="text-gray-700">
              Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie 
              die zij in het kader van de overeenkomst ontvangen. Deze verplichting blijft van 
              kracht na beëindiging van de overeenkomst.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 9 - Toepasselijk recht en geschillen</h2>
            <p className="text-gray-700 mb-4">
              Op alle overeenkomsten tussen zorgbewaking.nl en de opdrachtgever is Nederlands 
              recht van toepassing.
            </p>
            <p className="text-gray-700">
              Geschillen worden in eerste aanleg voorgelegd aan de bevoegde rechter in het 
              arrondissement waar zorgbewaking.nl is gevestigd.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel 10 - Wijzigingen</h2>
            <p className="text-gray-700">
              zorgbewaking.nl behoudt zich het recht voor om deze algemene voorwaarden te wijzigen. 
              Wijzigingen worden van kracht na publicatie op de website van zorgbewaking.nl.
            </p>
          </section>

          <div className="bg-blue-50 p-6 rounded-lg mt-12">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Contact</h3>
            <p className="text-blue-800">
              Voor vragen over deze algemene voorwaarden kunt u contact opnemen via:<br />
              <strong>E-mail:</strong> info@zorgbewaking.nl<br />
              <strong>Website:</strong> www.zorgbewaking.nl
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 