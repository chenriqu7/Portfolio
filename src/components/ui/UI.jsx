import './UI.css';
import { useInView } from '../../hooks/useInView';

// ── Section Header ────────────────────────────────────────────────────────────
export function SectionTitle({ eyebrow, title }) {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={`section-header ${isVisible ? 'visible' : ''}`}>
      <p className="section-eyebrow mono">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <div className="section-rule" />
    </div>
  );
}

// ── Tag ───────────────────────────────────────────────────────────────────────
export function Tag({ children, variant = 'default' }) {
  return (
    <span className={`tag tag--${variant}`}>{children}</span>
  );
}

// ── Empty State ───────────────────────────────────────────────────────────────
export function EmptyState({ message = 'Contenu à venir…' }) {
  return (
    <div className="empty-state">
      <span className="empty-state__icon">✦</span>
      <p className="empty-state__text">{message}</p>
    </div>
  );
}

// ── Animated Card wrapper ─────────────────────────────────────────────────────
export function AnimatedCard({ children, className = '', delay = 0, style = {}, onClick }) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref}
      className={`anim-card ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// ── Button ────────────────────────────────────────────────────────────────────
export function Button({ children, variant = 'primary', onClick, href, ...props }) {
  const cls = `btn btn--${variant}`;
  if (href) {
    return <a href={href} target="_blank" rel="noreferrer" className={cls} {...props}>{children}</a>;
  }
  return <button className={cls} onClick={onClick} {...props}>{children}</button>;
}
