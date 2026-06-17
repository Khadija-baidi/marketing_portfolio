import { motion } from 'framer-motion';
import useMagnetic from '../../hooks/useMagnetic';

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  strength = 0.35,
  ...rest
}) {
  const ref = useMagnetic(strength);

  const base =
    'relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-poppins font-semibold text-sm tracking-wide overflow-hidden will-change-transform select-none';
  const variants = {
    primary:
      'text-ink bg-vibrant btn-glow hover:bg-burnt transition-colors duration-500',
    outline:
      'text-sand border border-sand/40 hover:border-vibrant hover:text-vibrant transition-colors duration-500',
    ghost:
      'text-sand hover:text-vibrant transition-colors duration-500',
  };

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </Comp>
  );
}
