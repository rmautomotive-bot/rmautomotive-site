import Image from 'next/image'

const brands = [
  { nom: 'Renault', file: 'renault' },
  { nom: 'Peugeot', file: 'peugeot' },
  { nom: 'Citroën', file: 'citroen' },
  { nom: 'Toyota', file: 'toyota' },
  { nom: 'Volkswagen', file: 'volkswagen' },
  { nom: 'Porsche', file: 'porsche' },
  { nom: 'Mercedes', file: 'mercedes' },
  { nom: 'BMW', file: 'bmw' },
  { nom: 'Ford', file: 'ford' },
  { nom: 'Audi', file: 'audi' },
  { nom: 'Nissan', file: 'nissan' },
  { nom: 'Opel', file: 'opel' },
]

const reseaux = [
  { nom: 'Speedy', file: 'speedy', ext: 'png' },
  { nom: 'Autobacs', file: 'autobacs', ext: 'png' },
]

interface Props {
  theme?: 'light' | 'dark'
  showReseaux?: boolean
}

export default function BrandLogos({ theme = 'dark', showReseaux = false }: Props) {
  const isDark = theme === 'dark'

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {brands.map((b) => (
          <div
            key={b.nom}
            title={b.nom}
            className={`flex items-center justify-center transition-opacity duration-200 opacity-40 hover:opacity-80 ${isDark ? 'brightness-0 invert' : 'brightness-0'}`}
          >
            <Image
              src={`/logos/${b.file}.svg`}
              alt={b.nom}
              width={56}
              height={32}
              className="object-contain max-h-8 w-auto"
            />
          </div>
        ))}
        {showReseaux && reseaux.map((b) => (
          <div
            key={b.nom}
            title={b.nom}
            className="flex items-center justify-center bg-white rounded-lg px-3 py-2 opacity-80 hover:opacity-100 transition-opacity duration-200 shadow-sm"
          >
            <Image
              src={`/partenaires/${b.file}.${b.ext}`}
              alt={b.nom}
              width={80}
              height={32}
              className="object-contain max-h-7 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
