import LogoZorgbewaking from './LogoZorgbewaking'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 items-end">
          {/* Bedrijfsgegevens */}
          <div>
            <LogoZorgbewaking className="w-32 mb-3" />
            <small className="text-gray-400">Zorgbewaking.nl is een onderdeel van</small>
            <h3 className="text-lg font-bold mb-3">Praesidion Security B.V.</h3>
            <div className="space-y-1 text-sm text-gray-300">
              <p>Vergunningnummer: ND 6250</p>
              <p>KvK: 97640794</p>
              <p>BTW: NL002280171B48</p>
              <p>IBAN: NL23 KNAB 0616 6155 90</p>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col h-full justify-end">
            <h3 className="text-lg font-bold mb-3">Links</h3>
            <div className="space-y-1">
              <a href="/privacy" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Privacyverklaring
              </a>
              <a href="/voorwaarden" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Algemene voorwaarden
              </a>
              <a href="/sectoren" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Andere sectorpagina&apos;s
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 space-y-1">
          <p className="text-base font-bold text-white">zorgbewaking.nl</p>
          <span className="text-sm">
            &copy; {new Date().getFullYear()} zorgbewaking.nl | Onderdeel van <a href="https://praesidion.nl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Praesidion Security B.V.</a> &apos;Uw veiligheid, onze zorg&apos;
          </span>
        </div>
      </div>
    </footer>
  )
} 