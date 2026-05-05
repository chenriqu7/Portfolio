import { VEILLE_ITEMS } from '../../data/portfolio';
import { SectionTitle, Tag, AnimatedCard } from '../ui/UI';
import './Veille.css';

function VeilleCard({ item, index }) {
    return (
        <AnimatedCard className="veille-card" delay={index * 120}>
            <div className="veille-card__header">
                <span className="veille-card__emoji">{item.emoji}</span>
                <div>
                    <h3 className="veille-card__title">{item.title}</h3>
                    {item.tags && (
                        <div className="veille-card__tags">
                            {item.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                        </div>
                    )}
                </div>
            </div>

            <p className="veille-card__desc">{item.description}</p>

            <div className="veille-card__block">
                <p className="veille-card__block-label mono">Comment je m'y prends</p>
                <ul className="veille-card__list">
                    {item.methode.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
            </div>

            <div className="veille-card__block">
                <p className="veille-card__block-label mono">Ce que ça m'apporte</p>
                <ul className="veille-card__list veille-card__list--accent">
                    {item.apports.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
            </div>
        </AnimatedCard>
    );
}

export default function Veille() {
    return (
        <section id="veille" className="section veille">
            <SectionTitle eyebrow="Ce que je suis" title="Veille Technologique" />
            <div className="veille__grid">
                {VEILLE_ITEMS.map((item, i) => (
                    <VeilleCard key={item.id} item={item} index={i} />
                ))}
            </div>
        </section>
    );
}