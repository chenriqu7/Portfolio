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
    bio: "Actuellement en BTS SIO option SLAM, je m’intéresse particulièrement au développement full stack et à la création d’applications web complètes. J’aime travailler aussi bien sur la partie front‑end que sur la partie back‑end. Ce portfolio rassemble mes projets, mes compétences et les travaux réalisés durant ma formation.",
    email: "cristianogaspar601@gmail.com",
    github: "https://github.com/chenriqu7",
    linkedin: "https://www.linkedin.com/in/cristiano-henrique-gaspar-a11366301/",
};

// ── COMPÉTENCES TECHNIQUES ───────────────────────────────────────────────────
export const SKILLS_TECH = [
    {name: "HTML", icon: "html", category: "Frontend"},
    {name: "CSS", icon: "css", category: "Frontend"},
    {name: "JavaScript", icon: "javascript", category: "Frontend"},
    {name: "React", icon: "react", category: "Frontend"},
    {name: "Angular", icon: "angular", category: "Frontend"},
    {name: "PHP", icon: "php", category: "Backend"},
    {name: "Symfony", icon: "symfony", category: "Backend"},
    {name: "C#/.NET", icon: "dotnet", category: "Backend"},
    {name: "C++", icon: "cpp", category: "Backend"},
    {name: "Python", icon: "python", category: "Backend"},
    {name: "MySQL", icon: "mysql", category: "Data"},
    {name: "PostgreSQL", icon: "postgresql", category: "Data"},
    {name: "Git", icon: "git", category: "Outils"},
    {name: "Docker", icon: "docker", category: "Outils"},
];

export const SKILLS_SOFT = [
    {name: "Autonomie", icon: "🎯"},
    {name: "Travail en équipe", icon: "🤝"},
    {name: "Communication", icon: "💬"},
    {name: "Polyvalent", icon: "🔄"},
    {name: "Gestion de projet", icon: "📋"},
    {name: "Méthode Agile", icon: "⚡"},
];

