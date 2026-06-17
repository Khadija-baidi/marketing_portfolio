import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import MarqueeText from './ui/MarqueeText';

const items = [
  {
    year: '2024 — Now',
    role: 'Head of Growth & Brand',
    company: 'Studio Norte',
    desc: 'Leading omnichannel growth for luxury lifestyle brands across EU & MENA.',
    achievements: ['+412% organic reach', '€11M paid spend / yr', '14x avg. ROAS'],
  },
  {
    year: '2022 — 2024',
    role: 'Senior Digital Strategist',
    company: 'Halcyon Agency',
    desc: 'Built integrated brand + performance systems for 18 international clients.',
    achievements: ['Cannes Lions Shortlist', '5 brand relaunches', '32 campaigns shipped'],
  },
  {
    year: '2020 — 2022',
    role: 'Performance Marketing Lead',
    company: 'Northwind DTC',
    desc: 'Scaled a DTC portfolio from €1.4M to €12M in revenue across paid & CRM.',
    achievements: ['8.4x ROAS', '−38% CAC', '+220% LTV'],
  },
  {
    year: '2018 — 2020',
    role: 'Content & Social Lead',
    company: 'Maison & Co.',
    desc: 'Editorial direction, creator partnerships and community-led launches.',
    achievements: ['320K community', '38 collabs', '6 viral launches'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const lineH = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <SectionWrapper
      id="experience"
      eyebrow="Experience"
      index="02 /"
      title={<>The <span className="italic text-outline-burnt">journey</span> so far.</>}
      className="relative bg-ink overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 opacity-10 pointer-events-none">
        <MarqueeText
          items={['JOURNEY', 'CRAFT', 'BRANDS', 'GROWTH', 'STORY']}
          outline
        />
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto mt-12">
        {/* central line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-sand/10 -translate-x-1/2" />
        <motion.div
          style={{ height: lineH }}
          className="absolute left-6 md:left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-vibrant via-burnt to-crimson shadow-[0_0_20px_rgba(255,101,0,0.6)]"
        />

        <div className="flex flex-col gap-16 md:gap-28">
          {items.map((it, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  left ? '' : 'md:[direction:rtl]'
                }`}
              >
                {/* dot */}
                <span className="absolute left-6 md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                  <span className="block w-4 h-4 rounded-full bg-vibrant shadow-[0_0_24px_rgba(255,101,0,0.9)] animate-pulseglow" />
                </span>

                {/* card side */}
                <motion.div
                  initial={{ opacity: 0, x: left ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={`pl-14 md:pl-0 ${left ? 'md:pr-16' : 'md:pl-16'} [direction:ltr]`}
                >
                  <div className="group relative rounded-cinema glass p-5 sm:p-7 md:p-9 transition-all duration-500 hover:bg-vibrant/5 hover:border-vibrant/40">
                    <div className="kicker text-vibrant">{it.year}</div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-sand leading-tight mt-3">
                      {it.role}
                    </h3>
                    <div className="font-poppins text-sand/60 text-sm mt-1">@ {it.company}</div>
                    <p className="mt-4 sm:mt-5 text-sand/75 font-poppins text-sm sm:text-[15px] leading-relaxed">{it.desc}</p>
                    <ul className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 border-t border-sand/10 pt-4 sm:pt-5">
                      {it.achievements.map((a, j) => (
                        <li
                          key={j}
                          className="font-poppins text-[11px] uppercase tracking-[0.15em] text-sand/75 px-3 py-2 rounded-full border border-sand/15"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                    <span className="pointer-events-none absolute inset-0 rounded-cinema opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(400px 220px at 50% 0%, rgba(255,101,0,0.12), transparent 60%)' }} />
                  </div>
                </motion.div>

                {/* empty side (for alignment) */}
                <div className="hidden md:block [direction:ltr]">
                  <div className="font-display text-[8rem] leading-none text-outline-thin opacity-25 text-center">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
