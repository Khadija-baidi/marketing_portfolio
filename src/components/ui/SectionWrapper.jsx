import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = forwardRef(function SectionWrapper(
  { id, eyebrow, index, title, children, className = '', titleClassName = '' },
  ref
) {
  return (
    <section
      ref={ref}
      id={id}
      className={`relative section-pad ${className}`}
    >
      {(eyebrow || title) && (
        <div className="relative z-10 mb-10 sm:mb-16 md:mb-24 flex flex-col gap-4 sm:gap-6">
          {eyebrow && (
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              {index && (
                <span className="kicker text-vibrant">{index}</span>
              )}
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '64px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-px bg-sand/40"
              />
              <span className="kicker text-sand/70">{eyebrow}</span>
            </div>
          )}
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`font-display text-sand text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight ${titleClassName}`}
            >
              {title}
            </motion.h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
});

export default SectionWrapper;
