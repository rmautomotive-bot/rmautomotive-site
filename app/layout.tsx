import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://rmautomotive.fr'),
  title: {
    default: 'RM Automotive | Dépannage Auto 24h/24 — Île-de-France ⭐ 5/5 Google',
    template: '%s | RM Automotive — Île-de-France',
  },
  description:
    'RM Automotive — Dépannage automobile 24h/24 7j/7 partout en Île-de-France (75, 77, 78, 91, 92, 93, 94, 95). Inspection, entretien, vente. ⭐ 5/5 sur Google. ☎ 06 50 50 01 75.',
  keywords: [
    'dépannage automobile île-de-france',
    'dépannage voiture 24h Paris',
    'assistance dépannage 77 78 91 92 93 94 95',
    'garage dépannage Seine-et-Marne',
    'inspection voiture île-de-france',
    'dépannage 24h7j',
    'RM Automotive',
    'rmautomotive77',
    'dépannage Mitry-Mory',
    'remorquage île-de-france',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://rmautomotive.fr',
    siteName: 'RM Automotive',
    title: 'RM Automotive | Dépannage 24h/24 — Toute l\'Île-de-France ⭐ 5/5',
    description: 'Dépannage automobile 24h/24 partout en Île-de-France. 42 avis 5 étoiles Google. ☎ 06 50 50 01 75.',
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
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '42' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '70 Avenue Franklin Roosevelt',
    addressLocality: 'Mitry-Mory',
    postalCode: '77290',
    addressCountry: 'FR',
  },
  areaServed: [
    { '@type': 'State', name: 'Île-de-France' },
    { '@type': 'AdministrativeArea', name: 'Paris (75)' },
    { '@type': 'AdministrativeArea', name: 'Seine-et-Marne (77)' },
    { '@type': 'AdministrativeArea', name: 'Yvelines (78)' },
    { '@type': 'AdministrativeArea', name: 'Essonne (91)' },
    { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine (92)' },
    { '@type': 'AdministrativeArea', name: 'Seine-Saint-Denis (93)' },
    { '@type': 'AdministrativeArea', name: 'Val-de-Marne (94)' },
    { '@type': 'AdministrativeArea', name: 'Val-d\'Oise (95)' },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '18:00' },
  ],
  sameAs: ['https://www.instagram.com/rmautomotive77/', 'https://www.tiktok.com/@rmautomotive77'],
}

const zones = ['Paris', 'Val-de-Marne', 'Seine-Saint-Denis', 'Hauts-de-Seine', 'Essonne', 'Yvelines', 'Val-d\'Oise', 'Seine-et-Marne']

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>

        {/* Top bar urgence */}
        <div className="bg-red-600 text-white text-xs py-2 px-4 text-center font-medium">
          🚨 Dépannage 24h/24 — 7j/7 — <strong>Toute l&apos;Île-de-France</strong> &nbsp;|&nbsp;
          <a href="tel:0650500175" className="font-black underline underline-offset-2 text-sm">06 50 50 01 75</a>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="RM Automotive" width={44} height={44} className="rounded-lg object-contain bg-white" priority />
              <div>
                <div className="font-black text-gray-900 text-base leading-tight">RM Automotive</div>
                <div className="text-xs text-gray-500 leading-tight">Île-de-France · ⭐ 5/5 Google · 24h/24</div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-5">
              {[['/', 'Accueil'], ['/services', 'Services'], ['/zones', '📍 Zones'], ['/depannage', '🚨 Dépannage'], ['/contact', 'Contact']].map(([href, label]) => (
                <Link key={href} href={href} className={`text-sm font-medium transition-colors ${label.includes('🚨') ? 'text-red-600 font-bold hover:text-red-700' : 'text-gray-700 hover:text-red-600'}`}>
                  {label}
                </Link>
              ))}
              <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-red-200 flex items-center gap-2">
                📞 06 50 50 01 75
              </a>
            </nav>
            <a href="tel:0650500175" className="md:hidden bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full animate-pulse-ring">
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
                <Image src="/logo.jpg" alt="RM Automotive" width={44} height={44} className="rounded-lg object-contain bg-white" />
                <span className="font-black text-white text-lg">RM Automotive</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Dépannage, inspection, entretien et vente de véhicules en <strong className="text-white">Île-de-France</strong>. 
                Intervention 24h/24 dans les 8 départements. ⭐ 5/5 — 42 avis Google.
              </p>
              <div className="flex gap-3 mb-6">
                <a href="https://www.instagram.com/rmautomotive77/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 text-white w-9 h-9 rounded-lg flex items-center justify-center transition-all text-sm">📸</a>
                <a href="https://www.tiktok.com/@rmautomotive77" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white w-9 h-9 rounded-lg flex items-center justify-center transition-colors text-sm">🎵</a>
              </div>
              <div className="text-xs text-gray-600">
                <p className="font-semibold text-gray-500 mb-2">Zones couvertes :</p>
                <div className="flex flex-wrap gap-1">
                  {zones.map(z => <span key={z} className="bg-gray-800 px-2 py-0.5 rounded text-gray-400">{z}</span>)}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-2 text-sm">
                {[['/', 'Accueil'], ['/services', 'Services'], ['/zones', 'Zones d\'intervention'], ['/depannage', '🚨 Dépannage 24h/24'], ['/contact', 'Contact']].map(([href, label]) => (
                  <li key={href}><Link href={href} className="hover:text-red-400 transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="tel:0650500175" className="hover:text-red-400 transition-colors flex items-center gap-2"><span>📞</span><strong className="text-white">06 50 50 01 75</strong></a></li>
                <li><a href="mailto:contact@rmautomotive.fr" className="hover:text-red-400 transition-colors flex items-center gap-2"><span>✉️</span> contact@rmautomotive.fr</a></li>
                <li className="flex items-start gap-2"><span>📍</span><span>70 Av. Franklin Roosevelt<br />77290 Mitry-Mory</span></li>
                <li className="text-red-400 font-semibold flex items-center gap-2"><span>🚨</span> Dépannage 24h/24 7j/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 text-center py-5 text-xs text-gray-600">
            © {new Date().getFullYear()} RM Automotive — Île-de-France · SIREN 948 698 634 · Tous droits réservés
          </div>
        </footer>

        {/* Floating bar mobile */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 p-3 flex gap-3 shadow-2xl">
          <a href="tel:0650500175" className="flex-1 bg-red-600 text-white font-bold py-3 rounded-xl text-center text-sm">
            📞 06 50 50 01 75
          </a>
          <Link href="/depannage" className="flex-1 bg-gray-900 text-white font-bold py-3 rounded-xl text-center text-sm">
            🚨 Urgence
          </Link>
        </div>
      </body>
    </html>
  )
}
