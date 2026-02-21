'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const livraisons = [
  {
    id: 1,
    label: 'Renault Clio',
    desc: 'Livrée révisée, contrôlée et garantie. Client reparti avec le sourire. 🙌',
    img: '/voitures/car1.jpg',
    badge: '✅ Livré & garanti',
    ville: 'Île-de-France',
  },
  {
    id: 2,
    label: 'Kawasaki Ninja',
    desc: 'Moto livrée en parfait état, révisée de A à Z avant remise au client.',
    img: '/voitures/car2.jpg',
    badge: '✅ Livré & révisé',
    ville: 'Seine-et-Marne',
  },
  {
    id: 3,
    label: 'Renault Twingo',
    desc: 'Petite citadine parfaite pour la ville. Contrôle complet effectué, garantie incluse.',
    img: '/voitures/car3.jpg',
    badge: '✅ Livré & garanti',
    ville: 'Paris',
  },
  {
    id: 4,
    label: 'Volkswagen Polo GTI',
    desc: 'Sportive livrée en excellent état. Inspection complète, zéro mauvaise surprise.',
    img: '/voitures/car4.jpg',
    badge: '✅ Livré & contrôlé',
    ville: 'Val-de-Marne',
  },
  {
    id: 5,
    label: 'Renault Clio',
    desc: 'Client satisfait, voiture révisée et garantie. Notre engagement, votre tranquillité.',
    img: '/voitures/car5.jpg',
    badge: '✅ Livré & garanti',
    ville: 'Seine-Saint-Denis',
  },
  {
    id: 6,
    label: 'Renault Clio',
    desc: 'Livraison soignée, révision complète, garantie client. Confiance avant tout.',
    img: '/voitures/car6.jpg',
    badge: '✅ Livré & révisé',
    ville: 'Hauts-de-Seine',
  },
]

const engagements = [
  { icon: '🔍', titre: 'Inspection complète', desc: 'Chaque véhicule est contrôlé de fond en comble avant livraison. Mécanique, carrosserie, électronique.' },
  { icon: '🔧', titre: 'Révisé avant livraison', desc: 'On règle tout ce qui doit l\'être. Vous récupérez un véhicule prêt à rouler, sans surprise.' },
  { icon: '🛡️', titre: 'Garanti', desc: 'Garantie incluse sur chaque véhicule vendu. Parce qu\'on s\'engage sur ce qu\'on vend.' },
  { icon: '🚚', titre: 'Livraison IDF', desc: 'Livraison possible partout en Île-de-France. On vient à vous.' },
]

