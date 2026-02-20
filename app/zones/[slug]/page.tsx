import type { Metadata } from 'next'
import Link from 'next/link'
import { zones, getZoneBySlug } from '@/lib/zones'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return zones.map(z => ({ slug: z.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const zone = getZoneBySlug(slug)
  if (!zone) return {}
  return {
    title: `Dépannage Automobile ${zone.nom} (${zone.code}) — 24h/24 | RM Automotive`,
    description: `${zone.desc} Intervention rapide dans tout le ${zone.code}. ⭐ 5/5 Google. Appelez le 06 50 50 01 75.`,
    openGraph: {
      title: `Dépannage Auto ${zone.nom} (${zone.code}) — 24h/24 | RM Automotive`,
      description: `Dépannage voiture 24h/24 dans ${zone.nom}. Intervention rapide. 06 50 50 01 75.`,
      url: `https://rmautomotive.fr/zones/${zone.slug}`,
    },
  }
}

export default async function ZonePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const zone = getZoneBySlug(slug)
  if (!zone) notFound()

  const autres = zones.filter(z => z.slug !== zone.slug).slice(0, 4)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    name: `RM Automotive — Dépannage ${zone.nom}`,
    telephone: '+33650500175',
    areaServed: { '@type': 'AdministrativeArea', name: `${zone.nom} (${zone.code})` },
    address: { '@type': 'PostalAddress', streetAddress: '70 Avenue Franklin Roosevelt', addressLocality: 'Mitry-Mory', postalCode: '77290', addressCountry: 'FR' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '42' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-gray-950 text-white py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-gray-950 to-gray-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Disponible 24h/24 dans le {zone.code}
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Dépannage Auto<br />
            <span className="text-red-500">{zone.nom}</span>
            <span className="text-gray-400 text-2xl md:text-3xl ml-3">({zone.code})</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {zone.desc} Intervention en moins de 45 min.
          </p>
          <a href="tel:0650500175" className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white font-black text-xl px-10 py-5 rounded-2xl transition-all hover:shadow-2xl hover:shadow-red-600/40 animate-pulse-ring">
            📞 <span>06 50 50 01 75</span>
          </a>
          <p className="text-gray-500 text-sm mt-4">Disponible maintenant — Réponse immédiate</p>
        </div>
      </section>

      {/* VILLES COUVERTES */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-3 text-center">
            Villes couvertes — {zone.nom} ({zone.code})
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Nous intervenons dans <strong>{zone.villes.length}+ villes</strong> du département {zone.code}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {zone.villes.map(v => (
              <div key={v} className="bg-white border border-gray-100 hover:border-red-200 hover:shadow-md rounded-xl py-3 px-4 text-sm font-medium text-gray-700 hover:text-red-600 transition-all flex items-center gap-2">
                <span className="text-red-500">📍</span> {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AXES AUTOROUTIERS */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-8">
            Axes autoroutiers couverts — {zone.nom}
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {zone.axes.map(a => (
              <div key={a} className="bg-red-600/20 border border-red-500/30 text-red-400 px-5 py-2.5 rounded-xl font-bold text-sm">
                🛣️ {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DANS CETTE ZONE */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">
            Nos services dans le {zone.code}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: '🚨', t: `Dépannage 24h/24 — ${zone.nom}`, d: `Panne, batterie, crevaison, accident dans tout le ${zone.code}. Intervention en moins de 45 min.` },
              { icon: '🔍', t: 'Inspection avant achat', d: 'Contrôle complet + rapport détaillé. On se déplace chez vous ou chez le vendeur.' },
              { icon: '🔧', t: 'Entretien & Réparation', d: `Vidange, freins, distribution. Réparation dans notre atelier à Mitry-Mory, proche du ${zone.code}.` },
              { icon: '🚗', t: 'Vente de véhicules', d: 'Véhicules garantis, distributeur Lorries officiel. Livraison possible dans le ' + zone.code + '.' },
            ].map(s => (
              <div key={s.t} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md hover:border-red-100 transition-all">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTRES ZONES */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-black text-gray-900 mb-6 text-center">Autres zones d&apos;intervention</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {autres.map(z => (
              <Link key={z.slug} href={`/zones/${z.slug}`} className="bg-white hover:bg-red-600 border border-gray-200 hover:border-red-600 text-gray-700 hover:text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all">
                {z.nom} ({z.code})
              </Link>
            ))}
            <Link href="/zones" className="bg-gray-900 hover:bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all">
              Toutes les zones →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-black mb-3">En panne dans le {zone.code} ?</h2>
        <p className="text-red-100 mb-8 text-lg">On intervient dans tout le {zone.nom}. Appelez maintenant.</p>
        <a href="tel:0650500175" className="inline-block bg-white text-red-600 font-black text-2xl px-12 py-5 rounded-2xl hover:bg-red-50 transition-all hover:shadow-2xl">
          📞 06 50 50 01 75
        </a>
      </section>
      <div className="h-16 md:hidden" />
    </>
  )
}
