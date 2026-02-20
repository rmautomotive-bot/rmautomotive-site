import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — RM Automotive Mitry-Mory (77)',
  description: 'Contactez RM Automotive à Mitry-Mory. 70 Av. Franklin Roosevelt, 77290. Appelez le 06 50 50 01 75 ou écrivez-nous. Dépannage 24h/24.',
}

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gray-950 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-300">Urgence, devis ou rendez-vous — on répond vite.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Formulaire */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Envoyer un message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nom *</label>
                  <input type="text" placeholder="Votre nom" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Téléphone *</label>
                  <input type="tel" placeholder="06 XX XX XX XX" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                <input type="email" placeholder="votre@email.fr" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Service *</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50 focus:bg-white transition-all">
                  <option value="">Sélectionner...</option>
                  <option value="depannage">🚨 Dépannage urgence</option>
                  <option value="inspection">🔍 Inspection automobile</option>
                  <option value="entretien">🔧 Entretien / Réparation</option>
                  <option value="vente">🚗 Achat / Vente véhicule</option>
                  <option value="devis">💬 Demande de devis</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message *</label>
                <textarea rows={5} placeholder="Décrivez votre besoin, votre véhicule (marque, modèle, année, km)..." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none" required />
              </div>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all text-lg hover:shadow-lg hover:shadow-red-200">
                Envoyer le message →
              </button>
              <p className="text-xs text-gray-400 text-center">
                ⚡ Pour une urgence, appelez directement le <a href="tel:0650500175" className="text-red-600 font-bold">06 50 50 01 75</a>
              </p>
            </form>
          </div>

          {/* Infos */}
          <div className="lg:col-span-2 space-y-6">
            {/* Urgence */}
            <div className="bg-red-600 text-white rounded-3xl p-7">
              <div className="text-4xl mb-3">🚨</div>
              <h3 className="font-black text-xl mb-1">Urgence Dépannage</h3>
              <p className="text-red-100 text-sm mb-4">24h/24 — 7j/7 — Jours fériés inclus</p>
              <a href="tel:0650500175" className="block bg-white text-red-600 font-black text-2xl text-center py-3 rounded-2xl hover:bg-red-50 transition-colors">
                06 50 50 01 75
              </a>
            </div>

            {/* Coordonnées */}
            <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm space-y-5">
              <h3 className="font-black text-gray-900 text-lg">Coordonnées</h3>
              {[
                { icon: '📍', label: 'Adresse', val: '70 Av. Franklin Roosevelt\n77290 Mitry-Mory' },
                { icon: '📞', label: 'Téléphone', val: '06 50 50 01 75', href: 'tel:0650500175' },
                { icon: '✉️', label: 'Email', val: 'contact@rmautomotive.fr', href: 'mailto:contact@rmautomotive.fr' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="font-bold text-gray-900 hover:text-red-600 transition-colors">{c.val}</a>
                    ) : (
                      <div className="font-bold text-gray-900 whitespace-pre-line">{c.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
              <h3 className="font-black text-gray-900 text-lg mb-5">🕐 Horaires</h3>
              <div className="space-y-3 text-sm">
                {[
                  { j: 'Lundi – Vendredi', h: '9h00 – 19h00' },
                  { j: 'Samedi', h: '10h00 – 18h00' },
                  { j: 'Dimanche', h: 'Dépannage uniquement' },
                ].map((h) => (
                  <div key={h.j} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{h.j}</span>
                    <span className="font-bold text-gray-900">{h.h}</span>
                  </div>
                ))}
                <div className="flex justify-between py-2 mt-1">
                  <span className="text-red-600 font-bold">Dépannage urgence</span>
                  <span className="font-black text-red-600">24h/24 7j/7</span>
                </div>
              </div>
            </div>

            {/* Réseaux */}
            <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
              <h3 className="font-black text-gray-900 text-lg mb-4">Suivez-nous</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/rmautomotive77/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl text-center text-sm hover:opacity-90 transition-opacity">
                  📸 Instagram
                </a>
                <a href="https://www.tiktok.com/@rmautomotive77" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-900 text-white font-bold py-3 rounded-xl text-center text-sm hover:bg-gray-800 transition-colors">
                  🎵 TikTok
                </a>
              </div>
              <p className="text-xs text-gray-400 text-center mt-3">@rmautomotive77 · 1 800+ abonnés</p>
            </div>
          </div>

        </div>
      </section>

      {/* Map */}
      <div className="h-80 border-t border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9!2d2.6098!3d48.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e617bcc8f95df1%3A0x282e3221fcb2f1!2sRM%20Automotive!5e0!3m2!1sfr!2sfr!4v1708452000000!5m2!1sfr!2sfr"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="h-16 md:hidden" />
    </>
  )
}
