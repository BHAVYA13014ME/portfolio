import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import { navLinks, personalInfo } from '../utils/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1));
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500"
      animate={{
        backgroundColor: scrolled ? 'rgba(10,10,15,0.90)' : 'rgba(10,10,15,0)',
        borderColor: scrolled ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
      }}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-[70px]">
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
            <span className="text-dark font-bold text-sm font-mono">BB</span>
          </div>
          <span className="font-bold text-lg hidden sm:block">
            <span className="gradient-text">Bhavya</span>
            <span className="text-text-secondary ml-1">Butani</span>
          </span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-primary'
                  : 'text-text-secondary hover:text-white'
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Social icons (desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={17} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={17} />
            </motion.a>
          </div>

          {/* Hire me badge */}
          <motion.div
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium"
            animate={{ borderColor: ['rgba(0,212,255,0.3)', 'rgba(0,212,255,0.6)', 'rgba(0,212,255,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Open to Work
          </motion.div>

          {/* Mobile menu toggle */}
          <motion.button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-text-secondary hover:text-white hover:border-primary/30 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-glass border-t border-white/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-3 pt-3 px-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary text-sm hover:text-primary transition-colors">
                  <Github size={16} /> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary text-sm hover:text-primary transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
