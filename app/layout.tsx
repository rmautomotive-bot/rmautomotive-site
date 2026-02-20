import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://rmautomotive.fr'),
  title: {
    default: 'RM Automotive | Dépannage & Services Automobiles 24h/24',
    template: '%s | RMautomotive.fr',
  },
  description:
    'RMautomotive.fr — Expert automobile en Île-de-France : dépannage 24h/24 7j/7, inspection, entretien et vente de véhicules. Intervention rapide sur route.',
  keywords: [
    'dépannage automobile',
    'assistance dépannage voiture',
    'dépannage 24h',
    'inspection automobile',
    'entretien voiture',
    'RMautomotive',
    'garage Paris',
  ],
  authors: [{ name: 'RM Automotive' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://rmautomotive.fr',
    siteName: 'RM Automotive',
    title: 'RM Automotive | Dépannage & Services Automobiles 24h/24',
    description:
      'Expert automobile en Île-de-France : dépannage 24h/24 7j/7, inspection, entretien et vente de véhicules.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RM Automotive | Dépannage 24h/24',
    description: 'Dépannage automobile 24h/24 en Île-de-France. Intervention rapide.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'RM Automotive',
  url: 'https://rmautomotive.fr',
  telephone: '+33612345678',
  email: 'contact@rmautomotive.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Rue de la Mécanique',
    addressLocality: 'Paris',
    postalCode: '75019',
    addressCountry: 'FR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  priceRange: '€€',
  description: 'Expert automobile : dépannage 24h/24, inspection, entretien et vente de véhicules.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-800 text-white font-bold text-xl px-3 py-1 rounded">RM</div>
              <span className="font-bold text-blue-800 text-lg hidden sm:block">Automotive</span>
            </Link>
            <nav className="flex items-center gap-1 sm:gap-4">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-800 px-2 py-1">
                Accueil
              </Link>
              <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-blue-800 px-2 py-1">
                Services
              </Link>
              <Link href="/depannage" className="text-sm font-medium text-orange-600 hover:text-orange-700 font-semibold px-2 py-1">
                🚨 Dépannage
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-800 px-2 py-1">
                Contact
              </Link>
              <a
                href="tel:0612345678"
                className="hidden sm:flex bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors"
              >
                📞 06 12 34 56 78
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="pt-16">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-blue-700 text-white font-bold text-xl px-3 py-1 rounded">RM</div>
                <span className="font-bold text-white text-lg">Automotive</span>
              </div>
              <p className="text-sm text-gray-400">
                Votre expert automobile de confiance en Île-de-France. Disponible 24h/24 pour le dépannage.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white">Accueil</Link></li>
                <li><Link href="/services" className="hover:text-white">Nos services</Link></li>
                <li><Link href="/depannage" className="hover:text-orange-400">🚨 Dépannage 24h/24</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>📞 <a href="tel:0612345678" className="hover:text-white">06 12 34 56 78</a></li>
                <li>✉️ <a href="mailto:contact@rmautomotive.fr" className="hover:text-white">contact@rmautomotive.fr</a></li>
                <li>📍 12 Rue de la Mécanique, 75019 Paris</li>
                <li>🕐 Lun–Sam : 8h–20h</li>
                <li className="text-orange-400 font-semibold">🚨 Dépannage : 24h/24 7j/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
            © {new Date().getFullYear()} RM Automotive — Tous droits réservés |{' '}
            <Link href="/contact" className="hover:text-gray-300">Mentions légales</Link>
          </div>
        </footer>

        {/* Floating call button (mobile) */}
        <a
          href="tel:0612345678"
          className="fixed bottom-6 right-6 z-50 bg-orange-600 hover:bg-orange-700 text-white rounded-full p-4 shadow-2xl transition-transform hover:scale-110 flex items-center gap-2 sm:hidden"
          aria-label="Appeler RM Automotive"
        >
          <span className="text-xl">📞</span>
        </a>
      </body>
    </html>
  )
}