export default function Vente() {
  const [formSent, setFormSent] = useState(false)

  const handleChercheur = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const budget = (form.elements.namedItem('budget') as HTMLInputElement).value
    const typev = (form.elements.namedItem('typev') as HTMLSelectElement).value
    const carburantv = (form.elements.namedItem('carburantv') as HTMLSelectElement).value
    const kmmax = (form.elements.namedItem('kmmax') as HTMLInputElement).value
    const details = (form.elements.namedItem('details') as HTMLTextAreaElement).value
    const msg = `Bonjour RM Automotive ! Je recherche une voiture avec les critères suivants :\n- Budget max : ${budget}€\n- Type : ${typev}\n- Carburant : ${carburantv}\n- Km max : ${kmmax} km\n- Détails : ${details}`
    window.open(`https://wa.me/33650500175?text=${encodeURIComponent(msg)}`, '_blank')
    setFormSent(true)
    setTimeout(() => setFormSent(false), 4000)
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-gray-950 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            ✅ Véhicules inspectés · Révisés · Garantis
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ils nous ont<br />
            <span className="text-red-500">fait confiance</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Chaque véhicule livré par RM Automotive est inspecté, révisé et garanti. Votre satisfaction, c&apos;est notre réputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#chercheur" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:shadow-2xl hover:shadow-red-600/30">
              🔍 Trouver mon véhicule
            </a>
            <a href="#importation" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all">
              ✈️ Importation
            </a>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {engagements.map(e => (
            <div key={e.titre} className="group">
              <div className="text-4xl mb-3">{e.icon}</div>
              <h3 className="font-black text-gray-900 text-base mb-1">{e.titre}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIE LIVRAISONS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Nos véhicules livrés</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Chacun de ces véhicules a été préparé, révisé et livré avec soin à nos clients.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {livraisons.map(v => (
              <div key={v.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                {/* Photo */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={v.img}
                    alt={v.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {v.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/60 text-gray-200 text-xs px-2.5 py-1 rounded-full">
                      📍 {v.ville}
                    </span>
                  </div>
                </div>
                {/* Contenu */}
                <div className="p-6">
                  <h3 className="font-black text-gray-900 text-xl mb-2">{v.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{v.desc}</p>
                  <a
                    href={`https://wa.me/33650500175?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20un%20v%C3%A9hicule%20similaire%20%C3%A0%20votre%20${encodeURIComponent(v.label)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-red-600 text-white font-bold py-3 rounded-xl text-sm transition-all group-hover:bg-red-600"
                  >
                    <span>💬</span> Je veux un véhicule similaire
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA central */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-xl mx-auto">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-black text-gray-900 text-xl mb-2">Vous cherchez un véhicule ?</h3>
              <p className="text-gray-500 text-sm mb-5">Décrivez-nous votre projet et on vous trouve la perle rare.</p>
              <a href="#chercheur" className="block bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors">
                🔍 Démarrer ma recherche →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CHERCHEUR DE VOITURE */}
      <section id="chercheur" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Chercheur de voiture</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Dites-nous ce que vous voulez — budget, type, carburant, marque. On s&apos;occupe de trouver le véhicule idéal pour vous.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            {formSent ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-black text-gray-900 text-2xl mb-2">Message envoyé !</h3>
                <p className="text-gray-500">On vous contacte rapidement. Réponse sous 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleChercheur} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Budget maximum (€)</label>
                    <input name="budget" type="number" placeholder="ex : 15 000" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Type de véhicule</label>
                    <select name="typev" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option>Peu importe</option>
                      <option>Citadine</option>
                      <option>Berline</option>
                      <option>SUV / 4x4</option>
                      <option>Break</option>
                      <option>Monospace</option>
                      <option>Sportive</option>
                      <option>Utilitaire</option>
                      <option>Moto / Scooter</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Carburant souhaité</label>
                    <select name="carburantv" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option>Peu importe</option>
                      <option>Essence</option>
                      <option>Diesel</option>
                      <option>Hybride</option>
                      <option>Électrique</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Kilométrage maximum</label>
                    <input name="kmmax" type="number" placeholder="ex : 80 000 km" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Marque / modèle & détails</label>
                  <textarea name="details" rows={3} placeholder="ex : Je cherche une Clio récente, boîte auto, couleur sombre, avec GPS..." className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none" />
                </div>
                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-2xl text-lg transition-all hover:shadow-lg flex items-center justify-center gap-3">
                  <span className="text-2xl">💬</span> Envoyer ma recherche sur WhatsApp
                </button>
                <p className="text-xs text-gray-400 text-center">Réponse garantie sous 24h · Gratuit & sans engagement</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* IMPORTATION */}
      <section id="importation" className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-5xl mb-4">✈️</div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">Service d&apos;importation</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Le véhicule de vos rêves n&apos;est pas en France ? On va le chercher pour vous, partout dans le monde. Transport, dédouanement, homologation — on gère tout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: '🇩🇪', pays: 'Allemagne', desc: 'BMW, Mercedes, Audi, VW. Les meilleures occasions d\'Europe à prix compétitifs.' },
              { icon: '🇧🇪', pays: 'Belgique & Luxembourg', desc: 'Fiscalité avantageuse, véhicules bien entretenu et souvent peu kilométrés.' },
              { icon: '🌍', pays: 'Monde entier', desc: 'Japon, USA, Émirats, Espagne... Aucune frontière pour trouver votre véhicule idéal.' },
            ].map(p => (
              <div key={p.pays} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-red-500/40 hover:bg-white/8 transition-all">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-black text-white text-xl mb-3">{p.pays}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">
            <h3 className="font-black text-white text-xl mb-6 text-center">Ce qu&apos;on gère pour vous</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
              {[
                '✅ Recherche du véhicule selon vos critères',
                '✅ Vérification de l\'historique complet',
                '✅ Négociation avec le vendeur',
                '✅ Transport & logistique vers la France',
                '✅ Dédouanement & homologation',
                '✅ Carte grise & immatriculation française',
                '✅ Contrôle technique & mise aux normes',
                '✅ Livraison chez vous en Île-de-France',
              ].map(s => <div key={s}>{s}</div>)}
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/33650500175?text=Bonjour%20RM%20Automotive%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20service%20d%27importation%20de%20v%C3%A9hicule."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black text-xl px-10 py-5 rounded-2xl transition-all hover:shadow-2xl hover:shadow-green-500/20"
            >
              <span className="text-2xl">💬</span> Demander un devis importation
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Ou appelez le <a href="tel:0650500175" className="text-red-400 font-bold hover:underline">06 50 50 01 75</a>
            </p>
          </div>
        </div>
      </section>

      {/* REPRISE */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-black mb-2">🔄 On reprend votre véhicule</h2>
            <p className="text-red-100 text-lg">Estimation gratuite, reprise immédiate ou déduction sur votre prochain achat.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a href="tel:0650500175" className="bg-white text-red-600 font-black px-8 py-3 rounded-2xl text-lg hover:bg-red-50 transition-colors text-center">
              📞 06 50 50 01 75
            </a>
            <a
              href="https://wa.me/33650500175?text=Bonjour%2C%20je%20souhaite%20faire%20estimer%20mon%20v%C3%A9hicule%20pour%20une%20reprise."
              target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-2xl text-lg transition-colors text-center"
            >
              💬 WhatsApp reprise
            </a>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  )
}
