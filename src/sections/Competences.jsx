import { SKILLS_TECH, SKILLS_SOFT } from '../data/portfolio';
import { SectionTitle, AnimatedCard } from '../components/UI';
import './Competences.css';

// ── SVG Logos ─────────────────────────────────────────────────────────────────
const TECH_ICONS = {
  html: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2l2.4 26L16 30l7.6-2L26 2H6z" fill="#E44D26"/>
        <path d="M16 27.8l6.2-1.7L24.2 6H16v21.8z" fill="#F16529"/>
        <path d="M16 13H11.8l-.3-3H16V7H8.1l.8 9H16v-3zm0 8.3l-4.1-1.1-.3-3H8.5l.5 6 7 1.9V21.3z" fill="#EBEBEB"/>
        <path d="M16 13v3h3.9l-.4 4.2-3.5 1V24.2l7-1.9.9-10.3H16zm0-6v3h8l-.3-3H16z" fill="#fff"/>
      </svg>
  ),
  css: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2l2.4 26L16 30l7.6-2L26 2H6z" fill="#1572B6"/>
        <path d="M16 27.8l6.2-1.7 1.8-20.1H16v21.8z" fill="#33A9DC"/>
        <path d="M16 13H11.5l.3 3H16v-3zm0-6H8.4l.3 3H16V7z" fill="#fff"/>
        <path d="M16 21.8l-3.7-1-.2-2.8H9l.4 5L16 25v-3.2z" fill="#EBEBEB"/>
        <path d="M16 16v3h3.3l-.4 3.8-2.9.8V27l6.9-1.9 1-10.1H16zm0-9v3h7.5l.3-3H16z" fill="#fff"/>
      </svg>
  ),
  javascript: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" fill="#F7DF1E"/>
        <path d="M9.6 25.8l2.4-1.4c.5.8.9 1.5 1.9 1.5 1 0 1.6-.4 1.6-1.9V14.3h2.9v9.8c0 3.1-1.8 4.5-4.5 4.5-2.4 0-3.8-1.2-4.3-2.8zM20 25.5l2.4-1.4c.6 1 1.4 1.8 2.8 1.8 1.2 0 1.9-.6 1.9-1.4 0-1-.7-1.3-2-1.9l-.7-.3c-2-.8-3.3-1.9-3.3-4.1 0-2 1.6-3.6 4-3.6 1.8 0 3 .6 3.9 2.2l-2.3 1.5c-.5-.8-1-1.2-1.7-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.2 1.7 1.7l.7.3c2.3 1 3.6 2 3.6 4.3 0 2.4-1.9 3.8-4.5 3.8-2.5 0-4.1-1.2-4.9-2.9z" fill="#000"/>
      </svg>
  ),
  react: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="2.8" fill="#61DAFB"/>
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
      </svg>
  ),
  angular: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L3 7l2 17 11 6 11-6 2-17L16 2z" fill="#DD0031"/>
        <path d="M16 2v28l11-6 2-17L16 2z" fill="#C3002F"/>
        <path d="M16 6l-7.5 17h2.8L13 19h6l1.7 4h2.8L16 6zm0 5.5l2.3 5.5h-4.6L16 11.5z" fill="#fff"/>
      </svg>
  ),
  php: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="16" cy="16" rx="14" ry="8" fill="#8892BF"/>
        <path d="M8 13h2.5c1.5 0 2.5.7 2.5 2s-1 2-2.5 2H9.5L9 19H7.5L8 13zm1.5 3h.8c.7 0 1.2-.3 1.2-.9 0-.6-.4-.9-1.1-.9H9.8L9.5 16zM13.5 13H15l-.3 2h1.5c1.4 0 2 .6 1.8 1.8L17.7 19H16.2l.3-2c.1-.6-.1-.9-.7-.9h-1.4L14 19h-1.5l1-6zM19 13h2.5c1.5 0 2.5.7 2.5 2s-1 2-2.5 2H20.5L20 19H18.5L19 13zm1.5 3h.8c.7 0 1.2-.3 1.2-.9 0-.6-.4-.9-1.1-.9h-.7L20.5 16z" fill="#fff"/>
      </svg>
  ),
  symfony: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="#1A171B"/>
        <path d="M21.8 10.2c-.6-.8-1.5-1.2-2.5-1.1-1.8.1-3.2 1.7-3.1 3.5.1 1 .6 1.7 1.4 2.3l1.3 1c.5.4.8.9.8 1.5.1 1-.6 1.9-1.6 2-.7.1-1.3-.2-1.7-.8l-.9.7c.6.9 1.6 1.4 2.7 1.3 2-.1 3.5-1.9 3.4-3.9-.1-1.1-.7-2-1.6-2.6l-1.3-1c-.4-.3-.7-.8-.7-1.3-.1-.8.5-1.6 1.3-1.7.5-.1 1 .1 1.3.5l.9-.9zM14 11.5c-.4-.5-1-.8-1.7-.7-1.3.1-2.2 1.2-2.1 2.5 0 .7.4 1.3.9 1.7l.3.2c-.9.3-1.6 1-1.8 2-.3 1.5.7 2.9 2.2 3.1.7.1 1.4-.1 1.9-.5l-.7-.9c-.3.3-.7.4-1.1.3-.8-.1-1.3-.9-1.2-1.7.1-.7.6-1.2 1.3-1.3l.6-.1-.2-1.1h-.5c-.6-.1-1.1-.6-1.1-1.2-.1-.7.4-1.4 1.1-1.4.4 0 .7.2.9.5l.9-.9z" fill="#fff"/>
      </svg>
  ),
  dotnet: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="#512BD4"/>
        <path d="M8 19.5V12.5h1.5l3 5v-5H14v7h-1.5l-3-5v5H8zM15.3 19.5v-7H20v1.2h-3.2v1.7H20V16.7h-3.2v1.6H20v1.2h-4.7zM23.5 19.5l-2.3-7h1.5l1.6 5.2 1.6-5.2H27.5l-2.3 7h-1.7zM7 19.5a.75.75 0 110-1.5.75.75 0 010 1.5z" fill="#fff"/>
      </svg>
  ),
  cpp: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L4 8.5v15L16 30l12-6.5v-15L16 2z" fill="#00599C"/>
        <path d="M16 2v28l12-6.5v-15L16 2z" fill="#004A87"/>
        <path d="M16 8.5C12 8.5 8.5 12 8.5 16S12 23.5 16 23.5c2.7 0 5-1.4 6.4-3.4l-2.8-1.6c-.8 1.1-2 1.8-3.6 1.8-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c1.5 0 2.8.7 3.6 1.8l2.8-1.6C21 9.9 18.7 8.5 16 8.5z" fill="#fff"/>
        <path d="M22 15h-1.5v-1.5h-1V15H18v1h1.5v1.5h1V16H22v-1zM26 15h-1.5v-1.5h-1V15H22v1h1.5v1.5h1V16H26v-1z" fill="#fff"/>
      </svg>
  ),
  python: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C10.5 2 11 4.5 11 4.5V9h5v1H7.5S4 9.6 4 15.1s3 5.9 3 5.9H9v-3s-.1-3 3-3h8s3 .1 3-3V5.5S23.5 2 16 2zm-1.5 2c.8 0 1.5.7 1.5 1.5S15.3 7 14.5 7 13 6.3 13 5.5 13.7 4 14.5 4z" fill="#3776AB"/>
        <path d="M16 30c5.5 0 5-2.5 5-2.5V23h-5v-1h8.5s3.5.4 3.5-5.1-3-5.9-3-5.9H23v3s.1 3-3 3H12s-3-.1-3 3v6.5S8.5 30 16 30zm1.5-2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5S19 25.7 19 26.5 18.3 28 17.5 28z" fill="#FFD43B"/>
      </svg>
  ),
  mysql: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 21.5c1.5 0 2.5-.3 3.3-1 .7-.6 1.2-1.5 1.2-2.6 0-1-.3-1.7-.9-2.3-.6-.5-1.5-.8-2.7-.8H1v6.7H2zm-.3-6h.4c.7 0 1.3.2 1.7.6.4.4.6.9.6 1.7 0 .8-.2 1.4-.7 1.8-.4.4-1 .6-1.8.6h-.2v-4.7zM7.5 21.5h1V17h1.8v-1H5.7v1h1.8v4.5zM12 15l-1.7 6.5h1l.4-1.7h1.8l.4 1.7h1L13.2 15H12zm.3 1.3l.7 2.7h-1.4l.7-2.7zM21.3 15v4.2L19 15h-1v6.5h.9v-4.2l2.3 4.2h1V15h-.9zM24 21.5h3.1v-1h-2.1v-1.8h1.9v-1H25V16h2v-1h-3v6.5zM29 15h-1v6.5h2.9v-1H29V15z" fill="#00758F"/>
        <path d="M30 8.5c-1.5-1-3.3-1.5-5.2-1.5-3.8 0-6.8 2.5-6.8 5.8 0 1.8.9 3.3 2.3 4.4-1.3.5-2.3 1.5-2.3 2.8 0 1 .5 1.8 1.3 2.4-1.6.3-2.8 1.4-2.8 2.8 0 2 2.2 3.3 5.5 3.3 3.8 0 6-1.7 6-4 0-1.8-1.3-3-3.8-3.5l-1.8-.4c-1-.2-1.5-.6-1.5-1.2 0-.4.3-.8.8-1 .5.1 1 .2 1.5.2 3.8 0 6.8-2.5 6.8-5.8 0-.9-.3-1.8-.8-2.5l1.8-1.8zM24.8 18c-2.2 0-4-1.5-4-3.3s1.8-3.3 4-3.3 4 1.5 4 3.3-1.8 3.3-4 3.3zm.2 5.8c1.5.3 2.3 1 2.3 2 0 1.3-1.3 2.2-3.5 2.2-2.2 0-3.5-.8-3.5-2.2 0-.9.8-1.7 2-2l2.7.9-.2 1.2.2-2.1z" fill="#F29111"/>
      </svg>
  ),
  postgresql: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.2 3.3c-1.3-.3-2.7-.2-4 .3-1-.4-2.1-.6-3.2-.6-2.2 0-4.1.8-5.4 2.2C7 6.7 6.2 8.7 6 11c-.2 2-.1 4.2.5 6 .4 1.3 1 2.4 1.9 3 .5.4 1 .5 1.6.3.4-.1.8-.4 1.1-.8l.1.3c.3.8.9 1.3 1.6 1.3s1.3-.4 1.8-1.2l.1-.2.1.2c.5.8 1.1 1.2 1.8 1.2.7 0 1.3-.5 1.6-1.3 0-.1.1-.2.1-.3.3.4.7.7 1.1.8.6.2 1.1 0 1.6-.3.9-.6 1.5-1.7 1.9-3 .6-1.8.7-4 .5-6-.2-2.3-1-4.3-2.6-5.8-.4-.3-.7-.6-1.1-.9l-.6-.3z" fill="#336791"/>
        <path d="M20.5 4.8c1.2.9 2 2.4 2.4 4.2.4 2 .3 4.2-.3 6-.3 1-.8 1.8-1.4 2.2-.3.2-.5.2-.7.1-.3-.2-.7-.7-.9-1.6-.1-.4-.2-.9-.2-1.4 0-.3 0-.5.1-.8.2-.6.5-1.2.5-2 0-1.5-.8-2.7-2.1-3.2-.5-.2-1-.3-1.6-.3s-1.1.1-1.6.3c-1.3.5-2.1 1.7-2.1 3.2 0 .8.3 1.4.5 2 .1.3.1.5.1.8 0 .5-.1 1-.2 1.4-.2.9-.6 1.4-.9 1.6-.2.1-.4.1-.7-.1-.6-.4-1.1-1.2-1.4-2.2-.6-1.8-.7-4-.3-6 .4-1.8 1.2-3.3 2.4-4.2 1.1-.8 2.5-1.3 4.2-1.3 1.7 0 3.1.5 4.2 1.3z" fill="#fff"/>
        <path d="M16 9.3c.4 0 .8.1 1.1.2.9.4 1.4 1.1 1.4 2.1 0 .6-.2 1.1-.4 1.6-.2.5-.3 1-.3 1.5 0 .6.1 1.2.2 1.7.1.3.1.6.2.8h-4.4c.1-.2.1-.5.2-.8.1-.5.2-1.1.2-1.7 0-.5-.1-1-.3-1.5-.2-.5-.4-1-.4-1.6 0-1 .5-1.7 1.4-2.1.4-.1.8-.2 1.1-.2z" fill="#336791"/>
      </svg>
  ),
  git: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.7 14.6L17.4 2.3c-.8-.8-2-.8-2.8 0l-2.8 2.8 3.5 3.5c.8-.3 1.8-.1 2.4.5.7.7.8 1.7.5 2.5l3.4 3.4c.8-.3 1.8-.2 2.5.5.9.9.9 2.4 0 3.4-.9.9-2.4.9-3.4 0-.7-.7-.8-1.8-.5-2.6l-3.2-3.2v8.3c.2.1.5.3.7.5.9.9.9 2.4 0 3.4-.9.9-2.4.9-3.4 0-.9-.9-.9-2.4 0-3.4.2-.2.5-.4.8-.5V13c-.3-.1-.6-.3-.8-.5-.7-.7-.8-1.8-.5-2.6L10.8 6.4 2.3 14.9c-.8.8-.8 2 0 2.8l12.3 12.3c.8.8 2 .8 2.8 0L29.7 17.4c.8-.8.8-2 0-2.8z" fill="#F05032"/>
      </svg>
  ),
  docker: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 13H11v2h2v-2zM16 13h-2v2h2v-2zM19 13h-2v2h2v-2zM13 10H11v2h2v-2zM16 10h-2v2h2v-2zM19 10h-2v2h2v-2zM19 7h-2v2h2V7zM22 13h-2v2h2v-2z" fill="#2496ED"/>
        <path d="M28.8 14.5c-.5-.3-1.6-.5-2.7-.3-.1-1-.7-1.9-1.6-2.5l-.5-.3-.4.5c-.5.7-.7 1.8-.6 2.6-.1 0-.1.1-.2.1-.4.3-1 .4-1.5.4H2.5l-.1.5c-.2 1.2-.1 4.2 1.8 6.6 1.4 1.8 3.5 2.7 6.3 2.7 6 0 10.4-2.8 12.5-7.8 1.4.1 2.7-.3 3.4-1.2l.3-.5-.9-.8z" fill="#2496ED"/>
      </svg>
  ),
};

