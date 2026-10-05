'use client'
import { useState, useRef } from 'react'
import { BRANDS, MODELS_BY_BRAND, YEARS } from '@/lib/vehicleData'

type Tier = {
  id: string
  color: 'green' | 'blue' | 'red'
  emoji: string
  nom: string
  prix: string
  sousTitre: string
  badge: string | null
  items: string[]
}

const tiers: Tier[] = [
  {
    id: 'essentiel',
    color: 'green',
    emoji: '🟢',
    nom: 'ESSENTIEL',
    prix: '149 €',
    sousTitre: 'L’inspection complète pour sécuriser votre achat',
    badge: null,
    items: [
      'Documents & historique',
      'Carrosserie & recherche de chocs',
      'Moteur, fuites & niveaux',
      'Pneus, freins & suspensions',
      'Diagnostic électronique',
      'Essai routier',
      'Photos + rapport PDF',
      'Aide à la négociation',
      'ACHETER / NÉGOCIER / ÉVITER',
    ],
  },
  {
    id: 'premium',
    color: 'blue',
    emoji: '🔵',
    nom: 'PREMIUM',
    prix: '199 €',
    sousTitre: 'Une analyse approfondie pour aller plus loin',
    badge: '⭐ Recommandé',
    items: [
      'Tout le contenu Essentiel +',
      'Diagnostic électronique approfondi',
      'Moteur & transmission',
      'Contrôle des systèmes de sécurité',
      'Analyse approfondie des défauts',
      'Rapport photo complet',
      'Réparations prioritaires',
      'Estimation des frais à prévoir',
    ],
  },
  {
    id: 'expert',
    color: 'red',
    emoji: '🔴',
    nom: 'EXPERT',
    prix: '299 €',
    sousTitre: 'L’analyse la plus poussée',
    badge: '⭐ Recommandé véhicule de valeur/sportive',
    items: [
      'Tout le contenu Premium +',
      'Inspection technique approfondie',
      'Diagnostic complet des calculateurs accessibles',
      'Analyse injection & paramètres disponibles',
      'Analyse détaillée des anomalies',
      'Estimation des coûts de réparation',
      'Évaluation des risques à court/moyen terme',
      'Accompagnement à la décision',
    ],
  },
]

const colorMap: Record<string, { border: string; bg: string; text: string; btn: string }> = {
  green: { border: 'border-green-500', bg: 'bg-green-50', text: 'text-green-600', btn: 'bg-green-600 hover:bg-green-700' },
  blue: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-600', btn: 'bg-blue-600 hover:bg-blue-700' },
  red: { border: 'border-red-500', bg: 'bg-red-50', text: 'text-red-600', btn: 'bg-red-600 hover:bg-red-700' },
}

