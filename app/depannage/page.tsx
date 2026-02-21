import type { Metadata } from 'next'
import Image from 'next/image'
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
  { q: 'Gérez-vous les véhicules à faible garde au sol ?', a: 'Absolument. Notre plateau est équipé pour charger en toute sécurité les sportives et véhicules surbaissés (Porsche, Ferrari, Lamborghini...). Zéro accrochage garanti.' },
  { q: 'Prenez-vous en charge les voitures de luxe ?', a: 'Oui. Nous avons l\'habitude de manipuler des véhicules premium : Porsche 911, Rolls-Royce Cullinan, Mercedes AMG, etc. Chaque intervention est réalisée avec le plus grand soin.' },
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

      {/* PREMIUM SECTION */}
      <section className="py-20 px-4 bg-gray-950 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              <span>⭐</span> Transport Premium
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
              Véhicules de prestige &amp;<br />
              <span className="text-yellow-400">faible garde au sol</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Porsche 911, GT4 RS, Rolls-Royce Cullinan, Mercedes AMG... Notre plateau est équipé et notre équipe formée pour manipuler les véhicules les plus précieux avec <strong className="text-white">zéro compromis</strong>.
            </p>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
            {/* Large image left */}
            <div className="col-span-2 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group h-64 md:h-80">
              <Image
                src="/premium/porsche-gt4rs.jpg"
                alt="Transport Porsche GT4 RS — RM Automotive"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-yellow-500 text-black text-xs font-black px-3 py-1 rounded-full">Faible garde au sol</span>
                <p className="text-white font-bold text-lg mt-1">Porsche GT4 RS</p>
              </div>
            </div>
            {/* Right column images */}
            {[
              { src: '/premium/rolls-royce-cullinan.jpg', label: 'Rolls-Royce Cullinan', tag: 'Grand gabarit' },
              { src: '/premium/porsche-911-turbo.jpg', label: 'Porsche 911 Turbo', tag: 'Sportive subaissée' },
            ].map((v) => (
              <div key={v.src} className="relative rounded-2xl overflow-hidden group h-36 md:h-[152px]">
                <Image
                  src={v.src}
                  alt={`Transport ${v.label} — RM Automotive`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-2 py-0.5 rounded-full">{v.tag}</span>
                  <p className="text-white font-bold text-sm mt-0.5">{v.label}</p>
                </div>
              </div>
            ))}
            {/* Bottom row */}
            {[
              { src: '/premium/mercedes-gls-amg.jpg', label: 'Mercedes GLS AMG', tag: 'SUV de luxe' },
              { src: '/premium/porsche-cayenne.jpg', label: 'Porsche Cayenne', tag: 'Remis en concession' },
            ].map((v) => (
              <div key={v.src} className="relative rounded-2xl overflow-hidden group h-36 md:h-44">
                <Image
                  src={v.src}
                  alt={`Transport ${v.label} — RM Automotive`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-2 py-0.5 rounded-full">{v.tag}</span>
                  <p className="text-white font-bold text-sm mt-0.5">{v.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            {[
              { icon: '📐', titre: 'Plateau inclinable', desc: 'Chargement ultra-doux sans racler le bas de caisse — même sur les Porsche GT et 911.' },
              { icon: '🔒', titre: 'Sanglage 4 points', desc: 'Fixation professionnelle sur jantes. Zéro mouvement, zéro rayure pendant le transport.' },
              { icon: '🧤', titre: 'Manipulation gantée', desc: 'On ne touche jamais la carrosserie à mains nues. Chaque véhicule est traité comme le vôtre.' },
              { icon: '📸', titre: 'Photos à la prise en charge', desc: 'On documente l\'état du véhicule avant et après. Votre tranquillité d\'esprit, c\'est notre priorité.' },
            ].map((f) => (
              <div key={f.titre} className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/40 transition-colors">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{f.titre}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Marques déjà transportées */}
          <div className="border border-gray-800 rounded-2xl p-8 text-center">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-5 font-semibold">Marques déjà prises en charge</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Porsche', 'Rolls-Royce', 'Mercedes AMG', 'BMW M', 'Ferrari', 'Lamborghini', 'Maserati', 'Audi RS', 'McLaren', 'Bentley'].map((m) => (
                <span key={m} className="bg-gray-800 text-gray-300 border border-gray-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-yellow-500/10 hover:border-yellow-500/50 hover:text-yellow-400 transition-colors">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Vous avez un véhicule de prestige à remorquer ? Contactez-nous directement.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0650500175" className="inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg px-8 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-yellow-500/30">
                📞 06 50 50 01 75
              </a>
              <a href="https://wa.me/33650500175?text=Bonjour%2C%20j%27ai%20besoin%20d%27un%20d%C3%A9pannage%20pour%20mon%20v%C3%A9hicule%20de%20prestige." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-green-500/30">
                💬 WhatsApp direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ZONE */}
      <section className="py-16 px-4 bg-gray-900 text-white">
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

      {/* UTILITAIRES */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              <span>🚐</span> Utilitaires & Engins
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
              Fourgons, bennes, camions...<br />
              <span className="text-blue-600">On prend tout.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Votre flotte pro tombe en panne sur route ? Votre Mercedes Sprinter, Renault Master, ou même votre engin de chantier — on intervient. <strong className="text-gray-800">Aucun véhicule ne nous résiste.</strong>
            </p>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
            {[
              { src: '/utilitaires/chariot-elevateur.jpg', label: 'Chariot élévateur', tag: '🏗️ Engin de chantier' },
              { src: '/utilitaires/master-logistix.jpg', label: 'Renault Master L3H2', tag: '📦 Fourgon livraison' },
              { src: '/utilitaires/benne-ford.jpg', label: 'Camion benne', tag: '🪣 Benne TP' },
              { src: '/utilitaires/sprinter-echelle.jpg', label: 'Mercedes Sprinter', tag: '🔧 Van artisan' },
              { src: '/utilitaires/benne-jumper.jpg', label: 'Citroën Jumper benne', tag: '🪣 Utilitaire benne' },
              { src: '/utilitaires/master-gris.jpg', label: 'Renault Master', tag: '🚐 Grand volume' },
            ].map((v, i) => (
              <div key={v.src} className={`relative rounded-2xl overflow-hidden group ${i === 0 ? 'col-span-2 md:col-span-1 h-64' : 'h-44'}`}>
                <Image
                  src={v.src}
                  alt={`Dépannage ${v.label} — RM Automotive`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-blue-600/80 backdrop-blur text-white text-xs font-semibold px-2 py-0.5 rounded-full">{v.tag}</span>
                  <p className="text-white font-bold text-sm mt-0.5">{v.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Avantages pro */}
          <div className="bg-gray-950 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-white text-2xl font-black mb-2">Vous êtes professionnel ?</h3>
              <p className="text-gray-400">Artisan, livreur, chef de chantier — votre temps c'est de l'argent. On le sait.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: '⚡', titre: 'Priorité pro', desc: 'Intervention rapide pour minimiser l\'immobilisation de votre véhicule de travail.' },
                { icon: '📋', titre: 'Rapport d\'intervention', desc: 'Document complet pour votre assurance ou gestionnaire de flotte.' },
                { icon: '🔄', titre: 'Flotte entière', desc: 'Contrat annuel pour les entreprises avec plusieurs véhicules à gérer.' },
                { icon: '📞', titre: 'Ligne directe', desc: 'Un numéro, une réponse. Pas de standard, pas d\'attente. On décroche.' },
              ].map((f) => (
                <div key={f.titre} className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/40 transition-colors">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h4 className="font-bold text-white mb-2 text-sm">{f.titre}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="tel:0650500175" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-blue-500/30">
                📞 Appel pro — 06 50 50 01 75
              </a>
            </div>
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
