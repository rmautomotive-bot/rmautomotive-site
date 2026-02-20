import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RM Automotive | Dépannage & Services Automobiles 24h/24 | Paris',
  description:
    'RMautomotive.fr — Dépannage automobile 24h/24 7j/7 en Île-de-France. Inspection, entretien, vente de véhicules. Intervention rapide sur route. Appelez le 06 12 34 56 78.',
  openGraph: {
    title: 'RM Automotive | Dépannage 24h/24 | Paris Île-de-France',
    description: 'Dépannage automobile 24h/24 7j/7. Inspection, entretien, vente. Intervention rapide en Île-de-France.',
    url: 'https://rmautomotive.fr',
  },
}

const services = [
  {
    icon: '🚨',
    title: 'Dépannage 24h/24',
    desc: 'Panne sur route, accident, batterie à plat, crevaison... Nous intervenons partout en Île-de-France, de jour comme de nuit.',
    link: '/depannage',
    urgent: true,
  },
  {
    icon: '🔍',
    title: 'Inspection automobile',
    desc: 'Contrôle technique complet avant achat ou vente. Diagnostic électronique, état mécanique, carrosserie.',
    link: '/services',
    urgent: false,
  },
  {
    icon: '🔧',
    title: 'Entretien & Réparation',
    desc: 'Vidange, freins, distribution, climatisation... Entretien toutes marques par des techniciens certifiés.',
    link: '/services',
    urgent: false,
  },
  {
    icon: '🚗',
    title: 'Vente de véhicules',
    desc: 'Sélection de véhicules d\'occasion inspectés et garantis. Reprise de votre ancien véhicule.',
    link: '/services',
    urgent: false,
  },
]

const avantages = [
  { icon: '⚡', title: 'Intervention rapide', desc: 'En moins de 45 minutes en Île-de-France' },
  { icon: '🛡️', title: 'Techniciens certifiés', desc: 'Plus de 15 ans d\'expérience dans l\'automobile' },
  { icon: '💰', title: 'Devis gratuit', desc: 'Transparence totale sur les prix, sans surprise' },
  { icon: '📱', title: 'Disponible 24h/24', desc: 'Une ligne d\'urgence joignable à toute heure' },
]

const temoignages = [
  {
    nom: 'Sophie M.',
    note: '⭐⭐⭐⭐⭐',
    texte: 'Panne en pleine nuit sur l\'A1, RM Automotive est arrivé en moins de 30 minutes. Professionnel, rassurant et efficace. Je recommande à 100% !',
  },
  {
    nom: 'Karim B.',
    note: '⭐⭐⭐⭐⭐',
    texte: 'Inspection avant achat très complète. Ils ont repéré des problèmes que je n\'aurais jamais vus. Ça m\'a évité une mauvaise affaire. Merci !',
  },
  {
    nom: 'Nathalie D.',
    note: '⭐⭐⭐⭐⭐',
    texte: 'Service entretien impeccable. Devis clair, prix honnêtes, travail soigné. Mon garage de confiance depuis 3 ans.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-4">
            🚨 Dépannage disponible 24h/24 — 7j/7
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Votre expert automobile<br />
            <span className="text-orange-400">en Île-de-France</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Dépannage sur route, inspection avant achat, entretien toutes marques et vente de véhicules.
            Intervention rapide, techniciens certifiés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0612345678"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-lg"
            >
              📞 Appeler maintenant — 06 12 34 56 78
            </a>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Urgence banner */}
      <section className="bg-orange-600 text-white py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-lg">🚨 Panne ou accident ? On intervient maintenant.</p>
            <p className="text-orange-100 text-sm">Disponible 24h/24 — 7j/7 — Île-de-France</p>
          </div>
          <a
            href="tel:0612345678"
            className="bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors whitespace-nowrap"
          >
            Appeler l&apos;urgence
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-3">Nos services</h2>
          <p className="text-center text-gray-500 mb-12">Tout ce dont vous avez besoin pour votre véhicule</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.link}
                className={`bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all hover:scale-105 border-t-4 ${
                  s.urgent ? 'border-orange-500' : 'border-blue-600'
                }`}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${s.urgent ? 'text-orange-600' : 'text-blue-800'}`}>
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-3">Pourquoi nous choisir ?</h2>
          <p className="text-center text-gray-500 mb-12">La confiance se gagne par les actes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((a) => (
              <div key={a.title} className="text-center">
                <div className="text-5xl mb-4">{a.icon}</div>
                <h3 className="font-bold text-blue-800 text-lg mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-3">Ce que disent nos clients</h2>
          <p className="text-center text-gray-500 mb-12">Plus de 500 clients satisfaits en Île-de-France</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {temoignages.map((t) => (
              <div key={t.nom} className="bg-white rounded-2xl p-6 shadow">
                <p className="text-yellow-500 text-lg mb-3">{t.note}</p>
                <p className="text-gray-700 italic text-sm leading-relaxed mb-4">&quot;{t.texte}&quot;</p>
                <p className="font-semibold text-blue-800">— {t.nom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Besoin d&apos;aide pour votre véhicule ?</h2>
        <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
          Que ce soit une urgence ou un rendez-vous planifié, notre équipe est prête pour vous.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0612345678"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-transform hover:scale-105"
          >
            📞 06 12 34 56 78
          </a>
          <Link
            href="/contact"
            className="border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            Envoyer un message
          </Link>
        </div>
      </section>
    </>
  )
}
