import { motion } from 'framer-motion';

export default function GlowingSkillPill({ icon: Icon, label, accent = 'vibrant', delay = 0, float = 0 }) {
  const accents = {
    vibrant: 'hover:border-vibrant hover:text-vibrant hover:shadow-[0_0_40px_-6px_rgba(255,101,0,0.65)]',
    burnt: 'hover:border-burnt hover:text-burnt hover:shadow-[0_0_40px_-6px_rgba(204,86,30,0.65)]',
    sand: 'hover:border-sand hover:text-sand hover:shadow-[0_0_40px_-6px_rgba(246,206,113,0.65)]',
    olive: 'hover:border-olive hover:text-olive hover:shadow-[0_0_40px_-6px_rgba(98,129,65,0.7)]',
    crimson: 'hover:border-crimson hover:text-crimson hover:shadow-[0_0_40px_-6px_rgba(196,12,12,0.65)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, scale: 1.04 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
      style={{ transform: `translateY(${float}px)` }}
    >
      <div
        className={`group flex items-center gap-3 px-5 py-3 rounded-full bg-ink-2/60 backdrop-blur-md border border-sand/15 text-sand/80 font-poppins text-sm transition-all duration-500 ${accents[accent] || accents.vibrant}`}
      >
        {Icon && (
          <span className="grid place-items-center text-vibrant text-base group-hover:rotate-180 transition-transform duration-700">
            <Icon />
          </span>
        )}
        <span className="whitespace-nowrap tracking-wide">{label}</span>
      </div>
    </motion.div>
  );
}
