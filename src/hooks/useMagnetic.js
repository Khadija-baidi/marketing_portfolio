import { useEffect, useRef } from 'react';

export default function useMagnetic(strength = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let raf = 0;
    let tx = 0, ty = 0;
    let cx = 0, cy = 0;

    const handleMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      tx = x * strength;
      ty = y * strength;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const handleLeave = () => {
      tx = 0; ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return ref;
}
