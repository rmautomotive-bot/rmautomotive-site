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

- ⭐ **5/5 sur Google** — 42 avis vérifiés
- ✅ **Partenaire Mondial Assistance et 10+ assureurs**
- 🚐 **Équipé pour tous types** de véhicules (citadine, utilitaire, prestige, électrique)
- 📍 **8 départements** d'Île-de-France couverts
- 📞 **Décroche toujours** — 24h/24, y compris 3h du matin

📞 **06 50 50 01 75**
    `,
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
