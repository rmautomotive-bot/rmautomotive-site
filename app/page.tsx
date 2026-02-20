import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dépannage Auto 24h/24 — Toute l\'Île-de-France | RM Automotive ⭐ 5/5',
  description: 'RM Automotive — Dépannage voiture 24h/24 7j/7 dans toute l\'Île-de-France (75, 77, 78, 91, 92, 93, 94, 95). Inspection, entretien, vente. 42 avis 5 étoiles. ☎ 06 50 50 01 75.',
}

const avisGoogle = [
  { nom: 'Laureen Sassignol', note: 5, date: 'il y a 1 mois', texte: 'Parfait. Très réactif et efficace pour le dépannage. Je recommande vivement, service impeccable et professionnel.' },
  { nom: 'Hassan B.', note: 5, date: 'il y a 11 mois', texte: 'Fiable, Réactif et Flexible. RM Automotive est très bien équipé et prend soin de charger et décharger votre véhicule. Service top !' },
  { nom: 'Florence Besnainou', note: 5, date: 'il y a 4 mois', texte: "L'accueil, le service et la finalisation de cet achat se sont déroulés à merveille. Je recommande fortement !" },
]

const services = [
  { icon: '🚨', title: 'Dépannage 24h/24', desc: 'Panne, accident, batterie, crevaison, remorquage. Intervention express partout en Île-de-France.', href: '/depannage', hot: true },
  { icon: '🔍', title: 'Inspection avant achat', desc: 'Contrôle mécanique complet + rapport détaillé. Achetez l\'esprit tranquille.', href: '/services', hot: false },
  { icon: '🔧', title: 'Entretien & Réparation', desc: 'Vidange, freins, distribution, clim. Toutes marques, toutes cylindrées.', href: '/services', hot: false },
  { icon: '🚗', title: 'Vente de véhicules', desc: 'Véhicules inspectés et garantis. Distributeur officiel Lorries. Reprise de votre auto.', href: '/services', hot: false },
]

