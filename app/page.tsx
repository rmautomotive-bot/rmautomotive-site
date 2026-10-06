import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import BrandLogos from '@/components/BrandLogos'

export const metadata: Metadata = {
  title: 'RM Automotive — Dépannage 24h/24 · Vente Auto · Expertise | Île-de-France ⭐ 5/5',
  description: 'RM Automotive en Île-de-France — Dépannage automobile 24h/24, vente & recherche de véhicules, inspection et entretien. ⭐ 5/5 sur Google. ☎ 06 50 50 01 75.',
}

const avis = [
  { nom: 'François D.', note: 5, texte: "Inspection très complète avant achat, plusieurs défauts détectés que le vendeur n'avait pas mentionnés. M'a évité une mauvaise surprise.", date: 'il y a 2 mois', type: 'Inspection' },
  { nom: 'Laureen S.', note: 5, texte: 'Très réactif. Arrivé en 30 min, problème réglé sur place.', date: 'il y a 1 mois', type: 'Dépannage' },
  { nom: 'Florence B.', note: 5, texte: 'Véhicule livré en parfait état, conforme à la description.', date: 'il y a 4 mois', type: 'Vente' },
  { nom: 'Karim T.', note: 5, texte: "Dépannage sur l'A1 un dimanche soir, arrivée ultra rapide.", date: 'il y a 2 mois', type: 'Utilitaire' },
  { nom: 'Sarah M.', note: 5, texte: 'Intervention sur ma Porsche, aucune rayure, plateau impeccable.', date: 'il y a 3 semaines', type: 'Prestige' },
  { nom: 'Marc D.', note: 5, texte: 'Batterie à plat à 2h du matin, réglé en moins de 40 min.', date: 'il y a 6 mois', type: 'Urgence nuit' },
]

const piliers = [
  {
    id: 'urgence',
    emoji: '🚨',
    accent: 'red',
    navLabel: 'Urgence',
    question: 'Besoin immédiat ?',
    titre: 'Dépannage 24h/24 — 7j/7',
    proof: '< 45 min · 500+ interventions/an',
    cta: { label: '06 50 50 01 75', href: 'tel:0650500175' },
    img: '/premium/porsche-gt4rs.jpg',
  },
  {
    id: 'expertise',
    emoji: '🔍',
    accent: 'blue',
    navLabel: 'Inspection',
    question: 'Vous achetez un véhicule d\'occasion ?',
    titre: 'Inspection avant achat — dès 149 €',
    proof: '+4 400 véhicules inspectés',
    cta: { label: 'Voir les formules', href: '/expertise' },
    img: '/expertise-bg.jpg',
  },
  {
    id: 'vente',
    emoji: '🚗',
    accent: 'green',
    navLabel: 'Achat / Vente',
    question: 'Vous cherchez un véhicule ?',
    titre: 'Achat, vente & recherche sur-mesure',
    proof: '+4 400 véhicules inspectés',
    cta: { label: 'Voir les véhicules', href: '/vente' },
    img: '/voitures/car4.jpg',
  },
  {
    id: 'entretien',
    emoji: '🔧',
    accent: 'orange',
    navLabel: 'Entretien',
    question: 'Véhicule à entretenir ?',
    titre: 'Entretien & réparation',
    proof: 'Toutes marques · Devis gratuit',
    cta: { label: 'Demander un devis', href: '/services' },
    img: '/voitures/car6.jpg',
  },
]

