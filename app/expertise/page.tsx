import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InspectionBooking from '@/components/InspectionBooking'
import CountUp from '@/components/CountUp'

const partenairesLogos = [
  { nom: 'Macadam Europe', img: '/partenaires/macadam.jpg', bg: '#ffffff', width: 220, height: 113, border: true },
  { nom: 'Trustoo', img: '/partenaires/trustoo.png', bg: '#ffffff', width: 60, height: 60, border: true },
  { nom: 'Eurotol', img: '/partenaires/eurotol.svg', bg: '#003087', width: 160, height: 50, border: false },
  { nom: 'Autohero', img: '/partenaires/autohero.png', bg: '#ffffff', width: 100, height: 100, border: true },
  { nom: 'Europcar', img: '/partenaires/europcar.png', bg: '#ffffff', width: 160, height: 42, border: true },
]

export const metadata: Metadata = {
  title: 'Expertise Automobile | Inspection Véhicule | Macadam Europe · Trustoo · Eurotol — RM Automotive',
  description: 'RM Automotive — Expert automobile certifié, partenaire Macadam Europe, Trustoo & Eurotol. +4400 véhicules expertisés. Inspection complète, peinture, carrosserie, batterie, calculateur. ☎ 06 50 50 01 75.',
  openGraph: {
    title: 'Expertise Automobile — Partenaire Macadam Europe · Trustoo · Eurotol | RM Automotive',
    description: 'Expert automobile certifié. +4400 véhicules expertisés. Partenaire des plus grands groupes automobiles.',
    url: 'https://rmautomotive.fr/expertise',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'RM Automotive — Expertise Automobile',
  description: 'Expert automobile certifié partenaire de Macadam Europe, Trustoo et Eurotol. +4400 véhicules expertisés.',
  telephone: '+33650500175',
  address: { '@type': 'PostalAddress', streetAddress: '70 Avenue Franklin Roosevelt', addressLocality: 'Mitry-Mory', postalCode: '77290', addressCountry: 'FR' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '55' },
}

const statsNombres = {
  vehicules: 4400,
  groupes: 5,
}

const checkPoints = [
  { icon: '🎨', titre: 'Mesure d\'épaisseur de peinture', desc: 'Contrôle couche par couche. Détection des retouches, reprises carrosserie et accidents dissimulés. Outil professionnel certifié.' },
  { icon: '🛞', titre: 'Usure des pneumatiques', desc: 'Mesure de l\'usure, vérification de l\'uniformité, contrôle de la date de fabrication et détection des déformations.' },
  { icon: '🔩', titre: 'Carrosserie & Rayures', desc: 'Inspection complète de la carrosserie, identification des bosses, rayures, impacts, rouille, et traces de soudure.' },
  { icon: '💰', titre: 'Chiffrage des dommages', desc: 'Estimation précise du coût de remise en état. Rapport détaillé utilisable pour négociation ou sinistre.' },
  { icon: '🖥️', titre: 'Check calculateur / ECU', desc: 'Branchement valise OBD multimarque. Lecture des codes défauts moteur, ABS, airbag, ESP. Rapport complet.' },
  { icon: '🔋', titre: 'Batterie véhicule électrique', desc: 'Vérification de l\'état de santé de la batterie (SOH), capacité résiduelle, cycles de charge. Véhicules électriques et hybrides.' },
  { icon: '🔧', titre: 'Mécanique complète', desc: 'Inspection des organes mécaniques : moteur, freins, transmission, suspension, direction, échappement.' },
  { icon: '📋', titre: 'Historique & documentation', desc: 'Vérification du carnet d\'entretien, contrôle technique, HistoVec, et cohérence du kilométrage.' },
]

const partenaires = [
  {
    nom: 'Macadam Europe',
    logoImg: '/partenaires/macadam.jpg',
    logoBg: '#ffffff',
    desc: 'Collaboration étroite avec l\'un des leaders européens du reconditionnement automobile. Plus de 4 400 véhicules expertisés ensemble à ce jour.',
    stat: '+4 400 véhicules',
    statLabel: 'expertisés',
    color: 'blue',
  },
  {
    nom: 'Trustoo',
    logoImg: '/partenaires/trustoo.png',
    logoBg: '#ffffff',
    desc: 'Partenaire certifié Trustoo, plateforme de confiance pour l\'achat/vente de véhicules d\'occasion entre particuliers et professionnels.',
    stat: 'Certifié',
    statLabel: 'partenaire officiel',
    color: 'green',
  },
  {
    nom: 'Eurotol',
    logoImg: '/partenaires/eurotol.svg',
    logoBg: '#003087',
    desc: 'Référencé pour les grandes vagues de grêle en France. Expert reconnu pour le chiffrage et l\'évaluation des dommages grêle à grande échelle.',
    stat: 'Expert',
    statLabel: 'dommages grêle',
    color: 'purple',
  },
]

export default function Expertise() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-gray-950 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.1),_transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-gray-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            🤝 Macadam Europe · Trustoo · Eurotol · Autohero · Europcar
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Expertise automobile<br />
            <span className="text-red-500">Professionnelle & Certifiée</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            5 grands groupes, plateformes de confiance, particuliers — ils nous font tous confiance pour expertiser leurs véhicules.
            <strong className="text-white"> Plus de 4 400 véhicules expertisés à ce jour.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-2xl text-lg transition-all hover:shadow-2xl hover:shadow-red-600/30 flex items-center gap-2 justify-center">
              📞 06 50 50 01 75
            </a>
            <a href="https://wa.me/33650500175?text=Bonjour%2C%20je%20souhaite%20une%20expertise%20automobile." target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all flex items-center gap-2 justify-center">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* STAT CENTRALE — DÉCOMPTE IMPRESSIONNANT */}
      <section className="bg-gray-950 py-14 border-b border-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15),_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <CountUp end={statsNombres.vehicules} prefix="+" className="text-4xl md:text-5xl font-black text-red-500" />
            <div className="text-xs text-gray-400 mt-2 uppercase tracking-wide">Véhicules expertisés à ce jour</div>
          </div>
          <div>
            <CountUp end={statsNombres.groupes} className="text-4xl md:text-5xl font-black text-red-500" />
            <div className="text-xs text-gray-400 mt-2 uppercase tracking-wide">Grands groupes partenaires</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-red-500">5/5</div>
            <div className="text-xs text-gray-400 mt-2 uppercase tracking-wide">⭐ 55 avis Google</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-red-500">100%</div>
            <div className="text-xs text-gray-400 mt-2 uppercase tracking-wide">Rapport détaillé fourni</div>
          </div>
        </div>
      </section>

      {/* INSPECTION AVANT ACHAT — OFFRE PRINCIPALE */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Réservation en ligne</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              🚗 Vous avez trouvé votre future voiture ?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Avant de l&apos;acheter, faites-la contrôler par un professionnel. Envoyez-nous les informations du véhicule.
            </p>
          </div>
          <InspectionBooking />
        </div>
      </section>

      {/* ILS NOUS FONT CONFIANCE */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Nos partenaires professionnels</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Ils nous ont fait confiance
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Des acteurs majeurs de l&apos;automobile nous sollicitent régulièrement pour leur expertise, preuve de notre sérieux et de notre fiabilité.
            </p>
          </div>

          {/* Logos bande */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 py-8 bg-white rounded-3xl border border-gray-100 shadow-sm px-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest w-full text-center mb-2">Ils nous font confiance</span>
            {partenairesLogos.map(p => (
              <div key={p.nom} title={p.nom}
                className={`flex items-center justify-center rounded-2xl px-6 py-4 hover:scale-105 transition-transform ${p.border ? 'border border-gray-200 shadow-sm' : ''}`}
                style={{ backgroundColor: p.bg }}>
                <Image src={p.img} alt={p.nom} width={p.width} height={p.height} className="object-contain" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {partenaires.map(p => (
              <div key={p.nom} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="h-14 w-28 rounded-xl flex items-center justify-center px-3 border border-gray-100" style={{ backgroundColor: p.logoBg }}>
                    <Image src={p.logoImg} alt={p.nom} width={100} height={48} className="object-contain max-h-10 w-auto" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-gray-900">{p.stat}</div>
                    <div className="text-xs text-gray-400">{p.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-black text-gray-900 text-xl mb-3">{p.nom}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Témoignage direction */}
          <div className="bg-gray-900 text-white rounded-3xl p-10 max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">💬</div>
            <p className="text-lg text-gray-300 leading-relaxed italic mb-6">
              &quot;Que vous soyez un grand groupe automobile, une plateforme digitale ou un particulier, notre engagement reste le même : un rapport d&apos;expertise honnête, précis et actionnable. C&apos;est ce qui nous a permis de bâtir ces collaborations durables.&quot;
            </p>
            <div className="flex items-center justify-center gap-3">
              <Image src="/logo.jpg" alt="RM Automotive" width={40} height={40} className="rounded-lg" />
              <div className="text-left">
                <div className="font-black"><span className="text-white">RM</span><span className="text-red-500 italic"> Automotive</span></div>
                <div className="text-xs text-gray-400">Mitry-Mory, Île-de-France</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOS POINTS DE CONTRÔLE */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Inspection complète</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Ce qu&apos;on contrôle sur chaque véhicule
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Notre expertise couvre tous les aspects du véhicule. Rien n&apos;échappe à notre inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {checkPoints.map(c => (
              <div key={c.titre} className="group bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{c.titre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAS D'USAGE */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Qui fait appel à nous ?</h2>
            <p className="text-gray-500">Professionnels comme particuliers — nous répondons à tous les besoins.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: '🏢',
                titre: 'Groupes automobiles',
                desc: 'Macadam Europe, Eurotol et autres acteurs nous confient l\'expertise de leur parc véhicule à grande échelle.',
              },
              {
                icon: '📱',
                titre: 'Plateformes digitales',
                desc: 'Trustoo et autres marketplaces font appel à nous pour certifier la qualité des véhicules mis en vente.',
              },
              {
                icon: '🌧️',
                titre: 'Expertises grêle',
                desc: 'Lors des grandes vagues de grêle en France, Eurotol nous mandate pour le chiffrage des dommages sur les flottes.',
              },
              {
                icon: '🤝',
                titre: 'Négociants auto',
                desc: 'Les négociants et marchands font appel à nous pour valider techniquement leurs acquisitions.',
              },
              {
                icon: '👤',
                titre: 'Particuliers acheteurs',
                desc: 'Vous achetez un véhicule d\'occasion ? On vous accompagne pour éviter les mauvaises surprises.',
              },
              {
                icon: '💼',
                titre: 'Assureurs & loueurs',
                desc: 'Expertise et chiffrage pour compagnies d\'assurance, sociétés de location longue durée et leasing.',
              },
            ].map(u => (
              <div key={u.titre} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md hover:border-red-100 transition-all">
                <div className="text-3xl mb-4">{u.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{u.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-950 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Besoin d&apos;une expertise ?
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Professionnel ou particulier — appelez-nous ou envoyez un message. Devis gratuit, intervention rapide en Île-de-France.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white font-black px-10 py-4 rounded-2xl text-xl transition-all hover:shadow-2xl hover:shadow-red-600/30">
            📞 06 50 50 01 75
          </a>
          <a href="https://wa.me/33650500175?text=Bonjour%2C%20je%20souhaite%20une%20expertise%20automobile%20professionnelle." target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-black px-10 py-4 rounded-2xl text-xl transition-all">
            💬 WhatsApp
          </a>
          <Link href="/contact" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-2xl text-lg transition-all">
            Formulaire →
          </Link>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  )
}