const deps = [
  { code: '75', nom: 'Paris', slug: 'paris', villes: ['Paris Centre', 'Paris Nord', 'Paris Est', 'Paris Sud', 'Boulogne'] },
  { code: '92', nom: 'Hauts-de-Seine', slug: 'hauts-de-seine', villes: ['Nanterre', 'Boulogne', 'Colombes', 'Asnières', 'Levallois'] },
  { code: '93', nom: 'Seine-Saint-Denis', slug: 'seine-saint-denis', villes: ['Saint-Denis', 'Montreuil', 'Bobigny', 'Aulnay', 'Noisy-le-Grand'] },
  { code: '94', nom: 'Val-de-Marne', slug: 'val-de-marne', villes: ['Créteil', 'Vincennes', 'Vitry', 'Ivry', 'Champigny'] },
  { code: '77', nom: 'Seine-et-Marne', slug: 'seine-et-marne', villes: ['Mitry-Mory', 'Meaux', 'Melun', 'Chelles', 'Lagny'] },
  { code: '91', nom: 'Essonne', slug: 'essonne', villes: ['Évry', 'Corbeil', 'Massy', 'Palaiseau', 'Gif-sur-Yvette'] },
  { code: '78', nom: 'Yvelines', slug: 'yvelines', villes: ['Versailles', 'Saint-Germain', 'Poissy', 'Mantes', 'Rambouillet'] },
  { code: '95', nom: 'Val-d\'Oise', slug: 'val-d-oise', villes: ['Cergy', 'Argenteuil', 'Pontoise', 'Sarcelles', 'Roissy'] },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 opacity-95" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Intervention active — 24h/24 7j/7 — Île-de-France
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6">
              Dépannage Auto<br />
              <span className="text-red-500">Île-de-France</span><br />
              <span className="text-3xl md:text-4xl text-gray-300 font-bold">24h/24 — 7j/7</span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Panne sur route, accident, batterie à plat ? On intervient <strong className="text-white">partout en Île-de-France</strong> en moins de 45 minutes.
            </p>

            <div className="flex items-center gap-3 mb-10">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              <span className="text-white font-bold">5/5</span>
              <span className="text-gray-400 text-sm">· 42 avis Google · Paris, 77, 78, 91, 92, 93, 94, 95</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-8 py-5 rounded-2xl transition-all hover:shadow-2xl hover:shadow-red-600/30 flex items-center justify-center gap-3 group">
                <span className="text-3xl">📞</span>
                <div className="text-left">
                  <div className="text-xs opacity-70 font-normal">Appeler l&apos;urgence</div>
                  <div className="font-black">06 50 50 01 75</div>
                </div>
              </a>
              <Link href="/zones" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-lg px-8 py-5 rounded-2xl transition-all flex items-center justify-center gap-2">
                📍 Voir ma zone
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{clipPath: 'ellipse(55% 100% at 50% 100%)'}} />
      </section>

      {/* STATS */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '5/5', label: 'Note Google', sub: '42 avis vérifiés' },
            { num: '45 min', label: 'Intervention max', sub: 'Partout en IDF' },
            { num: '8', label: 'Départements', sub: '75·77·78·91·92·93·94·95' },
            { num: '24h/7j', label: 'Disponibilité', sub: 'Jours fériés inclus' },
          ].map((s) => (
            <div key={s.num}>
              <div className="text-3xl md:text-4xl font-black text-red-600 mb-1">{s.num}</div>
              <div className="font-bold text-gray-900 text-sm">{s.label}</div>
              <div className="text-gray-400 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Nos services — IDF</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Un expert automobile disponible partout en Île-de-France pour tous vos besoins.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className={`group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border ${s.hot ? 'border-red-200' : 'border-gray-100'} relative`}>
                {s.hot && <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">URGENT</div>}
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${s.hot ? 'text-red-600' : 'text-gray-900'}`}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 text-sm font-semibold text-gray-400 group-hover:text-red-600 flex items-center gap-1 transition-colors">En savoir plus →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCE */}
      <section className="bg-red-600 py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="text-center md:text-left">
            <div className="text-5xl mb-3">🚨</div>
            <h2 className="text-3xl font-black mb-2">Panne ou accident en IDF ?</h2>
            <p className="text-red-100 text-lg">On arrive partout en Île-de-France — 24h/24, 7j/7.</p>
          </div>
          <div className="flex-shrink-0 text-center">
            <a href="tel:0650500175" className="block bg-white text-red-600 font-black text-2xl px-12 py-5 rounded-2xl hover:bg-red-50 transition-all hover:shadow-2xl mb-3">
              📞 06 50 50 01 75
            </a>
            <p className="text-red-200 text-sm">Réponse immédiate 24h/24</p>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Zones d&apos;intervention</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Nous couvrons les <strong>8 départements</strong> d&apos;Île-de-France. Cliquez sur votre zone.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deps.map((d) => (
              <Link key={d.code} href={`/zones/${d.slug}`} className="group bg-gray-50 hover:bg-red-600 border border-gray-100 hover:border-red-600 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 group-hover:bg-white text-white group-hover:text-red-600 font-black w-12 h-12 rounded-xl flex items-center justify-center text-sm transition-colors">
                    {d.code}
                  </div>
                  <h3 className="font-black text-gray-900 group-hover:text-white transition-colors">{d.nom}</h3>
                </div>
                <ul className="space-y-1">
                  {d.villes.map(v => (
                    <li key={v} className="text-xs text-gray-500 group-hover:text-red-100 flex items-center gap-1.5 transition-colors">
                      <span className="w-1 h-1 bg-gray-300 group-hover:bg-red-200 rounded-full transition-colors" />
                      {v}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-xs font-bold text-red-600 group-hover:text-white flex items-center gap-1 transition-colors">
                  Voir ma zone →
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/zones" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-full transition-all">
              Voir toutes les zones →
            </Link>
          </div>
        </div>
      </section>

      {/* AVIS GOOGLE */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-yellow-400 text-3xl mb-3">⭐⭐⭐⭐⭐</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Ils nous ont fait confiance</h2>
            <p className="text-gray-500">42 avis — Note <strong>5/5</strong> sur Google</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {avisGoogle.map((a) => (
              <div key={a.nom} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-bold text-gray-900">{a.nom}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{a.date}</div>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                    <span className="text-yellow-400 text-sm">⭐</span>
                    <span className="font-bold text-sm">{a.note}/5</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">&quot;{a.texte}&quot;</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
                  <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">G</span>
                  Avis Google vérifié
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-gray-950 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Où que vous soyez en IDF, on arrive.</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Paris, banlieue, autoroutes, zones rurales — aucun endroit n&apos;est trop loin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-2xl text-xl transition-all hover:shadow-2xl hover:shadow-red-600/30">
            📞 06 50 50 01 75
          </a>
          <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-10 py-4 rounded-2xl text-lg transition-all">
            Envoyer un message
          </Link>
        </div>
      </section>
      <div className="h-16 md:hidden" />
    </>
  )
}
