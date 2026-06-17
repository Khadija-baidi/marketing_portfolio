import MarqueeText from './ui/MarqueeText';

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-sand/10 overflow-hidden">
      <div className="py-12 md:py-20">
        <MarqueeText
          items={['AVAILABLE FOR PROJECTS', 'LET’S TALK', 'Q1 2026', 'CINEMATIC GROWTH']}
          separator="✦"
        />
      </div>

      <div className="px-5 md:px-12 lg:px-20 pb-10 grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-vibrant text-ink font-display text-xl">A</span>
            <span className="font-display text-sand text-2xl">Alex<span className="text-vibrant">.</span>Marketer</span>
          </div>
          <p className="mt-5 max-w-sm font-poppins text-sm text-sand/60 leading-relaxed">
            Independent digital marketer & creative director — building cinematic brand systems and
            performance media for ambitious teams.
          </p>
        </div>

        <div className="col-span-6 md:col-span-3">
          <div className="kicker text-sand/55 mb-4">Navigate</div>
          <ul className="space-y-2 font-poppins text-sand/80">
            <li><a href="#home" className="hover:text-vibrant transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-vibrant transition-colors">About</a></li>
            <li><a href="#work" className="hover:text-vibrant transition-colors">Work</a></li>
            <li><a href="#contact" className="hover:text-vibrant transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-4">
          <div className="kicker text-sand/55 mb-4">Elsewhere</div>
          <ul className="space-y-2 font-poppins text-sand/80">
            <li><a href="#" className="hover:text-vibrant transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-vibrant transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-vibrant transition-colors">Behance</a></li>
            <li><a href="mailto:hello@alexmarketer.com" className="hover:text-vibrant transition-colors break-all">hello@alexmarketer.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/10 px-5 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-3 font-poppins text-xs text-sand/50">
        <span>© {new Date().getFullYear()} Alex Marketer · All rights reserved.</span>
        <span>Designed with intention · Built with motion.</span>
      </div>
    </footer>
  );
}
