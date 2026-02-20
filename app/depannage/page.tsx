import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dépannage Automobile 24h/24 7j/7 | Île-de-France | RMautomotive.fr',
  description:
    'Service de dépannage automobile 24h/24, 7j/7 en Île-de-France. Panne moteur, batterie à plat, crevaison, accident, clé perdue. Intervention en moins de 45 min. Appelez le 06 12 34 56 78.',
  keywords: [
    'dépannage automobile',
    'dépannage voiture 24h',
    'assistance dépannage',
    'panne sur route',
    'dépannage île-de-france',
    'dépannage paris',
    'remorquage voiture',
    'assistance routière',
  ],
  openGraph: {
    title: 'Dépannage Automobile 24h/24 7j/7 — RMautomotive',
    description:
      'Dépannage voiture 24h/24 en Île-de-France. Panne, batterie, crevaison, accident. Intervention rapide sous 45 min.',
    url: 'https://rmautomotive.fr/depannage',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmergencyService',
  name: 'RM Automotive — Dépannage 24h/24',
  url: 'https://rmautomotive.fr/depannage',
  telephone: '+33612345678',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceLocation: {
      '@type': 'Place',
      name: 'Île-de-France',
    },
  },
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    opens: '00:00',
    closes: '23:59',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },
  description: 'Dépannage automobile 24h/24 7j/7 en Île-de-France. Intervention rapide.',
}

const pannes = [
  { icon: '🔋', titre: 'Batterie à plat', desc: 'Démarrage d\'urgence, diagnostic et remplacement sur place.' },
  { icon: '🛞', titre: 'Crevaison', desc: 'Changement de roue, réparation ou remplacement du pneumatique.' },
  { icon: '⚙️', titre: 'Panne moteur', desc: 'Diagnostic électronique sur site, dépannage ou remorquage vers atelier.' },
  { icon: '🚑', titre: 'Accident', desc: 'Sécurisation du véhicule, remorquage, assistance administrative.' },
  { icon: '🔑', titre: 'Clé perdue / bloquée', desc: 'Ouverture de véhicule sans dommage, dépannage serrurerie auto.' },
  { icon: '⛽', titre: 'Panne de carburant', desc: 'Apport de carburant sur place pour reprendre la route rapidement.' },
  { icon: '🌡️', titre: 'Surchauffe moteur', desc: 'Diagnostic, ajout de liquide, remorquage si nécessaire.' },
  { icon: '💧', titre: 'Fuite / Perte de fluide', desc: 'Identification de la fuite, colmatage provisoire ou remorquage.' },
]

const faq = [
  {
    q: 'Êtes-vous disponibles la nuit et le week-end ?',
    a: 'Oui, notre service de dépannage est actif 24h/24, 7j/7, jours fériés inclus. Une ligne d\'urgence est toujours disponible au 06 12 34 56 78.',
  },
  {
    q: 'Quel est le délai d\'intervention ?',
    a: 'En Île-de-France, notre temps d\'intervention moyen est de 30 à 45 minutes. Ce délai peut varier selon la circulation et votre localisation exacte.',
  },
  {
    q: 'Quelle est la zone d\'intervention ?',
    a: 'Nous intervenons sur toute l\'Île-de-France : Paris (tous arrondissements), les Hauts-de-Seine, la Seine-Saint-Denis, le Val-de-Marne, et les grands axes autoroutiers (A1, A4, A6, A10, A13, A86, N118, etc.).',
  },
  {
    q: 'Le devis de dépannage est-il gratuit ?',
    a: 'Le déplacement et le diagnostic de base sont facturés forfaitairement. Nous vous communiquons toujours le devis complet avant toute intervention de réparation.',
  },
  {
    q: 'Prenez-vous en charge les voitures étrangères ?',
    a: 'Absolument. Nous dépannons tous types de véhicules, toutes marques et toutes nationalités. Nous parlons également anglais et arabe si besoin.',
  },
]

export default function Depannage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Dépannage */}
      <section className="bg-gradient-to-br from-red-700 to-orange-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-200 font-semibold uppercase tracking-widest text-sm mb-4">
            ⚡ Intervention en 30 à 45 minutes
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Dépannage Automobile<br />
            <span className="text-yellow-300">24h/24 — 7j/7</span>
          </h1>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Panne sur route, accident, batterie à plat ou crevaison... Notre équipe intervient
            rapidement partout en Île-de-France, de jour comme de nuit.
          </p>
          <a
            href="tel:0612345678"
            className="inline-block bg-white text-orange-600 font-extrabold text-2xl px-10 py-5 rounded-full transition-transform hover:scale-105 shadow-2xl"
          >
            📞 06 12 34 56 78
          </a>
          <p className="text-orange-200 text-sm mt-4">Appel gratuit — disponible maintenant</p>
        </div>
      </section>

      {/* Types de pannes */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-3">
            Tous types de pannes pris en charge
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Quelle que soit votre situation, nous avons la solution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pannes.map((p) => (
              <div
                key={p.titre}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-blue-800 text-lg mb-2">{p.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Zone d&apos;intervention</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Nous couvrons <strong>toute l&apos;Île-de-France</strong> et les grands axes autoroutiers :
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            {[
              '📍 Paris (75)', '📍 Hauts-de-Seine (92)', '📍 Seine-Saint-Denis (93)',
              '📍 Val-de-Marne (94)', '📍 Essonne (91)', '📍 Val-d\'Oise (95)',
              '📍 Yvelines (78)', '📍 Seine-et-Marne (77)',
            ].map((z) => (
              <div key={z} className="bg-white rounded-xl py-3 px-4 shadow-sm font-medium text-blue-800">
                {z}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Autoroutes : A1, A3, A4, A6, A10, A11, A13, A14, A86, Francilienne (N104)
          </p>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { num: '1', titre: 'Appelez-nous', desc: 'Décrivez votre situation et donnez votre position au 06 12 34 56 78.' },
              { num: '2', titre: 'On arrive vite', desc: 'Un technicien est dépêché immédiatement. Intervention en 30-45 min.' },
              { num: '3', titre: 'Problème résolu', desc: 'Réparation sur place ou remorquage vers notre atelier si nécessaire.' },
            ].map((e) => (
              <div key={e.num}>
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">
                  {e.num}
                </div>
                <h3 className="font-bold text-blue-800 text-xl mb-2">{e.titre}</h3>
                <p className="text-gray-500 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Questions fréquentes — Dépannage
          </h2>
          <div className="space-y-4">
            {faq.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-blue-800 text-lg mb-3">❓ {f.q}</h3>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-orange-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Vous avez besoin d&apos;aide maintenant ?</h2>
        <p className="text-orange-100 text-lg mb-8">
          Ne restez pas bloqué. Un appel suffit.
        </p>
        <a
          href="tel:0612345678"
          className="inline-block bg-white text-orange-600 font-extrabold text-2xl px-10 py-5 rounded-full hover:bg-orange-50 transition-transform hover:scale-105 shadow-xl"
        >
          📞 06 12 34 56 78
        </a>
      </section>
    </>
  )
}
