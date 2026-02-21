import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticles } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog & Conseils Auto | Dépannage Île-de-France — RM Automotive',
  description: 'Conseils, guides et infos pratiques sur le dépannage automobile en Île-de-France. Assurance, véhicules électriques, utilitaires, prestige. RM Automotive.',
  openGraph: {
    title: 'Blog Conseils Auto — RM Automotive',
    description: 'Guides pratiques : panne autoroute, assurance dépannage, véhicules électriques, prestige. Île-de-France.',
  },
}

const categorieColors: Record<string, string> = {
  Conseils: 'bg-blue-100 text-blue-700',
  Assurance: 'bg-green-100 text-green-700',
  Électrique: 'bg-purple-100 text-purple-700',
  Professionnel: 'bg-orange-100 text-orange-700',
  Prestige: 'bg-yellow-100 text-yellow-800',
}

export default function Blog() {
  const articles = getArticles()

  return (
    <>
      {/* HERO */}
      <section className="bg-gray-950 text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-gray-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            📝 Conseils & Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Blog <span className="text-red-500">RM Automotive</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Guides pratiques, conseils en cas de panne, infos assurance et expertise automobile en Île-de-France.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Couleur header selon catégorie */}
                <div className="h-3 bg-gradient-to-r from-red-600 to-red-400" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categorieColors[article.categorie] || 'bg-gray-100 text-gray-600'}`}>
                      {article.categorie}
                    </span>
                    <span className="text-xs text-gray-400">{article.tempsLecture} de lecture</span>
                  </div>
                  <h2 className="font-black text-gray-900 text-lg leading-snug mb-3 group-hover:text-red-600 transition-colors flex-1">
                    {article.titre}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-400">
                      {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="text-red-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lire <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-red-600 text-white text-center">
        <h2 className="text-2xl font-black mb-2">En panne maintenant ?</h2>
        <p className="text-red-100 mb-6">On ne lit pas les articles dans ces moments-là. On appelle.</p>
        <a href="tel:0650500175" className="inline-block bg-white text-red-600 font-black text-xl px-10 py-4 rounded-2xl hover:bg-red-50 transition-all">
          📞 06 50 50 01 75
        </a>
      </section>

      <div className="h-16 md:hidden" />
    </>
  )
}
