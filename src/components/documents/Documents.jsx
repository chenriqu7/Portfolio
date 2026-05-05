import { useState } from 'react';
import { DOC_CATEGORIES, DOCUMENTS } from '../../data/portfolio';
import { SectionTitle, EmptyState, AnimatedCard } from '../ui/UI';
import './Documents.css';

function PdfModal({ doc, onClose }) {
    if (!doc) return null;
    return (
        <div className="pdf-modal-overlay" onClick={onClose}>
            <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
                <div className="pdf-modal__header">
                    <div className="pdf-modal__info">
                        <span className="pdf-modal__icon">📄</span>
                        <div>
                            <h3 className="pdf-modal__title">{doc.title}</h3>
                            {doc.date && <span className="pdf-modal__date mono">{doc.date}</span>}
                        </div>
                    </div>
                    <div className="pdf-modal__actions">
                        <a href={doc.file} download className="pdf-modal__btn pdf-modal__btn--download">
                            ↓ Télécharger
                        </a>
                        <button className="pdf-modal__btn pdf-modal__btn--close" onClick={onClose}>
                            ✕
                        </button>
                    </div>
                </div>
                <div className="pdf-modal__viewer">
                    <iframe
                        src={`${doc.file}#toolbar=1&navpanes=0&scrollbar=1`}
                        title={doc.title}
                        className="pdf-modal__iframe"
                    />
                </div>
            </div>
        </div>
    );
}

function DocCard({ doc, index, onOpen }) {
    return (
        <AnimatedCard className="doc-card" delay={index * 60}>
            <div className="doc-card__icon">📄</div>
            <div className="doc-card__body">
                <h4 className="doc-card__title">{doc.title}</h4>
                <p className="doc-card__desc">{doc.desc}</p>
                {doc.date && <span className="doc-card__date mono">{doc.date}</span>}
            </div>
            {doc.file && (
                <button className="doc-card__link" onClick={() => onOpen(doc)}>
                    Voir ↗
                </button>
            )}
        </AnimatedCard>
    );
}

export default function Documents() {
    const [activeTab, setActiveTab] = useState(DOC_CATEGORIES[0].id);
    const [openedDoc, setOpenedDoc] = useState(null);
    const filtered = DOCUMENTS.filter((d) => d.category === activeTab);

    return (
        <section id="documents" className="section documents">
            <SectionTitle eyebrow="Ma documentation" title="Documents" />
            <div className="docs-tabs" role="tablist">
                {DOC_CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        role="tab"
                        aria-selected={activeTab === cat.id}
                        className={`docs-tab ${activeTab === cat.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(cat.id)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
            <div className="docs-content">
                {filtered.length === 0 ? (
                    <EmptyState message="Aucun document dans cette catégorie pour l'instant." />
                ) : (
                    <div className="docs-list">
                        {filtered.map((doc, i) => (
                            <DocCard key={i} doc={doc} index={i} onOpen={setOpenedDoc} />
                        ))}
                    </div>
                )}
            </div>
            <PdfModal doc={openedDoc} onClose={() => setOpenedDoc(null)} />
        </section>
    );
}