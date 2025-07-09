export default function ProblemSection({ province = 'Limburg' }: { province?: string }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            De uitdaging in de zorg in {province}
          </h2>
        </div>
        <div className="text-lg text-gray-700 max-w-2xl mx-auto">
          <p>
            Zorginstellingen in {province} staan voor unieke uitdagingen op het gebied van veiligheid, personeelstekorten en toenemende complexiteit van zorgvragen. Dit vraagt om een specialistische aanpak en beveiligers met zorginzicht.
          </p>
        </div>
      </div>
    </section>
  )
} 