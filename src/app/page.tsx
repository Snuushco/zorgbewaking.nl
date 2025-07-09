import { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'

export const metadata: Metadata = {
  title: 'zorgbewaking.nl | Zorgbeveiliging Limburg | Praesidion Security',
  description: 'zorgbewaking.nl: Beveiliging voor zorginstellingen in Limburg. Praesidion levert vaste, representatieve beveiligers met zorginzicht. Vraag direct een voorstel aan.',
  openGraph: {
    title: 'zorgbewaking.nl | Zorgbeveiliging met aandacht | Praesidion',
    description: 'zorgbewaking.nl: Beveiliging voor zorginstellingen in Limburg. Praesidion levert vaste, representatieve beveiligers met zorginzicht.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: '/zorgbeveiliging-limburg',
  },
}

export default function HomePage() {
  return <HomePageContent />
}
