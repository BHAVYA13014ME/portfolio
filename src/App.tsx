import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticleBackground from './components/ParticleBackground';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="relative min-h-screen bg-dark">
        {/* Scroll progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent z-[9999] origin-left"
          style={{ scaleX }}
        />

        {/* Particle background */}
        <ParticleBackground />

        {/* Grid pattern overlay */}
        <div className="fixed inset-0 grid-pattern opacity-40 pointer-events-none z-0" />

        {/* Radial gradient overlay */}
        <div className="fixed inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,212,255,0.06), transparent)' }}
        />

        {/* Main content */}
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
