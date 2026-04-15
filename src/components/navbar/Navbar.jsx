import { useState } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'intro',       label: 'Intro' },
  { id: 'competences', label: 'Compétences' },
  { id: 'parcours',    label: 'Parcours' },
  { id: 'projets',     label: 'Projets' },
  { id: 'documents',   label: 'Documents' },
  { id: 'veille',      label: 'Veille' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        {/* Brand */}
        <button
          className="navbar__brand mono"
          onClick={() => scrollTo('intro')}
        >
          <span className="navbar__brand-dot" />
          Cristiano HENRIQUE GASPAR
        </button>

        {/* Desktop nav */}
        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`navbar__link ${active === item.id ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
                {active === item.id && <span className="navbar__link-dot" />}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`navbar__mobile-link ${active === item.id ? 'active' : ''}`}
              onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
