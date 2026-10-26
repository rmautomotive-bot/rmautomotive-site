export interface Article {
  slug: string
  titre: string
  excerpt: string
  date: string
  tempsLecture: string
  categorie: string
  image?: string
  contenu: string
}

export const articles: Article[] = [
  {
    slug: 'panne-autoroute-que-faire',
    titre: 'Panne sur autoroute : que faire ? Le guide complet',
    excerpt: 'Votre voiture tombe en panne sur l\'A1, l\'A6 ou le périphérique ? Voici les bons réflexes à avoir — et comment RM Automotive intervient en moins de 45 minutes.',
    date: '2026-02-10',
    tempsLecture: '4 min',
    categorie: 'Conseils',
    contenu: `
## Panne sur autoroute : les bons réflexes

Tomber en panne sur une voie rapide est stressant, mais en suivant les bonnes étapes, vous êtes en sécurité en moins de 2 minutes.

### 1. Garez-vous immédiatement sur la bande d'arrêt d'urgence

Dès que vous sentez un problème (moteur, crevaison, surchauffe), allumez vos **feux de détresse** et gagnez la bande d'arrêt d'urgence (BAU) le plus rapidement possible, sans couper le moteur brutalement.

### 2. Sortez du véhicule côté rail de sécurité

Ne restez **jamais** dans votre voiture sur la BAU. Sortez côté passager si possible, passez par-dessus la glissière de sécurité et attendez à distance du véhicule.

### 3. Signalez votre présence

Placez votre **triangle de signalisation** à 30 mètres minimum derrière le véhicule (uniquement si c'est sans danger). Enfilez votre **gilet de sécurité** — obligation légale.

### 4. Appelez RM Automotive

Sur l'Île-de-France, RM Automotive intervient **24h/24, 7j/7**, sur toutes les autoroutes et voies rapides :

- **A1** (Paris – Lille)
- **A6** (Paris – Lyon)
- **A86** et **Francilienne**
- **N104, N2, N3** et toutes les nationales

📞 **06 50 50 01 75** — On décroche à toute heure.

### 5. Votre assurance prend en charge

Si vous êtes couvert par une assistance (Mondial Assistance, AXA, MAAF, MACIF...), **vous ne payez rien**. RM Automotive gère la coordination avec votre assureur directement. Ayez votre carte verte et votre numéro de contrat d'assurance à portée.

### Les pannes les plus fréquentes sur autoroute

| Type de panne | Solution sur place |
|---|---|
| Crevaison | Remplacement roue de secours ou remorquage |
| Batterie à plat | Démarrage d'urgence |
| Panne d'essence | Apport de carburant |
| Surchauffe moteur | Diagnostic + remorquage si nécessaire |
| Panne électronique | Remorquage vers atelier |

### Conclusion

Le plus important : **restez calme, sortez du véhicule, appelez les secours**. Sur l'Île-de-France, RM Automotive est votre partenaire privilégié pour une intervention rapide et sécurisée.

📞 **06 50 50 01 75** — Disponible 24h/24, intervention couverte par votre assurance.
    `,
  },
  {
    slug: 'prise-en-charge-assurance-depannage',
    titre: 'Dépannage pris en charge par l\'assurance : comment ça marche ?',
    excerpt: 'Mondial Assistance, AXA, MAAF... Votre assurance couvre votre dépannage. On vous explique comment ça fonctionne et pourquoi vous n\'avez rien à avancer avec RM Automotive.',
    date: '2026-02-12',
    tempsLecture: '3 min',
    categorie: 'Assurance',
    contenu: `
## Votre dépannage est couvert par votre assurance — voici comment ça marche

La majorité des Français ont une **garantie assistance** incluse dans leur contrat d'assurance auto. Pourtant, beaucoup ne savent pas comment l'activer — ou pire, avancent des frais sans raison.

### Qui couvre quoi ?

Presque tous les grands assureurs incluent une assistance routière :

- **Mondial Assistance** (partenaire officiel RM Automotive)
- **AXA Assistance**
- **MAAF, MACIF, MATMUT, GMF, MMA**
- **Allianz, Groupama, AREAS**
- **Direct Assurance, MACSF...**

La garantie couvre généralement : le dépannage sur place, le remorquage, et dans certains cas un véhicule de remplacement.

### La procédure avec RM Automotive

**Vous n'avez rien à faire de compliqué.** Voici comment ça se passe :

1. **Vous appelez le 06 50 50 01 75** — décrivez votre panne et votre position
2. **Nous vérifions votre couverture** — avec votre assureur si nécessaire
3. **On intervient** — le règlement se fait directement entre nous et votre assurance
4. **Vous signez le bon d'intervention** — c'est tout

> *"Intervention sur ma voiture à Paris, prise en charge par Mondial Assistance. Je n'ai rien eu à avancer." — Hassan B., client RM Automotive*

### Quand dois-je payer ?

Dans certains cas, une franchise peut s'appliquer (généralement selon les contrats). Mais pour la grande majorité des sinistres courants (crevaison, batterie, panne moteur), **c'est 0€ de votre poche**.

Si votre garantie ne couvre pas l'intervention, nous vous proposons un devis transparent avant de commencer.

### Comment savoir si je suis couvert ?

Regardez votre carte verte : elle mentionne souvent le numéro d'assistance. Ou appelez-nous directement — on vérifie ça en 2 minutes.

📞 **06 50 50 01 75** — Disponible 24h/24
    `,
  },
  {
    slug: 'depannage-vehicule-electrique-ile-de-france',
    titre: 'Dépannage voiture électrique en Île-de-France : ce qu\'il faut savoir',
    excerpt: 'Tesla, Renault Zoé, BMW iX, Peugeot e-208... Les véhicules électriques ont leurs spécificités en dépannage. RM Automotive intervient sur tous les modèles.',
    date: '2026-02-14',
    tempsLecture: '4 min',
    categorie: 'Électrique',
    contenu: `
## Dépannage voiture électrique en Île-de-France

Le marché des véhicules électriques explose en France. Avec lui, de nouvelles situations de dépannage émergent — et tous les dépanneurs ne sont pas équipés pour y répondre.

### Les pannes spécifiques aux véhicules électriques

Contrairement à une voiture thermique, un véhicule électrique ne peut pas être **tracté** sur ses roues motrices (risque d'endommager le moteur électrique régénératif). Il doit être **chargé sur plateau**.

Les situations les plus fréquentes :

| Situation | Intervention |
|---|---|
| Batterie à 0% en route | Remorquage sur plateau vers borne ou atelier |
| Panne électronique | Diagnostic + remorquage |
| Problème de charge | Diagnostic sur place |
| Accident | Sécurisation et remorquage spécialisé |

### Pourquoi RM Automotive ?

Notre plateau est adapté au transport de véhicules électriques lourds (la batterie représente souvent 30-40% du poids total). Nous intervenons sur :

- **Tesla** (Model 3, Model S, Model Y, Model X, Cybertruck)
- **Renault** (Zoé, Megane E-Tech, Kangoo E-Tech)
- **Peugeot / Citroën** (e-208, e-2008, ë-C4)
- **BMW / Mercedes** (iX, iX3, EQC, EQS)
- **Volkswagen** (ID.3, ID.4, ID.7)
- Et tous les autres modèles

### En cas de panne de batterie à 0%

Ne tentez pas de recharger vous-même depuis un groupe électrogène — cela peut endommager la batterie haute tension. Appelez-nous, on vous remorque jusqu'à une borne de recharge rapide ou notre atelier partenaire.

### Couverture assurance pour les véhicules électriques

Les garanties assistance couvrent les VE exactement comme les thermiques. Mondial Assistance, AXA, et tous les grands assureurs prennent en charge le dépannage de votre électrique.

📞 **06 50 50 01 75** — Disponible 24h/24 en Île-de-France
    `,
  },
  {
    slug: 'depannage-utilitaire-professionnel-ile-de-france',
    titre: 'Dépannage utilitaire professionnel en Île-de-France : la solution pour les pros',
    excerpt: 'Artisan, livreur, chef de chantier — votre utilitaire tombe en panne en pleine journée ? RM Automotive intervient sur Sprinter, Master, Transit et même engins de chantier.',
    date: '2026-02-15',
    tempsLecture: '3 min',
    categorie: 'Professionnel',
    contenu: `
## Dépannage utilitaire : la solution pour les professionnels d'Île-de-France

Un véhicule utilitaire en panne, c'est une journée de chantier perdue, des livraisons retardées, un client mécontent. RM Automotive comprend ça — et on agit vite.

### On prend tout

Contrairement à beaucoup de dépanneurs qui ne gèrent que les berlines, RM Automotive intervient sur **tous les véhicules utilitaires** :

- **Fourgons** : Renault Master, Mercedes Sprinter, Ford Transit, Volkswagen Crafter, Citroën Jumper, Peugeot Boxer
- **Camions benne** : jusqu'à 3,5T
- **Fourgonnettes** : Renault Kangoo, Citroën Berlingo, Peugeot Partner
- **Engins spéciaux** : chariots élévateurs, nacelles légères

### Priorité aux professionnels

Quand votre outil de travail tombe en panne, chaque minute compte. Voici ce qu'on propose aux pros :

1. **Intervention prioritaire** — on sait que c'est votre gagne-pain
2. **Rapport d'intervention complet** — pour votre comptabilité et votre assureur
3. **Bon de prise en charge assurance** — si votre flotte est couverte
4. **Contrat annuel** pour les entreprises multi-véhicules

### Votre assurance pro couvre le dépannage

La plupart des contrats d'assurance professionnels incluent une assistance. Mondial Assistance, AXA Pro, MAAF Pro, MACIF Pro — RM Automotive est agréé. **0€ à avancer dans la plupart des cas.**

### Zone d'intervention

Toute l'Île-de-France — du chantier en Seine-Saint-Denis à la livraison dans le Val-de-Marne, on intervient partout.

📞 **06 50 50 01 75** — Disponible 24h/24, pros et particuliers
💬 **WhatsApp** : wa.me/33650500175
    `,
  },
  {
    slug: 'transport-securise-vehicules-prestige-ile-de-france',
    titre: 'Transport sécurisé de véhicules de prestige en Île-de-France',
    excerpt: 'Porsche 911, Rolls-Royce Cullinan, Mercedes AMG... RM Automotive est spécialiste du transport de véhicules premium à faible garde au sol en Île-de-France.',
    date: '2026-02-16',
    tempsLecture: '3 min',
    categorie: 'Prestige',
    contenu: `
## Transport et dépannage de véhicules de prestige en Île-de-France

Un Porsche GT4 RS ou une Rolls-Royce Cullinan ne se transporte pas comme une Clio. RM Automotive s'est spécialisé dans la manipulation des véhicules premium — avec les équipements et le savoir-faire qui vont avec.

### Les défis des véhicules à faible garde au sol

Les sportives et supercars ont souvent une garde au sol inférieure à 10 cm. Un plateau standard mal incliné, c'est le bas de caisse arraché. Chez RM Automotive :

- **Plateau à inclinaison réglable** — chargement progressif sans accrocher
- **Rampes d'extension** pour les véhicules très bas
- **Sanglage 4 points sur jantes** — zéro pression sur la carrosserie
- **Manipulation gantée** — on ne touche jamais la peinture à mains nues

### Références réelles

Voici quelques interventions réalisées par RM Automotive :

- **Porsche GT4 RS** — Paris 16ème → atelier
- **Rolls-Royce Cullinan** — A1 → concessionnaire
- **Porsche 911 Turbo cabriolet** — Île-de-France
- **Mercedes GLS 63 AMG** — Paris
- **Porsche Cayenne** — remis en concession Porsche

### Discrétion et assurance

Nous comprenons que la discrétion fait partie du service quand on parle de véhicules à 100 000€+. Aucune photo n'est publiée sans accord du propriétaire. Documentation d'état avant/après disponible sur demande.

### Couverture assurance

Vos garanties assurance couvrent le dépannage de vos véhicules premium exactement comme n'importe quel autre véhicule. Mondial Assistance et AXA Assistance gèrent régulièrement des interventions sur des véhicules de luxe.

📞 **06 50 50 01 75** — Disponible 24h/24
💬 **WhatsApp** : wa.me/33650500175 (discrétion garantie)
    `,
  },
  {
    slug: 'comment-choisir-son-depanneur-paris-ile-de-france',
    titre: '5 critères pour bien choisir son dépanneur en Île-de-France',
    excerpt: 'Pas tous les dépanneurs se valent. Délai, agréments assurance, équipement, avis clients... Voici comment faire le bon choix quand vous tombez en panne en Île-de-France.',
    date: '2026-02-18',
    tempsLecture: '4 min',
    categorie: 'Conseils',
    contenu: `
## Comment bien choisir son dépanneur en Île-de-France

Quand vous êtes en panne, stressé, au bord de la route, vous n'avez pas le temps de comparer 10 prestataires. Voilà les critères qui comptent vraiment.

### 1. La disponibilité réelle 24h/24

Beaucoup affichent "24h/24" mais ne décrochent pas la nuit. Vérifiez les **avis Google** et cherchez des mentions explicites de pannes de nuit ou le week-end. RM Automotive intervient à toute heure — appels et messages répondus immédiatement.

### 2. L'agrément assurance

Un dépanneur agréé Mondial Assistance, AXA, MAAF et consorts peut **facturer directement votre assureur**. Sans agrément, vous avancez les frais et attendez le remboursement (parfois partiel). RM Automotive est partenaire agréé de la majorité des assureurs français.

### 3. L'équipement pour votre type de véhicule

- Voitures classiques : tout dépanneur standard
- **Véhicules à faible garde au sol** : plateau adapté obligatoire
- **Grands utilitaires** : capacité de charge suffisante
- **Véhicules électriques** : pas de traction possible, plateau obligatoire

Demandez systématiquement si le prestataire est équipé pour votre type de véhicule avant de confirmer.

### 4. Le délai d'intervention réaliste

En Île-de-France, un délai honnête tourne entre 30 et 60 minutes selon le trafic. Méfiez-vous des promesses de "15 minutes" — c'est rarement réaliste aux heures de pointe. RM Automotive annonce **30 à 45 minutes en moyenne** — et tient ses délais.

### 5. La transparence sur les tarifs

Si votre assurance ne couvre pas (rare mais possible), exigez un devis avant toute intervention. Un bon dépanneur explique clairement ce qui est inclus, ce qui ne l'est pas, et ne rajoute pas de frais cachés.

### Pourquoi choisir RM Automotive ?

- ⭐ **5/5 sur Google** — 56 avis vérifiés
- ✅ **Partenaire Mondial Assistance et 10+ assureurs**
- 🚐 **Équipé pour tous types** de véhicules (citadine, utilitaire, prestige, électrique)
- 📍 **8 départements** d'Île-de-France couverts
- 📞 **Décroche toujours** — 24h/24, y compris 3h du matin

📞 **06 50 50 01 75**
    `,
  },
  {
    slug: 'acheter-voiture-occasion-points-controle-ile-de-france',
    titre: 'Acheter une voiture d\'occasion en Île-de-France : les points de contrôle à ne jamais négliger',
    excerpt: 'Annonce trop belle, historique flou, kilométrage douteux... Voici les vérifications indispensables avant d\'acheter un véhicule d\'occasion, et pourquoi une inspection professionnelle change tout.',
    date: '2026-02-22',
    tempsLecture: '5 min',
    categorie: 'Conseils',
    contenu: `
## Acheter une voiture d'occasion : ne vous faites pas avoir

Chaque année, des milliers d'acheteurs en Île-de-France découvrent — trop tard — qu'ils ont payé le prix d'un véhicule sain pour une voiture accidentée, roulée au compteur ou mécaniquement fragile. Voici comment éviter ce piège.

### 1. Vérifiez l'historique d'entretien

Un carnet d'entretien complet, avec factures datées et kilométrages cohérents, est le premier signal de confiance. Méfiez-vous des carnets "perdus" ou des historiques avec des trous de plusieurs années.

- Les kilométrages doivent progresser de façon logique entre chaque facture
- Les révisions importantes (distribution, embrayage) doivent apparaître aux bons intervalles
- Un historique 100% chez le même garage rassure, un historique éparpillé interroge

### 2. Contrôlez la cohérence du compteur kilométrique

Le compteur trafiqué reste une fraude fréquente sur le marché de l'occasion. Quelques signaux d'alerte :

| Signal | Ce que ça révèle |
|---|---|
| Usure du volant/pédales incohérente avec le km affiché | Compteur potentiellement trafiqué |
| Pneus très usés sur un "faible kilométrage" | Vérifier l'historique réel |
| Historique d'entretien avec sauts de km improbables | Rupture de traçabilité |
| Contrôles techniques successifs avec km qui ne progresse pas logiquement | Fraude probable |

### 3. Faites réaliser une inspection avant achat

C'est l'étape que trop d'acheteurs sautent — et qu'ils regrettent. Une inspection professionnelle (type Trustoo) vérifie en moins d'une heure :

- L'état mécanique complet (moteur, boîte, freins, suspensions)
- La carrosserie (traces de choc, reprises de peinture, châssis)
- Les points de sécurité électroniques et les codes défaut
- La cohérence globale avec l'historique déclaré

### 4. Négociez sur des faits, pas sur un ressenti

Un rapport d'inspection écrit vous donne un argument de négociation solide et objectif face au vendeur — bien plus efficace qu'un "ça a l'air bien".

### Pourquoi passer par RM Automotive avant un achat

- 🔍 **Plus de 4 400 véhicules déjà inspectés**
- ✅ **Partenaire Trustoo** — inspection certifiée et rapport détaillé
- 📍 Déplacement possible partout en Île-de-France pour voir le véhicule chez le vendeur
- 📞 Devis rapide, intervention sous 24-48h

📞 **06 50 50 01 75** — Ne signez rien avant d'avoir vérifié.
    `,
  },
  {
    slug: 'courroie-distribution-quand-changer',
    titre: 'Courroie de distribution : quand la changer et pourquoi c\'est vital',
    excerpt: 'Une courroie de distribution qui casse, c\'est souvent un moteur détruit. Voici les kilométrages à respecter, les signes d\'alerte, et pourquoi cet entretien ne se négocie pas.',
    date: '2026-02-23',
    tempsLecture: '4 min',
    categorie: 'Conseils',
    contenu: `
## Courroie de distribution : l'entretien qui peut sauver votre moteur

C'est l'une des pannes les plus coûteuses — et pourtant l'une des plus évitables. La courroie (ou chaîne) de distribution synchronise l'ouverture des soupapes avec les pistons. Si elle casse en roulant, les conséquences sont souvent irréversibles.

### Que se passe-t-il si elle casse ?

Sur un **moteur dit "non décompressé"** (la majorité des moteurs modernes), la rupture de la courroie provoque un contact entre pistons et soupapes. Résultat : soupapes pliées, pistons endommagés, parfois la tête de bielle cassée. La facture de réparation dépasse souvent **1 500 à 4 000 €**, contre quelques centaines d'euros pour un remplacement préventif.

### À quel kilométrage la changer ?

Les intervalles varient selon le constructeur et le motorisation, mais les repères généraux sont :

| Type de motorisation | Intervalle recommandé |
|---|---|
| Essence classique | 100 000 à 160 000 km |
| Diesel | 100 000 à 150 000 km |
| Certains moteurs récents | Jusqu'à 200 000 km (vérifier carnet constructeur) |
| Durée dans le temps | 5 à 10 ans, même sans atteindre le kilométrage |

**Important** : même un véhicule peu utilisé doit respecter l'intervalle en années — le caoutchouc vieillit avec le temps, pas seulement avec les kilomètres.

### Les signes qui doivent alerter

- Bruit de cliquetis ou de grincement au niveau du bloc moteur
- Fuite d'huile ou de liquide de refroidissement près du carter de distribution
- Voyant moteur allumé sans cause évidente
- Démarrage difficile ou ratés moteur

À l'apparition de ces signes, **ne prenez aucun risque** : un contrôle rapide évite une panne catastrophique.

### Le kit complet, pas juste la courroie

Chez RM Automotive, le remplacement se fait toujours avec le **kit complet** : courroie, galets tendeurs, galet enrouleur, et pompe à eau si elle est entraînée par la distribution. Remplacer uniquement la courroie sans les galets, c'est prendre le risque de revenir dans quelques mois.

### Pourquoi faire confiance à RM Automotive

- 🔧 Remplacement toutes marques avec kit complet constructeur
- ⭐ **5/5 sur Google** — 56 avis vérifiés
- 📍 Atelier à Mitry-Mory (77), devis gratuit
- 📞 Diagnostic rapide si vous avez un doute sur l'état de votre distribution

📞 **06 50 50 01 75** — Mieux vaut prévenir qu'un moteur à refaire.
    `,
  },
  {
    slug: 'batterie-voiture-hiver-pannes',
    titre: 'Batterie de voiture en hiver : pourquoi elle lâche et comment l\'éviter',
    excerpt: 'Le froid est le pire ennemi d\'une batterie fatiguée. Voici pourquoi les pannes de batterie explosent en hiver en Île-de-France, et comment éviter de tomber en panne devant chez vous.',
    date: '2026-02-24',
    tempsLecture: '3 min',
    categorie: 'Conseils',
    contenu: `
## Batterie à plat en hiver : la panne la plus fréquente de la saison

Chaque hiver, RM Automotive multiplie les interventions pour batteries à plat en Île-de-France — souvent au pire moment, un matin froid avant d'aller travailler. Voici pourquoi, et comment l'anticiper.

### Pourquoi le froid tue les batteries fatiguées

Le froid réduit la capacité chimique d'une batterie de façon significative :

- À 0°C, une batterie perd environ **20% de sa capacité**
- À -10°C, la perte peut atteindre **30 à 40%**
- En parallèle, le moteur froid demande **plus de courant** au démarreur pour démarrer

Une batterie qui tenait "juste" l'été ne tient souvent plus du tout dès les premiers grands froids.

### Les signes d'une batterie en fin de vie

- Démarrage plus lent ou hésitant, surtout le matin
- Voyants qui faiblissent brièvement au démarrage
- Batterie de plus de **4-5 ans** jamais contrôlée
- Véhicule peu utilisé (trajets courts, stationnement fréquent)

### Comment limiter le risque

1. **Faites contrôler votre batterie avant l'hiver** — un test de charge prend quelques minutes
2. Évitez de multiplier les très courts trajets qui ne rechargent jamais complètement la batterie
3. Limitez l'usage simultané de tous les équipements électriques (chauffage, sièges chauffants, radio) au démarrage
4. Si votre batterie a plus de 4-5 ans, anticipez son remplacement plutôt que d'attendre la panne

### Si vous tombez en panne malgré tout

Ne paniquez pas : RM Automotive intervient **24h/24** partout en Île-de-France pour un démarrage d'urgence ou un remplacement de batterie sur place, toutes marques.

- 🔋 Démarrage d'urgence en quelques minutes
- 🔧 Remplacement batterie sur place si nécessaire
- 📞 Intervention couverte par votre assurance si vous êtes couvert
- 📍 8 départements d'Île-de-France couverts

📞 **06 50 50 01 75** — Disponible même à 6h du matin.
    `,
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
