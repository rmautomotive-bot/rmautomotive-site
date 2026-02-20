import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://rmautomotive.fr'),
  title: {
    default: 'RM Automotive Mitry-Mory | Dépannage 24h/24 | ⭐ 5/5 sur Google',
    template: '%s | RM Automotive Mitry-Mory',
  },
  description:
    'RM Automotive à Mitry-Mory (77) — Dépannage automobile 24h/24 7j/7, inspection, entretien et vente de véhicules. Note 5/5 sur Google. 70 Av. Franklin Roosevelt. ☎ 06 50 50 01 75.',
  keywords: ['RM Automotive', 'dépannage automobile Mitry-Mory', 'garage Mitry-Mory 77', 'dépannage 24h Seine-et-Marne', 'inspection voiture 77', 'rmautomotive77'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://rmautomotive.fr',
    siteName: 'RM Automotive',
    title: 'RM Automotive Mitry-Mory | ⭐ 5/5 | Dépannage 24h/24',
    description: 'Garage indépendant à Mitry-Mory. Dépannage, vente, inspection, entretien. 42 avis 5 étoiles sur Google.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'RM Automotive',
  url: 'https://rmautomotive.fr',
  telephone: '+33650500175',
  email: 'contact@rmautomotive.fr',
  image: 'https://rmautomotive.fr/og-image.jpg',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '42' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '70 Avenue Franklin Roosevelt',
    addressLocality: 'Mitry-Mory',
    postalCode: '77290',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '48.9876', longitude: '2.6098' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '18:00' },
  ],
  sameAs: ['https://www.instagram.com/rmautomotive77/', 'https://www.tiktok.com/@rmautomotive77'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>

        {/* Top bar */}
        <div className="bg-red-600 text-white text-xs py-2 px-4 text-center">
          🚨 Dépannage urgence 24h/24 — 7j/7 &nbsp;|&nbsp;
          <a href="tel:0650500175" className="font-bold underline underline-offset-2">06 50 50 01 75</a>
          &nbsp;|&nbsp; Mitry-Mory (77) & Seine-et-Marne
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-red-600 text-white font-black text-xl w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-red-200">RM</div>
              <div>
                <div className="font-black text-gray-900 text-base leading-tight">RM Automotive</div>
                <div className="text-xs text-gray-500 leading-tight">Mitry-Mory · ⭐ 5/5 sur Google</div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {[['/', 'Accueil'], ['/services', 'Services'], ['/depannage', '🚨 Dépannage'], ['/contact', 'Contact']].map(([href, label]) => (
                <Link key={href} href={href} className={`text-sm font-medium transition-colors ${label.includes('🚨') ? 'text-red-600 font-bold hover:text-red-700' : 'text-gray-700 hover:text-red-600'}`}>
                  {label}
                </Link>
              ))}
              <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-red-200 flex items-center gap-2">
                <span>📞</span> 06 50 50 01 75
              </a>
            </nav>
            {/* Mobile call button */}
            <a href="tel:0650500175" className="md:hidden bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full">
              Appeler
            </a>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-600 text-white font-black text-xl w-10 h-10 rounded-lg flex items-center justify-center">RM</div>
                <span className="font-black text-white text-lg">RM Automotive</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Garage indépendant à Mitry-Mory — Achat/vente, réparation, diagnostic et dépannage de véhicules. 
                Qualité et satisfaction garanties. 🚗🔧🚨
              </p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/rmautomotive77/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-600 text-white w-9 h-9 rounded-lg flex items-center justify-center transition-colors text-sm">📸</a>
                <a href="https://www.tiktok.com/@rmautomotive77" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-600 text-white w-9 h-9 rounded-lg flex items-center justify-center transition-colors text-sm">🎵</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-2 text-sm">
                {[['/', 'Accueil'], ['/services', 'Services'], ['/depannage', 'Dépannage 24h/24'], ['/contact', 'Contact']].map(([href, label]) => (
                  <li key={href}><Link href={href} className="hover:text-red-400 transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="tel:0650500175" className="hover:text-red-400 transition-colors flex items-center gap-2"><span>📞</span> 06 50 50 01 75</a></li>
                <li><a href="mailto:contact@rmautomotive.fr" className="hover:text-red-400 transition-colors flex items-center gap-2"><span>✉️</span> contact@rmautomotive.fr</a></li>
                <li className="flex items-start gap-2"><span>📍</span><span>70 Av. Franklin Roosevelt<br />77290 Mitry-Mory</span></li>
                <li className="flex items-center gap-2 text-red-400 font-semibold"><span>🚨</span> Dépannage 24h/24 7j/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 text-center py-5 text-xs text-gray-600">
            © {new Date().getFullYear()} RM Automotive — Mitry-Mory (77290) · SIREN 948 698 634 · Tous droits réservés
          </div>
        </footer>

        {/* Floating CTA mobile */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 p-3 flex gap-3">
          <a href="tel:0650500175" className="flex-1 bg-red-600 text-white font-bold py-3 rounded-xl text-center animate-pulse-ring">
            📞 Appeler
          </a>
          <Link href="/depannage" className="flex-1 bg-gray-900 text-white font-bold py-3 rounded-xl text-center">
            🚨 Dépannage
          </Link>
        </div>
      </body>
    </html>
  )
}
