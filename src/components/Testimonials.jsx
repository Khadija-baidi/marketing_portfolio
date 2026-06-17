import SectionWrapper from './ui/SectionWrapper';
import TestimonialSlider from './ui/TestimonialSlider';
import MarqueeText from './ui/MarqueeText';

const items = [
  {
    quote:
      'Alex turned our marketing into a craft. The work feels editorial — and the numbers don’t lie. Three quarters in, we’ve 4× revenue.',
    name: 'Léa Marchetti',
    role: 'CEO · Maison Noir',
  },
  {
    quote:
      'A rare blend of brand instinct and performance discipline. Strategy, creative, paid, CRM — all in one fluent system.',
    name: 'Daniel O’Connor',
    role: 'CMO · Northwind DTC',
  },
  {
    quote:
      'The kind of partner you only get once a decade. Built our growth engine from zero and shaped how we think about the brand.',
    name: 'Yuki Tanaka',
    role: 'Founder · Solare',
  },
  {
    quote:
      'Sharp, calm, and surgical. Alex turned chaos into a quarterly rhythm and a brand we’re finally proud of.',
    name: 'Imani Adeyemi',
    role: 'Head of Marketing · Halcyon',
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper
      id="testimonials"
      eyebrow="Testimonials"
      index="05 /"
      title={<>Kind <span className="italic text-gradient-warm">words</span>.</>}
      className="relative bg-ink-2 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none">
        <MarqueeText items={['CLIENTS', 'PARTNERS', 'FOUNDERS']} outline />
      </div>

      <div className="relative grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5">
          <p className="font-serif text-2xl md:text-3xl text-sand/85 leading-snug max-w-md">
            A decade of close partnerships across <span className="text-vibrant italic">fashion, tech, hospitality, and DTC</span>.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: '48', l: 'Clients' },
              { v: '14', l: 'Industries' },
              { v: '120+', l: 'Campaigns' },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-3xl text-sand">{s.v}</div>
                <div className="kicker text-sand/55 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <TestimonialSlider items={items} auto={6000} />
        </div>
      </div>
    </SectionWrapper>
  );
}
