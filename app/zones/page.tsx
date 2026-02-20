import type { Metadata } from 'next'
import Link from 'next/link'
import { zones } from '@/lib/zones'

export const metadata: Metadata = {
  title: 'Zones d\'Intervention — Île-de-France | RM Automotive Dépannage 24h/24',
  description: 'RM Automotive intervient dans les 8 départements d\'Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Val-d\'Oise (95). Dépannage 24h/24. ☎ 06 50 50 01 75.',
}

export default function Zones() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gray-950 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Dépannage partout en<br />
            <span className="text-red-500">Île-de-France</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            8 départements couverts, des centaines de villes, 24h/24 7j/7. Aucun endroit n&apos;est trop loin.
          </p>
          <a href="tel:0650500175" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black text-xl px-8 py-4 rounded-2xl transition-all hover:shadow-2xl hover:shadow-red-600/30">
            📞 06 50 50 01 75
          </a>
        </div>
      </section>

      {/* CARTE DEPARTMENTS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-3">Sélectionnez votre département</h2>
          <p className="text-center text-gray-500 mb-14">Retrouvez les détails de notre intervention dans votre zone</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {zones.map((z) => (
              <Link key={z.code} href={`/zones/${z.slug}`} className="group bg-white hover:bg-red-600 border border-gray-100 hover:border-red-600 rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-red-600 group-hover:bg-white text-white group-hover:text-red-600 font-black w-14 h-14 rounded-2xl flex items-center justify-center text-lg transition-all shadow-lg shadow-red-200 group-hover:shadow-white/20">
                    {z.code}
                  </div>
                  <div>
                    <h2 className="font-black text-gray-900 group-hover:text-white transition-colors leading-tight">{z.nom}</h2>
                    <div className="text-xs text-gray-400 group-hover:text-red-200 transition-colors">Dép. {z.code}</div>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-5">
                  {z.villes.slice(0, 5).map(v => (
                    <li key={v} className="text-xs text-gray-500 group-hover:text-red-100 flex items-center gap-2 transition-colors">
                      <span className="w-1 h-1 bg-red-400 group-hover:bg-red-200 rounded-full flex-shrink-0 transition-colors" />
                      {v}
                    </li>
                  ))}
                  {z.villes.length > 5 && (
                    <li className="text-xs text-gray-400 group-hover:text-red-200 transition-colors">+{z.villes.length - 5} autres villes...</li>
                  )}
                </ul>
                <div className="text-sm font-bold text-red-600 group-hover:text-white flex items-center gap-1 transition-colors">
                  Détails de ma zone →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zones couvertes en texte (SEO) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Toutes nos zones de dépannage en Île-de-France</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {zones.flatMap(z => z.villes.map(v => ({ v, z }))).map(({ v, z }) => (
              <Link key={`${z.code}-${v}`} href={`/zones/${z.slug}`} className="text-xs text-gray-600 hover:text-red-600 py-1.5 px-3 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-1.5">
                <span className="text-gray-300 font-medium">{z.code}</span> {v}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-black mb-4">Votre zone est couverte. Appelez maintenant.</h2>
        <a href="tel:0650500175" className="inline-block bg-white text-red-600 font-black text-2xl px-12 py-5 rounded-2xl hover:bg-red-50 transition-all hover:shadow-2xl">
          📞 06 50 50 01 75
        </a>
      </section>
      <div className="h-16 md:hidden" />
    </>
  )
}
