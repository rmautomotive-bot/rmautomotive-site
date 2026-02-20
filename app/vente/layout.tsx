import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vente Voitures Occasion | Chercheur Auto | Importation — RM Automotive',
  description: 'RM Automotive — Stock de voitures d\'occasion garanties. Chercheur de voiture sur critères. Importation depuis l\'étranger (Allemagne, Belgique, monde). Reprise véhicule. ☎ 06 50 50 01 75.',
  openGraph: {
    title: 'Vente Voitures Occasion & Importation — RM Automotive Île-de-France',
    description: 'Achetez une voiture d\'occasion garantie ou faites-nous trouver le véhicule idéal selon vos critères. Importation internationale.',
    url: 'https://rmautomotive.fr/vente',
  },
}

export default function VenteLayout({ children }: { children: React.ReactNode }) {
  return children
}
