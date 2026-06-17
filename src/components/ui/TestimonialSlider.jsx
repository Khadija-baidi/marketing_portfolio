import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

export default function TestimonialSlider({ items = [], auto = 6000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || !items.length) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), auto);
    return () => clearInterval(t);
  }, [paused, items.length, auto]);

  const go = (n) => setIndex(((n % items.length) + items.length) % items.length);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[520px] sm:h-[460px] md:h-[420px]">
        <AnimatePresence mode="wait">
          {items.map(
            (t, i) =>
              i === index && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.97 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full rounded-cinema glass p-6 sm:p-8 md:p-14 overflow-hidden">
                    {/* Floating glow */}
                    <div
                      aria-hidden
                      className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full blur-3xl opacity-50"
                      style={{ background: 'radial-gradient(circle, #87A2FF, transparent 60%)' }}
                    />
                    <div
                      aria-hidden
                      className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
                      style={{ background: 'radial-gradient(circle, #C4D7FF, transparent 60%)' }}
                    />
                    <span className="absolute top-4 left-6 sm:top-6 sm:left-8 font-display text-[120px] sm:text-[180px] leading-none text-vibrant/20 select-none">“</span>

                    <div className="relative h-full flex flex-col justify-between gap-6 sm:gap-8">
                      <p className="font-serif text-xl sm:text-2xl md:text-4xl leading-snug text-sand/95 italic">
                        {t.quote}
                      </p>
                      <div className="flex items-center gap-4 sm:gap-5">
                        <div
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-vibrant to-crimson grid place-items-center font-display text-ink text-lg sm:text-xl shrink-0"
                        >
                          {t.name?.[0] || '★'}
                        </div>
                        <div>
                          <div className="font-poppins font-semibold text-sand">{t.name}</div>
                          <div className="kicker text-sand/60">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? 'w-12 bg-vibrant' : 'w-6 bg-sand/20 hover:bg-sand/40'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous"
            className="grid place-items-center w-11 h-11 rounded-full border border-sand/20 text-sand hover:border-vibrant hover:text-vibrant transition-colors"
          >
            <HiChevronLeft />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next"
            className="grid place-items-center w-11 h-11 rounded-full border border-sand/20 text-sand hover:border-vibrant hover:text-vibrant transition-colors"
          >
            <HiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
