import { useEffect, useRef } from 'react';

/**
 * Hook: 使用 IntersectionObserver 觸發滾動進場動畫
 * 當元素進入視窗時，加上 'visible' class 觸發 CSS 動畫
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // 動畫觸發後取消觀察，避免重複觸發
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Hook: 批次觀察多個子元素，依序加上 'visible' class
 */
export function useScrollAnimationGroup(threshold = 0.1) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animatables = container.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    animatables.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return containerRef;
}

/**
 * Hook: 數字計數動畫
 */
export function useCountUp(target: number, duration = 1500, start = false) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!start || !ref.current) return;
    const el = ref.current;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration, start]);

  return ref;
}
