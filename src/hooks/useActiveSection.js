import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds, offset = 100) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handler = () => {
      // Si on est tout en bas de la page → dernière section
      const atBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      if (atBottom) {
        setActive(sectionIds[sectionIds.length - 1]);
        return;
      }

      let current = sectionIds[0];
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset + 1) {
          current = id;
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [sectionIds, offset]);

  return active;
}