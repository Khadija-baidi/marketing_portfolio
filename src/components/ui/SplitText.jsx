import { motion } from 'framer-motion';

export default function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.04,
  duration = 0.9,
  as = 'span',
  by = 'word',
  once = true,
}) {
  const MotionTag = motion[as] || motion.span;
  const parts = by === 'char' ? text.split('') : text.split(' ');

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.4 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={`inline-block ${className}`}
    >
      {parts.map((p, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ marginRight: by === 'word' ? '0.25em' : undefined }}
        >
          <motion.span
            variants={{
              hidden: { y: '110%', opacity: 0, rotate: 6 },
              show: {
                y: '0%',
                opacity: 1,
                rotate: 0,
                transition: { duration, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="inline-block will-change-transform"
          >
            {p === ' ' ? '\u00A0' : p}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
