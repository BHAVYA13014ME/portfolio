import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ArrowDown, Terminal, Braces, GraduationCap } from 'lucide-react';
import { personalInfo } from '../utils/data';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '../animations/variants';

const roles = [
  'Full Stack Web Developer',
  'React Developer',
  'Node.js Engineer',
  'UI/UX Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= role.length) {
      timeout = setTimeout(() => {
        setDisplayed(role.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(role.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRole((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="section-container w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-medium">{personalInfo.availableFor}</span>
              </div>
              <div className="flex items-center gap-1 text-text-muted text-xs font-mono">
                <Terminal size={12} />
                <span>v2025</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="block text-text-primary">Hi, I'm</span>
                <span className="block gradient-text mt-1">{personalInfo.name}</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <Braces size={20} className="text-primary flex-shrink-0" />
              <span className="font-mono text-xl sm:text-2xl text-text-secondary">
                <span className="text-primary">{displayed}</span>
                <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 animate-pulse" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-text-secondary text-lg leading-relaxed max-w-lg"
            >
              {personalInfo.tagline}
              {' '}Based in <span className="text-primary">{personalInfo.location}</span>.
            </motion.p>

            {/* Location & contact quick info */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 text-sm text-text-muted font-mono">
              <span className="flex items-center gap-1.5">
                <span className="text-primary">📍</span> {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-primary">✉️</span> {personalInfo.email}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary"
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(0,212,255,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
              <motion.a
                href="/Bhavya_Butani_Resume.pdf"
                download
                className="btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <span className="text-text-muted text-xs font-mono uppercase tracking-wider">Connect</span>
              <div className="h-px w-8 bg-white/10" />
              <div className="flex items-center gap-3">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-text-secondary hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all text-sm"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Github size={16} />
                  <span className="hidden sm:inline font-mono">GitHub</span>
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-text-secondary hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all text-sm"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Linkedin size={16} />
                  <span className="hidden sm:inline font-mono">LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile card / visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center"
          >
            {/* Background orb */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 blur-3xl animate-pulse-slow" />
            </div>

            {/* Main card */}
            <motion.div
              className="relative w-full max-w-sm"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Spinning decorative ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-dashed border-primary/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-dashed border-accent/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Profile card content */}
              <div className="relative bg-dark-400 rounded-3xl border border-white/8 p-8 shadow-2xl overflow-hidden">
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

                {/* Avatar initials */}
                <div className="relative flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-neon-cyan">
                      <span className="text-4xl font-black text-dark">BB</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-lg bg-dark-400 border border-primary/30 flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-text-primary">{personalInfo.name}</h3>
                    <p className="text-primary text-sm font-mono mt-0.5">Full Stack Developer</p>
                    <p className="text-text-muted text-xs mt-1">📍 {personalInfo.location}</p>
                    <div className="flex items-center justify-center gap-1.5 mt-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mx-auto w-fit">
                      <GraduationCap size={12} className="text-accent-light flex-shrink-0" />
                      <span className="text-accent-light text-xs font-medium">{personalInfo.education}</span>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 w-full pt-2">
                    {[
                      { val: '5+', label: 'Projects' },
                      { val: '15+', label: 'Tech Stack' },
                      { val: '100%', label: 'Passion' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-2 rounded-xl bg-dark-500 border border-white/5">
                        <p className="text-primary font-bold text-lg font-mono">{stat.val}</p>
                        <p className="text-text-muted text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 justify-center pt-1">
                    {['React', 'Node.js', 'TypeScript', 'MongoDB'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-dark-500 border border-white/8 text-xs text-text-secondary font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToNext}
        >
          <span className="text-text-muted text-xs font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
