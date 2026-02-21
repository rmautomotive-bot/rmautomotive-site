import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import { getArticle, getArticles } from '@/lib/blog'

export async function generateStaticParams() {
  return getArticles().map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: `${article.titre} | RM Automotive`,
    description: article.excerpt,
    openGraph: { title: article.titre, description: article.excerpt },
  }
}

const categorieColors: Record<string, string> = {
  Conseils: 'bg-blue-100 text-blue-700',
  Assurance: 'bg-green-100 text-green-700',
  Électrique: 'bg-purple-100 text-purple-700',
  Professionnel: 'bg-orange-100 text-orange-700',
  Prestige: 'bg-yellow-100 text-yellow-800',
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const htmlContent = marked(article.contenu)
  const autresArticles = getArticles().filter(a => a.slug !== slug).slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="bg-gray-950 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">← Blog</Link>
            <span className="text-gray-700">/</span>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categorieColors[article.categorie] || 'bg-gray-800 text-gray-300'}`}>
              {article.categorie}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">{article.titre}</h1>
          <p className="text-gray-400 text-lg mb-6">{article.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>📅 {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>⏱ {article.tempsLecture} de lecture</span>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Encart urgence */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-sm">🚨 En panne en ce moment ?</p>
              <p className="text-gray-500 text-xs mt-0.5">Ne lisez pas l&apos;article maintenant — appelez directement.</p>
            </div>
            <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap transition-all flex-shrink-0">
              📞 06 50 50 01 75
            </a>
          </div>

          {/* Article content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-gray-900 prose-li:text-gray-600 prose-li:leading-relaxed prose-table:text-sm prose-th:bg-gray-50 prose-th:font-bold prose-th:text-gray-900 prose-td:text-gray-600 prose-blockquote:border-l-red-500 prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* CTA fin d'article */}
          <div className="mt-14 bg-gray-950 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-black mb-2">RM Automotive — Disponible 24h/24</h3>
            <p className="text-gray-400 mb-6">Partenaire Mondial Assistance · 0€ à avancer · Toute l&apos;Île-de-France</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white font-black px-7 py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2">
                📞 06 50 50 01 75
              </a>
              <a href="https://wa.me/33650500175" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white font-black px-7 py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AUTRES ARTICLES */}
      {autresArticles.length > 0 && (
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Lire aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {autresArticles.map(a => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all p-5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categorieColors[a.categorie] || 'bg-gray-100 text-gray-600'}`}>{a.categorie}</span>
                  <h3 className="font-black text-gray-900 text-base mt-3 mb-2 leading-snug group-hover:text-red-600 transition-colors">{a.titre}</h3>
                  <span className="text-red-600 font-bold text-sm">Lire →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="h-16 md:hidden" />
    </>
  )
}
