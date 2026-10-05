import type { Metadata } from 'next'
import Link from 'next/link'
import EntretienForm from '@/components/EntretienForm'

export const metadata: Metadata = {
  title: 'Entretien & Réparation Automobile | Mitry-Mory (77)',
  description: 'RM Automotive Mitry-Mory — Entretien et réparation toutes marques : vidange, freins, distribution, climatisation, pneus, batterie. Devis gratuit. ☎ 06 50 50 01 75.',
}

const categories = [
  {
    icon: '🔧',
    titre: 'Entretien & Réparation',
    services: [
      { nom: 'Vidange + filtre', desc: 'Vidange huile moteur, remplacement filtre à huile. Huile de qualité OEM. Toutes marques.' },
      { nom: 'Freins (disques + plaquettes)', desc: 'Remplacement disques et plaquettes par essieu. Rodage et vérification complète du système de freinage.' },
      { nom: 'Courroie de distribution', desc: 'Remplacement courroie de distribution avec kit complet. Recommandé selon kilométrage constructeur.' },
      { nom: 'Climatisation', desc: 'Recharge gaz climatisation, désinfection, contrôle condenseur et compresseur.' },
      { nom: 'Pneus', desc: 'Fourniture et montage toutes marques. Équilibrage et géométrie disponibles.' },
      { nom: 'Batterie', desc: 'Test en charge, remplacement si nécessaire avec garantie 2 ans.' },
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gray-950 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Entretien &amp; Réparation</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Garage indépendant à Mitry-Mory (77) — entretien toutes marques, devis gratuit, qualité garantie.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6 text-yellow-400">
            {'⭐'.repeat(5)}
            <span className="text-white font-bold">5/5</span>
            <span className="text-gray-400 text-sm">· 55 avis Google</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-16">
          {categories.map((cat) => (
            <div key={cat.titre}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{cat.icon}</span>
                <h2 className="text-2xl font-black text-gray-900">{cat.titre}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.services.map((s) => (
                  <div key={s.nom} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all hover:-translate-y-0.5">
                    <h3 className="font-bold text-gray-900 mb-3">{s.nom}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEMANDE D'ENTRETIEN */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Votre véhicule a besoin d&apos;entretien ?</h2>
            <p className="text-gray-500">Décrivez-nous votre besoin, on vous recontacte avec un tarif et un créneau.</p>
          </div>
          <EntretienForm />
        </div>
      </section>

      {/* URGENCE */}
      <section className="py-14 px-4 bg-red-600 text-white text-center">
        <h2 className="text-2xl font-black mb-2">🚨 Besoin d&apos;un dépannage ?</h2>
        <p className="text-red-100 mb-6">Disponible 24h/24 — 7j/7</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0650500175" className="bg-white text-red-600 font-black px-8 py-3 rounded-full hover:bg-red-50 transition-colors text-lg">
            📞 06 50 50 01 75
          </a>
          <Link href="/depannage" className="border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-full transition-colors">
            En savoir plus
          </Link>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  )
}