export const SKILLS_LANGUAGES = [
    {name: "Français", level: "Natif", flag: "🇫🇷"},
    {name: "Portugais", level: "Natif", flag: "🇵🇹"},
    {name: "Espagnol", level: "Courant", flag: "🇪🇸"},
    {name: "Anglais", level: "B2", flag: "🇬🇧"},
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
        desc: "Interface web interne de gestion des accès serveurs : verrouillage, historique et suivi des connexions. Projet de stage chez Pictav Informatique.",
        descLong: `Interface web centralisée pour la **gestion des accès aux serveurs** de l'entreprise Pictav Informatique, développée sur 6 semaines de stage.

Contexte :
L'entreprise déployait des logiciels en SaaS sur plusieurs serveurs accessibles via bureau à distance. Une seule connexion étant possible par utilisateur, les connexions simultanées entraînaient des déconnexions involontaires. La coordination se faisait via Teams, avec des risques d'oubli ou de mauvaise communication.

Objectif :
Remplacer la conversation Teams par une interface dédiée permettant de vérifier la disponibilité des serveurs, de les verrouiller pendant une intervention et de consulter l'historique des accès.

Fonctionnalités principales :
- **Authentification** sécurisée par login et mot de passe.
- Affichage du **statut en temps réel** de chaque serveur (libre / verrouillé, par qui, depuis quand).
- **Verrouillage / déverrouillage** d'un serveur : seul l'utilisateur ayant verrouillé peut libérer le serveur.
- **Historique complet** des interventions : utilisateur, heure de début, heure de fin, raison.
- Gestion du **paramétrage serveur** : ajout et modification de serveurs.
- Gestion du **profil utilisateur** : modification du mail et du mot de passe.
- **Notification** en cas d'intervention trop longue (mail ou pop-up).
- Précision de la **machine impactée** (serveur hôte, VM1, VM2…).
- Affichage fluide de **10 serveurs** sans scroll ni pagination.

Technologies utilisées :
- **PHP** — backend et logique serveur
- **MySQL** — base de données
- **HTML / CSS / JavaScript** — interface utilisateur

Ce que ça m'a apporté :
- Première expérience complète de développement en **contexte professionnel**.
- Conception d'une application web de A à Z, de l'analyse au déploiement.
- Compréhension des enjeux d'une interface **interne en entreprise** (ergonomie, fiabilité, sécurité).
- Gestion autonome du projet avec des **points quotidiens** avec le superviseur.
- Renforcement de mes compétences en **PHP** et en gestion de **bases de données relationnelles**.`,
        tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
        github: "https://github.com/chenriqu7/PortailServeur",
        demo: "",
        year: "2026",
        screenshots: [],
    },
    {
        title: "BeReady",
        desc: "Application mobile de défis quotidiens avec réseau social intégré : publications, likes, classement et messagerie de groupe. Projet d'AP de 2e année BTS.",
        descLong: `Application mobile **sociale et gamifiée** développée en équipe de quatre dans le cadre d'un projet d'AP de 2e année BTS, autour d'un système de défis quotidiens.

Contexte :
Le projet simule une commande client pour l'entreprise fictive MESC : une application destinée à un **public jeune**, où chaque utilisateur relève un défi proposé chaque jour et publie une photo comme preuve de réalisation. L'objectif est de combiner l'engagement des défis avec les mécaniques d'un réseau social.

Fonctionnalités principales :
- **Défi quotidien** identique pour tous les utilisateurs, avec publication de photo comme preuve.
- **Fil de publications** visible par tous jusqu'au défi suivant, avec filtre amis / global.
- Système d'**amis** : ajout, consultation des profils et des publications.
- Système de **likes** contribuant à un classement global des utilisateurs.
- **Profil utilisateur** complet : défis réalisés, plus longue série, likes reçus, succès débloqués, titres actifs.
- **Messagerie de groupe** privée : création, gestion des membres (ajout, suppression, promotion) par l'administrateur du groupe.
- Système de **succès et titres** pour valoriser les utilisateurs les plus actifs.

Technologies utilisées :
- **Angular + Ionic** — application mobile cross-platform
- **Tailwind CSS** — design et ergonomie
- **C# / .NET** — logique métier et API REST
- **Gitea** — versioning

Ce que ça m'a apporté :
- Expérience du développement d'une **application mobile** avec Angular et Ionic.
- Travail en équipe de quatre avec une vraie organisation projet.
- Conception d'une **API REST en C#** couvrant des fonctionnalités sociales complexes.
- Gestion de l'**upload et du stockage d'images** côté backend.
- Renforcement de mes compétences en **sécurité** : authentification, gestion des accès et protection des données.
- Pratique du travail en **télétravail** avec coordination via Discord et Teams.`,
        tags: ["Angular", "Ionic", "Tailwind", "C#/.NET", "API RESTful", "Docker"],
        github: "",
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
        screenshots: Array.from({length: 10}, (_, i) =>
            `/screenshots/pyrofetes/pyrofetes${i + 1}.jpg`
        ),
    },
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
    {
        category: "stages",
        title: "Mise en production Portail Serveur",
        desc: "Documentation",
        date: "Mars 2026",
        file: "/documents/PortailServeur-MiseEnProd_v1.pdf",
    },
    {
        category: "stages",
        title: "Carnet de bord Portail Serveur",
        desc: "Carnet de bord",
        date: "Mars 2026",
        file: "/documents/CarnetDeBord-Stage-Cristiano.pdf",
    },
    {
        category: "stages",
        title: "Documentation Portail Serveur",
        desc: "Documentation",
        date: "Février 2026",
        file: "/documents/PortailServeur-DocGenerale-Cristiano.pdf",
    },
    {
        category: "stages",
        title: "Utilisation de Power Automate",
        desc: "Fiche de procédure",
        date: "Février 2026",
        file: "/documents/PortailServeur-UtilisationPowerAutomate.pdf",
    },
];

