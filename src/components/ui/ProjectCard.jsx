import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import FloatingCard from './FloatingCard';

export default function ProjectCard({
  title,
  category,
  metrics = [],
  image,
  accent = '#87A2FF',
  className = '',
  index = 0,
  size = 'md',
}) {
  const aspect = size === 'tall' ? 'aspect-[4/5]' : size === 'wide' ? 'aspect-[16/10]' : 'aspect-[5/4]';
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${className}`}
    >
      <FloatingCard intensity={6} glow={false} className="rounded-cinema">
        <div className="relative overflow-hidden rounded-cinema border border-sand/10 bg-ink-2">
          {/* Image */}
          <div className={`relative ${aspect} overflow-hidden`}>
            <motion.img
              src={image}
              alt={title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.18 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 opacity-70 group-hover:opacity-95 transition-opacity duration-700"
              style={{
                background: `linear-gradient(180deg, transparent 35%, rgba(10,13,20,0.85) 75%, rgba(10,13,20,1) 100%)`,
              }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"
              style={{ background: `linear-gradient(135deg, ${accent}55, transparent 60%)` }}
            />
            {/* Category */}
            <div className="absolute top-5 left-5 flex items-center gap-3">
              <span className="kicker text-sand/90 px-3 py-2 rounded-full bg-ink/60 backdrop-blur-md border border-sand/15">
                {category}
              </span>
            </div>
            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
              className="absolute top-5 right-5 grid place-items-center w-12 h-12 rounded-full bg-vibrant text-ink opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-[-30deg] group-hover:rotate-0"
            >
              <HiArrowUpRight className="text-xl" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative p-5 sm:p-7 md:p-9">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-sand leading-tight">
              {title}
            </h3>
            <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-3 sm:gap-4 border-t border-sand/10 pt-5 sm:pt-6">
              {metrics.map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="font-display text-xl sm:text-2xl md:text-3xl"
                    style={{ color: accent }}
                  >
                    {m.value}
                  </span>
                  <span className="font-poppins text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-sand/55 mt-1">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Animated border */}
          <div className="pointer-events-none absolute inset-0 rounded-cinema opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 rounded-cinema border border-vibrant/40" />
          </div>
        </div>
      </FloatingCard>
    </motion.div>
  );
}
