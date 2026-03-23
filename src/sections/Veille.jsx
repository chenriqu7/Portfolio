import { VEILLE_ITEMS } from '../data/portfolio';
import { SectionTitle, Tag, EmptyState, AnimatedCard } from '../components/UI';
import './Veille.css';

function VeilleCard({ item, index }) {
  return (
    <AnimatedCard className="veille-card" delay={index * 80}>
      <div className="veille-card__top">
        <span className="veille-card__date mono">{item.date}</span>
        {item.tags && (
          <div className="veille-card__tags">
            {item.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        )}
      </div>

      <h3 className="veille-card__title">{item.title}</h3>
      <p className="veille-card__source">
        <span className="veille-card__source-label mono">Source</span>
        {item.source}
      </p>
      <p className="veille-card__desc">{item.desc}</p>

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="veille-card__link mono"
        >
          Lire l'article ↗
        </a>
      )}
    </AnimatedCard>
  );
}

export default function Veille() {
  return (
    <section id="veille" className="section veille">
      <SectionTitle eyebrow="Ce que je suis" title="Veille Technologique" />

      {VEILLE_ITEMS.length === 0 ? (
        <EmptyState message="Articles de veille à venir — je m'y mets bientôt !" />
      ) : (
        <div className="veille__grid">
          {VEILLE_ITEMS.map((item, i) => (
            <VeilleCard key={i} item={item} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
