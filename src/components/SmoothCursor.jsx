import { useEffect, useRef, useState } from 'react';

export default function SmoothCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add('has-cursor');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let dx = mx, dy = my;
    let raf = 0;

    const handleMove = (e) => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dx += (mx - dx) * 0.5;
      dy += (my - dy) * 0.5;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dx - 3}px, ${dy - 3}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const handleOver = (e) => {
      const t = e.target;
      if (t.closest && t.closest('a, button, [data-cursor-hover], input, textarea, label')) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      document.documentElement.classList.remove('has-cursor');
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] w-10 h-10 rounded-full border border-vibrant mix-blend-difference"
        style={{
          transition: 'width 0.35s, height 0.35s, background 0.35s, border-color 0.35s',
          background: hover ? 'rgba(135,162,255,0.18)' : 'transparent',
          borderColor: hover ? '#FFF4B5' : '#87A2FF',
          transform: 'translate3d(-100px,-100px,0)',
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[101] w-1.5 h-1.5 rounded-full bg-sand mix-blend-difference"
        style={{ transform: 'translate3d(-100px,-100px,0)' }}
      />
    </>
  );
}
