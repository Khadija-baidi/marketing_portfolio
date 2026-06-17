import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function AnimatedButton({
  children,
  href,
  onClick,
  className = '',
  icon = true,
  ...rest
}) {
  const Comp = href ? motion.a : motion.button;
  return (
    <Comp
      href={href}
      onClick={onClick}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={`group relative inline-flex items-center gap-3 font-poppins text-sm uppercase tracking-[0.25em] text-sand ${className}`}
      {...rest}
    >
      <span className="relative overflow-hidden">
        <motion.span
          variants={{ rest: { y: 0 }, hover: { y: '-100%' } }}
          transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
          className="block"
        >
          {children}
        </motion.span>
        <motion.span
          variants={{ rest: { y: '100%' }, hover: { y: 0 } }}
          transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0 text-vibrant"
        >
          {children}
        </motion.span>
      </span>
      {icon && (
        <motion.span
          variants={{ rest: { rotate: 0, x: 0 }, hover: { rotate: 45, x: 4 } }}
          transition={{ duration: 0.4 }}
          className="grid place-items-center w-9 h-9 rounded-full border border-sand/30 group-hover:border-vibrant text-base"
        >
          <HiArrowUpRight />
        </motion.span>
      )}
    </Comp>
  );
}
