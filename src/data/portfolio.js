// ─────────────────────────────────────────────────────────────────────────────
// data/portfolio.js — Remplis ce fichier avec tes informations personnelles
// ─────────────────────────────────────────────────────────────────────────────

// ── INFOS PERSO ───────────────────────────────────────────────────────────────
export const IDENTITY = {
    firstName: "Cristiano",
    lastName: "Henrique Gaspar",
    initials: "CHG",
    role: "",
    subtitle: "BTS SIO · Option SLAM",
    bio: "Passionné par le développement logiciel, je suis actuellement en BTS SIO option SLAM. J'aime concevoir des applications propres, efficaces et bien documentées. Ce portfolio regroupe mes projets, compétences et documents réalisés au cours de ma formation.",
    email: "cristianogaspar601@gmail.com",
    github: "https://github.com/chenriqu7",
    linkedin: "https://www.linkedin.com/in/cristiano-henrique-gaspar-a11366301/",
};

// ── COMPÉTENCES TECHNIQUES ───────────────────────────────────────────────────
export const SKILLS_TECH = [
    // Frontend
    { name: "HTML",       icon: "html",       category: "Frontend" },
    { name: "CSS",        icon: "css",        category: "Frontend" },
    { name: "JavaScript", icon: "javascript", category: "Frontend" },
    { name: "React",      icon: "react",      category: "Frontend" },
    { name: "Angular",    icon: "angular",    category: "Frontend" },
    // Backend
    { name: "PHP",        icon: "php",        category: "Backend"  },
    { name: "Symfony",    icon: "symfony",    category: "Backend"  },
    { name: "C#/.NET",    icon: "dotnet",     category: "Backend"  },
    { name: "C++",        icon: "cpp",        category: "Backend"  },
    { name: "Python",     icon: "python",     category: "Backend"  },
    // Data
    { name: "MySQL",      icon: "mysql",      category: "Data"     },
    { name: "PostgreSQL", icon: "postgresql", category: "Data"     },
    // Outils
    { name: "Git",        icon: "git",        category: "Outils"   },
    { name: "Docker",     icon: "docker",     category: "Outils"   },
];

export const SKILLS_SOFT = [
    { name: "Autonomie",        icon: "🎯", desc: "Capable de m'organiser et avancer seul sur un sujet sans attendre." },
    { name: "Travail en équipe",icon: "🤝", desc: "À l'aise en équipe, je m'adapte aux méthodes de travail collectives." },
    { name: "Communication",    icon: "💬", desc: "J'exprime clairement mes idées, à l'écrit comme à l'oral." },
    { name: "Polyvalent",       icon: "🔄", desc: "Je monte en compétences rapidement sur de nouveaux sujets." },
    { name: "Gestion de projet",icon: "📋", desc: "Suivi des tâches, respect des délais et priorisation des livrables." },
    { name: "Méthode Agile",    icon: "⚡", desc: "Habitué aux sprints, daily stand-ups et revues de sprint en équipe." },
];

// niveau : "Natif" | "Courant" | "Avancé" | "Intermédiaire" | "Notions"
export const SKILLS_LANGUAGES = [
    { name: "Français",   level: "Natif",    flag: "🇫🇷" },
    { name: "Portugais",  level: "Natif",    flag: "🇵🇹" },
    { name: "Espagnol",   level: "Courant",  flag: "🇪🇸" },
    { name: "Anglais",    level: "Avancé",   flag: "🇬🇧" },
];



// ── EXPÉRIENCES PROFESSIONNELLES ─────────────────────────────────────────────
export const EXPERIENCES = [
    {
        date: "2026",
        title: "Stage",
        place: "Pictav Informatique",
        location: "Chasseneuil-du-Poitou",
        desc: "Stage de 6 semaines. Développement d'une application PHP + MySQL permettant de gérer les accès aux serveurs de l'entreprise.",
        tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    },
    {
        date: "2025",
        title: "Stage",
        place: "StylDev",
        location: "Saint-Georges-lès-Baillargeaux",
        desc: "Stage de 4 semaines. Conversion d'une API GraphQL vers une API REST avec FastEndpoints.",
        tags: [".NET", "FastEndpoints", "REST"],
    },
];

// ── PARCOURS SCOLAIRE ─────────────────────────────────────────────────────────
export const EDUCATION = [
    {
        date: "2025 – 2026",
        title: "BTS SIO – Option SLAM",
        place: "Lycée Aliénor d'Aquitaine",
        location: "Poitiers",
        desc: "Brevet de Technicien Supérieur en Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers.",
    },
    {
        date: "2023 – 2025",
        title: "BUT Informatique",
        place: "IUT",
        location: "La Rochelle",
        desc: "BUT Informatique parcours développeur full stack",
    },
    {
        date: "2023",
        title: "Baccalauréat – Mention Bien",
        place: "Lycée Bertrand d'Argentré",
        location: "Vitré",
        desc: "Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques).",
    },
];

