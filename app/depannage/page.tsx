import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dépannage Automobile 24h/24 | Mitry-Mory & Seine-et-Marne (77)',
  description: 'RM Automotive — Dépannage voiture 24h/24 7j/7 à Mitry-Mory et Seine-et-Marne. Panne moteur, batterie, crevaison, accident. Intervention rapide. ☎ 06 50 50 01 75.',
  openGraph: {
    title: 'Dépannage Auto 24h/24 — Mitry-Mory (77) | RM Automotive',
    description: 'Dépannage voiture 24h/24 en Seine-et-Marne. Intervention rapide. 06 50 50 01 75.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmergencyService',
  name: 'RM Automotive — Dépannage 24h/24',
  telephone: '+33650500175',
  address: { '@type': 'PostalAddress', streetAddress: '70 Avenue Franklin Roosevelt', addressLocality: 'Mitry-Mory', postalCode: '77290', addressCountry: 'FR' },
  hoursAvailable: { '@type': 'OpeningHoursSpecification', opens: '00:00', closes: '23:59', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] },
}

const pannes = [
  { icon: '🔋', titre: 'Batterie à plat', desc: 'Démarrage d\'urgence sur place. Diagnostic et remplacement si nécessaire.' },
  { icon: '🛞', titre: 'Crevaison', desc: 'Changement de roue immédiat, réparation ou remplacement pneumatique.' },
  { icon: '⚙️', titre: 'Panne moteur', desc: 'Diagnostic électronique sur site, dépannage ou remorquage vers atelier.' },
  { icon: '🚑', titre: 'Accident', desc: 'Sécurisation du véhicule, remorquage, assistance administrative.' },
  { icon: '🔑', titre: 'Clé perdue / bloquée', desc: 'Ouverture sans dommage, dépannage serrurerie automobile.' },
  { icon: '⛽', titre: 'Panne de carburant', desc: 'Apport de carburant sur place pour reprendre la route.' },
  { icon: '🌡️', titre: 'Surchauffe moteur', desc: 'Diagnostic, ajout de liquide, remorquage si nécessaire.' },
  { icon: '💧', titre: 'Fuite de fluide', desc: 'Identification, colmatage provisoire ou remorquage atelier.' },
]

const faq = [
  { q: 'Intervenez-vous la nuit et le week-end ?', a: 'Oui, notre service de dépannage est actif 24h/24, 7j/7, jours fériés inclus. Appelez le 06 50 50 01 75 à toute heure.' },
  { q: 'Quel est le délai d\'intervention ?', a: 'En Seine-et-Marne et Île-de-France, notre délai moyen est de 30 à 45 minutes selon votre position et la circulation.' },
  { q: 'Quelle est votre zone d\'intervention ?', a: 'Nous couvrons Mitry-Mory, Villeparisis, Claye-Souilly, Meaux, Roissy, toute la Seine-et-Marne (77) et l\'Île-de-France.' },
  { q: 'Pouvez-vous remorquer ma voiture ?', a: 'Oui, nous disposons d\'équipement de remorquage pour transporter votre véhicule vers notre atelier ou un autre garage de votre choix.' },
  { q: 'Êtes-vous distributeur officiel Lorries ?', a: 'Oui, nous sommes distributeur officiel Lorries, ce qui nous permet de proposer des véhicules de qualité et d\'assurer un service de dépannage premium.' },
]

export default function Depannage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-gray-950 text-white relative overflow-hidden py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-gray-950 to-gray-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Disponible maintenant — 24h/24 7j/7
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Dépannage Automobile<br />
            <span className="text-red-500">Mitry-Mory & 77</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Panne sur route, accident, batterie à plat ou crevaison... Intervention rapide en Seine-et-Marne. Disponible à toute heure.
          </p>
          <a href="tel:0650500175" className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white font-black text-2xl px-10 py-5 rounded-2xl transition-all hover:shadow-2xl hover:shadow-red-600/40 animate-pulse-ring">
            <span>📞</span>
            <div className="text-left">
              <div className="text-sm font-semibold opacity-80">Appeler l&apos;urgence</div>
              <div>06 50 50 01 75</div>
            </div>
          </a>
          <p className="text-gray-500 text-sm mt-4">Disponible 24h/24 · 7j/7 · Jours fériés inclus</p>
        </div>
      </section>

      {/* PANNES */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-3">Tous types de pannes</h2>
          <p className="text-center text-gray-500 mb-12">Quelle que soit la situation, on a la solution.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pannes.map((p) => (
              <div key={p.titre} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-red-100 transition-all hover:-translate-y-0.5">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{p.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-14">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { n: '1', t: 'Vous appelez', d: 'Décrivez la panne et donnez votre position. On décroche immédiatement.' },
              { n: '2', t: 'On arrive vite', d: 'Un technicien part immédiatement. En moyenne 30–45 min en Seine-et-Marne.' },
              { n: '3', t: 'Problème résolu', d: 'Réparation sur place ou remorquage vers notre atelier de Mitry-Mory.' },
            ].map((e) => (
              <div key={e.n} className="relative">
                <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-5 shadow-lg shadow-red-200">
                  {e.n}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{e.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Zone d&apos;intervention</h2>
          <p className="text-gray-400 mb-8">Nous intervenons dans toute la <strong className="text-white">Seine-et-Marne (77)</strong> et l&apos;Île-de-France :</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Mitry-Mory', 'Villeparisis', 'Claye-Souilly', 'Meaux', 'Roissy CDG', 'Dammartin', 'Lagny-sur-Marne', 'Chelles', 'Torcy', 'Marne-la-Vallée', 'Croissy', 'Nanteuil'].map((v) => (
              <div key={v} className="bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                📍 {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12">Questions fréquentes</h2>
          <div className="space-y-4">
            {faq.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 text-base mb-3 flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0">Q.</span> {f.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-black mb-3">En panne en ce moment ?</h2>
        <p className="text-red-100 text-lg mb-8">Ne restez pas bloqué. On décroche maintenant.</p>
        <a href="tel:0650500175" className="inline-block bg-white text-red-600 font-black text-2xl px-12 py-5 rounded-2xl hover:bg-red-50 transition-all hover:shadow-2xl">
          📞 06 50 50 01 75
        </a>
      </section>

      <div className="h-16 md:hidden" />
    </>
  )
}
