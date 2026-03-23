import { EXPERIENCES, EDUCATION } from '../../data/portfolio';
import { SectionTitle, Tag, AnimatedCard } from '../ui/UI';
import './Parcours.css';

function TimelineItem({ item, type, index }) {
  const isWork = type === 'work';
  return (
    <AnimatedCard className="timeline-item" delay={index * 80}>
      <div className={`timeline-dot ${isWork ? 'timeline-dot--work' : 'timeline-dot--school'}`} />
      <div className="timeline-card">
        <div className="timeline-card__meta">
          <span className="timeline-card__date mono">{item.date}</span>
          <Tag variant={isWork ? 'work' : 'default'}>
            {isWork ? 'Expérience' : 'Formation'}
          </Tag>
        </div>
        <h3 className="timeline-card__title">{item.title}</h3>
        <p className="timeline-card__place">
          {item.place}
          {item.location && <span className="timeline-card__location"> · {item.location}</span>}
        </p>
        <p className="timeline-card__desc">{item.desc}</p>
        {item.tags && (
          <div className="timeline-card__tags">
            {item.tags.map((t) => <Tag key={t} variant="neutral">{t}</Tag>)}
          </div>
        )}
      </div>
    </AnimatedCard>
  );
}

export default function Parcours() {
  return (
    <section id="parcours" className="section parcours">
      <SectionTitle eyebrow="Mon chemin" title="Parcours" />

      <div className="parcours__grid">
        <div className="parcours__column">
          <h3 className="parcours__column-title">
            <span>💼</span> Expériences
          </h3>
          <div className="timeline">
            {EXPERIENCES.map((exp, i) => (
              <TimelineItem key={i} item={exp} type="work" index={i} />
            ))}
          </div>
        </div>

        <div className="parcours__column">
          <h3 className="parcours__column-title">
            <span>🎓</span> Formation
          </h3>
          <div className="timeline">
            {EDUCATION.map((edu, i) => (
              <TimelineItem key={i} item={edu} type="school" index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
