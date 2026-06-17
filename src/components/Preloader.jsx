import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += Math.floor(Math.random() * 7) + 3;
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          onDone?.();
        }, 650);
      }
      setCount(n);
    }, 90);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-ink mesh-warm overflow-hidden"
        >
          {/* curtain reveal */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1], delay: 0.05 }}
            style={{ transformOrigin: 'top' }}
            className="absolute inset-0 bg-ink"
          />

          <div className="absolute inset-0 noise opacity-30 pointer-events-none" />

          <div className="relative h-full w-full flex flex-col items-center justify-center px-8">
            {/* Logo reveal */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 font-display text-sand"
              >
                <span className="text-5xl md:text-7xl">A</span>
                <span className="w-3 h-3 rounded-full bg-vibrant animate-pulseglow" />
                <span className="text-5xl md:text-7xl">M</span>
              </motion.div>
            </div>

            <div className="overflow-hidden mt-4">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.45 }}
                className="block kicker text-sand/60"
              >
                Digital Marketer · Portfolio
              </motion.span>
            </div>

            {/* Counter */}
            <div className="absolute bottom-10 left-10 flex items-end gap-3">
              <motion.span
                key={count}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="font-display text-7xl md:text-9xl text-sand leading-none"
              >
                {count}
              </motion.span>
              <span className="font-poppins text-sand/60 pb-3">%</span>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-10 right-10 w-[200px] md:w-[320px] h-px bg-sand/20 overflow-hidden">
              <motion.div
                className="h-full bg-vibrant"
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
