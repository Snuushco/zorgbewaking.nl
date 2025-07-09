import LogoZorgbewaking from './LogoZorgbewaking'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bedrijfsgegevens */}
          <div>
            <LogoZorgbewaking className="w-40 mb-4" />
            <small className="text-gray-400">Zorgbewaking.nl is een onderdeel van</small>
            <h3 className="text-xl font-bold mb-4">Praesidion Security B.V.</h3>
            <div className="space-y-2 text-gray-300">
              <p>Vergunningnummer: ND 6250</p>
              <p>KvK: 97640794</p>
              <p>BTW: NL002280171B48</p>
              <p>IBAN: NL23 KNAB 0616 6155 90</p>
            </div>
          </div>
          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <div className="space-y-2">
              <a href="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                Privacyverklaring
              </a>
              <a href="/voorwaarden" className="block text-gray-300 hover:text-white transition-colors">
                Algemene voorwaarden
              </a>
              <a href="/sectoren" className="block text-gray-300 hover:text-white transition-colors">
                Andere sectorpagina's
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 space-y-2">
          <p className="text-lg font-bold text-white">zorgbewaking.nl</p>
          <span>
            &copy; {new Date().getFullYear()} zorgbewaking.nl | Onderdeel van <a href="https://praesidion.nl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Praesidion Security B.V.</a> &apos;Uw veiligheid, onze zorg&apos;
          </span>
        </div>
      </div>
    </footer>
  )
} 