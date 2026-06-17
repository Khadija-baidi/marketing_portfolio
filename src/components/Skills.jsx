import { motion } from 'framer-motion';
import {
  SiGoogleads, SiMeta, SiGoogleanalytics, SiMailchimp, SiOpenai,
  SiHubspot, SiNotion, SiFigma, SiTiktok, SiSemrush,
} from 'react-icons/si';
import { FaSearch, FaPenNib, FaPalette, FaRocket } from 'react-icons/fa';
import SectionWrapper from './ui/SectionWrapper';
import MarqueeText from './ui/MarqueeText';

const skills = [
  { label: 'Google Ads', Icon: SiGoogleads, accent: 'vibrant' },
  { label: 'Meta Ads', Icon: SiMeta, accent: 'burnt' },
  { label: 'SEO', Icon: FaSearch, accent: 'sand' },
  { label: 'Analytics', Icon: SiGoogleanalytics, accent: 'olive' },
  { label: 'Email Marketing', Icon: SiMailchimp, accent: 'crimson' },
  { label: 'AI Marketing Tools', Icon: SiOpenai, accent: 'vibrant' },
  { label: 'Copywriting', Icon: FaPenNib, accent: 'sand' },
  { label: 'Branding', Icon: FaPalette, accent: 'burnt' },
  { label: 'HubSpot CRM', Icon: SiHubspot, accent: 'olive' },
  { label: 'Semrush', Icon: SiSemrush, accent: 'vibrant' },
  { label: 'TikTok Ads', Icon: SiTiktok, accent: 'crimson' },
  { label: 'Figma', Icon: SiFigma, accent: 'sand' },
  { label: 'Notion Ops', Icon: SiNotion, accent: 'olive' },
  { label: 'Launch Strategy', Icon: FaRocket, accent: 'vibrant' },
];

const accentMap = {
  vibrant: { ring: 'rgba(135,162,255,0.55)', text: '#87A2FF' },
  burnt: { ring: 'rgba(255,215,196,0.55)', text: '#FFD7C4' },
  sand: { ring: 'rgba(255,244,181,0.55)', text: '#FFF4B5' },
  olive: { ring: 'rgba(135,162,255,0.70)', text: '#87A2FF' },
  crimson: { ring: 'rgba(196,215,255,0.55)', text: '#C4D7FF' },
};

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Skills"
      index="03 /"
      title={<>The <span className="italic text-gradient-warm">arsenal</span>.</>}
      className="relative bg-ink-2 overflow-hidden"
    >
      <div className="absolute -left-10 -right-10 top-10 opacity-10 pointer-events-none rotate-[-3deg]">
        <MarqueeText items={['CRAFT', 'STACK', 'TOOLKIT']} outline reverse />
      </div>

      <div className="relative grid grid-cols-12 gap-8 lg:gap-12">
        {/* Left intro */}
        <div className="col-span-12 lg:col-span-4">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="font-serif text-lg sm:text-xl md:text-2xl text-sand/80 leading-relaxed max-w-md"
          >
            A modern marketer’s stack — built around <span className="text-vibrant">creativity</span>,
            <span className="text-burnt"> data</span> and <span className="text-sand">speed</span>.
          </motion.p>

          <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
            {[
              { l: 'Strategy & Brand', v: 96 },
              { l: 'Paid Media', v: 92 },
              { l: 'SEO & Content', v: 88 },
              { l: 'Marketing Ops & AI', v: 84 },
            ].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between items-end font-poppins text-sm">
                  <span className="text-sand/80">{s.l}</span>
                  <span className="text-vibrant">{s.v}%</span>
                </div>
                <div className="mt-2 h-1 w-full rounded-full bg-sand/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-vibrant via-burnt to-crimson"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating skills wall */}
        <div className="col-span-12 lg:col-span-8 relative min-h-[420px] sm:min-h-[560px]">
          <div className="relative flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {skills.map((s, i) => {
              const a = accentMap[s.accent] || accentMap.vibrant;
              const float = (i % 5) * 4 - 8;
              const rot = (i % 2 === 0 ? -1 : 1) * ((i % 3) + 1);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -10, scale: 1.06, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.035, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transform: `translateY(${float}px) rotate(${rot}deg)` }}
                  className="group"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3 px-3.5 sm:px-5 py-2 sm:py-3 rounded-full bg-ink/70 backdrop-blur border border-sand/15 font-poppins text-xs sm:text-sm text-sand/85 transition-all duration-500"
                    style={{
                      boxShadow: '0 4px 30px -10px rgba(0,0,0,0.4)',
                    }}
                    whileHover={{
                      boxShadow: `0 0 40px -6px ${a.ring}, inset 0 0 0 1px ${a.text}`,
                    }}
                  >
                    <motion.span
                      style={{ color: a.text }}
                      className="text-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.9 }}
                    >
                      <s.Icon />
                    </motion.span>
                    <span className="group-hover:text-sand transition-colors">{s.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Decorative orbs */}
          <motion.div
            aria-hidden
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-10 -right-10 w-72 h-72 border border-dashed border-sand/10 rounded-full pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #87A2FF, transparent 60%)' }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
