import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InspectionForm from '@/components/InspectionForm'

export const metadata: Metadata = {
  title: 'Services Auto — Inspection, Entretien, Vente | Mitry-Mory (77)',
  description: 'RM Automotive Mitry-Mory — Inspection avant achat, entretien toutes marques, réparation, vente de véhicules garantis. Distributeur officiel Lorries. ☎ 06 50 50 01 75.',
}

const categories = [
  {
    icon: '🔍',
    titre: 'Inspection automobile',
    services: [
      { nom: 'Inspection avant achat', prix: 'à partir de 79€', desc: 'Contrôle mécanique complet, carrosserie, électronique avant d\'acheter un véhicule d\'occasion. Rapport détaillé fourni.' },
      { nom: 'Diagnostic électronique', prix: 'à partir de 49€', desc: 'Lecture et analyse des codes défauts. Valise multimarque professionnelle. Toutes marques et motorisations.' },
      { nom: 'Contrôle pré-vente', prix: 'à partir de 59€', desc: 'Rapport d\'état complet pour faciliter la vente de votre véhicule au juste prix.' },
    ],
  },
  {
    icon: '🔧',
    titre: 'Entretien & Réparation',
    services: [
      { nom: 'Vidange + filtre', prix: 'à partir de 69€', desc: 'Vidange huile moteur, remplacement filtre à huile. Huile de qualité OEM. Toutes marques.' },
      { nom: 'Freins (disques + plaquettes)', prix: 'à partir de 149€', desc: 'Remplacement disques et plaquettes par essieu. Rodage et vérification complète du système de freinage.' },
      { nom: 'Courroie de distribution', prix: 'sur devis', desc: 'Remplacement courroie de distribution avec kit complet. Recommandé selon kilométrage constructeur.' },
      { nom: 'Climatisation', prix: 'à partir de 89€', desc: 'Recharge gaz climatisation, désinfection, contrôle condenseur et compresseur.' },
      { nom: 'Pneus', prix: 'à partir de 25€/pneu', desc: 'Fourniture et montage toutes marques. Équilibrage et géométrie disponibles.' },
      { nom: 'Batterie', prix: 'à partir de 79€', desc: 'Test en charge, remplacement si nécessaire avec garantie 2 ans.' },
    ],
  },
  {
    icon: '🚗',
    titre: 'Vente de véhicules',
    services: [
      { nom: 'Véhicules d\'occasion garantis', prix: 'Voir stock', desc: 'Sélection de véhicules inspectés, révisés et garantis. Distributeur officiel Lorries. Toutes marques.' },
      { nom: 'Reprise de votre véhicule', prix: 'Estimation gratuite', desc: 'Estimation rapide, reprise immédiate ou dépôt-vente selon votre préférence.' },
      { nom: 'Financement auto', prix: 'Selon profil', desc: 'Solutions de financement personnalisées pour l\'achat de votre prochain véhicule.' },
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
          <h1 className="text-4xl md:text-5xl font-black mb-4">Nos Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Garage indépendant à Mitry-Mory (77) — expertise toutes marques, devis gratuit, qualité garantie.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6 text-yellow-400">
            {'⭐'.repeat(5)}
            <span className="text-white font-bold">5/5</span>
            <span className="text-gray-400 text-sm">· 42 avis Google</span>
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
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-gray-900">{s.nom}</h3>
                      <span className="text-red-600 font-semibold text-sm whitespace-nowrap ml-3 flex-shrink-0">{s.prix}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTENAIRES INSPECTION */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Partenaires inspection</div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">Ils nous confient leurs véhicules</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { nom: 'Autohero', img: '/partenaires/autohero.jpg', w: 140, h: 74 },
              { nom: 'Lizy', img: '/partenaires/lizy.png', w: 64, h: 64 },
              { nom: 'Macadam Europe', img: '/partenaires/macadam.jpg', w: 160, h: 82 },
              { nom: 'Trustoo', img: '/partenaires/trustoo.png', w: 56, h: 56 },
            ].map(p => (
              <div key={p.nom} title={p.nom} className="flex items-center justify-center bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100 shadow-sm">
                <Image src={p.img} alt={p.nom} width={p.w} height={p.h} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMANDE DE TARIF INSPECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Un véhicule à inspecter avant achat ?</h2>
            <p className="text-gray-500">Envoyez-nous le lien de l&apos;annonce, on vous donne un tarif rapidement.</p>
          </div>
          <InspectionForm />
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
