'use client'
import { useState } from 'react'
import { BRANDS, MODELS_BY_BRAND, YEARS } from '@/lib/vehicleData'

const prestations = [
  'Vidange + filtres',
  'Freins (disques / plaquettes)',
  'Courroie / chaîne de distribution',
  'Climatisation',
  'Pneumatiques',
  'Batterie',
  'Révision complète',
  'Diagnostic panne / voyant allumé',
  'Autre / je ne sais pas',
]

export default function EntretienForm() {
  const [form, setForm] = useState({
    nom: '', telephone: '', email: '',
    marque: '', modele: '', annee: '',
    prestation: '',
    date_souhaitee: '',
    message: '',
  })
  const [marqueMode, setMarqueMode] = useState<'select' | 'custom'>('select')
  const [modeleMode, setModeleMode] = useState<'select' | 'custom'>('select')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleMarqueSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    if (val === '__autre__') {
      setMarqueMode('custom')
      setModeleMode('custom')
      setForm(prev => ({ ...prev, marque: '', modele: '' }))
    } else {
      setMarqueMode('select')
      setModeleMode('select')
      setForm(prev => ({ ...prev, marque: val, modele: '' }))
    }
  }

  const handleModeleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    if (val === '__autre__') {
      setModeleMode('custom')
      setForm(prev => ({ ...prev, modele: '' }))
    } else {
      setForm(prev => ({ ...prev, modele: val }))
    }
  }

  const modelsForBrand = MODELS_BY_BRAND[form.marque] || []

  const isValid = form.nom && form.telephone && form.marque && form.modele && form.prestation

  const buildMessage = () => {
    const lines = [
      `Bonjour RM Automotive 👋 Demande d'entretien / réparation`,
      ``,
      `🚗 Véhicule : ${form.marque} ${form.modele}${form.annee ? ' (' + form.annee + ')' : ''}`,
      `🔧 Prestation souhaitée : ${form.prestation}`,
      form.date_souhaitee ? `📅 Date souhaitée : ${form.date_souhaitee}` : '',
      ``,
      `👤 Nom : ${form.nom}`,
      `📞 Téléphone : ${form.telephone}`,
      form.email ? `✉️ Email : ${form.email}` : '',
      ``,
      form.message ? `💬 Précisions : ${form.message}` : '',
      ``,
      `Merci de me communiquer un tarif et une disponibilité.`,
    ].filter(Boolean)
    return lines.join('\n')
  }

  const handleWhatsApp = () => {
    if (!isValid) return
    window.open(`https://wa.me/33650500175?text=${encodeURIComponent(buildMessage())}`, '_blank')
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    setStatus('sending')
    const body = {
      ...form,
      _subject: `[Entretien RM Automotive] ${form.marque} ${form.modele} — ${form.nom}`,
      _template: 'table',
      _captcha: 'false',
    }
    try {
      const res = await fetch('https://formsubmit.co/ajax/contact@rmautomotive.fr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-black text-gray-900 mb-2">Demande envoyée !</h3>
        <p className="text-gray-600 mb-6">On revient vers vous rapidement pour vous proposer un rendez-vous et un tarif.</p>
        <a href="tel:0650500175" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-xl text-sm">
          📞 Besoin urgent ? 06 50 50 01 75
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleEmailSubmit} className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-7 md:p-9 space-y-7">
      <div>
        <h3 className="text-2xl font-black text-gray-900 mb-1">Demande d&apos;entretien ou de réparation</h3>
        <p className="text-gray-500 text-sm">Dites-nous ce dont votre véhicule a besoin, on vous recontacte avec un tarif et un créneau.</p>
      </div>

      {/* VÉHICULE */}
      <fieldset className="space-y-4">
        <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">🚗 Votre véhicule</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Marque *</label>
            {marqueMode === 'select' ? (
              <select value={form.marque} onChange={handleMarqueSelect} required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">
                <option value="">-- Sélectionner --</option>
                {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
                <option value="__autre__">Autre marque…</option>
              </select>
            ) : (
              <div className="flex gap-2">
                <input name="marque" value={form.marque} onChange={handleChange} required placeholder="Ex: Peugeot" autoFocus
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
                <button type="button" onClick={() => { setMarqueMode('select'); setModeleMode('select'); setForm(prev => ({ ...prev, marque: '', modele: '' })) }}
                  className="text-xs font-semibold text-gray-500 hover:text-red-600 whitespace-nowrap px-2">↩ liste</button>
              </div>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Modèle *</label>
            {modeleMode === 'select' && modelsForBrand.length > 0 ? (
              <select value={form.modele} onChange={handleModeleSelect} required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">
                <option value="">-- Sélectionner --</option>
                {modelsForBrand.map(m => <option key={m} value={m}>{m}</option>)}
                <option value="__autre__">Autre modèle…</option>
              </select>
            ) : (
              <input name="modele" value={form.modele} onChange={handleChange} required placeholder="Ex: 308"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
            )}
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Année</label>
          <select name="annee" value={form.annee} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">
            <option value="">-- Sélectionner --</option>
            {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
      </fieldset>

      {/* PRESTATION */}
      <fieldset className="space-y-4">
        <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">🔧 Prestation souhaitée</legend>
        <div>
          <select name="prestation" value={form.prestation} onChange={handleChange} required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">
            <option value="">-- Sélectionner --</option>
            {prestations.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Date souhaitée (optionnel)</label>
          <input name="date_souhaitee" value={form.date_souhaitee} onChange={handleChange} type="date"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Précisions (symptômes, bruit, voyant...)</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={3}
            placeholder="Ex: voyant moteur allumé depuis 2 jours, bruit au freinage..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 resize-none" />
        </div>
      </fieldset>

      {/* CONTACT */}
      <fieldset className="space-y-4">
        <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">👤 Vos coordonnées</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Nom *</label>
            <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Votre nom"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Téléphone *</label>
            <input name="telephone" value={form.telephone} onChange={handleChange} required type="tel" placeholder="06 XX XX XX XX"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email (optionnel)</label>
          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="votre@email.fr"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
        </div>
      </fieldset>

      {!isValid && (
        <p className="text-xs text-gray-400 text-center">* Marque, modèle, prestation, nom et téléphone sont requis avant l&apos;envoi.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={handleWhatsApp}
          disabled={!isValid}
          className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl text-base transition-all hover:shadow-xl hover:shadow-green-200 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Envoyer sur WhatsApp
        </button>
        <button
          type="submit"
          disabled={status === 'sending' || !isValid}
          className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl text-base transition-all hover:shadow-xl flex items-center justify-center gap-2"
        >
          {status === 'sending' ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Envoi...
            </>
          ) : (
            <>📩 Envoyer un message simple</>
          )}
        </button>
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm text-center bg-red-50 rounded-xl p-3">
          Erreur lors de l&apos;envoi. Appelez-nous directement au{' '}
          <a href="tel:0650500175" className="font-bold underline">06 50 50 01 75</a>
        </p>
      )}

      <p className="text-center text-xs text-gray-400">
        Besoin urgent ? Appelez le{' '}
        <a href="tel:0650500175" className="text-red-600 font-bold hover:underline">06 50 50 01 75</a>
      </p>
    </form>
  )
}
