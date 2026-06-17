import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import ProjectCard from './ui/ProjectCard';
import MagneticButton from './ui/MagneticButton';
import { HiArrowUpRight } from 'react-icons/hi2';

const projects = [
  {
    title: 'Maison Noir — Rebrand & Launch',
    category: 'Brand · Paid · Creator',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&auto=format&fit=crop',
    accent: '#87A2FF',
    metrics: [
      { value: '+412%', label: 'Revenue' },
      { value: '14x', label: 'ROAS' },
      { value: '38', label: 'Creators' },
    ],
    size: 'tall',
  },
  {
    title: 'Northwind — DTC Growth Engine',
    category: 'Performance · CRM',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop',
    accent: '#FFD7C4',
    metrics: [
      { value: '€12M', label: 'Revenue' },
      { value: '−38%', label: 'CAC' },
      { value: '+220%', label: 'LTV' },
    ],
    size: 'wide',
  },
  {
    title: 'Solare — Campaign of the Year',
    category: 'Editorial · Social',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80&auto=format&fit=crop',
    accent: '#C4D7FF',
    metrics: [
      { value: '42M', label: 'Reach' },
      { value: '8.4%', label: 'CTR' },
      { value: '#1', label: 'Trending' },
    ],
    size: 'md',
  },
  {
    title: 'Halcyon — SEO & Content Engine',
    category: 'SEO · Content',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
    accent: '#87A2FF',
    metrics: [
      { value: '+612%', label: 'Organic' },
      { value: '180', label: 'Keywords #1' },
      { value: '92', label: 'DA Score' },
    ],
    size: 'md',
  },
  {
    title: 'Atlas Studio — AI Ops Rollout',
    category: 'AI · Marketing Ops',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop',
    accent: '#FFF4B5',
    metrics: [
      { value: '5x', label: 'Output' },
      { value: '−62%', label: 'Cycle time' },
      { value: '24', label: 'Workflows' },
    ],
    size: 'tall',
  },
];

export default function Projects() {
  return (
    <SectionWrapper
      id="work"
      eyebrow="Selected Work"
      index="04 /"
      title={<>Featured <span className="italic text-outline-burnt">campaigns</span>.</>}
      className="relative bg-ink overflow-hidden"
    >
      {/* big watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-32 font-display text-[18vw] leading-none text-outline-thin opacity-[0.06] select-none"
      >
        2026
      </span>

      <div className="relative grid grid-cols-12 gap-6 md:gap-8">
        {/* Asymmetrical grid */}
        <div className="col-span-12 md:col-span-7">
          <ProjectCard {...projects[0]} index={0} />
        </div>
        <div className="col-span-12 md:col-span-5 flex flex-col gap-6 md:gap-8 md:pt-16">
          <ProjectCard {...projects[2]} index={1} />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="rounded-cinema glass p-6 sm:p-8"
          >
            <div className="kicker text-vibrant">Award</div>
            <div className="mt-3 font-display text-2xl sm:text-3xl text-sand leading-tight">
              Shortlisted, Cannes Lions
              <span className="text-vibrant">.</span>
            </div>
            <p className="mt-3 font-poppins text-sm text-sand/70">
              Two consecutive years for brand-led performance work.
            </p>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-12 lg:col-span-8 lg:col-start-3">
          <ProjectCard {...projects[1]} index={2} />
        </div>

        <div className="col-span-12 md:col-span-5">
          <ProjectCard {...projects[3]} index={3} />
        </div>
        <div className="col-span-12 md:col-span-7 lg:pt-24">
          <ProjectCard {...projects[4]} index={4} />
        </div>
      </div>

      <div className="relative mt-16 sm:mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-sand/85 max-w-xl">
          A small selection — <span className="text-vibrant italic">the full archive</span> spans 120+ campaigns across 14 industries.
        </p>
        <MagneticButton href="#contact" variant="outline">
          See full archive
          <HiArrowUpRight />
        </MagneticButton>
      </div>
    </SectionWrapper>
  );
}
