export const zones = [
  {
    code: '75', nom: 'Paris', slug: 'paris',
    desc: 'Dépannage automobile 24h/24 à Paris et petite couronne. Intervention rapide dans tous les arrondissements.',
    villes: ['Paris 1er', 'Paris 2e', 'Paris 3e', 'Paris 4e', 'Paris 5e', 'Paris 6e', 'Paris 7e', 'Paris 8e', 'Paris 9e', 'Paris 10e', 'Paris 11e', 'Paris 12e', 'Paris 13e', 'Paris 14e', 'Paris 15e', 'Paris 16e', 'Paris 17e', 'Paris 18e', 'Paris 19e', 'Paris 20e'],
    axes: ['Boulevard Périphérique', 'A1', 'A3', 'A4', 'A6', 'A10', 'A13', 'A14'],
  },
  {
    code: '92', nom: 'Hauts-de-Seine', slug: 'hauts-de-seine',
    desc: 'Dépannage voiture dans les Hauts-de-Seine (92). Nanterre, Boulogne, Colombes, Levallois, Asnières et toutes communes.',
    villes: ['Nanterre', 'Boulogne-Billancourt', 'Colombes', 'Levallois-Perret', 'Asnières-sur-Seine', 'Rueil-Malmaison', 'Issy-les-Moulineaux', 'Clichy', 'Courbevoie', 'Neuilly-sur-Seine', 'Antony', 'Châtenay-Malabry', 'Sceaux', 'Clamart'],
    axes: ['A86', 'N118', 'A13', 'A14', 'Voie express rive droite'],
  },
  {
    code: '93', nom: 'Seine-Saint-Denis', slug: 'seine-saint-denis',
    desc: 'Dépannage auto en Seine-Saint-Denis (93). Saint-Denis, Montreuil, Aulnay-sous-Bois, Bobigny, Pantin.',
    villes: ['Saint-Denis', 'Montreuil', 'Aulnay-sous-Bois', 'Bobigny', 'Noisy-le-Grand', 'Pantin', 'Épinay-sur-Seine', 'Aubervilliers', 'Bagnolet', 'Drancy', 'Rosny-sous-Bois', 'Bondy', 'Livry-Gargan', 'Villepinte'],
    axes: ['A1', 'A3', 'A86', 'N3', 'N2'],
  },
  {
    code: '94', nom: 'Val-de-Marne', slug: 'val-de-marne',
    desc: 'Dépannage automobile dans le Val-de-Marne (94). Créteil, Vincennes, Vitry-sur-Seine, Ivry, Champigny.',
    villes: ['Créteil', 'Vincennes', 'Vitry-sur-Seine', 'Ivry-sur-Seine', 'Champigny-sur-Marne', 'Saint-Maur-des-Fossés', 'Maisons-Alfort', 'Alfortville', 'Fontenay-sous-Bois', 'Nogent-sur-Marne', 'Orly', 'Villeneuve-le-Roi'],
    axes: ['A4', 'A86', 'N6', 'N7', 'RN19'],
  },
  {
    code: '77', nom: 'Seine-et-Marne', slug: 'seine-et-marne',
    desc: 'Dépannage voiture en Seine-et-Marne (77). Mitry-Mory, Meaux, Melun, Chelles, Lagny, Roissy et toute la 77.',
    villes: ['Mitry-Mory', 'Meaux', 'Melun', 'Chelles', 'Lagny-sur-Marne', 'Roissy CDG', 'Villeparisis', 'Claye-Souilly', 'Pontault-Combault', 'Torcy', 'Marne-la-Vallée', 'Fontainebleau', 'Montereau', 'Provins', 'Dammartin-en-Goële'],
    axes: ['A1', 'A4', 'A5', 'A6', 'A104', 'N3', 'N4'],
  },
  {
    code: '91', nom: 'Essonne', slug: 'essonne',
    desc: 'Dépannage auto en Essonne (91). Évry, Corbeil-Essonnes, Massy, Palaiseau, Gif-sur-Yvette, Juvisy.',
    villes: ['Évry-Courcouronnes', 'Corbeil-Essonnes', 'Massy', 'Palaiseau', 'Gif-sur-Yvette', 'Juvisy-sur-Orge', 'Savigny-sur-Orge', 'Viry-Châtillon', 'Grigny', 'Longjumeau', 'Les Ulis', 'Brétigny-sur-Orge', 'Dourdan'],
    axes: ['A6', 'A10', 'N7', 'N20', 'RN104'],
  },
  {
    code: '78', nom: 'Yvelines', slug: 'yvelines',
    desc: 'Dépannage automobile dans les Yvelines (78). Versailles, Saint-Germain, Poissy, Mantes, Rambouillet.',
    villes: ['Versailles', 'Saint-Germain-en-Laye', 'Poissy', 'Mantes-la-Jolie', 'Rambouillet', 'Sartrouville', 'Houilles', 'Carrières-sous-Poissy', 'Les Mureaux', 'Conflans-Sainte-Honorine', 'Trappes', 'Élancourt'],
    axes: ['A12', 'A13', 'A86', 'N10', 'N12', 'N13'],
  },
  {
    code: '95', nom: 'Val-d\'Oise', slug: 'val-d-oise',
    desc: 'Dépannage voiture dans le Val-d\'Oise (95). Cergy, Argenteuil, Pontoise, Sarcelles, Roissy, Gonesse.',
    villes: ['Cergy', 'Argenteuil', 'Pontoise', 'Sarcelles', 'Roissy CDG', 'Gonesse', 'Enghien-les-Bains', 'Garges-lès-Gonesse', 'Franconville', 'Saint-Leu-la-Forêt', 'Ermont', 'Taverny', 'Osny'],
    axes: ['A1', 'A15', 'A16', 'N104', 'N1', 'N14'],
  },
]

export type Zone = typeof zones[0]

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find(z => z.slug === slug)
}
