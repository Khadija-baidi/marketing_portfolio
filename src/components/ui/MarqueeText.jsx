import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function MarqueeText({
  items = [],
  separator = '✦',
  className = '',
  outline = false,
  baseSpeed = 60,
  reverse = false,
}) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVel = useSpring(velocity, { damping: 50, stiffness: 400 });
  const x = useTransform(smoothVel, (v) => {
    return (reverse ? -1 : 1) * (baseSpeed + Math.min(Math.abs(v) * 0.4, 200));
  });

  // Build a long repeating string
  const content = items.length
    ? items
    : ['DIGITAL MARKETING', 'BRAND STRATEGY', 'GROWTH', 'CREATIVE DIRECTION'];

  const Row = () => (
    <div className="flex items-center gap-6 sm:gap-10 md:gap-12 pr-6 sm:pr-12 shrink-0">
      {content.map((it, i) => (
        <span key={i} className="flex items-center gap-6 sm:gap-10 md:gap-12">
          <span className={outline ? 'text-outline' : ''}>{it}</span>
          <span className="text-vibrant text-2xl sm:text-3xl">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div ref={ref} className={`relative w-full overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none text-sand will-change-transform"
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        style={{ skewY: useTransform(smoothVel, [-1000, 0, 1000], [-4, 0, 4]) }}
      >
        <Row /><Row /><Row /><Row />
      </motion.div>
    </div>
  );
}
