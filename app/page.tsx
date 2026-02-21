import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'RM Automotive — Dépannage 24h/24 · Vente Auto · Expertise | Île-de-France ⭐ 5/5',
  description: 'RM Automotive en Île-de-France — Dépannage automobile 24h/24, vente & recherche de véhicules, inspection et entretien. ⭐ 5/5 sur Google. ☎ 06 50 50 01 75.',
}

const avis = [
  { nom: 'Laureen S.', note: 5, texte: 'Parfait. Très réactif et efficace pour le dépannage. Je recommande vivement !', date: 'il y a 1 mois' },
  { nom: 'Hassan B.', note: 5, texte: 'Fiable, réactif et flexible. RM Automotive est très bien équipé. Service top !', date: 'il y a 11 mois' },
  { nom: 'Florence B.', note: 5, texte: "L'accueil, le service et la finalisation de l'achat se sont déroulés à merveille.", date: 'il y a 4 mois' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.12),_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-10 md:pt-28 md:pb-16 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-gray-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Disponible maintenant · Île-de-France · 24h/24 7j/7
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.04] mb-5 tracking-tight">
            <span className="text-white">RM</span>
            <span className="text-red-500"> Automotive</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
            Votre expert automobile en Île-de-France.<br/>
            Dépannage, vente de véhicules, inspection &amp; entretien.
          </p>

          {/* ── 3 PORTES ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">

            {/* DÉPANNAGE — la plus importante */}
            <a href="tel:0650500175"
              className="group relative bg-red-600 hover:bg-red-700 rounded-3xl p-8 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-600/40 md:col-span-1 flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-white/20 rounded-2xl w-14 h-14 flex items-center justify-center text-3xl">🚨</div>
                <div className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  EN DIRECT
                </div>
              </div>
              <h2 className="text-2xl font-black text-white mb-2">Dépannage</h2>
              <p className="text-red-100 text-sm leading-relaxed mb-6 flex-1">
                Panne, accident, batterie, crevaison. On intervient partout en IDF en moins de 45 min, jour et nuit.
              </p>
              <div className="bg-white text-red-600 font-black text-lg py-3 rounded-2xl text-center group-hover:bg-red-50 transition-colors">
                📞 06 50 50 01 75
              </div>
            </a>

            {/* VENTE */}
            <Link href="/vente"
              className="group relative bg-white/6 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-8 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col">
              <div className="bg-white/10 rounded-2xl w-14 h-14 flex items-center justify-center text-3xl mb-6">🚗</div>
              <h2 className="text-2xl font-black text-white mb-2">Achat · Vente</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                Véhicules inspectés, révisés et garantis. Chercheur sur-mesure selon vos critères. Importation internationale.
              </p>
              <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                Voir nos réalisations <span className="text-red-500">→</span>
              </div>
            </Link>

            {/* SERVICES */}
            <Link href="/services"
              className="group relative bg-white/6 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-8 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col">
              <div className="bg-white/10 rounded-2xl w-14 h-14 flex items-center justify-center text-3xl mb-6">🔍</div>
              <h2 className="text-2xl font-black text-white mb-2">Expertise · Inspection</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                Diagnostic complet, inspection avant achat, entretien toutes marques. Techniciens certifiés.
              </p>
              <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                Découvrir nos services <span className="text-red-500">→</span>
              </div>
            </Link>

          </div>
        </div>

        {/* vague bas */}
        <div className="h-12 bg-gray-50 mt-10" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>


      {/* ── BANDE CONFIANCE ── */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-14 text-center">
          {[
            { v: '⭐ 5/5', l: '42 avis Google' },
            { v: '< 45 min', l: 'Délai intervention' },
            { v: '8 dép.', l: 'Île-de-France couverte' },
            { v: '24h/7j', l: 'Dépannage nonstop' },
            { v: '100%', l: 'Véhicules garantis' },
          ].map(s => (
            <div key={s.l}>
              <div className="text-2xl font-black text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </section>


      {/* ── DÉPANNAGE DETAIL ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Texte */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              🚨 Urgence — 24h/24 7j/7
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">
              En panne ?<br />On arrive <span className="text-red-600">vite.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Partout en Île-de-France, de jour comme de nuit. Panne moteur, batterie à plat, crevaison, accident — notre équipe intervient en moins de 45 minutes.
            </p>
            <div className="space-y-3 mb-8">
              {[
                'Intervention sur route, autoroute et zones urbaines',
                'Remorquage et rapatriement véhicule',
                'Diagnostic sur place',
                'Disponible jours fériés inclus',
              ].map(l => (
                <div key={l} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  {l}
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white font-black px-7 py-4 rounded-2xl text-lg transition-all hover:shadow-xl hover:shadow-red-200 flex items-center gap-2">
                📞 <span>06 50 50 01 75</span>
              </a>
              <Link href="/depannage" className="border border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 font-semibold px-6 py-4 rounded-2xl transition-all text-sm flex items-center">
                En savoir plus →
              </Link>
            </div>
          </div>
          {/* Zones */}
          <div className="bg-gray-950 rounded-3xl p-8 text-white">
            <h3 className="font-black text-xl mb-6">📍 Zones couvertes</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { code: '75', nom: 'Paris' },
                { code: '92', nom: 'Hauts-de-Seine' },
                { code: '93', nom: 'Seine-Saint-Denis' },
                { code: '94', nom: 'Val-de-Marne' },
                { code: '77', nom: 'Seine-et-Marne' },
                { code: '91', nom: 'Essonne' },
                { code: '78', nom: 'Yvelines' },
                { code: '95', nom: 'Val-d\'Oise' },
              ].map(z => (
                <Link key={z.code} href={`/zones/${z.code === '75' ? 'paris' : z.nom.toLowerCase().replace(/['']/g, '-').replace(/é/g, 'e').replace(/è/g, 'e').replace(/ /g, '-')}`}
                  className="flex items-center gap-3 bg-white/6 hover:bg-red-600/20 border border-white/8 hover:border-red-500/30 rounded-xl px-4 py-2.5 transition-all group">
                  <span className="bg-red-600 text-white text-xs font-black w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">{z.code}</span>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{z.nom}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── VENTE APERÇU ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Achat · Vente · Importation</div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Ils nous ont fait confiance</h2>
            </div>
            <Link href="/vente" className="text-sm font-bold text-gray-500 hover:text-red-600 flex items-center gap-1 transition-colors">
              Voir tout → 
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { img: '/voitures/car1.jpg', label: 'Renault Clio', badge: 'Livré & garanti' },
              { img: '/voitures/car4.jpg', label: 'Volkswagen Polo GTI', badge: 'Livré & contrôlé' },
              { img: '/voitures/car6.jpg', label: 'Renault Clio', badge: 'Livré & révisé' },
            ].map((v, i) => (
              <Link key={i} href="/vente" className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image src={v.img} alt={v.label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">✅ {v.badge}</span>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-bold text-gray-900">{v.label}</span>
                  <span className="text-red-600 text-sm font-bold group-hover:gap-2 transition-all">Voir →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* 3 services vente */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '🔍', t: 'Chercheur sur-mesure', d: 'Vous décrivez, on trouve. Budget, type, marque, km — on s\'occupe de tout.', href: '/vente#chercheur' },
              { icon: '✈️', t: 'Importation', d: 'Allemagne, Belgique, monde entier. Transport, homologation, livraison gérés.', href: '/vente#importation' },
              { icon: '🔄', t: 'Reprise de véhicule', d: 'Estimation gratuite. Reprise immédiate ou déduction sur votre prochain achat.', href: '/contact' },
            ].map(s => (
              <Link key={s.t} href={s.href} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ── SERVICES EXPERTISE ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Expertise · Inspection · Entretien</div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Nos services auto</h2>
            </div>
            <Link href="/services" className="text-sm font-bold text-gray-500 hover:text-red-600 flex items-center gap-1 transition-colors">
              Voir tout →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🔍', t: 'Inspection avant achat', d: 'Rapport complet avant d\'acheter un véhicule d\'occasion. Zéro mauvaise surprise.', href: '/services' },
              { icon: '⚙️', t: 'Diagnostic électronique', d: 'Lecture codes défauts multimarque. Identification précise de la panne.', href: '/services' },
              { icon: '🔧', t: 'Entretien & Réparation', d: 'Vidange, freins, distribution, clim. Toutes marques, prix transparents.', href: '/services' },
              { icon: '🛞', t: 'Pneumatiques', d: 'Fourniture, montage, équilibrage. Toutes marques disponibles.', href: '/services' },
            ].map(s => (
              <Link key={s.t} href={s.href} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-lg hover:border-red-100 transition-all duration-300 hover:-translate-y-0.5">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{s.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
                <div className="mt-4 text-red-600 text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ── AVIS GOOGLE ── */}
      <section className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-yellow-400 text-3xl mb-3">⭐⭐⭐⭐⭐</div>
            <h2 className="text-3xl font-black mb-1">42 clients satisfaits</h2>
            <p className="text-gray-400">Note <strong className="text-white">5/5</strong> sur Google</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {avis.map(a => (
              <div key={a.nom} className="bg-white/6 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="font-bold text-white">{a.nom}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{a.date}</div>
                  </div>
                  <div className="text-yellow-400 text-sm">⭐ {a.note}/5</div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed italic">&quot;{a.texte}&quot;</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">G</span>
                  Avis Google vérifié
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA FINAL ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Image src="/logo.jpg" alt="RM Automotive" width={72} height={72} className="mx-auto rounded-2xl mb-6 shadow-lg" />
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Parlez-nous de votre projet
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Dépannage, achat d&apos;un véhicule, entretien ou importation — on est là pour vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white font-black px-9 py-4 rounded-2xl text-xl transition-all hover:shadow-2xl hover:shadow-red-200 flex items-center justify-center gap-2">
              📞 06 50 50 01 75
            </a>
            <Link href="/contact" className="border border-gray-200 hover:border-red-300 hover:text-red-600 text-gray-700 font-semibold px-9 py-4 rounded-2xl text-lg transition-all">
              Nous écrire →
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  )
}
