'use client'
import { useState } from 'react'

type CheckItem = { label: string; name: string }

const etatOptions: CheckItem[] = [
  { label: 'Véhicule roulant (4 roues au sol, aucun blocage)', name: 'roulant' },
  { label: 'Véhicule non roulant', name: 'non_roulant' },
  { label: 'Boîte de vitesse bloquée', name: 'boite_bloquee' },
  { label: 'Frein à main bloqué', name: 'frein_main_bloque' },
  { label: 'Direction bloquée', name: 'direction_bloquee' },
  { label: 'Roue(s) bloquée(s) / train roulant endommagé', name: 'roue_bloquee' },
  { label: 'Batterie à plat / ne démarre pas', name: 'batterie_plat' },
  { label: 'Panne de carburant / mauvais carburant', name: 'panne_carburant' },
  { label: 'Perte de clé / clé non disponible', name: 'perte_cle' },
  { label: 'Clés disponibles', name: 'cles_disponibles' },
  { label: 'Véhicule accidenté', name: 'accidente' },
  { label: 'Véhicule calciné / incendié', name: 'calcine' },
  { label: 'Pneu(s) crevé(s)', name: 'pneu_creve' },
]

const boiteOptions = ['Automatique', 'Manuelle']
const motorisationOptions = ['Essence', 'Diesel', 'Électrique', 'Hybride']

export default function DevisForm() {
  const [form, setForm] = useState({
    nom: '', telephone: '', email: '',
    marque_modele: '', boite: '', motorisation: '', immatriculation: '',
    adresse_depart: '', adresse_arrivee: '',
    assure: '',
    commentaire: '',
  })
  const [checks, setChecks] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleCheck = (name: string) => {
    setChecks(prev => ({ ...prev, [name]: !prev[name] }))
  }

  const etatChecked = () =>
    etatOptions.filter(o => checks[o.name]).map(o => `✅ ${o.label}`).join('\n')

  const isValid = form.nom && form.telephone && form.marque_modele && form.adresse_depart && form.adresse_arrivee

  const buildWhatsAppMessage = () => {
    const lines = [
      `Bonjour RM Automotive 👋 Demande de devis dépannage`,
      ``,
      `👤 Nom : ${form.nom}`,
      `📞 Téléphone : ${form.telephone}`,
      form.email ? `✉️ Email : ${form.email}` : '',
      ``,
      `🚗 Véhicule : ${form.marque_modele}`,
      form.boite ? `⚙️ Boîte de vitesse : ${form.boite}` : '',
      form.motorisation ? `⛽ Motorisation : ${form.motorisation}` : '',
      form.immatriculation ? `🔢 Immatriculation : ${form.immatriculation}` : '',
      ``,
      `📍 Adresse de prise en charge : ${form.adresse_depart}`,
      `🏁 Adresse de livraison : ${form.adresse_arrivee}`,
      ``,
      `🔧 État du véhicule :`,
      etatChecked() || 'Non précisé',
      ``,
      form.assure ? `🛡️ Assuré pour le dépannage : ${form.assure}` : '',
      form.commentaire ? `💬 Infos complémentaires : ${form.commentaire}` : '',
      ``,
      `Merci de me rappeler avec un tarif dès que possible.`,
    ].filter(Boolean)
    return encodeURIComponent(lines.join('\n'))
  }

  const handleWhatsApp = () => {
    if (!isValid) return
    window.open(`https://wa.me/33650500175?text=${buildWhatsAppMessage()}`, '_blank')
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    setStatus('sending')

    const body = {
      ...form,
      etat_vehicule: etatChecked() || 'Non précisé',
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
    <form onSubmit={handleEmailSubmit} className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-7 md:p-9 space-y-7">
      <div>
        <h3 className="text-2xl font-black text-gray-900 mb-1">Demande de devis</h3>
        <p className="text-gray-500 text-sm">Remplissez ce formulaire pour recevoir un tarif précis par retour, au plus vite.</p>
      </div>

      {/* ASSURANCE — MISE EN AVANT */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="text-2xl">🛡️</div>
          <div>
            <p className="font-black text-gray-900 text-sm mb-1">Vous êtes assuré pour le dépannage ?</p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Une demande de prise en charge directe peut être faite — 0€ à avancer selon votre contrat, ou remboursement des frais par votre assurance. Vous avez le <strong>libre choix du réparateur</strong>, c&apos;est la loi. Réponse dans les plus brefs délais.
            </p>
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Êtes-vous assuré pour le dépannage ?</label>
          <select name="assure" value={form.assure} onChange={handleChange}
            className="w-full border border-red-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">
            <option value="">-- Sélectionner --</option>
            <option value="Oui, je suis assuré pour le dépannage">Oui, je suis assuré pour le dépannage</option>
            <option value="Non / je ne sais pas">Non / je ne sais pas</option>
          </select>
        </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Boîte de vitesse</label>
            <select name="boite" value={form.boite} onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">
              <option value="">-- Sélectionner --</option>
              {boiteOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Motorisation</label>
            <select name="motorisation" value={form.motorisation} onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">
              <option value="">-- Sélectionner --</option>
              {motorisationOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        </div>
      </fieldset>

      {/* TRAJET */}
      <fieldset className="space-y-4">
        <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">📍 Trajet</legend>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Adresse de prise en charge (position actuelle du véhicule) *</label>
          <input name="adresse_depart" value={form.adresse_depart} onChange={handleChange} required
            placeholder="Ex: 12 Rue Victor Hugo, 75011 Paris / Aire de repos A1 km 42..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Adresse de livraison (destination souhaitée) *</label>
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

      {!isValid && (
        <p className="text-xs text-gray-400 text-center">* Nom, téléphone, véhicule et adresses sont requis avant l&apos;envoi.</p>
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
        <a href="tel:0650500175" className="text-red-600 font-bold hover:underline">06 50 50 01 75</a>{' '}
        disponible 24h/24
      </p>
    </form>
  )
}
