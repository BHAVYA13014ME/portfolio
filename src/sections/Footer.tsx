import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from 'lucide-react';
import { personalInfo, navLinks } from '../utils/data';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-dark-100">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-dark font-bold font-mono text-sm">BB</span>
              </div>
              <div>
                <p className="font-bold text-text-primary">{personalInfo.name}</p>
                <p className="text-primary text-xs font-mono">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Building modern web experiences with passion, precision, and purpose.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { href: personalInfo.github, icon: <Github size={17} />, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: <Linkedin size={17} />, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: <Mail size={17} />, label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Center: Nav links */}
          <div className="flex flex-col gap-3 items-center">
            <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-1">Navigation</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-text-muted text-sm hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Back to top */}
          <div className="flex flex-col items-end gap-4">
            <motion.button
              onClick={scrollTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-text-secondary hover:text-primary hover:border-primary/30 hover:bg-primary/5 text-sm transition-all duration-200"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <ArrowUp size={15} />
              Back to Top
            </motion.button>

            <div className="text-right">
              <p className="text-text-muted text-xs flex items-center gap-1 justify-end">
                <span>📍</span> {personalInfo.location}
              </p>
              <p className="text-text-muted text-xs mt-1">
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm flex items-center gap-1.5">
            © {year}
            <span className="text-text-primary font-medium mx-1">{personalInfo.name}</span>
            — Made with{' '}
            <Heart size={13} className="text-red-500 fill-red-500 inline" />
            {' '}& <Code2 size={13} className="text-primary inline" />
          </p>
          <p className="text-text-muted text-xs font-mono">
            Built with React · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
