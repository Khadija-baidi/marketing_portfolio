import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 40,
  as = 'div',
  once = true,
  amount = 0.25,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
      }}
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
export const staggerItem = variants;
