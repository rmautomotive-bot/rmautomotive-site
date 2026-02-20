'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const stock = [
  {
    id: 1,
    marque: 'Renault',
    modele: 'Clio 3',
    annee: 2012,
    km: 92000,
    carburant: 'Essence',
    boite: 'Manuelle',
    couleur: 'Bleu électrique',
    prix: 6900,
    etat: 'Très bon état',
    garantie: '6 mois',
    img: '/voitures/car1.jpg',
    type: 'Citadine',
    puissance: '75 ch',
    disponible: true,
  },
  {
    id: 2,
    marque: 'Kawasaki',
    modele: 'Ninja 500',
    annee: 2024,
    km: 1200,
    carburant: 'Essence',
    boite: 'Manuelle',
    couleur: 'Gris / Vert',
    prix: 8900,
    etat: 'Quasi neuf',
    garantie: '12 mois',
    img: '/voitures/car2.jpg',
    type: 'Moto',
    puissance: '45 ch',
    disponible: true,
  },
  {
    id: 3,
    marque: 'Renault',
    modele: 'Twingo 3',
    annee: 2015,
    km: 68000,
    carburant: 'Essence',
    boite: 'Manuelle',
    couleur: 'Bleu nuit',
    prix: 7500,
    etat: 'Bon état',
    garantie: '6 mois',
    img: '/voitures/car3.jpg',
    type: 'Citadine',
    puissance: '70 ch',
    disponible: true,
  },
  {
    id: 4,
    marque: 'Volkswagen',
    modele: 'Polo GTI',
    annee: 2022,
    km: 28000,
    carburant: 'Essence',
    boite: 'DSG',
    couleur: 'Noir profond',
    prix: 24900,
    etat: 'Excellent état',
    garantie: '12 mois',
    img: '/voitures/car4.jpg',
    type: 'Sportive',
    puissance: '207 ch',
    disponible: true,
  },
  {
    id: 5,
    marque: 'Renault',
    modele: 'Clio 4',
    annee: 2016,
    km: 74000,
    carburant: 'Essence',
    boite: 'Manuelle',
    couleur: 'Gris argent',
    prix: 9500,
    etat: 'Très bon état',
    garantie: '6 mois',
    img: '/voitures/car5.jpg',
    type: 'Citadine',
    puissance: '90 ch',
    disponible: true,
  },
  {
    id: 6,
    marque: 'Renault',
    modele: 'Clio 5',
    annee: 2021,
    km: 35000,
    carburant: 'Essence',
    boite: 'Manuelle',
    couleur: 'Noir',
    prix: 14900,
    etat: 'Excellent état',
    garantie: '12 mois',
    img: '/voitures/car6.jpg',
    type: 'Citadine',
    puissance: '100 ch',
    disponible: true,
  },
]

const types = ['Tous', 'Citadine', 'Sportive', 'SUV', 'Berline', 'Moto']
const budgets = ['Tous', '< 5 000€', '5 000 – 10 000€', '10 000 – 20 000€', '20 000 – 35 000€', '> 35 000€']
const carburants = ['Tous', 'Essence', 'Diesel', 'Hybride', 'Électrique']

