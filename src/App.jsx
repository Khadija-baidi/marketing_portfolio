import { useState } from 'react';
import useLenis from './hooks/useLenis';
import Preloader from './components/Preloader';
import SmoothCursor from './components/SmoothCursor';
import GrainOverlay from './components/ui/GrainOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MarqueeStrip from './components/MarqueeStrip';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [ready, setReady] = useState(false);
  useLenis();

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <SmoothCursor />
      <GrainOverlay opacity={0.15} />
      <Navbar />
      <main className={`relative ${ready ? '' : 'pointer-events-none'}`}>
        <Hero />
        <About />
        <MarqueeStrip />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
