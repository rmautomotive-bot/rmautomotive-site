import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RM Automotive Mitry-Mory | Garage Auto ⭐ 5/5 | Dépannage 24h/24',
  description: 'RM Automotive à Mitry-Mory (77290) — Dépannage automobile 24h/24, inspection avant achat, entretien toutes marques, vente véhicules. 42 avis 5 étoiles Google. Appelez le 06 50 50 01 75.',
}

const avisGoogle = [
  { nom: 'Laureen Sassignol', note: 5, date: 'il y a 1 mois', texte: 'Parfait. Très réactif et efficace pour le dépannage. Je recommande vivement ce garage, service impeccable et professionnel.' },
  { nom: 'Hassan B.', note: 5, date: 'il y a 11 mois', texte: 'Fiable, Réactif et Flexible, RM Automotive est très bien équipé et prend soin de charger et décharger votre véhicule. Service top !' },
  { nom: 'Florence Besnainou', note: 5, date: 'il y a 4 mois', texte: "L'accueil, le service et la finalisation de cet achat se sont déroulés à merveille. Je recommande fortement !" },
]

const services = [
  { icon: '🚨', title: 'Dépannage 24h/24', desc: 'Panne, accident, batterie, crevaison. Intervention rapide en Seine-et-Marne et Île-de-France.', href: '/depannage', hot: true },
  { icon: '🔍', title: 'Inspection auto', desc: 'Contrôle technique complet avant achat. Diagnostic électronique multimarque.', href: '/services', hot: false },
  { icon: '🔧', title: 'Entretien & Réparation', desc: 'Vidange, freins, distribution, climatisation. Toutes marques, toutes cylindrées.', href: '/services', hot: false },
  { icon: '🚗', title: 'Vente de véhicules', desc: "Véhicules d'occasion inspectés et garantis. Reprise de votre véhicule. Distributeur officiel Lorries.", href: '/services', hot: false },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 opacity-90" />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Disponible maintenant — 24h/24 7j/7
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Votre expert auto<br />
              à <span className="text-red-500">Mitry-Mory</span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Dépannage, inspection, entretien et vente de véhicules.<br />
              <span className="text-white font-semibold">70 Av. Franklin Roosevelt, 77290 Mitry-Mory.</span>
            </p>

            {/* Stars */}
            <div className="flex items-center gap-3 mb-10">
              <div className="flex">{'⭐'.repeat(5)}</div>
              <span className="text-white font-bold">5/5</span>
              <span className="text-gray-400 text-sm">· 42 avis Google vérifiés</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0650500175" className="group bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all hover:shadow-2xl hover:shadow-red-600/30 flex items-center justify-center gap-3">
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="text-xs opacity-80">Appeler maintenant</div>
                  <div>06 50 50 01 75</div>
                </div>
              </a>
              <Link href="/depannage" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                🚨 Urgence dépannage
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{clipPath: 'ellipse(55% 100% at 50% 100%)'}} />
      </section>

      {/* STATS BAR */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '5/5', label: 'Note Google', sub: '42 avis' },
            { num: '24h', label: 'Disponible', sub: '7j/7' },
            { num: '3 ans', label: "D'expérience", sub: 'Depuis 2023' },
            { num: '1 800+', label: 'Abonnés', sub: '@rmautomotive77' },
          ].map((s) => (
            <div key={s.num}>
              <div className="text-3xl font-black text-red-600">{s.num}</div>
              <div className="font-semibold text-gray-900 text-sm mt-1">{s.label}</div>
              <div className="text-gray-400 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Nos services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Tout ce dont votre véhicule a besoin, par un expert de confiance à Mitry-Mory.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className={`group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border ${s.hot ? 'border-red-100' : 'border-gray-100'}`}>
                {s.hot && <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">URGENT</div>}
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${s.hot ? 'text-red-600' : 'text-gray-900'}`}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className={`mt-5 text-sm font-semibold flex items-center gap-1 ${s.hot ? 'text-red-600' : 'text-gray-900'} group-hover:gap-2 transition-all`}>
                  En savoir plus <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCE BAND */}
      <section className="bg-red-600 py-14 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <div className="text-4xl mb-3">🚨</div>
            <h2 className="text-2xl md:text-3xl font-black mb-2">Panne ou accident ?</h2>
            <p className="text-red-100 text-lg">On arrive vite. Disponible 24h/24, 7j/7, partout en Seine-et-Marne.</p>
          </div>
          <a href="tel:0650500175" className="bg-white text-red-600 font-black text-xl px-10 py-5 rounded-2xl hover:bg-red-50 transition-all hover:shadow-2xl whitespace-nowrap flex-shrink-0 animate-pulse-ring">
            📞 06 50 50 01 75
          </a>
        </div>
      </section>

      {/* AVIS GOOGLE */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-yellow-500 text-3xl mb-3">⭐⭐⭐⭐⭐</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Ce que disent nos clients</h2>
            <p className="text-gray-500">42 avis — Note moyenne <strong>5/5</strong> sur Google</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {avisGoogle.map((a) => (
              <div key={a.nom} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-bold text-gray-900">{a.nom}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{a.date}</div>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-sm">
                    <span className="text-yellow-400 text-sm">⭐</span>
                    <span className="font-bold text-sm text-gray-900">{a.note}/5</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">&quot;{a.texte}&quot;</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
                  <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</span>
                  Avis Google vérifié
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://g.page/r/rmautomotive77/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 text-sm transition-colors border border-gray-200 hover:border-red-200 px-5 py-2.5 rounded-full">
              Voir tous les avis sur Google →
            </a>
          </div>
        </div>
      </section>

      {/* LOCALISATION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Où nous trouver</h2>
              <div className="space-y-5">
                {[
                  { icon: '📍', title: 'Adresse', val: '70 Av. Franklin Roosevelt\n77290 Mitry-Mory' },
                  { icon: '📞', title: 'Téléphone', val: '06 50 50 01 75', href: 'tel:0650500175' },
                  { icon: '🕐', title: 'Horaires garage', val: 'Lun–Ven : 9h–19h\nSam : 10h–18h' },
                  { icon: '🚨', title: 'Dépannage urgence', val: '24h/24 — 7j/7', urgent: true },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${item.urgent ? 'bg-red-100' : 'bg-white border border-gray-100'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{item.title}</div>
                      {item.href ? (
                        <a href={item.href} className={`font-bold text-lg ${item.urgent ? 'text-red-600' : 'text-gray-900'} hover:text-red-600`}>{item.val}</a>
                      ) : (
                        <div className={`font-bold text-lg whitespace-pre-line ${item.urgent ? 'text-red-600' : 'text-gray-900'}`}>{item.val}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://www.instagram.com/rmautomotive77/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border border-gray-200 hover:border-red-300 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-red-600 transition-all">
                  📸 Instagram
                </a>
                <a href="https://www.tiktok.com/@rmautomotive77" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border border-gray-200 hover:border-red-300 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-red-600 transition-all">
                  🎵 TikTok
                </a>
              </div>
            </div>
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9!2d2.6098!3d48.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e617bcc8f95df1%3A0x282e3221fcb2f1!2sRM%20Automotive!5e0!3m2!1sfr!2sfr!4v1708452000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-gray-950 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Prêt à nous confier votre véhicule ?</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Appelez-nous ou passez directement au garage. On s&apos;occupe de tout.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:shadow-2xl hover:shadow-red-600/30">
            📞 06 50 50 01 75
          </a>
          <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-10 py-4 rounded-2xl text-lg transition-all">
            Envoyer un message
          </Link>
        </div>
      </section>

      {/* Padding pour la barre fixe mobile */}
      <div className="h-16 md:hidden" />
    </>
  )
}
