import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | RM Automotive — Paris Île-de-France',
  description:
    'Contactez RM Automotive pour un devis, un rendez-vous ou une urgence. Appelez le 06 12 34 56 78 ou écrivez à contact@rmautomotive.fr. 12 Rue de la Mécanique, 75019 Paris.',
  openGraph: {
    title: 'Contact — RM Automotive',
    description: 'Contactez-nous pour un dépannage, une inspection ou un entretien. Disponible 24h/24.',
    url: 'https://rmautomotive.fr/contact',
  },
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contactez-nous</h1>
          <p className="text-xl text-blue-100 max-w-xl mx-auto">
            Urgence, devis ou rendez-vous — nous répondons rapidement.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Formulaire */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Envoyer un message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Nom *</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Téléphone *</label>
                  <input
                    type="tel"
                    placeholder="06 XX XX XX XX"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.fr"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Type de service *</label>
                <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                  <option value="">-- Sélectionner --</option>
                  <option value="depannage">🚨 Dépannage urgence</option>
                  <option value="inspection">🔍 Inspection automobile</option>
                  <option value="entretien">🔧 Entretien / Réparation</option>
                  <option value="vente">🚗 Vente / Achat véhicule</option>
                  <option value="devis">💬 Demande de devis</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre besoin, votre véhicule (marque, modèle, année)..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 rounded-xl transition-colors text-lg"
              >
                Envoyer le message
              </button>
              <p className="text-xs text-gray-400 text-center">
                Pour une urgence, appelez directement le 06 12 34 56 78 — réponse en quelques minutes.
              </p>
            </form>
          </div>

          {/* Coordonnées */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Nos coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-orange-50 border border-orange-200 rounded-2xl p-5">
                  <span className="text-3xl">🚨</span>
                  <div>
                    <p className="font-bold text-orange-700">Urgence Dépannage — 24h/24</p>
                    <a href="tel:0612345678" className="text-2xl font-extrabold text-orange-600 hover:text-orange-700">
                      06 12 34 56 78
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-gray-700">Téléphone</p>
                    <a href="tel:0612345678" className="text-blue-700 font-bold text-lg hover:underline">06 12 34 56 78</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-gray-700">Email</p>
                    <a href="mailto:contact@rmautomotive.fr" className="text-blue-700 hover:underline">contact@rmautomotive.fr</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-700">Adresse</p>
                    <p className="text-gray-600">12 Rue de la Mécanique<br />75019 Paris</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-blue-900 text-xl mb-4">🕐 Horaires</h3>
              <div className="space-y-2 text-sm">
                {[
                  { j: 'Lundi — Vendredi', h: '8h00 – 20h00' },
                  { j: 'Samedi', h: '8h00 – 18h00' },
                  { j: 'Dimanche', h: 'Dépannage uniquement' },
                ].map((h) => (
                  <div key={h.j} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                    <span className="text-gray-600">{h.j}</span>
                    <span className="font-semibold text-blue-800">{h.h}</span>
                  </div>
                ))}
                <div className="flex justify-between py-2 mt-2">
                  <span className="text-orange-700 font-semibold">🚨 Dépannage urgence</span>
                  <span className="font-bold text-orange-600">24h/24 — 7j/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
