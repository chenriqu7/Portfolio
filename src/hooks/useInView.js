import { useState, useEffect, useRef } from 'react';

/**
 * Déclenche une animation quand l'élément entre dans le viewport.
 * @param {number} threshold - Pourcentage visible avant déclenchement (0→1)
 * @returns {{ ref, isVisible }}
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // animate once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
