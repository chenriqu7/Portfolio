import { PROJECTS } from '../../data/portfolio';
import { SectionTitle, Tag, EmptyState, AnimatedCard } from '../ui/UI';
import './Projets.css';

function ProjectCard({ project, index }) {
  return (
    <AnimatedCard className="project-card" delay={index * 80}>
      <div className="project-card__header">
        <span className="project-card__icon">◈</span>
        {project.year && <span className="project-card__year mono">{project.year}</span>}
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.desc}</p>

      {project.tags && (
        <div className="project-card__tags">
          {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      )}

      <div className="project-card__links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link mono">
            GitHub ↗
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link project-card__link--primary mono">
            Demo ↗
          </a>
        )}
      </div>
    </AnimatedCard>
  );
}

export default function Projets() {
  return (
    <section id="projets" className="section projets">
      <SectionTitle eyebrow="Mes réalisations" title="Projets" />

      {PROJECTS.length === 0 ? (
        <EmptyState message="Projets à venir — reviens bientôt !" />
      ) : (
        <div className="projets__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
