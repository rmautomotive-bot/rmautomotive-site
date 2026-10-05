export const MODELS_BY_BRAND: Record<string, string[]> = {
  Peugeot: ['106', '107', '108', '206', '207', '208', '2008', '301', '306', '307', '308', '3008', '406', '407', '408', '5008', '508', 'Partner', 'Rifter', 'Traveller'],
  Renault: ['Clio', 'Captur', 'Megane', 'Scenic', 'Talisman', 'Kadjar', 'Koleos', 'Twingo', 'Zoe', 'Espace', 'Laguna', 'Kangoo', 'Austral', 'Arkana'],
  'Citroën': ['C1', 'C2', 'C3', 'C3 Aircross', 'C4', 'C4 Picasso', 'C4 Cactus', 'C5', 'C5 Aircross', 'C5 X', 'Berlingo', 'DS3', 'Xsara'],
  Volkswagen: ['Polo', 'Golf', 'Passat', 'Tiguan', 'T-Roc', 'T-Cross', 'Touran', 'Touareg', 'Arteon', 'Up!', 'Caddy', 'Scirocco', 'Beetle'],
  Audi: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'TT', 'e-tron'],
  BMW: ['Série 1', 'Série 2', 'Série 3', 'Série 4', 'Série 5', 'Série 7', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'Z4', 'i3', 'i4'],
  'Mercedes-Benz': ['Classe A', 'Classe B', 'Classe C', 'Classe E', 'Classe S', 'CLA', 'CLS', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'Vito', 'Sprinter'],
  Opel: ['Corsa', 'Astra', 'Insignia', 'Mokka', 'Crossland', 'Grandland', 'Zafira', 'Combo', 'Vivaro'],
  Ford: ['Fiesta', 'Focus', 'Puma', 'Kuga', 'Mondeo', 'EcoSport', 'Ka', 'Galaxy', 'S-Max', 'Transit', 'Mustang'],
  Toyota: ['Yaris', 'Corolla', 'C-HR', 'RAV4', 'Aygo', 'Auris', 'Prius', 'Proace', 'Camry', 'Land Cruiser'],
  Nissan: ['Micra', 'Juke', 'Qashqai', 'X-Trail', 'Leaf', 'Note', '370Z', 'Navara'],
  Fiat: ['500', 'Panda', 'Tipo', '500X', '500L', 'Punto', 'Doblo', 'Ducato'],
  Dacia: ['Sandero', 'Duster', 'Logan', 'Spring', 'Jogger', 'Lodgy'],
  Seat: ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco', 'Alhambra'],
  'Škoda': ['Fabia', 'Octavia', 'Superb', 'Kamiq', 'Karoq', 'Kodiaq', 'Scala'],
  Hyundai: ['i10', 'i20', 'i30', 'Tucson', 'Kona', 'Santa Fe', 'Ioniq'],
  Kia: ['Picanto', 'Rio', 'Ceed', 'Niro', 'Sportage', 'Sorento', 'Stonic', 'EV6'],
  Mini: ['Cooper', 'Countryman', 'Clubman', 'Cabrio'],
  Volvo: ['V40', 'V60', 'V90', 'XC40', 'XC60', 'XC90', 'S60', 'S90'],
  Mazda: ['2', '3', '6', 'CX-3', 'CX-5', 'CX-30', 'MX-5'],
  Honda: ['Civic', 'Jazz', 'CR-V', 'HR-V', 'Accord'],
  Suzuki: ['Swift', 'Vitara', 'S-Cross', 'Ignis', 'Jimny'],
  Jeep: ['Renegade', 'Compass', 'Cherokee', 'Grand Cherokee', 'Wrangler'],
  'Land Rover': ['Range Rover', 'Range Rover Sport', 'Range Rover Evoque', 'Discovery', 'Defender'],
  Porsche: ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan', 'Boxster', 'Cayman'],
  'Alfa Romeo': ['Giulietta', 'Giulia', 'Stelvio', 'Mito', '4C'],
  Jaguar: ['XE', 'XF', 'F-Pace', 'E-Pace', 'F-Type'],
  Lexus: ['CT', 'IS', 'ES', 'RX', 'NX', 'UX'],
  Mitsubishi: ['Space Star', 'ASX', 'Outlander', 'Eclipse Cross', 'L200'],
  Smart: ['Fortwo', 'Forfour'],
  DS: ['DS 3', 'DS 4', 'DS 7', 'DS 9'],
  Tesla: ['Model 3', 'Model S', 'Model X', 'Model Y'],
  Alpine: ['A110'],
}

export const BRANDS = Object.keys(MODELS_BY_BRAND).sort((a, b) => a.localeCompare(b, 'fr'))

const CURRENT_YEAR = new Date().getFullYear()
export const YEARS: string[] = []
for (let y = CURRENT_YEAR; y >= 1990; y--) YEARS.push(String(y))
