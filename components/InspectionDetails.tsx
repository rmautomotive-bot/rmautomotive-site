'use client'
import { useState } from 'react'

type DetailItem = {
  icon: string
  titre: string
  content: string[]
}

const details: DetailItem[] = [
  {
    icon: '📄',
    titre: 'Vérification administrative',
    content: [
      'Contrôle de la carte grise et des documents disponibles',
      'Vérification de l\'historique du véhicule',
      'Cohérence du kilométrage lorsque les données sont accessibles',
    ],
  },
  {
    icon: '🎨',
    titre: 'Carrosserie & peinture',
    content: [
      'Contrôle des rayures, impacts, chocs et traces de réparation',
      'Recherche de traces d\'accident et d\'éléments remplacés',
      'Détection des retouches et reprises de carrosserie',
    ],
  },
  {
    icon: '🛞',
    titre: 'Pneumatiques & jantes',
    content: [
      'État et usure des pneumatiques',
      'Mesure de la profondeur des sculptures',
      'Conformité et uniformité des pneus',
    ],
  },
  {
    icon: '🛑',
    titre: 'Freinage',
    content: [
      'Contrôle de l\'état et de l\'usure des plaquettes et disques',
      'Vérification du système de freinage dans son ensemble',
    ],
  },
  {
    icon: '🔩',
    titre: 'Trains roulants & suspensions',
    content: [
      'Contrôle de l\'état, de l\'usure et de la corrosion',
      'Recherche d\'anomalies sur le train roulant et les suspensions',
    ],
  },
  {
    icon: '🖥️',
    titre: 'Diagnostic électronique',
    content: [
      'Essentiel : lecture des défauts accessibles et contrôle des voyants',
      'Premium : diagnostic approfondi avec lecture des calculateurs accessibles (moteur, ABS, ESP, Airbag)',
      'Expert : diagnostic complet des calculateurs accessibles + analyse approfondie des systèmes électroniques',
    ],
  },
  {
    icon: '⚙️',
    titre: 'Moteur & transmission',
    content: [
      'Essentiel : contrôle visuel du moteur, recherche de fuites et vérification des niveaux',
      'Premium : contrôle approfondi du fonctionnement moteur/transmission + test de l\'embrayage si équipé',
      'Expert : analyse du système d\'injection et des paramètres accessibles au diagnostic',
    ],
  },
  {
    icon: '💧',
    titre: 'Fluides & niveaux',
    content: [
      'Contrôle des fluides et niveaux accessibles (huile, liquide de refroidissement, freins...)',
    ],
  },
  {
    icon: '🚗',
    titre: 'Essai routier',
    content: [
      'Moteur, boîte de vitesses, embrayage, freinage, direction',
      'Comportement routier et recherche de bruits anormaux',
      'Premium/Expert : évaluation approfondie du comportement moteur et transmission',
    ],
  },
  {
    icon: '📋',
    titre: 'Rapport & accompagnement',
    content: [
      'Photographies des principaux éléments contrôlés et anomalies constatées',
      'Rapport d\'inspection PDF détaillé',
      'Accompagnement à la négociation : défauts et frais identifiés pour négocier le prix',
      'Conclusion claire : ACHETER / NÉGOCIER / ÉVITER',
      'Premium/Expert : rapport photo complet, estimation des frais, hiérarchisation des réparations, accompagnement renforcé à la décision',
    ],
  },
]

export default function InspectionDetails() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <div className="max-w-3xl mx-auto mt-14">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2">🔍 Découvrez ce que comprend notre inspection</h3>
        <p className="text-gray-500 text-sm">
          {details.map(d => d.titre).join(' • ')}
        </p>
      </div>

      <div className="space-y-3">
        {details.map((d, i) => (
          <div key={d.titre} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <button
              type="button"
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">{d.icon}</span>
                <span className="font-bold text-gray-900 text-sm">{d.titre}</span>
              </span>
              <span className={`text-red-600 text-lg font-black transition-transform ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 pt-1">
                <ul className="space-y-1.5">
                  {d.content.map(line => (
                    <li key={line} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
