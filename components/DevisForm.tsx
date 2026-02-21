'use client'
import { useState } from 'react'

type CheckItem = { label: string; name: string }

const etatOptions: CheckItem[] = [
  { label: 'Véhicule roulant', name: 'roulant' },
  { label: 'Véhicule non roulant', name: 'non_roulant' },
  { label: 'Sur ses roues (4 roues au sol)', name: 'sur_roues' },
  { label: 'Boîte de vitesse bloquée', name: 'boite_bloquee' },
  { label: 'Frein à main bloqué', name: 'frein_main_bloque' },
  { label: 'Direction bloquée', name: 'direction_bloquee' },
  { label: 'Batterie à plat / ne démarre pas', name: 'batterie_plat' },
  { label: 'Clés disponibles', name: 'cles_disponibles' },
  { label: 'Véhicule accidenté', name: 'accidente' },
  { label: 'Pneu(s) crevé(s)', name: 'pneu_creve' },
]

export default function DevisForm() {
  const [form, setForm] = useState({
    nom: '', telephone: '', email: '',
    marque_modele: '', immatriculation: '',
    adresse_depart: '', adresse_arrivee: '',
    commentaire: '',
  })
  const [checks, setChecks] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleCheck = (name: string) => {
    setChecks(prev => ({ ...prev, [name]: !prev[name] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const etatChecked = etatOptions
      .filter(o => checks[o.name])
      .map(o => `✅ ${o.label}`)
      .join('\n')

    const body = {
      ...form,
      etat_vehicule: etatChecked || 'Non précisé',
      _subject: `[Devis RM Automotive] ${form.marque_modele || 'Véhicule'} — ${form.nom}`,
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
        <p className="text-gray-600 mb-6">On revient vers vous rapidement pour vous communiquer le tarif.</p>
        <a href="tel:0650500175" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-xl text-sm">
          📞 Besoin urgent ? 06 50 50 01 75
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-7 md:p-9 space-y-7">
      <div>
        <h3 className="text-2xl font-black text-gray-900 mb-1">Demande de devis</h3>
        <p className="text-gray-500 text-sm">Remplissez ce formulaire pour recevoir un tarif précis par retour.</p>
      </div>

      {/* CONTACT */}
      <fieldset className="space-y-4">
        <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">👤 Vos coordonnées</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Nom / Prénom *</label>
            <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Mohamed Dupont"
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

      {/* VÉHICULE */}
      <fieldset className="space-y-4">
        <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">🚗 Véhicule</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Marque / Modèle *</label>
            <input name="marque_modele" value={form.marque_modele} onChange={handleChange} required placeholder="Ex: Renault Master, BMW X5..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Immatriculation</label>
            <input name="immatriculation" value={form.immatriculation} onChange={handleChange} placeholder="AA-123-BB"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
          </div>
        </div>
      </fieldset>

      {/* TRAJET */}
      <fieldset className="space-y-4">
        <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">📍 Trajet</legend>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Adresse de départ (position actuelle du véhicule) *</label>
          <input name="adresse_depart" value={form.adresse_depart} onChange={handleChange} required
            placeholder="Ex: 12 Rue Victor Hugo, 75011 Paris / Aire de repos A1 km 42..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Adresse d&apos;arrivée (destination souhaitée) *</label>
          <input name="adresse_arrivee" value={form.adresse_arrivee} onChange={handleChange} required
            placeholder="Ex: Garage, concessionnaire, domicile..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
        </div>
      </fieldset>

      {/* ÉTAT DU VÉHICULE — CHECKLIST */}
      <fieldset>
        <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4 block">🔧 État du véhicule — cochez tout ce qui s&apos;applique</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {etatOptions.map(opt => (
            <label
              key={opt.name}
              className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all select-none ${
                checks[opt.name]
                  ? 'border-red-500 bg-red-50 text-red-700'
                  : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                checks[opt.name] ? 'border-red-500 bg-red-500' : 'border-gray-300'
              }`}>
                {checks[opt.name] && <span className="text-white text-xs font-black">✓</span>}
              </div>
              <input
                type="checkbox"
                name={opt.name}
                checked={!!checks[opt.name]}
                onChange={() => toggleCheck(opt.name)}
                className="sr-only"
              />
              <span className="text-sm font-medium leading-tight">{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* COMMENTAIRE */}
      <fieldset>
        <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">💬 Informations complémentaires</legend>
        <textarea
          name="commentaire"
          value={form.commentaire}
          onChange={handleChange}
          rows={3}
          placeholder="Décrivez le problème, les circonstances, ou toute info utile pour le devis..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 resize-none"
        />
      </fieldset>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl text-base transition-all hover:shadow-xl hover:shadow-red-200 flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>📩 Envoyer la demande de devis</>
        )}
      </button>

      {status === 'error' && (
        <p className="text-red-600 text-sm text-center bg-red-50 rounded-xl p-3">
          Erreur lors de l&apos;envoi. Appelez-nous directement au{' '}
          <a href="tel:0650500175" className="font-bold underline">06 50 50 01 75</a>
        </p>
      )}

      <p className="text-center text-xs text-gray-400">
        Besoin urgent ? Appelez le{' '}
        <a href="tel:0650500175" className="text-red-600 font-bold hover:underline">06 50 50 01 75</a>{' '}
        disponible 24h/24
      </p>
    </form>
  )
}