export default function Vente() {
  const [typeFilter, setTypeFilter] = useState('Tous')
  const [budgetFilter, setBudgetFilter] = useState('Tous')
  const [carburantFilter, setCarburantFilter] = useState('Tous')
  const [recherche, setRecherche] = useState('')
  const [selectedCar, setSelectedCar] = useState<typeof stock[0] | null>(null)

  const filteredStock = stock.filter(v => {
    const matchType = typeFilter === 'Tous' || v.type === typeFilter
    const matchCarb = carburantFilter === 'Tous' || v.carburant === carburantFilter
    const matchSearch = recherche === '' || `${v.marque} ${v.modele}`.toLowerCase().includes(recherche.toLowerCase())
    const matchBudget = budgetFilter === 'Tous' ||
      (budgetFilter === '< 5 000€' && v.prix < 5000) ||
      (budgetFilter === '5 000 – 10 000€' && v.prix >= 5000 && v.prix <= 10000) ||
      (budgetFilter === '10 000 – 20 000€' && v.prix > 10000 && v.prix <= 20000) ||
      (budgetFilter === '20 000 – 35 000€' && v.prix > 20000 && v.prix <= 35000) ||
      (budgetFilter === '> 35 000€' && v.prix > 35000)
    return matchType && matchCarb && matchSearch && matchBudget
  })

  return (
    <>
      {/* HERO */}
      <section className="bg-gray-950 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            🏷️ Distributeur officiel Lorries · Véhicules inspectés & garantis
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            Achat / Vente<br />
            <span className="text-red-500">Voitures d&apos;occasion</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Stock disponible, recherche sur-mesure, importation et reprise. Tous les véhicules sont inspectés et garantis. Livraison possible en Île-de-France.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#stock" className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3 rounded-full transition-all">
              Voir le stock →
            </a>
            <a href="#chercheur" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-7 py-3 rounded-full transition-all">
              🔍 Chercheur de voiture
            </a>
            <a href="#importation" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-7 py-3 rounded-full transition-all">
              ✈️ Importation
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-8 justify-center text-center">
          {[
            { n: stock.length + '+', l: 'Véhicules en stock' },
            { n: '100%', l: 'Inspectés & garantis' },
            { n: '⭐ 5/5', l: '42 avis Google' },
            { n: '🚚', l: 'Livraison IDF possible' },
          ].map(s => (
            <div key={s.l}>
              <div className="text-2xl font-black text-red-600">{s.n}</div>
              <div className="text-sm text-gray-500">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STOCK */}
      <section id="stock" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-10">Notre stock disponible</h2>

          {/* FILTRES */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Recherche</label>
                <input
                  type="text"
                  placeholder="Marque, modèle..."
                  value={recherche}
                  onChange={e => setRecherche(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Type</label>
                <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white">
                  {types.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Budget</label>
                <select value={budgetFilter} onChange={e => setBudgetFilter(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white">
                  {budgets.map(b => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Carburant</label>
                <select value={carburantFilter} onChange={e => setCarburantFilter(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white">
                  {carburants.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-400">{filteredStock.length} véhicule(s) trouvé(s)</div>
          </div>

          {/* GRILLE VOITURES */}
          {filteredStock.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-semibold">Aucun véhicule ne correspond à votre recherche</p>
              <p className="mt-2">Utilisez notre chercheur sur-mesure ci-dessous ou appelez-nous !</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStock.map(v => (
                <div key={v.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
                  {/* Photo */}
                  <div className="relative h-52 overflow-hidden">
                    <Image src={v.img} alt={`${v.marque} ${v.modele}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      ✓ Disponible
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {v.type}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="text-white font-black text-xl">{v.prix.toLocaleString()}€</div>
                    </div>
                  </div>
                  {/* Infos */}
                  <div className="p-5">
                    <h3 className="font-black text-gray-900 text-lg mb-1">{v.marque} {v.modele}</h3>
                    <p className="text-gray-500 text-sm mb-4">{v.annee} · {v.km.toLocaleString()} km · {v.carburant} · {v.boite}</p>
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {[
                        { l: '⚡', v: v.puissance },
                        { l: '🎨', v: v.couleur },
                        { l: '🛡️', v: v.garantie },
                      ].map(item => (
                        <div key={item.l} className="bg-gray-50 rounded-lg p-2 text-center">
                          <div className="text-sm">{item.l}</div>
                          <div className="text-xs text-gray-600 font-medium truncate">{item.v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/33650500175?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20${encodeURIComponent(v.marque + ' ' + v.modele + ' ' + v.annee)}%20%C3%A0%20${v.prix.toLocaleString()}%E2%82%AC`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 rounded-xl text-sm text-center transition-colors"
                      >
                        💬 WhatsApp
                      </a>
                      <a
                        href="tel:0650500175"
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-sm text-center transition-colors"
                      >
                        📞 Appeler
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CHERCHEUR DE VOITURE */}
      <section id="chercheur" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Chercheur de voiture sur-mesure</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Vous ne trouvez pas votre voiture dans notre stock ? Décrivez-nous votre véhicule idéal — on le trouve pour vous.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <form className="space-y-6" onSubmit={e => { e.preventDefault(); window.location.href = `https://wa.me/33650500175?text=Bonjour%2C%20je%20recherche%20une%20voiture%20selon%20mes%20crit%C3%A8res%20%3A%20budget%20max%20${(e.target as HTMLFormElement).budget.value}%E2%82%AC%2C%20type%20${(e.target as HTMLFormElement).typev.value}%2C%20carburant%20${(e.target as HTMLFormElement).carburantv.value}%2C%20km%20max%20${(e.target as HTMLFormElement).kmmax.value}km.%20${(e.target as HTMLFormElement).details.value}` }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Budget maximum (€)</label>
                  <input name="budget" type="number" placeholder="ex: 15000" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Type de véhicule</label>
                  <select name="typev" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500">
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
                  <input name="kmmax" type="number" placeholder="ex: 80000" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Année minimum</label>
                  <input name="anneemin" type="number" placeholder="ex: 2018" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Boîte de vitesses</label>
                  <select name="boitev" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option>Peu importe</option>
                    <option>Manuelle</option>
                    <option>Automatique</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Marque / Modèle souhaité & détails</label>
                <textarea name="details" rows={3} placeholder="ex: Je cherche une Renault Clio récente, couleur sombre, avec clim et GPS..." className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="nom" type="text" placeholder="Votre nom *" required className="border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                <input name="tel" type="tel" placeholder="Votre téléphone *" required className="border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl text-lg transition-all hover:shadow-lg hover:shadow-red-200">
                🔍 Envoyer ma recherche → On vous trouve votre voiture !
              </button>
              <p className="text-xs text-gray-400 text-center">Vous serez redirigé vers WhatsApp pour finaliser votre demande. Réponse sous 24h.</p>
            </form>
          </div>
        </div>
      </section>

      {/* IMPORTATION */}
      <section id="importation" className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-5xl mb-4">✈️</div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">Service d&apos;importation</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Vous voulez une voiture introuvable en France, ou faire des économies en important depuis l&apos;étranger ? On gère tout pour vous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🇩🇪', titre: 'Allemagne', desc: 'BMW, Mercedes, VW, Audi. Les meilleures occasions européennes à prix imbattables.' },
              { icon: '🇧🇪', titre: 'Belgique / Luxembourg', desc: 'Fiscalité avantageuse, véhicules souvent moins kilométrés et bien entretenu.' },
              { icon: '🌍', titre: 'Tout pays', desc: 'Japon, USA, Émirats... Nous pouvons sourcer n\'importe quel véhicule dans le monde entier.' },
            ].map(p => (
              <div key={p.titre} className="bg-gray-800/50 border border-gray-700 rounded-2xl p-7 hover:border-red-500/40 transition-colors">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-black text-white text-xl mb-3">{p.titre}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-3xl p-8 mb-10">
            <h3 className="font-black text-white text-2xl mb-6 text-center">📋 Nos prestations d&apos;importation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                '✅ Recherche du véhicule selon vos critères',
                '✅ Vérification de l\'historique & état complet',
                '✅ Négociation prix avec le vendeur',
                '✅ Transport et logistique jusqu\'en France',
                '✅ Dédouanement & homologation française',
                '✅ Immatriculation en France (carte grise)',
                '✅ Contrôle technique et mise en conformité',
                '✅ Livraison chez vous en Île-de-France',
              ].map(s => (
                <div key={s} className="text-gray-300 text-sm flex items-start gap-2">{s}</div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href={`https://wa.me/33650500175?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20service%20d%27importation%20de%20v%C3%A9hicule.`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black text-xl px-10 py-5 rounded-2xl transition-all hover:shadow-2xl"
            >
              💬 Demander un devis importation sur WhatsApp
            </a>
            <p className="text-gray-500 text-sm mt-4">Ou appelez le <a href="tel:0650500175" className="text-red-400 font-bold">06 50 50 01 75</a></p>
          </div>
        </div>
      </section>

      {/* REPRISE */}
      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-black mb-3">🔄 On reprend votre véhicule</h2>
        <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
          Estimez votre véhicule gratuitement. Reprise immédiate ou déduction sur l&apos;achat de votre prochain véhicule.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0650500175" className="bg-white text-red-600 font-black px-8 py-4 rounded-2xl text-lg hover:bg-red-50 transition-colors">
            📞 Estimer maintenant
          </a>
          <Link href="/contact" className="border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-colors">
            Formulaire de contact
          </Link>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  )
}
