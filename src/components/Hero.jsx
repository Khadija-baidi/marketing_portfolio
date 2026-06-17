import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaBehance } from 'react-icons/fa6';
import MagneticButton from './ui/MagneticButton';
import SplitText from './ui/SplitText';
import { HiArrowDown, HiArrowUpRight } from 'react-icons/hi2';

const socials = [
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { Icon: FaXTwitter, href: '#', label: 'X' },
  { Icon: FaBehance, href: '#', label: 'Behance' },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const yTitle = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Mesh gradient bg */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 mesh-warm" />
      <div className="absolute inset-0 noise opacity-30 pointer-events-none" />

      {/* Floating shapes */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[14%] right-[-10%] sm:right-[8%] w-56 h-56 md:w-72 md:h-72 rounded-full blur-[80px] md:blur-[100px] opacity-60"
        style={{ background: 'radial-gradient(circle, #87A2FF, transparent 60%)' }}
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 40, 0], rotate: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[8%] left-[-12%] sm:left-[5%] w-64 h-64 md:w-96 md:h-96 rounded-full blur-[100px] md:blur-[120px] opacity-50"
        style={{ background: 'radial-gradient(circle, #C4D7FF, transparent 60%)' }}
      />
      <motion.div
        aria-hidden
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="hidden md:block absolute top-[8%] left-[10%] w-24 h-24 border border-sand/20 rounded-full"
      />
      <motion.div
        aria-hidden
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="hidden md:block absolute bottom-[22%] right-[14%] w-32 h-32"
      >
        <div className="w-full h-full border-2 border-vibrant/40 rotate-45" />
      </motion.div>

      {/* Vertical socials */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ opacity }}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col items-center gap-5"
      >
        {socials.map(({ Icon, href, label }, i) => (
          <a
            key={i}
            href={href}
            aria-label={label}
            data-cursor-hover
            className="group grid place-items-center w-10 h-10 rounded-full border border-sand/15 text-sand/70 hover:text-vibrant hover:border-vibrant transition-all duration-500"
          >
            <Icon className="text-sm group-hover:scale-110 transition-transform" />
          </a>
        ))}
        <span className="block w-px h-20 bg-gradient-to-b from-sand/40 to-transparent" />
      </motion.div>

      {/* Main content */}
      <motion.div style={{ y: yTitle, opacity }} className="relative z-10 pt-28 sm:pt-32 md:pt-40 px-5 sm:px-6 md:px-12 lg:px-20">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-center gap-4 mb-6 md:mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-vibrant animate-pulseglow" />
          <span className="kicker text-sand/70">Portfolio · 2026 Edition</span>
        </motion.div>

        {/* Layered Title */}
        <div className="relative">
          <h1 className="relative font-display leading-[0.82] tracking-tight text-sand text-[19vw] md:text-[15vw] lg:text-[13vw]">
            <span className="block">
              <SplitText text="DIGITAL" delay={0.4} stagger={0.06} />
            </span>
            <span className="block relative">
              <span className="absolute inset-0 text-outline-burnt translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 select-none" aria-hidden>
                MARKETER
              </span>
              <span className="relative text-gradient-warm italic">
                <SplitText text="MARKETER" delay={0.7} stagger={0.05} />
              </span>
            </span>
          </h1>

          {/* Outlined echo behind */}
          <span
            aria-hidden
            className="hidden lg:block absolute -top-10 left-0 right-0 font-display text-outline-thin text-[14vw] leading-[0.82] opacity-30 select-none"
          >
            DIGITAL MARKETER
          </span>
        </div>

        {/* Subline + image side block */}
        <div className="mt-10 md:mt-16 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="col-span-12 md:col-span-6 lg:col-span-5 space-y-7"
          >
            <p className="font-serif text-xl md:text-2xl text-sand/85 leading-relaxed max-w-md">
              I craft <em className="text-vibrant not-italic">cinematic brand stories</em> and
              data-driven campaigns for ambitious teams — turning attention into <em className="text-burnt not-italic">measurable growth</em>.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="#work">
                View Selected Work
                <HiArrowUpRight />
              </MagneticButton>
              <MagneticButton href="#contact" variant="outline">
                Book a discovery call
              </MagneticButton>
            </div>
          </motion.div>

          {/* Image block */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 1.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: yImg }}
            className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 relative"
          >
            <div className="relative aspect-[4/5] max-w-[280px] sm:max-w-sm mx-auto md:mr-0 md:ml-auto">
              <div className="absolute -inset-2 sm:-inset-3 gradient-border rounded-cinema -z-10 opacity-70" />
              <div className="relative w-full h-full rounded-cinema overflow-hidden border border-sand/20">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80&auto=format&fit=crop"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <div className="kicker text-sand/70">Based in</div>
                    <div className="font-display text-sand text-lg sm:text-2xl truncate">Lagos / Remote</div>
                  </div>
                  <div className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-vibrant text-ink shrink-0">
                    <HiArrowUpRight />
                  </div>
                </div>
              </div>
              {/* floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-3 sm:-left-6 md:-left-10 top-6 sm:top-10 glass rounded-2xl px-3 py-2 sm:px-4 sm:py-3"
              >
                <div className="kicker text-vibrant text-[10px] sm:text-xs">Available</div>
                <div className="font-poppins text-sand text-xs sm:text-sm">Q1 — 2026</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-2 sm:-right-4 md:-right-6 bottom-16 sm:bottom-20 glass rounded-2xl px-3 py-2 sm:px-4 sm:py-3"
              >
                <div className="font-display text-vibrant text-xl sm:text-2xl">+8yrs</div>
                <div className="kicker text-sand/60 text-[10px] sm:text-xs">Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-sand/70 hover:text-vibrant transition-colors"
        data-cursor-hover
      >
        <span className="kicker">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="grid place-items-center w-9 h-9 rounded-full border border-sand/30"
        >
          <HiArrowDown />
        </motion.span>
      </motion.a>
    </section>
  );
}
