# 🎓 Portfolio BTS SIO — SLAM

Portfolio personnel développé en React, dark mode minimaliste.

---

## 🚀 Installation & lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm start

# 3. Build de production
npm run build
```

---

## 📁 Structure du projet

```
src/
├── data/
│   └── portfolio.js         ← ⭐ TOUT ton contenu est ici
│
├── sections/                ← Une section = un fichier JSX + CSS
│   ├── Intro.jsx / .css
│   ├── Competences.jsx / .css
│   ├── Parcours.jsx / .css
│   ├── Projets.jsx / .css
│   ├── Documents.jsx / .css
│   └── Veille.jsx / .css
│
├── components/              ← Composants réutilisables
│   ├── Navbar.jsx / .css
│   ├── Footer.jsx / .css
│   └── UI.jsx / .css        ← SectionTitle, Tag, EmptyState, Button…
│
├── hooks/
│   ├── useActiveSection.js  ← Détection section active au scroll
│   └── useInView.js         ← Animation au scroll (IntersectionObserver)
│
├── styles/
│   ├── global.css           ← Variables CSS, reset, fonts
│   └── sections.css         ← Layout commun des sections
│
├── App.jsx                  ← Assemblage de l'app
└── index.js                 ← Point d'entrée React
```

---

## ✏️ Comment remplir mon contenu ?

**Tout se passe dans `src/data/portfolio.js`.**

### Infos personnelles
```js
export const IDENTITY = {
  firstName: "Ton Prénom",
  lastName:  "Ton Nom",
  initials:  "TN",        // affiché dans l'avatar
  role:      "Développeur en formation",
  subtitle:  "BTS SIO · Option SLAM",
  bio:       "Ta bio ici...",
  email:     "ton@email.fr",
  github:    "https://github.com/...",
  linkedin:  "https://linkedin.com/in/...",
};
```

### Compétences
```js
export const SKILLS_TECH = [
  { name: "React", level: 75, icon: "⚛️" },
  // level = 0 à 100
];

export const SKILLS_SOFT = [
  { name: "Travail en équipe", icon: "🤝" },
];
```

### Expériences & Formation
```js
export const EXPERIENCES = [
  {
    date:     "Sept 2024 – Jan 2025",
    title:    "Développeur Web Stagiaire",
    place:    "Nom de l'entreprise",
    location: "Ville",
    desc:     "Description de la mission.",
    tags:     ["PHP", "MySQL"],
  },
];

export const EDUCATION = [
  {
    date:     "2023 – 2025",
    title:    "BTS SIO – Option SLAM",
    place:    "Lycée ...",
    location: "Ville",
    desc:     "Description.",
  },
];
```

### Projets
```js
export const PROJECTS = [
  {
    title:  "Nom du projet",
    desc:   "Description courte.",
    tags:   ["React", "Node.js"],
    github: "https://github.com/...",
    demo:   "https://...",
    year:   "2024",
  },
];
```

### Documents
```js
// Catégories (modifier les labels si besoin) :
export const DOC_CATEGORIES = [
  { id: "e5", label: "E5", full: "Support & Mise à disposition" },
  ...
];

// Ajoute tes fichiers :
export const DOCUMENTS = [
  {
    category: "e5",           // doit correspondre à un id ci-dessus
    title:    "Mon rapport",
    desc:     "Description.",
    date:     "Janvier 2025",
    file:     "https://...",  // lien Google Drive ou PDF hébergé
  },
];
```

### Veille technologique
```js
export const VEILLE_ITEMS = [
  {
    date:   "Mars 2025",
    title:  "Titre de l'article",
    source: "Le Monde Informatique",
    desc:   "Ce que j'ai appris...",
    tags:   ["IA", "Sécurité"],
    link:   "https://...",
  },
];
```

---

## 🎨 Personnaliser les couleurs

Ouvre `src/styles/global.css` et modifie les variables CSS dans `:root` :

```css
--accent:       #6e5ff0;   /* Couleur principale (violet) */
--accent-light: #8b7cf5;   /* Version claire */
--accent-b:     #f0705f;   /* Couleur secondaire (orange-rouge) */
```

---

## 📦 Déploiement

Le projet peut être déployé sur **Vercel**, **Netlify** ou **GitHub Pages** :

```bash
npm run build
# Déposer le dossier /build sur ta plateforme
```
