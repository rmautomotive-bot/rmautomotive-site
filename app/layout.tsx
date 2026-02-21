import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import NavExplorer from '@/components/NavExplorer'

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

const zones = ['Paris', 'Val-de-Marne', 'Seine-Saint-Denis', 'Hauts-de-Seine', 'Essonne', 'Yvelines', 'Val-d\'Oise', 'Seine-et-Marne', 'Oise (60)']

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>

        {/* Top bar urgence */}
        <div className="bg-gray-950 text-white text-xs py-2 px-4 text-center font-medium flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse inline-block" />
            Dépannage 24h/24 — 7j/7 — <strong>Île-de-France & Oise</strong>
          </span>
          <span className="hidden sm:inline text-gray-700">|</span>
          <span className="text-gray-400">Partenaire agréé concessionnaires &amp; assurances</span>
          <span className="hidden sm:inline text-gray-700">|</span>
          <a href="tel:0650500175" className="font-black text-red-400 underline underline-offset-2 text-sm">06 50 50 01 75</a>
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
              {[['/', 'Accueil'], ['/vente', 'Vente'], ['/expertise', 'Expertise'], ['/depannage', '🚨 Dépannage'], ['/contact', 'Contact']].map(([href, label]) => (
                <Link key={href} href={href} className={`text-sm font-medium transition-colors ${label.includes('Dépannage') ? 'text-red-600 font-bold hover:text-red-700' : 'text-gray-700 hover:text-red-600'}`}>
                  {label}
                </Link>
              ))}
              <NavExplorer />
              <a href="tel:0650500175" className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-red-200">
                06 50 50 01 75
              </a>
            </nav>
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
                <Image src="/logo.jpg" alt="RM Automotive" width={44} height={44} className="rounded-lg object-contain bg-white" />
                <span className="font-black text-white text-lg">RM Automotive</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Garage multi-services en <strong className="text-white">Île-de-France &amp; Oise</strong> — dépannage 24h/24, vente de véhicules, inspection et expertise. Partenaire agréé concessionnaires &amp; assurances. 5/5 · 42 avis Google.
              </p>
              <div className="flex gap-3 mb-6">
                <a href="https://www.instagram.com/rmautomotive77/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white w-9 h-9 rounded-lg flex items-center justify-center transition-all text-sm font-bold">IG</a>
                <a href="https://www.tiktok.com/@rmautomotive77" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white w-9 h-9 rounded-lg flex items-center justify-center transition-colors text-sm font-bold">TK</a>
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
                {[['/', 'Accueil'], ['/vente', 'Vente / Occasion'], ['/expertise', 'Expertise'], ['/missions', 'Galerie Missions'], ['/blog', 'Blog & Conseils'], ['/zones', 'Zones d\'intervention'], ['/depannage', '🚨 Dépannage 24h/24'], ['/contact', 'Contact']].map(([href, label]) => (
                  <li key={href}><Link href={href} className="hover:text-red-400 transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="tel:0650500175" className="hover:text-red-400 transition-colors"><strong className="text-white">06 50 50 01 75</strong></a></li>
                <li><a href="mailto:contact@rmautomotive.fr" className="hover:text-red-400 transition-colors">contact@rmautomotive.fr</a></li>
                <li className="text-gray-500">70 Av. Franklin Roosevelt<br />77290 Mitry-Mory</li>
                <li className="text-red-400 font-semibold">Dépannage 24h/24 — 7j/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 text-center py-5 text-xs text-gray-600">
            © {new Date().getFullYear()} RM Automotive — Île-de-France · SIREN 948 698 634 · Tous droits réservés
          </div>
        </footer>

        {/* WhatsApp floating button — desktop */}
        <a
          href="https://wa.me/33650500175?text=Bonjour%20RM%20Automotive%2C%20j%27ai%20besoin%20d%27aide%20pour%20mon%20v%C3%A9hicule."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-green-500/40 transition-all hover:scale-105 hover:shadow-green-500/60 group"
          aria-label="Contacter RM Automotive sur WhatsApp"
        >
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-sm">WhatsApp</span>
        </a>

        {/* Floating bar mobile */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 p-3 flex gap-2 shadow-2xl">
          <a href="tel:0650500175" className="flex-1 bg-red-600 text-white font-bold py-3 rounded-xl text-center text-sm">
            06 50 50 01 75
          </a>
          <a
            href="https://wa.me/33650500175?text=Bonjour%20RM%20Automotive%2C%20j%27ai%20besoin%20d%27aide%20pour%20mon%20v%C3%A9hicule."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 text-white font-bold py-3 rounded-xl text-center text-sm"
          >
            💬 WhatsApp
          </a>
          <Link href="/depannage" className="bg-gray-900 text-white font-bold py-3 px-4 rounded-xl text-center text-sm">
            🚨
          </Link>
        </div>
      </body>
    </html>
  )
}