// ── PROJETS ───────────────────────────────────────────────────────────────────
export const PROJECTS = [
    {
        title: "Portail Serveur",
        desc: "Tableau de bord sécurisé permettant de centraliser la gestion des accès aux serveurs et de suivre les connexions à distance en temps réel.",
        descLong: "Développé lors de mon stage de 6 semaines chez Pictav Informatique, ce portail permet aux administrateurs de gérer les accès aux serveurs de l'entreprise. L'application propose une interface de gestion des utilisateurs, un suivi des connexions en temps réel et un système d'authentification sécurisé.",
        tags: ["PHP", "HTML/CSS", "JavaScript", "MySQL"],
        github: "https://github.com/chenriqu7/PortailServeur",
        demo: "",
        year: "2026",
        screenshots: [],
    },
    {
        title: "BeReady",
        desc: "Application fullstack composée d'une API REST .NET et d'un frontend Angular/Ionic permettant une utilisation mobile et web.",
        descLong: "BeReady est une application fullstack développée avec une API REST en .NET FastEndpoints et un frontend Angular avec Ionic et Capacitor pour un rendu mobile natif. Le backend expose des endpoints RESTful consommés par le frontend cross-platform.",
        tags: [".NET", "FastEndpoints", "API RESTful", "Angular", "Ionic", "Capacitor", "HTML/CSS"],
        github: "https://github.com/chenriqu7/BeReady-Backend",
        demo: "",
        year: "2026",
        screenshots: [],
    },
    {
        title: "PyroFêtes",
        desc: "Application de gestion pour un artificier : devis, stocks, clients. Projet d'AP de 2e année BTS.",
        descLong: `Système centralisé pour la gestion des **stocks**, **fournisseurs**, **livreurs**, **devis** et **bons de commande** pour PyroFêtes.

Contexte :
L'entreprise souhaitait remplacer ses processus manuels (suivi des stocks, génération de commandes, relances fournisseurs) par un outil automatisé, afin de réduire les erreurs, éviter les ruptures de stock et améliorer la traçabilité.

Objectif :
Créer une application centralisée permettant la gestion des stocks, la création et le suivi des devis, bons de commande et bons de livraison, avec alertes automatiques et choix optimisé des fournisseurs.

Fonctionnalités principales :
- Définition de **seuils de stock** et alertes automatiques.
- Gestion des **fournisseurs** (coordonnées, délais, prix par produit).
- Création et personnalisation des **devis**, bons de livraison et bons de commande avec export PDF.
- Transformation d'un bon de commande en bon de livraison.
- Suivi des livraisons et réceptions, mise à jour automatique des stocks.
- Proposition automatique du fournisseur approprié lors de la génération d'un bon de commande.

Technologies utilisées :
- **SQL Server** — base de données
- **Angular** — interface, avec la bibliothèque NG-ZORRO
- **.NET 8** — API REST
- **QuestPDF** — export PDF

Ce que ça m'a apporté :
- Renforcement des compétences en conception et gestion de **bases de données relationnelles**.
- Expérience en développement d'une application complète avec interface et API.
- Renforcement de mes compétences avec le framework **Angular**.
- Mise en pratique de mes connaissances sur les **API REST**.
- Conception d'une interface utilisateur claire et ergonomique.
- Capacité à anticiper les besoins utilisateurs et proposer des solutions adaptées.
- Amélioration de l'autonomie et de la **gestion de projet en équipe**.`,
        tags: [".NET", "FastEndpoints", "API RESTful", "Angular", "NgZorro", "Tailwind", "SQL Server", "QuestPDF"],
        github: "https://github.com/chenriqu7/Pyrofetes-Frontend",
        demo: "",
        year: "2025",
        screenshots: Array.from({ length: 10 }, (_, i) =>
            `/screenshots/pyrofetes/pyrofetes${i + 1}.jpg`
        ),    },
]

// ── CATÉGORIES DE DOCUMENTS ───────────────────────────────────────────────────
export const DOC_CATEGORIES = [
    {id: "dev", label: "Développement"},
    {id: "projets", label: "Projets"},
    {id: "stages", label: "Stages"},
    {id: "autre", label: "Autres"},
];