// ── Skill Card ────────────────────────────────────────────────────────────────
function SkillCard({ name, icon, index }) {
  const svgIcon = TECH_ICONS[icon];
  return (
      <AnimatedCard className="skill-card" delay={index * 50}>
      <span className="skill-card__icon">
        {svgIcon ? (
            <span className="skill-card__svg">{svgIcon}</span>
        ) : (
            icon
        )}
      </span>
        <span className="skill-card__name">{name}</span>
      </AnimatedCard>
  );
}

// ── Soft Skill Card ───────────────────────────────────────────────────────────
function SoftCard({ name, icon, index }) {
  return (
      <AnimatedCard className="skill-card skill-card--soft" delay={index * 50}>
        <span className="skill-card__icon">{icon}</span>
        <span className="skill-card__name">{name}</span>
      </AnimatedCard>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Competences() {
  return (
      <section id="competences" className="section competences">
        <SectionTitle eyebrow="Ce que je maîtrise" title="Compétences" />

        <div className="competences__block">
          <h3 className="competences__group-title mono">Technologies</h3>
          <div className="skills-grid">
            {SKILLS_TECH.map((skill, i) => (
                <SkillCard key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>

        <div className="competences__block">
          <h3 className="competences__group-title mono">Savoir-faire</h3>
          <div className="skills-grid skills-grid--soft">
            {SKILLS_SOFT.map((skill, i) => (
                <SoftCard key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>
      </section>
  );
}