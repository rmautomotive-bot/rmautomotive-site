import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Galerie Missions — Dépannage & Transport Île-de-France | RM Automotive',
  description: 'Porsche, Rolls-Royce, Mercedes AMG, utilitaires, bennes... Découvrez les interventions réelles de RM Automotive en Île-de-France. Photos authentiques, clients réels.',
  openGraph: {
    title: 'Galerie Missions RM Automotive — Dépannage Île-de-France',
    description: 'Toutes nos interventions : véhicules prestige, utilitaires, engins de chantier. Photos réelles.',
  },
}

const premiumMissions = [
  { src: '/premium/porsche-gt4rs.jpg', titre: 'Porsche GT4 RS', detail: 'Paris 16ème — Panne électronique', tag: 'Prestige', tagColor: 'bg-yellow-500 text-black' },
  { src: '/premium/rolls-royce-cullinan.jpg', titre: 'Rolls-Royce Cullinan', detail: 'A1 — Remorquage sur plateau', tag: 'Grand gabarit', tagColor: 'bg-yellow-500 text-black' },
  { src: '/premium/porsche-911-turbo.jpg', titre: 'Porsche 911 Turbo Cabriolet', detail: 'Île-de-France — Transport sécurisé', tag: 'Faible garde au sol', tagColor: 'bg-yellow-500 text-black' },
  { src: '/premium/mercedes-gls-amg.jpg', titre: 'Mercedes GLS 63 AMG', detail: 'Paris — Prise en charge assurance', tag: 'SUV de luxe', tagColor: 'bg-yellow-500 text-black' },
  { src: '/premium/porsche-cayenne.jpg', titre: 'Porsche Cayenne', detail: 'Remis en concession Porsche', tag: 'Concessionnaire', tagColor: 'bg-yellow-500 text-black' },
]

const utilitaireMissions = [
  { src: '/utilitaires/chariot-elevateur.jpg', titre: 'Chariot élévateur Hyundai', detail: 'Île-de-France — Engin de chantier', tag: 'Hors-normes', tagColor: 'bg-blue-600 text-white' },
  { src: '/utilitaires/master-logistix.jpg', titre: 'Renault Master Logisti-x', detail: 'Île-de-France — Fourgon livraison', tag: 'Pro Livraison', tagColor: 'bg-blue-600 text-white' },
  { src: '/utilitaires/benne-ford.jpg', titre: 'Camion benne', detail: 'Concession Ford — TP & BTP', tag: 'BTP', tagColor: 'bg-blue-600 text-white' },
  { src: '/utilitaires/sprinter-echelle.jpg', titre: 'Mercedes Sprinter', detail: 'Île-de-France — Van artisan', tag: 'Artisan', tagColor: 'bg-blue-600 text-white' },
  { src: '/utilitaires/benne-jumper.jpg', titre: 'Citroën Jumper benne', detail: 'Île-de-France — Utilitaire benne', tag: 'Utilitaire', tagColor: 'bg-blue-600 text-white' },
  { src: '/utilitaires/master-gris.jpg', titre: 'Renault Master', detail: 'Île-de-France — Grand volume', tag: 'Fourgon', tagColor: 'bg-blue-600 text-white' },
]

const stats = [
  { v: '500+', l: 'Interventions / an' },
  { v: '24h/7j', l: 'Disponibilité' },
  { v: '< 45 min', l: 'Délai moyen' },
  { v: '8 dép.', l: 'Île-de-France' },
]

export default function Missions() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gray-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(220,38,38,0.1),_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-gray-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            📸 Missions réelles — Photos authentiques
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
            Nos interventions<br />
            <span className="text-red-500">parlent d&apos;elles-mêmes</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Des Porsche GT4 RS aux chariots élévateurs, en passant par les Rolls-Royce et les Sprinter Pro — RM Automotive prend tout en charge, partout en Île-de-France.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map(s => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-black text-white">{s.v}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESTIGE */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-yellow-500 rounded-full" />
            <div>
              <div className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-1">Transport spécialisé</div>
              <h2 className="text-3xl font-black text-white">Véhicules de prestige</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {premiumMissions.map((m, i) => (
              <div key={m.src} className={`relative rounded-2xl overflow-hidden group ${i === 0 ? 'sm:col-span-2 lg:col-span-2 h-72' : 'h-56'}`}>
                <Image
                  src={m.src}
                  alt={`${m.titre} — RM Automotive dépannage Île-de-France`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${m.tagColor}`}>{m.tag}</span>
                  <h3 className="text-white font-black text-lg mt-1 leading-tight">{m.titre}</h3>
                  <p className="text-gray-300 text-xs mt-0.5">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UTILITAIRES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-blue-600 rounded-full" />
            <div>
              <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-1">Pros & Entreprises</div>
              <h2 className="text-3xl font-black text-gray-900">Utilitaires & engins</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {utilitaireMissions.map((m, i) => (
              <div key={m.src} className={`relative rounded-2xl overflow-hidden group ${i === 0 ? 'sm:col-span-2 lg:col-span-1 h-64' : 'h-52'}`}>
                <Image
                  src={m.src}
                  alt={`${m.titre} — RM Automotive dépannage pro Île-de-France`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${m.tagColor}`}>{m.tag}</span>
                  <h3 className="text-white font-black text-base mt-1 leading-tight">{m.titre}</h3>
                  <p className="text-gray-300 text-xs mt-0.5">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSURANCE BANNER */}
      <section className="py-12 px-4 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="flex-1">
            <h2 className="text-2xl font-black mb-2">✅ Toutes ces interventions — 0€ à avancer</h2>
            <p className="text-green-200 text-sm">Partenaire Mondial Assistance, AXA, MAAF, MACIF et 8 autres assureurs. Votre assurance couvre, on s&apos;occupe du reste.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="tel:0650500175" className="bg-white text-green-900 font-black px-6 py-3.5 rounded-2xl text-base hover:bg-green-50 transition-all">
              📞 06 50 50 01 75
            </a>
            <a href="https://wa.me/33650500175" target="_blank" rel="noopener noreferrer" className="bg-green-700 hover:bg-green-600 border border-green-600 text-white font-black px-6 py-3.5 rounded-2xl text-base transition-all">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* AUSSI */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Vous avez un véhicule particulier ?</h2>
          <p className="text-gray-500 mb-8">Si vous l&apos;avez vu sur la route, on peut le prendre en charge. Appelez-nous pour confirmer.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Citadine', 'Berline', 'SUV', 'Coupé', 'Cabriolet', 'Sportive', 'Électrique / Hybride', 'Utilitaire', 'Camion benne', 'Engin de chantier', 'Moto', 'Camping-car'].map(v => (
              <span key={v} className="bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full hover:border-red-300 hover:text-red-600 transition-colors">
                {v}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/depannage" className="text-red-600 font-bold text-sm hover:underline">
              Voir tous nos services dépannage →
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  )
}