// ── DOCUMENTS ─────────────────────────────────────────────────────────────────
// category : doit correspondre à un id dans DOC_CATEGORIES
export const DOCUMENTS = [
    {
        category: "stages",
        title: "Cahier des charges PortailServeur",
        desc: "Cahier des charges",
        date: "Janvier 2026",
        file: "/documents/PortailServeur-CahierDesCharges.pdf",
    },
    {
        category: "dev",
        title: "Angular",
        desc: "Fiche de procédure",
        date: "Novembre 2025",
        file: "/documents/ANGULAR.pdf",
    },
    {
        category: "dev",
        title: "Capacitor",
        desc: "Fiche de procédure",
        date: "Mars 2026",
        file: "/documents/CAPACITOR.pdf",
    },
    {
        category: "dev",
        title: "Pl/pgsql",
        desc: "Fiche de procédure",
        date: "Mars 2026",
        file: "/documents/PLPGSQL.pdf",
    },
    {
        category: "autre",
        title: "Docker",
        desc: "Fiche de procédure",
        date: "Mars 2026",
        file: "/documents/DOCKER.pdf",
    },
    {
        category: "autre",
        title: "Le référencement Web",
        desc: "Documentation",
        date: "Mars 2026",
        file: "/documents/ReferencementWeb.pdf",
    },
];

export const VEILLE_ITEMS = [
    {
        id: 'api-fullstack',
        emoji: '🔌',
        title: 'Évolution des API pour le Full Stack',
        tags: ['REST', 'GraphQL', 'tRPC', 'WebSockets', 'OpenAPI'],
        description:
            "Je suis l'évolution des architectures API à travers des newsletters techniques, la documentation officielle des frameworks et des projets personnels qui me permettent de tester concrètement les nouveaux standards (tRPC, GraphQL subscriptions, Server-Sent Events).",
        methode: [
            "Lecture hebdomadaire de newsletters : Bytes.dev, JavaScript Weekly et ThisWeek in React",
            "Suivi de la roadmap et des changelogs de frameworks clés : Next.js, Hono, Fastify, Apollo",
            "Veille GitHub sur les dépôts à forte croissance liés aux API (étoiles, issues, discussions)",
            "Test en projet sandbox des nouveaux paradigmes : tRPC dans un monorepo, GraphQL avec Pothos",
            "Consultation de la documentation MDN et des RFC OpenAPI pour les standards émergents",
        ],
        apports: [
            "Maîtrise des différences entre REST, GraphQL et tRPC pour choisir la bonne architecture selon le projet",
            "Capacité à concevoir une API typesafe de bout en bout (Zod + tRPC + TypeScript)",
            "Compréhension des enjeux de performance : pagination, caching, batching de requêtes",
            "Vision des patterns modernes : BFF (Backend For Frontend), API Gateway, versioning",
        ],
        sources: [
            {label: 'Bytes.dev', url: 'https://bytes.dev'},
            {label: 'JavaScript Weekly', url: 'https://javascriptweekly.com'},
            {label: 'tRPC Docs', url: 'https://trpc.io/docs'},
            {label: 'OpenAPI Spec', url: 'https://spec.openapis.org/oas/latest.html'},
            {label: 'ThisWeek in React', url: 'https://thisweekinreact.com'},
        ],
    },
    {
        id: 'green-it',
        emoji: '🌱',
        title: 'Développement durable dans les infrastructures IT',
        tags: ['Green Cloud', 'Sobriété numérique', 'GreenOps', 'Data centers', 'Écoconception'],
        description:
            "Je suis les enjeux environnementaux du numérique à travers des rapports institutionnels (ADEME, Green Software Foundation), des blogs spécialisés et des outils de mesure de l'empreinte carbone des applications web et cloud.",
        methode: [
            "Lecture des rapports annuels de l'ADEME et de la Green Software Foundation sur l'impact du numérique",
            "Suivi du blog et des publications de l'INR (Institut du Numérique Responsable)",
            "Utilisation d'outils de mesure : Website Carbon Calculator, Ecograder, Cloud Carbon Footprint",
            "Veille sur les pratiques GreenOps : rightsizing cloud, serverless frugal, optimisation des images et assets",
            "Suivi des annonces des grands providers (AWS, GCP, Azure) sur leurs objectifs carbone et outils d'estimation",
        ],
        apports: [
            "Intégration de réflexes d'écoconception dès la phase de développement (lazy loading, compression, requêtes optimisées)",
            "Capacité à estimer et réduire l'empreinte carbone d'une application ou d'une infrastructure cloud",
            "Connaissance des référentiels : RGESN (Référentiel Général d'Écoconception de Services Numériques)",
            "Sensibilité aux choix d'hébergement : régions cloud, énergie renouvelable, PUE des data centers",
        ],
        sources: [
            {label: 'ADEME Numérique', url: 'https://www.ademe.fr/domaines-dintervention/numerique/'},
            {label: 'Green Software Foundation', url: 'https://greensoftware.foundation'},
            {label: 'Institut du Numérique Responsable', url: 'https://institutnr.org'},
            {label: 'Website Carbon Calculator', url: 'https://www.websitecarbon.com'},
            {label: 'Cloud Carbon Footprint', url: 'https://www.cloudcarbonfootprint.org'},
        ],
    },
];