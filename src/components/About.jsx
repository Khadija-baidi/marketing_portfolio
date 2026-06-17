import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaSearch, FaBullhorn, FaPalette, FaChartLine, FaUsers, FaFeatherAlt } from 'react-icons/fa';
import SectionWrapper from './ui/SectionWrapper';
import SplitText from './ui/SplitText';
import GlowingSkillPill from './ui/GlowingSkillPill';
import FloatingCard from './ui/FloatingCard';

const skills = [
  { label: 'SEO', Icon: FaSearch, accent: 'vibrant' },
  { label: 'Meta Ads', Icon: FaBullhorn, accent: 'burnt' },
  { label: 'Branding', Icon: FaPalette, accent: 'crimson' },
  { label: 'Content Strategy', Icon: FaFeatherAlt, accent: 'sand' },
  { label: 'Analytics', Icon: FaChartLine, accent: 'olive' },
  { label: 'Social Growth', Icon: FaUsers, accent: 'vibrant' },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rot = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const yShape = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      index="01 /"
      title={null}
      className="relative bg-ink-2 overflow-hidden"
    >
      <div ref={ref} className="relative">
        {/* Decorative rotating shape */}
        <motion.div
          aria-hidden
          style={{ rotate: rot, y: yShape }}
          className="absolute top-0 right-0 w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] pointer-events-none opacity-60 hidden md:block"
        >
          <div className="w-full h-full border-2 border-dashed border-sand/15 rounded-full" />
          <div className="absolute inset-10 border border-vibrant/30 rounded-full" />
          <div className="absolute inset-24 border border-burnt/40 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-12 gap-8 md:gap-14 relative z-10">
          {/* Left */}
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-display text-sand text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight">
              <SplitText text="Brand-led." stagger={0.04} />
              <br />
              <span className="text-outline-burnt italic">
                <SplitText text="Data-obsessed." stagger={0.04} delay={0.15} />
              </span>
              <br />
              <SplitText text="Human-first." stagger={0.04} delay={0.3} />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-10 max-w-xl font-serif text-xl md:text-2xl text-sand/80 leading-relaxed"
            >
              I’m <span className="text-vibrant">Alex</span> — a digital marketer building
              cinematic, conversion-led campaigns for ambitious brands. For nearly a decade,
              I’ve fused editorial storytelling with performance media to grow audiences,
              revenue, and culture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-10 md:mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg"
            >
              {[
                { v: '120+', l: 'Campaigns' },
                { v: '€38M', l: 'Ad spend' },
                { v: '14x', l: 'Avg. ROAS' },
              ].map((s, i) => (
                <div key={i} className="border-l border-sand/15 pl-3 sm:pl-4">
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl text-gradient-warm">{s.v}</div>
                  <div className="kicker text-sand/55 mt-1 text-[10px] sm:text-xs">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Floating stacked cards */}
          <div className="col-span-12 lg:col-span-5 relative min-h-[460px] sm:min-h-[520px] mt-4 lg:mt-0">
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 w-[82%] sm:w-[78%]"
            >
              <FloatingCard intensity={10} className="rounded-cinema">
                <div className="glass-strong rounded-cinema p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="kicker text-vibrant">Now playing</span>
                    <span className="w-2 h-2 rounded-full bg-crimson animate-pulseglow" />
                  </div>
                  <div className="mt-4 sm:mt-6 font-display text-2xl sm:text-3xl text-sand leading-tight">
                    Scaling a fashion brand
                    <span className="text-vibrant">.</span>
                  </div>
                  <p className="mt-3 text-sand/70 font-poppins text-xs sm:text-sm">
                    Repositioning + omnichannel paid + creator program.
                  </p>
                  <div className="mt-4 sm:mt-6 flex items-center justify-between border-t border-sand/10 pt-3 sm:pt-4">
                    <span className="font-poppins text-xs text-sand/60">Q1 — 2026</span>
                    <span className="font-display text-vibrant text-lg sm:text-xl">+412%</span>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-0 left-0 w-[80%] sm:w-[72%]"
            >
              <FloatingCard intensity={10} className="rounded-cinema">
                <div className="glass rounded-cinema p-5 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-vibrant/15 text-vibrant">
                      <FaChartLine />
                    </span>
                    <span className="kicker text-sand/70">Toolkit</span>
                  </div>
                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                    {skills.slice(0, 6).map((s, i) => (
                      <GlowingSkillPill key={i} {...s} delay={i * 0.05} />
                    ))}
                  </div>
                </div>
              </FloatingCard>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:block absolute top-[34%] left-[8%] w-[55%]"
            >
              <div className="rounded-3xl border border-sand/15 bg-ink/70 backdrop-blur-md p-5">
                <div className="kicker text-sand/55">Currently learning</div>
                <div className="font-display text-2xl text-sand mt-1">AI-led campaign ops</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