export const VEILLE_ITEMS = [
    {
        id: 'api-fullstack',
        emoji: '🔌',
        title: 'Évolution des API pour le Full Stack',
        tags: ['REST', 'GraphQL', 'tRPC', 'WebSockets', 'OpenAPI'],
        description:
            "Je suis l'évolution des architectures API et des bonnes pratiques de développement backend pour mieux concevoir des applications web modernes dans mes projets de BTS SIO SLAM.",
        methode: [
            "Abonnement à des newsletters gratuites comme JavaScript Weekly et Bytes.dev pour suivre les nouveautés du développement web.",
            "Configuration d'alertes Google sur des mots-clés ciblés comme 'API REST', 'GraphQL', 'tRPC' et 'OpenAPI' afin de recevoir les principales actualités par e-mail.",
            "Suivi des dépôts GitHub des frameworks et outils que j’utilise pour repérer les nouvelles versions, corrections et évolutions importantes.",
            "Consultation régulière de la documentation officielle de MDN, OpenAPI et des frameworks étudiés pour comprendre les changements techniques.",
            "Tri et synthèse des informations utiles dans mes notes ou dans mon portfolio pour les réutiliser dans mes projets de développement.",
        ],
        apports: [
            "Mieux comprendre les différences entre REST, GraphQL et autres pour choisir l’approche la plus adaptée à un projet.",
            "Être capable de concevoir des API plus propres, plus sécurisées et plus faciles à maintenir.",
            "Améliorer la structure de mes applications en intégrant des bonnes pratiques comme la pagination, le versioning ou le caching.",
            "Développer une veille utile pour anticiper les évolutions des outils que j’utilise en développement web.",
        ],
        sources: [
            {label: 'JavaScript Weekly', url: 'https://javascriptweekly.com'},
            {label: 'Bytes.dev', url: 'https://bytes.dev'},
            {label: 'GitHub Trending', url: 'https://github.com/trending/typescript'},
            {label: 'Alertes Google', url: 'https://www.google.fr/alerts'},
            {label: 'MDN Web Docs', url: 'https://developer.mozilla.org'},
        ],
    },
    {
        id: 'green-it',
        emoji: '🌱',
        title: 'Développement durable dans les infrastructures IT',
        tags: ['Green Cloud', 'Sobriété numérique', 'GreenOps', 'Data centers', 'Écoconception'],
        description:
            "Je m'intéresse aux impacts environnementaux du numérique et aux solutions pour concevoir des applications plus sobres et plus respectueuses de l’environnement.",
        methode: [
            "Mise en place d'alertes Google sur des termes comme 'Green IT', 'écoconception web', 'numérique responsable' et 'sobriété numérique'.",
            "Lecture de newsletters gratuites et d'articles spécialisés sur le numérique responsable pour suivre les bonnes pratiques actuelles.",
            "Utilisation d’outils gratuits comme Website Carbon Calculator pour analyser l’impact de certains de mes projets web.",
            "Consultation des ressources de l’ADEME, de l’INR et du référentiel RGESN pour m’appuyer sur des sources fiables.",
            "Observation des choix techniques liés à l’hébergement, à l’optimisation des pages et à la réduction des ressources inutiles dans mes projets.",
        ],
        apports: [
            "Développer le réflexe d’écoconception dès la création d’une application web.",
            "Comprendre comment réduire le poids des pages, limiter les requêtes et améliorer les performances.",
            "Prendre en compte l’impact environnemental dans mes choix techniques et d’hébergement.",
            "Montrer dans mon portfolio que je peux associer développement web et démarche responsable.",
        ],
        sources: [
            {label: 'Alertes Google', url: 'https://www.google.fr/alerts'},
            {label: 'Green Software Foundation', url: 'https://greensoftware.foundation'},
            {label: 'Website Carbon Calculator', url: 'https://www.websitecarbon.com'},
            {label: 'ADEME Numérique', url: 'https://www.ademe.fr/domaines-dintervention/numerique/'},
            {
                label: 'RGESN',
                url: 'https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/'
            },
        ],
    },
];