export default function InspectionBooking() {
  const [form, setForm] = useState({
    marque: '', modele: '', annee: '', motorisation: '', kilometrage: '', prix_vente: '', lien_annonce: '',
    ville: '', date_rdv: '', creneau: '',
    formule: 'premium',
    nom: '', telephone: '', email: '',
    message: '',
  })
  const [marqueMode, setMarqueMode] = useState<'select' | 'custom'>('select')
  const [modeleMode, setModeleMode] = useState<'select' | 'custom'>('select')
  const [adresseSuggestions, setAdresseSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const adresseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleVilleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setForm(prev => ({ ...prev, ville: val }))
    if (adresseTimeout.current) clearTimeout(adresseTimeout.current)
    if (val.trim().length < 3) {
      setAdresseSuggestions([])
      return
    }
    adresseTimeout.current = setTimeout(async () => {
      try {
        const res = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(val)}&limit=5`)
        const data = await res.json()
        const labels = (data?.features || []).map((f: { properties?: { label?: string } }) => f.properties?.label).filter(Boolean) as string[]
        setAdresseSuggestions(labels)
        setShowSuggestions(true)
      } catch {
        setAdresseSuggestions([])
      }
    }, 300)
  }

  const selectAdresse = (label: string) => {
    setForm(prev => ({ ...prev, ville: label }))
    setAdresseSuggestions([])
    setShowSuggestions(false)
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

  const selectTier = (id: string) => {
    setForm(prev => ({ ...prev, formule: id }))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const tierLabel = (id: string) => {
    const t = tiers.find(t => t.id === id)
    if (!t) return ''
    const nomJoli = t.nom === 'ESSENTIEL' ? 'Essentielle' : t.nom === 'PREMIUM' ? 'Premium' : 'Expert'
    return `${t.prix} — Inspection ${nomJoli}`
  }

  const isValid = form.marque && form.modele && form.ville && form.nom && form.telephone

  const buildWhatsAppMessage = () => {
    const lines = [
      `Bonjour RM Automotive 👋 Réservation Inspection avant achat`,
      ``,
      `🚗 Véhicule`,
      `Marque : ${form.marque}`,
      `Modèle : ${form.modele}`,
      form.annee ? `Année : ${form.annee}` : '',
      form.motorisation ? `Motorisation : ${form.motorisation}` : '',
      form.kilometrage ? `Kilométrage : ${form.kilometrage}` : '',
      form.prix_vente ? `Prix de vente affiché : ${form.prix_vente}` : '',
      form.lien_annonce ? `Lien annonce : ${form.lien_annonce}` : '',
      ``,
      `📍 Rendez-vous`,
      `Ville : ${form.ville}`,
      form.date_rdv ? `Date souhaitée : ${form.date_rdv}` : '',
      form.creneau ? `Créneau souhaité : ${form.creneau}` : '',
      ``,
      `💳 Formule choisie : ${tierLabel(form.formule)}`,
      ``,
      `👤 Coordonnées`,
      `Nom : ${form.nom}`,
      `Téléphone : ${form.telephone}`,
      form.email ? `Email : ${form.email}` : '',
      ``,
      form.message ? `💬 Précisions : ${form.message}` : '',
      ``,
      `Merci de me confirmer la disponibilité et les modalités de paiement pour valider le rendez-vous.`,
    ].filter(Boolean)
    return encodeURIComponent(lines.join('\n'))
  }

  const handleWhatsApp = () => {
    if (!isValid) return
    window.open(`https://wa.me/33650500175?text=${buildWhatsAppMessage()}`, '_blank')
  }

  return (
    <div>
      {/* TIER CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        {tiers.map(t => {
          const c = colorMap[t.color]
          const active = form.formule === t.id
          return (
            <div
              key={t.id}
              className={`relative bg-white rounded-3xl p-7 border-2 transition-all flex flex-col ${
                active ? `${c.border} shadow-xl md:scale-[1.02]` : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {t.badge && (
                <div className="absolute -top-3 right-6 bg-yellow-400 text-gray-900 text-xs font-black px-3 py-1 rounded-full shadow">
                  {t.badge}
                </div>
              )}
              <div className="text-3xl mb-2">{t.emoji}</div>
              <h3 className="font-black text-gray-900 text-lg">{t.nom}</h3>
              <div className="text-3xl font-black text-gray-900 my-2">{t.prix}</div>
              <p className="text-gray-500 text-xs mb-4">{t.sousTitre}</p>
              <ul className="space-y-1.5 mb-6 flex-1">
                {t.items.map(it => (
                  <li key={it} className="text-xs text-gray-600 flex items-start gap-2">
                    <span className={`${c.text} font-bold`}>✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => selectTier(t.id)}
                className={`w-full ${active ? c.btn : 'bg-gray-900 hover:bg-gray-800'} text-white font-bold py-3 rounded-xl text-sm transition-all`}
              >
                {active ? '✓ Formule sélectionnée' : 'Choisir cette formule'}
              </button>
            </div>
          )
        })}
      </div>

      {/* BOOKING FORM */}
      <div ref={formRef} className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-7 md:p-9 space-y-7 mt-10">
        <div>
          <h3 className="text-2xl font-black text-gray-900 mb-1">Inspection avant achat — Réservation</h3>
          <p className="text-gray-500 text-sm">Remplissez les informations ci-dessous, on vous confirme le rendez-vous rapidement.</p>
        </div>

        {/* VÉHICULE */}
        <fieldset className="space-y-4">
          <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">🚗 Informations sur le véhicule</legend>
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
                <input name="modele" value={form.modele} onChange={handleChange} required placeholder="Ex: 3008"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Année</label>
              <select name="annee" value={form.annee} onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">
                <option value="">-- Sélectionner --</option>
                {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Motorisation</label>
              <select name="motorisation" value={form.motorisation} onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">
                <option value="">-- Sélectionner --</option>
                <option value="Essence">Essence</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybride">Hybride</option>
                <option value="Électrique">Électrique</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Kilométrage</label>
              <input name="kilometrage" value={form.kilometrage} onChange={handleChange} placeholder="Ex: 85 000 km"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Prix de vente du véhicule</label>
              <input name="prix_vente" value={form.prix_vente} onChange={handleChange} placeholder="Ex: 18 500 €"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Lien de l&apos;annonce (Leboncoin, La Centrale, AutoScout24, autre)</label>
            <input name="lien_annonce" value={form.lien_annonce} onChange={handleChange} type="url" placeholder="https://..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
          </div>
        </fieldset>

        {/* LOCALISATION / RDV */}
        <fieldset className="space-y-4">
          <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">📍 Localisation et rendez-vous</legend>
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Adresse ou ville où se trouve le véhicule *</label>
            <input name="ville" value={form.ville} onChange={handleVilleChange}
              onFocus={() => adresseSuggestions.length > 0 && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              required autoComplete="off" placeholder="Ex: 12 rue de la Paix, Mitry-Mory..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
            {showSuggestions && adresseSuggestions.length > 0 && (
              <ul className="absolute z-20 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-56 overflow-auto">
                {adresseSuggestions.map(label => (
                  <li key={label}>
                    <button type="button" onMouseDown={() => selectAdresse(label)}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                      📍 {label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Date souhaitée pour l&apos;inspection</label>
              <input name="date_rdv" value={form.date_rdv} onChange={handleChange} type="date"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Créneau souhaité</label>
              <select name="creneau" value={form.creneau} onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">
                <option value="">-- Sélectionner --</option>
                <option value="Matin (8h-12h)">Matin (8h-12h)</option>
                <option value="Après-midi (12h-17h)">Après-midi (12h-17h)</option>
                <option value="Soir (17h-20h)">Soir (17h-20h)</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* FORMULE */}
        <fieldset>
          <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">💳 Choisissez votre formule</legend>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {tiers.map(t => (
              <label
                key={t.id}
                className={`flex items-center gap-2 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  form.formule === t.id ? `${colorMap[t.color].border} ${colorMap[t.color].bg}` : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                }`}
              >
                <input type="radio" name="formule" value={t.id} checked={form.formule === t.id} onChange={handleChange} className="accent-red-600" />
                <span className="text-sm font-semibold text-gray-800">{t.prix} — Inspection {t.nom === 'ESSENTIEL' ? 'Essentielle' : t.nom === 'PREMIUM' ? 'Premium' : 'Expert'}{t.badge ? ' ⭐' : ''}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* CONTACT */}
        <fieldset className="space-y-4">
          <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">👤 Vos coordonnées</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Nom / Prénom *</label>
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
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">E-mail</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="votre@email.fr"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
          </div>
        </fieldset>

        {/* COMPLÉMENTAIRE */}
        <fieldset className="space-y-4">
          <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 block">💬 Informations complémentaires</legend>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message / précisions concernant le véhicule</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Défauts connus, questions, contraintes d'horaire..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 resize-none"
            />
          </div>
          <p className="text-xs text-gray-400">
            📸 Photos du véhicule ou de certains défauts (facultatif) — envoyez-les directement par WhatsApp après votre message, ou par email à{' '}
            <a href="mailto:contact@rmautomotive.fr" className="text-red-600 font-semibold hover:underline">contact@rmautomotive.fr</a>.
          </p>
        </fieldset>

        {/* VALIDATION NOTICE */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <div className="text-xl">⚠️</div>
            <div className="text-xs text-amber-800 leading-relaxed">
              <p className="font-bold mb-1">Validation de la prestation</p>
              <p>Le rendez-vous est définitivement confirmé uniquement après réception du paiement correspondant à la formule sélectionnée.</p>
              <p className="mt-1">Toute demande de rendez-vous effectuée via ce formulaire reste en attente de validation jusqu&apos;à la réception du paiement.</p>
            </div>
          </div>
        </div>

        {!isValid && (
          <p className="text-xs text-gray-400 text-center">* Marque, modèle, ville, nom et téléphone sont requis.</p>
        )}

        <button
          type="button"
          onClick={handleWhatsApp}
          disabled={!isValid}
          className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl text-base transition-all hover:shadow-xl hover:shadow-green-200 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Envoyer ma demande de réservation sur WhatsApp
        </button>

        <p className="text-center text-xs text-gray-400">
          Besoin d&apos;aide ? Appelez le{' '}
          <a href="tel:0650500175" className="text-red-600 font-bold hover:underline">06 50 50 01 75</a>
        </p>
      </div>
    </div>
  )
}
