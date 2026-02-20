import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nos Services Automobiles | Inspection, Entretien, Vente | RMautomotive.fr',
  description:
    'Découvrez tous les services de RMautomotive : inspection avant achat, entretien toutes marques, réparation, vente de véhicules d\'occasion garantis. Devis gratuit. 06 12 34 56 78.',
  openGraph: {
    title: 'Services Automobiles — Inspection, Entretien, Vente | RMautomotive',
    description: 'Inspection automobile, entretien toutes marques, réparation et vente de véhicules garantis.',
    url: 'https://rmautomotive.fr/services',
  },
}

const categoriesServices = [
  {
    icon: '🔍',
    titre: 'Inspection automobile',
    couleur: 'blue',
    services: [
      { nom: 'Inspection avant achat', prix: 'à partir de 79€', desc: 'Contrôle mécanique, carrosserie, électronique complet avant l\'achat d\'un véhicule d\'occasion.' },
      { nom: 'Diagnostic électronique', prix: 'à partir de 49€', desc: 'Lecture et analyse des codes défauts avec valise de diagnostic multimarque.' },
      { nom: 'Contrôle pré-vente', prix: 'à partir de 59€', desc: 'Rapport d\'état complet pour faciliter la vente de votre véhicule au meilleur prix.' },
    ],
  },
  {
    icon: '🔧',
    titre: 'Entretien & Réparation',
    couleur: 'green',
    services: [
      { nom: 'Vidange + filtre', prix: 'à partir de 69€', desc: 'Vidange huile moteur avec remplacement du filtre à huile. Toutes marques, toutes cylindrées.' },
      { nom: 'Freins (disques + plaquettes)', prix: 'à partir de 149€', desc: 'Remplacement disques et plaquettes par essieu. Rodage et vérification complète du système.' },
      { nom: 'Courroie de distribution', prix: 'sur devis', desc: 'Remplacement courroie de distribution avec kit complet. Indispensable à intervalles réguliers.' },
      { nom: 'Climatisation', prix: 'à partir de 89€', desc: 'Recharge gaz, désinfection du circuit, contrôle du condenseur et du compresseur.' },
      { nom: 'Pneus', prix: 'à partir de 25€/pneu', desc: 'Fourniture et montage de pneumatiques toutes marques. Équilibrage et géométrie disponibles.' },
      { nom: 'Batterie', prix: 'à partir de 79€', desc: 'Test de la batterie en charge, remplacement si nécessaire avec garantie 2 ans.' },
    ],
  },
  {
    icon: '🚗',
    titre: 'Vente de véhicules',
    couleur: 'purple',
    services: [
      { nom: 'Véhicules d\'occasion garantis', prix: 'voir stock', desc: 'Sélection de véhicules inspectés, révisés et garantis 6 mois minimum. Toutes marques.' },
      { nom: 'Reprise de votre véhicule', prix: 'estimation gratuite', desc: 'Estimation gratuite de votre véhicule, reprise immédiate ou dépôt-vente selon votre préférence.' },
      { nom: 'Financement auto', prix: 'sous conditions', desc: 'Solutions de financement personnalisées pour l\'achat de votre prochain véhicule.' },
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Nos Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            De l&apos;entretien courant à l&apos;inspection avant achat, en passant par la vente de véhicules —
            tout sous un même toit, par des professionnels certifiés.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-16">
          {categoriesServices.map((cat) => (
            <div key={cat.titre}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{cat.icon}</span>
                <h2 className="text-2xl font-bold text-blue-900">{cat.titre}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((s) => (
                  <div key={s.nom} className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-blue-800 text-lg">{s.nom}</h3>
                      <span className="text-orange-600 font-semibold text-sm whitespace-nowrap ml-2">{s.prix}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Urgence */}
      <section className="py-12 px-4 bg-orange-600 text-white text-center">
        <p className="text-2xl font-bold mb-2">🚨 Besoin d&apos;un dépannage d&apos;urgence ?</p>
        <p className="text-orange-100 mb-6">Disponible 24h/24 — 7j/7</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0612345678" className="bg-white text-orange-600 font-bold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors">
            📞 06 12 34 56 78
          </a>
          <Link href="/depannage" className="border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-full transition-colors">
            Voir le service dépannage
          </Link>
        </div>
      </section>
    </>
  )
}
