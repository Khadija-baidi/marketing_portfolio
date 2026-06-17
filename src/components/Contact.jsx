import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaBehance, FaDribbble } from 'react-icons/fa6';
import { HiArrowUpRight } from 'react-icons/hi2';
import SplitText from './ui/SplitText';
import MagneticButton from './ui/MagneticButton';

const socials = [
  { Icon: FaInstagram, label: 'Instagram', href: '#' },
  { Icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  { Icon: FaXTwitter, label: 'X', href: '#' },
  { Icon: FaBehance, label: 'Behance', href: '#' },
  { Icon: FaDribbble, label: 'Dribbble', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3200);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative section-pad bg-ink overflow-hidden">
      {/* Mesh background */}
      <div className="absolute inset-0 mesh-warm" />
      <motion.div
        aria-hidden
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/3 w-[640px] h-[640px] rounded-full blur-[140px] opacity-50"
        style={{ background: 'radial-gradient(circle, #87A2FF, transparent 60%)' }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full blur-[140px] opacity-40"
        style={{ background: 'radial-gradient(circle, #C4D7FF, transparent 60%)' }}
      />
      <div className="absolute inset-0 noise opacity-25 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 flex-wrap">
          <span className="kicker text-vibrant">06 /</span>
          <span className="h-px w-12 sm:w-16 bg-sand/40" />
          <span className="kicker text-sand/70">Contact</span>
        </div>

        <h2 className="font-display text-sand leading-[0.85] tracking-tight text-[15vw] md:text-[10vw] break-words">
          <SplitText text="Let’s make" stagger={0.05} />
          <br />
          <span className="text-outline-burnt italic">
            <SplitText text="something" stagger={0.05} delay={0.1} />
          </span>
          <br />
          <span className="text-gradient-warm">
            <SplitText text="cinematic." stagger={0.05} delay={0.25} />
          </span>
        </h2>

        <div className="mt-12 sm:mt-16 grid grid-cols-12 gap-8 lg:gap-10">
          {/* Left text */}
          <div className="col-span-12 lg:col-span-5 space-y-8 sm:space-y-10">
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-sand/85 max-w-md">
              Open for select brand partnerships, consulting and creative direction —
              <span className="text-vibrant"> Q1 — Q2 2026</span>.
            </p>

            <div className="space-y-4 sm:space-y-5">
              <a
                href="mailto:hello@alexmarketer.com"
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 border-t border-sand/15 pt-4 sm:pt-5"
                data-cursor-hover
              >
                <span className="kicker text-sand/60">Email</span>
                <span className="font-display text-xl sm:text-2xl md:text-3xl text-sand group-hover:text-vibrant transition-colors break-all">
                  hello@alexmarketer.com
                </span>
              </a>
              <a
                href="tel:+2348000000000"
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 border-t border-sand/15 pt-4 sm:pt-5"
                data-cursor-hover
              >
                <span className="kicker text-sand/60">Phone</span>
                <span className="font-display text-xl sm:text-2xl md:text-3xl text-sand group-hover:text-vibrant transition-colors">
                  +234 800 000 0000
                </span>
              </a>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 border-t border-sand/15 pt-4 sm:pt-5">
                <span className="kicker text-sand/60">Location</span>
                <span className="font-display text-xl sm:text-2xl md:text-3xl text-sand">Lagos / Remote</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              {socials.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  data-cursor-hover
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-ink-2/60 border border-sand/15 text-sand hover:text-vibrant hover:border-vibrant transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="col-span-12 lg:col-span-7 rounded-cinema glass-strong p-5 sm:p-7 md:p-10 space-y-5 sm:space-y-6"
          >
            {['name', 'email'].map((f) => (
              <div key={f} className="relative">
                <label className="kicker text-sand/55 block mb-2">
                  {f === 'name' ? 'Your name' : 'Email'}
                </label>
                <input
                  name={f}
                  type={f === 'email' ? 'email' : 'text'}
                  required
                  value={form[f]}
                  onChange={handle}
                  className="w-full bg-transparent border-b border-sand/20 focus:border-vibrant outline-none py-2.5 sm:py-3 font-display text-xl sm:text-2xl md:text-3xl text-sand placeholder:text-sand/30 transition-colors"
                  placeholder={f === 'name' ? 'Léa Marchetti' : 'hello@brand.com'}
                />
              </div>
            ))}
            <div>
              <label className="kicker text-sand/55 block mb-2">Tell me about your brand</label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handle}
                className="w-full bg-transparent border-b border-sand/20 focus:border-vibrant outline-none py-2.5 sm:py-3 font-serif text-base sm:text-lg md:text-xl text-sand placeholder:text-sand/30 resize-none transition-colors"
                placeholder="A few words about the brand, goals and timeline…"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 pt-2">
              <span className="font-poppins text-xs sm:text-sm text-sand/60">
                Avg. reply time · <span className="text-vibrant">under 24h</span>
              </span>
              <MagneticButton type="submit" className="animate-pulseglow">
                {sent ? 'Sent ✓' : 'Send message'}
                <HiArrowUpRight />
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
