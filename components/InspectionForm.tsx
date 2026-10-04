'use client'
import { useState } from 'react'

export default function InspectionForm() {
  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    marque_modele: '',
    lien_annonce: '',
    prix_affiche: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const isValid = form.nom && form.telephone && form.marque_modele && form.lien_annonce

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    const lines = [
      `Bonjour RM Automotive 👋 Demande de tarif inspection véhicule`,
      ``,
      `👤 Nom : ${form.nom}`,
      `📞 Téléphone : ${form.telephone}`,
      ``,
      `🚗 Véhicule : ${form.marque_modele}`,
      `🔗 Lien de l'annonce : ${form.lien_annonce}`,
      form.prix_affiche ? `💰 Prix affiché : ${form.prix_affiche}` : '',
      ``,
      `Merci de me communiquer un tarif pour l'inspection.`,
    ].filter(Boolean)
    const msg = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/33650500175?text=${msg}`, '_blank')
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200 p-8 border border-gray-100">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-3">
          💬 Demande de tarif via WhatsApp
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-1">Demande de tarif inspection</h3>
        <p className="text-gray-500 text-sm">Vous avez trouvé un véhicule sur Leboncoin, La Centrale ou ailleurs ? Envoyez-nous le lien, on vous dit le prix de l&apos;inspection.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">👤 Nom *</label>
            <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Votre nom"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-gray-50" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">📞 Téléphone *</label>
            <input name="telephone" value={form.telephone} onChange={handleChange} required type="tel" placeholder="06 XX XX XX XX"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-gray-50" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">🚗 Marque / Modèle du véhicule *</label>
          <input name="marque_modele" value={form.marque_modele} onChange={handleChange} required placeholder="Ex: Peugeot 3008, BMW Série 3..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-gray-50" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">🔗 Lien de l&apos;annonce (Leboncoin, La Centrale...) *</label>
          <input name="lien_annonce" value={form.lien_annonce} onChange={handleChange} required type="url" placeholder="https://www.leboncoin.fr/..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-gray-50" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">💰 Prix affiché (optionnel)</label>
          <input name="prix_affiche" value={form.prix_affiche} onChange={handleChange} placeholder="Ex: 12 500€"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-gray-50" />
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-black py-4 rounded-2xl text-base transition-all hover:shadow-xl hover:shadow-green-200 flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Envoyer sur WhatsApp
        </button>

        <p className="text-center text-xs text-gray-400 mt-2">
          Ou appelez directement —{' '}
          <a href="tel:0650500175" className="text-red-600 font-bold hover:underline">06 50 50 01 75</a>
        </p>
      </form>
    </div>
  )
}
