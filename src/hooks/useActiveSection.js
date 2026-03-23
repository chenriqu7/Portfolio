import { useState, useEffect } from 'react';

/**
 * Détecte la section visible dans le viewport pendant le scroll.
 * @param {string[]} sectionIds - Liste des IDs de sections à surveiller
 * @param {number} offset - Offset en px depuis le haut (hauteur navbar)
 * @returns {string} ID de la section active
 */
export function useActiveSection(sectionIds, offset = 100) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (scrollY >= el.offsetTop - offset) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handler, { passive: true });
    handler(); // run once on mount
    return () => window.removeEventListener('scroll', handler);
  }, [sectionIds, offset]);

  return active;
}
