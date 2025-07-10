import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Privacyverklaring | zorgbewaking.nl',
  description: 'Privacyverklaring van zorgbewaking.nl, onderdeel van Praesidion Security B.V. Lees hoe wij uw persoonsgegevens verwerken en beschermen.',
  openGraph: {
    title: 'Privacyverklaring | zorgbewaking.nl',
    description: 'Privacyverklaring van zorgbewaking.nl, onderdeel van Praesidion Security B.V.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Privacyverklaring</h1>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Inleiding</h2>
            <p className="text-gray-700 mb-4">
              zorgbewaking.nl, onderdeel van Praesidion Security B.V. (hierna: &quot;wij&quot;, &quot;ons&quot; of &quot;onze&quot;), 
              respecteert uw privacy en zorgt ervoor dat de persoonlijke informatie die u ons verschaft 
              vertrouwelijk wordt behandeld. Deze privacyverklaring is van toepassing op alle diensten 
              van zorgbewaking.nl.
            </p>
            <p className="text-gray-700">
              <strong>Contactgegevens:</strong><br />
              Praesidion Security B.V.<br />
              Vergunningnummer: ND 6250<br />
              KvK: 97640794<br />
              BTW: NL002280171B48<br />
              IBAN: NL23 KNAB 0616 6155 90
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Persoonsgegevens die wij verwerken</h2>
            <p className="text-gray-700 mb-4">
              zorgbewaking.nl verwerkt uw persoonsgegevens wanneer u gebruik maakt van onze diensten 
              en/of wanneer u deze zelf aan ons verstrekt. Hieronder vindt u een overzicht van de 
              persoonsgegevens die wij verwerken:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Voor- en achternaam</li>
              <li>Adresgegevens</li>
              <li>Telefoonnummer</li>
              <li>E-mailadres</li>
              <li>Bedrijfsgegevens</li>
              <li>IP-adres</li>
              <li>Overige persoonsgegevens die u actief verstrekt in correspondentie en telefonisch contact</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Doel en grondslag</h2>
            <p className="text-gray-700 mb-4">
              zorgbewaking.nl verwerkt uw persoonsgegevens voor de volgende doelen:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Het afhandelen van uw betaling</li>
              <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
              <li>U te informeren over wijzigingen van onze diensten en producten</li>
              <li>Om goederen en diensten bij u af te leveren</li>
              <li>zorgbewaking.nl analyseert uw gedrag op de website om daarmee de website te verbeteren</li>
              <li>zorgbewaking.nl volgt uw surfgedrag over verschillende websites heen om daarmee producten en diensten af te stemmen op uw profiel</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Bewaartermijn</h2>
            <p className="text-gray-700">
              zorgbewaking.nl bewaart uw persoonsgegevens niet langer dan strikt nodig is om de 
              doelen te realiseren waarvoor uw gegevens worden verzameld. Onze bewaartermijn is 
              zeven jaar, conform de wettelijke verplichting voor administratieve gegevens.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Delen van persoonsgegevens met derden</h2>
            <p className="text-gray-700">
              zorgbewaking.nl verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend 
              indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen 
              aan een wettelijke verplichting.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies en vergelijkbare technieken</h2>
            <p className="text-gray-700">
              zorgbewaking.nl gebruikt alleen technische en functionele cookies. En analytische 
              cookies die geen inbreuk maken op uw privacy. Een cookie is een klein tekstbestand 
              dat bij het eerste bezoek aan deze website wordt opgeslagen op uw computer, tablet 
              of smartphone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Gegevens inzien, aanpassen of verwijderen</h2>
            <p className="text-gray-700 mb-4">
              U heeft het recht om uw persoonsgegevens in te zien, aan te passen of te verwijderen. 
              Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking 
              in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door 
              zorgbewaking.nl.
            </p>
            <p className="text-gray-700">
              U kunt een verzoek tot inzage, correctie, verwijdering van uw persoonsgegevens of 
              verzoek tot intrekking van uw toestemming of bezwaar op de verwerking van uw 
              persoonsgegevens sturen naar info@zorgbewaking.nl.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Beveiliging</h2>
            <p className="text-gray-700">
              zorgbewaking.nl neemt de bescherming van uw gegevens serieus en neemt passende 
              maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking 
              en ongeoorloofde wijziging tegen te gaan. Als u de indruk heeft dat uw gegevens 
              niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact 
              op via info@zorgbewaking.nl.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Klachten</h2>
            <p className="text-gray-700">
              Heeft u een klacht over de verwerking van uw persoonsgegevens door zorgbewaking.nl? 
              Neem dan contact met ons op. U heeft ook het recht om een klacht in te dienen bij 
              de Autoriteit Persoonsgegevens.
            </p>
          </section>

          <div className="bg-blue-50 p-6 rounded-lg mt-12">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Contact</h3>
            <p className="text-blue-800">
              Voor vragen over deze privacyverklaring kunt u contact opnemen via:<br />
              <strong>E-mail:</strong> info@zorgbewaking.nl<br />
              <strong>Website:</strong> www.zorgbewaking.nl
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 