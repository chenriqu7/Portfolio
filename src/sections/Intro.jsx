import { IDENTITY } from '../data/portfolio';
import { Button } from '../components/UI';
import './Intro.css';

export default function Intro() {
  return (
    <section id="intro" className="intro">
      {/* Background decoration */}
      <div className="intro__bg-glow" />
      <div className="intro__bg-grid" />

      <div className="intro__content">
        {/* Badge */}
        <div className="intro__badge mono">{IDENTITY.subtitle}</div>

        {/* Name */}
        <h1 className="intro__name">
          {IDENTITY.firstName}
          <br />
          <span className="intro__name--accent">{IDENTITY.lastName}</span>
        </h1>

        {/* Role */}
        <p className="intro__role mono">{IDENTITY.role}</p>

        {/* Bio */}
        <p className="intro__bio">{IDENTITY.bio}</p>

        {/* CTAs */}
        <div className="intro__actions">
          <Button onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}>
            Voir mes projets ↓
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' })}>
            Mes documents
          </Button>
        </div>

        {/* Social links */}
        <div className="intro__socials">
          {IDENTITY.github && (
            <a href={IDENTITY.github} target="_blank" rel="noreferrer" className="intro__social-link mono">
              GitHub ↗
            </a>
          )}
          {IDENTITY.linkedin && (
            <a href={IDENTITY.linkedin} target="_blank" rel="noreferrer" className="intro__social-link mono">
              LinkedIn ↗
            </a>
          )}
          {IDENTITY.email && (
            <a href={`mailto:${IDENTITY.email}`} className="intro__social-link mono">
              Email ↗
            </a>
          )}
        </div>
      </div>

      {/* Avatar decoration */}
      <div className="intro__visual">
        <div className="intro__avatar">
          <span className="intro__avatar-text">{IDENTITY.initials}</span>
          <div className="intro__avatar-ring intro__avatar-ring--1" />
          <div className="intro__avatar-ring intro__avatar-ring--2" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="intro__scroll-hint mono">
        <span>scroll</span>
        <div className="intro__scroll-line" />
      </div>
    </section>
  );
}
