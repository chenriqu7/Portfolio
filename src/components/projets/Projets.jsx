import { useState, useEffect } from 'react';
import { PROJECTS } from '../../data/portfolio';
import { SectionTitle, Tag, EmptyState, AnimatedCard } from '../ui/UI';
import './Projets.css';

function Bold({ text }) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return (
        <>
            {parts.map((part, i) =>
                part.startsWith('**') && part.endsWith('**')
                    ? <strong key={i}>{part.slice(2, -2)}</strong>
                    : part
            )}
        </>
    );
}

function DescLong({ text }) {
    const blocks = text.split('\n\n').filter(Boolean);
    return (
        <div className="desc-long">
            {blocks.map((block, i) => {
                const lines = block.split('\n');
                const isListBlock = lines.some((l) => l.startsWith('- '));

                if (isListBlock) {
                    const title = lines.find((l) => !l.startsWith('- '));
                    const items = lines.filter((l) => l.startsWith('- ')).map((l) => l.slice(2));
                    return (
                        <div key={i} className="desc-long__block">
                            {title && <p className="desc-long__label"><Bold text={title} /></p>}
                            <ul className="desc-long__list">
                                {items.map((item, j) => <li key={j}><Bold text={item} /></li>)}
                            </ul>
                        </div>
                    );
                }

                const [first, ...rest] = lines;
                const isLabeled = first.endsWith(':') && rest.length > 0;
                return (
                    <div key={i} className="desc-long__block">
                        {isLabeled ? (
                            <>
                                <p className="desc-long__label"><Bold text={first} /></p>
                                <p><Bold text={rest.join(' ')} /></p>
                            </>
                        ) : (
                            <p><Bold text={block} /></p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
    const [activeImg, setActiveImg] = useState(0);

    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    if (!project) return null;
    const hasScreenshots = project.screenshots?.length > 0;

    return (
        <div className="proj-modal-overlay" onClick={onClose}>
            <div className="proj-modal" onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="proj-modal__header">
                    <div className="proj-modal__header-left">
                        <span className="proj-modal__icon">◈</span>
                        <div>
                            <h2 className="proj-modal__title">{project.title}</h2>
                            {project.year && (
                                <span className="proj-modal__year mono">{project.year}</span>
                            )}
                        </div>
                    </div>
                    <button className="proj-modal__close" onClick={onClose}>✕</button>
                </div>

                <div className="proj-modal__body">

                    {/* Galerie screenshots */}
                    {hasScreenshots && (
                        <div className="proj-modal__gallery">
                            <div className="proj-modal__gallery-main">
                                <img
                                    src={project.screenshots[activeImg]}
                                    alt={`${project.title} screenshot ${activeImg + 1}`}
                                    className="proj-modal__gallery-img"
                                />
                                {project.screenshots.length > 1 && (
                                    <>
                                        <button
                                            className="proj-modal__gallery-arrow proj-modal__gallery-arrow--left"
                                            onClick={() => setActiveImg((i) => (i - 1 + project.screenshots.length) % project.screenshots.length)}
                                        >‹</button>
                                        <button
                                            className="proj-modal__gallery-arrow proj-modal__gallery-arrow--right"
                                            onClick={() => setActiveImg((i) => (i + 1) % project.screenshots.length)}
                                        >›</button>
                                        <div className="proj-modal__gallery-dots">
                                            {project.screenshots.map((_, i) => (
                                                <button
                                                    key={i}
                                                    className={`proj-modal__gallery-dot ${i === activeImg ? 'active' : ''}`}
                                                    onClick={() => setActiveImg(i)}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                            {project.screenshots.length > 1 && (
                                <div className="proj-modal__gallery-thumbs">
                                    {project.screenshots.map((src, i) => (
                                        <button
                                            key={i}
                                            className={`proj-modal__thumb ${i === activeImg ? 'active' : ''}`}
                                            onClick={() => setActiveImg(i)}
                                        >
                                            <img src={src} alt={`thumb ${i + 1}`} />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Description longue */}
                    <div className="proj-modal__desc">
                        {project.descLong
                            ? <DescLong text={project.descLong} />
                            : <p>{project.desc}</p>
                        }
                    </div>

                    {/* Tags */}
                    {project.tags?.length > 0 && (
                        <div className="proj-modal__tags">
                            {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                        </div>
                    )}

                    {/* Liens */}
                    {(project.github || project.demo) && (
                        <div className="proj-modal__links">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer" className="proj-modal__btn proj-modal__btn--outline">
                                    GitHub ↗
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noreferrer" className="proj-modal__btn proj-modal__btn--primary">
                                    Voir la démo ↗
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onClick }) {
    return (
        <AnimatedCard
            className="project-card"
            delay={index * 80}
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <div className="project-card__header">
                <span className="project-card__icon">◈</span>
                {project.year && <span className="project-card__year mono">{project.year}</span>}
            </div>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.desc}</p>
            {project.tags?.length > 0 && (
                <div className="project-card__tags">
                    {project.tags.slice(0, 3).map((t) => <Tag key={t}>{t}</Tag>)}
                    {project.tags.length > 3 && (
                        <Tag variant="neutral">+{project.tags.length - 3}</Tag>
                    )}
                </div>
            )}
            <div className="project-card__footer">
                <span className="project-card__cta mono">Voir le projet →</span>
            </div>
        </AnimatedCard>
    );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Projets() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projets" className="section projets">
            <SectionTitle eyebrow="Mes réalisations" title="Projets" />

            {PROJECTS.length === 0 ? (
                <EmptyState message="Projets à venir — reviens bientôt !" />
            ) : (
                <div className="projets__grid">
                    {PROJECTS.map((p, i) => (
                        <ProjectCard
                            key={i}
                            project={p}
                            index={i}
                            onClick={() => setSelected(p)}
                        />
                    ))}
                </div>
            )}

            <ProjectModal
                project={selected}
                onClose={() => setSelected(null)}
            />
        </section>
    );
}