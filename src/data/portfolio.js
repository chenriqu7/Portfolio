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
    linkedin: "https://linkedin.com/in/tonprofil",
};

// ── COMPÉTENCES TECHNIQUES ───────────────────────────────────────────────────
export const SKILLS_TECH = [
    {name: "HTML", icon: "html"},
    {name: "CSS", icon: "css"},
    {name: "JavaScript", icon: "javascript"},
    {name: "React", icon: "react"},
    {name: "Angular", icon: "angular"},
    {name: "PHP", icon: "php"},
    {name: "Symfony", icon: "symfony"},
    {name: "C#/.NET", icon: "dotnet"},
    {name: "C++", icon: "cpp"},
    {name: "Python", icon: "python"},
    {name: "MySQL", icon: "mysql"},
    {name: "PostgreSQL", icon: "postgresql"},
    {name: "Git", icon: "git"},
    {name: "Docker", icon: "docker"},
];

// ── SAVOIR-FAIRE ─────────────────────────────────────────────────────────────
export const SKILLS_SOFT = [
    {name: "Autonomie", icon: "🎯"},
    {name: "Travail en équipe", icon: "🤝"},
    {name: "Communication", icon: "💬"},
    {name: "Polyvalent", icon: "🔄"},
    {name: "Gestion de projet", icon: "📋"},
    {name: "Méthode Agile", icon: "⚡"},
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
        title:    "Portail Serveur",
        desc:     "Tableau de bord sécurisé permettant de centraliser la gestion des accès aux serveurs et de suivre les connexions à distance en temps réel.",
        descLong: "Développé lors de mon stage de 6 semaines chez Pictav Informatique, ce portail permet aux administrateurs de gérer les accès aux serveurs de l'entreprise. L'application propose une interface de gestion des utilisateurs, un suivi des connexions en temps réel et un système d'authentification sécurisé.",
        tags:     ["PHP", "HTML/CSS", "JavaScript", "MySQL"],
        github:   "https://github.com/chenriqu7/PortailServeur",
        demo:     "",
        year:     "2026",
        screenshots: [],
    },
    {
        title:    "BeReady",
        desc:     "Application fullstack composée d'une API REST .NET et d'un frontend Angular/Ionic permettant une utilisation mobile et web.",
        descLong: "BeReady est une application fullstack développée avec une API REST en .NET FastEndpoints et un frontend Angular avec Ionic et Capacitor pour un rendu mobile natif. Le backend expose des endpoints RESTful consommés par le frontend cross-platform.",
        tags:     [".NET", "FastEndpoints", "API RESTful", "Angular", "Ionic", "Capacitor", "HTML/CSS"],
        github:   "https://github.com/chenriqu7/BeReady-Backend",
        demo:     "",
        year:     "2026",
        screenshots: [],
    },
    {
        title:    "PyroFêtes",
        desc:     "Application web de gestion pour un artificier — devis, stocks et clients, avec une API REST .NET et un frontend Angular.",
        descLong: "PyroFêtes est une application fullstack de gestion métier développée en équipe de quatre avec la méthode Agile. Le backend expose une API REST construite avec .NET FastEndpoints. Le frontend Angular utilise NgZorro pour les composants UI et Tailwind CSS pour le style. L'application couvre la gestion des devis, des stocks de produits pyrotechniques et du portefeuille clients.",
        tags:     [".NET", "FastEndpoints", "API RESTful", "Angular", "NgZorro", "Tailwind", "HTML/CSS"],
        github:   "https://github.com/chenriqu7/Pyrofetes-Frontend",
        demo:     "",
        year:     "2025",
        screenshots: [],
    },
];

// ── CATÉGORIES DE DOCUMENTS ───────────────────────────────────────────────────
export const DOC_CATEGORIES = [
    {id: "e5", label: "E5", full: "Support & Mise à disposition"},
    {id: "dev", label: "dev", full: "Développement Web et Logiciel"},
    {id: "stages", label: "Stages", full: "Documents de stage"},
    {id: "projets", label: "Projets", full: "Documentation projets"},
    {id: "autre", label: "Autres", full: "Autres documents"},
];

// ── DOCUMENTS ─────────────────────────────────────────────────────────────────
// category : doit correspondre à un id dans DOC_CATEGORIES
export const DOCUMENTS = [
    {
        category: "e5",
        title: "Référencement Web",
        desc: "Fiche de procédure",
        date: "Mars 2026",
        file: "/documents/ReferencementWeb.pdf",
    },
    {
        category: "stages",
        title: "Cahier des charges PortailServeur",
        desc: "Cachier des charges",
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

];

// ── VEILLE TECHNOLOGIQUE ──────────────────────────────────────────────────────
export const VEILLE_ITEMS = [
    // {
    //   date:   "Mars 2025",
    //   title:  "Titre de l'article / sujet",
    //   source: "Nom de la source",
    //   desc:   "Résumé de ce que tu as appris ou retenu de cet article.",
    //   tags:   ["IA", "Cybersécurité"],
    //   link:   "https://...",
    // },
];
