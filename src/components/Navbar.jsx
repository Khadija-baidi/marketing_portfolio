import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { HiBars3, HiXMark } from 'react-icons/hi2';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 220);
    setScrolled(latest > 30);
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-5 md:px-10 pt-5"
      >
        <div
          className={`relative mx-auto max-w-[1400px] flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-all duration-500 ${
            scrolled
              ? 'glass-strong shadow-[0_10px_50px_-20px_rgba(0,0,0,0.6)]'
              : 'border border-transparent'
          }`}
        >
          <a href="#home" className="group flex items-center gap-3" data-cursor-hover>
            <span className="relative inline-grid place-items-center w-10 h-10 rounded-full bg-vibrant text-ink font-display text-xl overflow-hidden">
              <span className="relative z-10">A</span>
              <span className="absolute inset-0 bg-crimson translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </span>
            <span className="hidden sm:block font-display text-sand text-xl tracking-wide">
              Alex<span className="text-vibrant">.</span>Marketer
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-cursor-hover
                className="group relative px-4 py-2 font-poppins text-sm text-sand/80 hover:text-sand"
              >
                <span className="relative inline-block overflow-hidden h-5">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                    {l.label}
                  </span>
                  <span className="absolute inset-0 text-vibrant translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    {l.label}
                  </span>
                </span>
                <span className="absolute left-4 right-4 bottom-1 h-px bg-vibrant scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            data-cursor-hover
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-sand text-ink px-5 py-2.5 font-poppins text-sm font-semibold hover:bg-vibrant transition-colors duration-500"
          >
            Let’s talk
            <span className="inline-block w-2 h-2 rounded-full bg-crimson animate-pulseglow" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-sand/30 text-sand"
            aria-label="Toggle menu"
          >
            {open ? <HiXMark className="text-xl" /> : <HiBars3 className="text-xl" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-ink mesh-warm"
          >
            <div className="absolute inset-0 noise opacity-25 pointer-events-none" />
            <div className="relative h-full flex flex-col items-start justify-center px-8 sm:px-10 gap-1 sm:gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-5xl sm:text-6xl text-sand hover:text-vibrant transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 sm:mt-10 kicker text-sand/60 break-all"
              >
                hello@alexmarketer.com
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
