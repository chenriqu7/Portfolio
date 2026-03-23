import { IDENTITY } from '../../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__dot" />
          <span className="footer__name mono">
            {IDENTITY.firstName} {IDENTITY.lastName}
          </span>
        </div>

        <p className="footer__center mono">
          BTS SIO · SLAM · {year}
        </p>

        <div className="footer__links">
          {IDENTITY.github && (
            <a href={IDENTITY.github} target="_blank" rel="noreferrer" className="footer__link mono">
              GitHub
            </a>
          )}
          {IDENTITY.linkedin && (
            <a href={IDENTITY.linkedin} target="_blank" rel="noreferrer" className="footer__link mono">
              LinkedIn
            </a>
          )}
          {IDENTITY.email && (
            <a href={`mailto:${IDENTITY.email}`} className="footer__link mono">
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