const accentMap: Record<string, { bg: string; text: string; border: string; btn: string }> = {
  red: { bg: 'from-red-900/95 via-red-800/70', text: 'text-red-200', border: 'border-red-500/30', btn: 'bg-red-600 hover:bg-red-700' },
  blue: { bg: 'from-blue-950/95 via-blue-900/70', text: 'text-blue-200', border: 'border-blue-500/30', btn: 'bg-blue-600 hover:bg-blue-700' },
  green: { bg: 'from-green-950/95 via-green-900/70', text: 'text-green-200', border: 'border-green-500/30', btn: 'bg-green-600 hover:bg-green-700' },
  orange: { bg: 'from-orange-950/95 via-orange-900/70', text: 'text-orange-200', border: 'border-orange-500/30', btn: 'bg-orange-600 hover:bg-orange-700' },
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.12),_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-8 md:pt-20 md:pb-10 text-center">

          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-gray-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Disponible maintenant · Île-de-France &amp; Oise · 24h/24 7j/7
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.04] mb-4 tracking-tight">
            <span className="text-white">RM</span>
            <span className="text-red-500"> Automotive</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-1 max-w-xl mx-auto leading-relaxed">
            Votre partenaire automobile en Île-de-France &amp; Oise.
          </p>
          <p className="text-sm md:text-base text-gray-500 mb-4 max-w-xl mx-auto leading-relaxed">
            Dépannage 24h/24 · Inspection avant achat · Expertise · Vente &amp; importation
          </p>

          {/* Preuve immédiate */}
          <div className="flex items-center justify-center gap-4 mb-8 text-sm">
            <span className="flex items-center gap-1.5 text-yellow-400 font-bold">⭐⭐⭐⭐⭐ <span className="text-white">5/5</span></span>
            <span className="text-gray-600">·</span>
            <span className="text-gray-400">55 avis clients Google</span>
            <span className="text-gray-600">·</span>
            <span className="text-gray-400">Partenaire assurances &amp; concessionnaires</span>
          </div>

          {/* ── NAV RAPIDE 4 PILIERS (ancres couleur) ── */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {piliers.map(p => (
              <a key={p.id} href={`#${p.id}`}
                className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full border transition-all hover:scale-105 ${accentMap[p.accent].border} bg-white/5 hover:bg-white/10 text-white`}>
                <span>{p.emoji}</span> {p.navLabel}
              </a>
            ))}
          </div>

          {/* ── 4 PILIERS (cartes) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {piliers.map(p => {
              const a = accentMap[p.accent]
              const isTel = p.cta.href.startsWith('tel:')
              const Comp: any = isTel ? 'a' : Link
              return (
                <div key={p.id} id={p.id} className="scroll-mt-24">
                  <Comp href={p.cta.href}
                    className="group relative rounded-3xl overflow-hidden text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col min-h-80">
                    <Image src={p.img} alt={p.titre} fill className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 25vw" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${a.bg} to-black/40`} />
                    <div className="relative z-10 p-7 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-5">
                        <div className="bg-white/15 backdrop-blur-sm rounded-2xl w-14 h-14 flex items-center justify-center text-3xl border border-white/20">{p.emoji}</div>
                        <div className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">{p.proof}</div>
                      </div>
                      <p className={`${a.text} text-xs font-bold uppercase tracking-wide mb-1`}>{p.question}</p>
                      <h2 className="text-xl font-black text-white mb-5 flex-1">{p.titre}</h2>
                      <div className={`${isTel ? 'bg-white text-gray-900' : `${a.btn} text-white`} font-black text-sm py-3 rounded-2xl text-center transition-colors flex items-center justify-center gap-2`}>
                        {isTel && '📞'} {p.cta.label}
                      </div>
                    </div>
                  </Comp>
                </div>
              )
            })}
          </div>
        </div>

        <div className="h-12 bg-gray-50 mt-10" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
      </section>


      {/* ── BANDE CONFIANCE (preuves chiffrées) ── */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12 text-center">
          {[
            { v: '⭐ 5/5', l: '55 avis Google' },
            { v: '🚨 Rapide', l: 'Intervention 24h/24 7j/7' },
            { v: '+4 400', l: 'Véhicules inspectés' },
            { v: '8 dép.', l: 'Île-de-France couverte' },
          ].map(s => (
            <div key={s.l}>
              <div className="text-2xl font-black text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </section>


      {/* ══════════ URGENCE ══════════ */}
      <section className="py-16 px-4 bg-white border-t-4 border-red-600">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-red-600 text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🚨</div>
            <div>
              <div className="text-xs font-bold text-red-600 uppercase tracking-widest">Urgence</div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">En panne ? On arrive vite.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Preuves rapides */}
            <div className="bg-red-50 rounded-2xl p-5 flex flex-col gap-3">
              {[
                { v: '< 45 min', l: 'Délai moyen' },
                { v: '24h/24 7j/7', l: 'Jours fériés inclus' },
                { v: '0€', l: "à avancer si assuré" },
              ].map(s => (
                <div key={s.l} className="flex items-center justify-between bg-white rounded-xl px-4 py-2.5">
                  <span className="text-xs text-gray-500">{s.l}</span>
                  <span className="font-black text-red-600">{s.v}</span>
                </div>
              ))}
            </div>

            {/* Ce qu'on couvre */}
            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-xs font-bold text-gray-500 uppercase mb-3">Toutes pannes</p>
              <div className="flex flex-wrap gap-2">
                {['Batterie', 'Crevaison', 'Panne moteur', 'Accident', 'Clé bloquée', 'Carburant', 'Remorquage'].map(l => (
                  <span key={l} className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full">{l}</span>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-3">Citadine, utilitaire, prestige — partenaire agréé assurances &amp; concessionnaires.</p>
            </div>

            {/* CTA */}
            <div className="bg-gray-950 rounded-2xl p-5 flex flex-col justify-center gap-3">
              <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white font-black px-5 py-4 rounded-2xl text-center transition-all flex items-center justify-center gap-2 animate-pulse">
                📞 APPELER MAINTENANT
              </a>
              <Link href="/depannage#devis" className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-5 py-3.5 rounded-2xl text-center text-sm transition-all">
                💰 Obtenir un tarif
              </Link>
              <a href="https://wa.me/33650500175?text=Bonjour%2C%20j%27ai%20besoin%20d%27un%20d%C3%A9pannage." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════ INSPECTION AVANT ACHAT ══════════ */}
      <section id="expertise" className="py-16 px-4 bg-blue-50/40 border-t-4 border-blue-600 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🔍</div>
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">Inspection avant achat</div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">Vous avez trouvé votre prochaine voiture ?</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-blue-100">
              <p className="text-gray-700 font-semibold mb-1">Ne vous engagez pas avant de connaître son véritable état.</p>
              <p className="text-gray-500 text-sm mb-4">Inspection complète chez le vendeur ou sur site, rapport PDF détaillé remis sous 24h.</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  { icon: '🔧', t: 'Contrôles mécaniques' },
                  { icon: '💻', t: 'Diagnostic électronique' },
                  { icon: '🎨', t: 'Mesure de peinture' },
                  { icon: '🛞', t: 'Pneus & freinage' },
                  { icon: '⚙️', t: 'Trains roulants' },
                  { icon: '📋', t: 'Rapport PDF' },
                ].map(l => (
                  <span key={l.t} className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">{l.icon} {l.t}</span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="font-black text-2xl text-blue-700">149 €</div>
                  <div className="text-[11px] text-gray-500">formule essentielle</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="font-black text-2xl text-blue-700">4 400+</div>
                  <div className="text-[11px] text-gray-500">véhicules inspectés</div>
                </div>
                <div className="h-8 w-px bg-gray-200 hidden sm:block" />
                <div className="hidden sm:flex items-center gap-3 opacity-70">
                  <span className="text-xs text-gray-500">Macadam · Trustoo · Eurotol</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-950 rounded-2xl p-5 flex flex-col justify-center gap-3">
              <Link href="/expertise" className="bg-blue-600 hover:bg-blue-700 text-white font-black px-5 py-4 rounded-2xl text-center transition-all">
                Voir les formules
              </Link>
              <a href="https://wa.me/33650500175?text=Bonjour%2C%20je%20souhaite%20une%20inspection%20avant%20achat." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-3.5 rounded-2xl text-center text-sm transition-all">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════ ACHAT / VENTE ══════════ */}
      <section id="vente" className="py-16 px-4 bg-green-50/40 border-t-4 border-green-600 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🚗</div>
              <div>
                <div className="text-xs font-bold text-green-600 uppercase tracking-widest">Achat · Vente · Importation</div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">Véhicules livrés &amp; garantis</h2>
              </div>
            </div>
            <Link href="/vente" className="text-sm font-bold text-green-700 hover:text-green-800 flex items-center gap-1">Voir tout →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              { img: '/voitures/car1.jpg', label: 'Renault Clio', badge: 'Garanti' },
              { img: '/voitures/car4.jpg', label: 'VW Polo GTI', badge: 'Contrôlé' },
              { img: '/voitures/car6.jpg', label: 'Renault Clio', badge: 'Révisé' },
            ].map((v, i) => (
              <Link key={i} href="/vente" className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="relative h-40 overflow-hidden">
                  <Image src={v.img} alt={v.label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-2 left-2">
                    <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">✅ {v.badge}</span>
                  </div>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-sm">{v.label}</span>
                  <span className="text-green-600 text-sm font-bold">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: '🔍', t: 'Chercheur sur-mesure', href: '/vente#chercheur' },
              { icon: '✈️', t: 'Importation Europe', href: '/vente#importation' },
              { icon: '🔄', t: 'Reprise véhicule', href: '/contact' },
            ].map(s => (
              <Link key={s.t} href={s.href} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
                <span className="text-2xl">{s.icon}</span>
                <span className="font-bold text-gray-900 text-sm">{s.t}</span>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/vente" className="bg-green-600 hover:bg-green-700 text-white font-black px-6 py-3.5 rounded-2xl transition-all">
              Voir tous les véhicules
            </Link>
            <a href="https://wa.me/33650500175?text=Bonjour%20RM%20Automotive%2C%20je%20cherche%20un%20v%C3%A9hicule." target="_blank" rel="noopener noreferrer" className="bg-white border border-green-200 hover:border-green-400 text-green-700 font-bold px-6 py-3.5 rounded-2xl transition-all">
              💬 Décrire ma recherche
            </a>
          </div>
        </div>
      </section>


      {/* ══════════ ENTRETIEN ══════════ */}
      <section id="entretien" className="py-16 px-4 bg-orange-50/40 border-t-4 border-orange-600 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-600 text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🔧</div>
            <div>
              <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">Entretien &amp; réparation</div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">Toutes marques, devis gratuit</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-orange-100">
              <div className="flex flex-wrap gap-2 mb-2">
                {[
                  { icon: '🛢️', t: 'Vidange' },
                  { icon: '🛑', t: 'Freins' },
                  { icon: '⚙️', t: 'Distribution' },
                  { icon: '❄️', t: 'Climatisation' },
                  { icon: '🛞', t: 'Pneus' },
                  { icon: '🔋', t: 'Batterie' },
                ].map(s => (
                  <span key={s.t} className="flex items-center gap-1.5 bg-orange-50 text-orange-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {s.icon} {s.t}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-3">Garage indépendant à Mitry-Mory (77) — qualité garantie, prix transparents.</p>
            </div>

            <div className="bg-gray-950 rounded-2xl p-5 flex flex-col justify-center gap-3">
              <Link href="/services" className="bg-orange-600 hover:bg-orange-700 text-white font-black px-5 py-4 rounded-2xl text-center transition-all">
                Demander un devis
              </Link>
              <a href="tel:0650500175" className="bg-white text-gray-900 font-bold px-5 py-3.5 rounded-2xl text-center text-sm transition-all">
                📞 06 50 50 01 75
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ── CONCESSIONNAIRES ── */}
      <section className="py-14 px-4 bg-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 text-xs uppercase tracking-widest font-semibold mb-3">Ils nous font confiance</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Partenaire des grands concessionnaires</h2>
          <BrandLogos theme="dark" />
        </div>
      </section>


      {/* ── AVIS GOOGLE (preuve sociale, condensée) ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
              <div>
                <span className="font-black text-xl text-gray-900">5/5</span>
                <span className="text-gray-500 text-sm ml-2">· 55 avis Google</span>
              </div>
            </div>
            <a href="https://g.page/r/rmautomotive/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-red-600 transition-colors">
              Voir tous les avis →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {avis.slice(0, 6).map(a => (
              <div key={a.nom} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-gray-900 text-sm">{a.nom}</span>
                  <span className="bg-gray-100 text-gray-500 text-[10px] font-semibold px-2 py-0.5 rounded-full">{a.type}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed italic">&quot;{a.texte}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA FINAL ── */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Parlez-nous de votre projet
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Dépannage, achat, entretien ou expertise — on est là.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-2xl text-lg transition-all flex items-center justify-center gap-2">
              📞 06 50 50 01 75
            </a>
            <a href="https://wa.me/33650500175" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white font-black px-8 py-4 rounded-2xl text-lg transition-all flex items-center justify-center gap-2">
              💬 WhatsApp
            </a>
            <Link href="/contact" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all">
              Nous écrire →
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  )
}
