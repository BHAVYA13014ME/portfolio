import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Code2, GraduationCap, Zap } from 'lucide-react';
import { personalInfo, stats } from '../utils/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../animations/variants';

const highlights = [
  { icon: <Code2 size={18} />, label: 'Full Stack Expert', color: 'text-primary' },
  { icon: <Zap size={18} />, label: 'Performance First', color: 'text-accent-light' },
  { icon: <GraduationCap size={18} />, label: 'Always Learning', color: 'text-emerald-400' },
];

export default function About() {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Ambient glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-accent/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block text-primary font-mono text-sm uppercase tracking-widest mb-3">
            // About me
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black">
            Who <span className="gradient-text">I Am</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual card */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative">
              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-primary rounded-tl-xl" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-accent rounded-br-xl" />

              {/* Main card */}
              <div className="bg-dark-400 rounded-2xl border border-white/8 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-accent/4 pointer-events-none" />

                <div className="relative flex flex-col gap-6">
                  {/* Avatar block */}
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-2xl font-black text-dark">BB</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{personalInfo.name}</h3>
                      <p className="text-primary font-mono text-sm">Full Stack Web Developer</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 text-xs">{personalInfo.availableFor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Info grid */}
                  <div className="grid gap-3">
                    {[
                      { icon: <MapPin size={15} />, label: 'Location', value: personalInfo.location },
                      { icon: <Mail size={15} />, label: 'Email', value: personalInfo.email },
                      { icon: <Phone size={15} />, label: 'Phone', value: personalInfo.phone },
                      { icon: <GraduationCap size={15} />, label: 'Education', value: personalInfo.education },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-dark-500 border border-white/5">
                        <span className="text-primary flex-shrink-0">{item.icon}</span>
                        <div className="min-w-0">
                          <p className="text-text-muted text-xs font-mono">{item.label}</p>
                          <p className="text-text-secondary text-sm truncate">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-col gap-2">
                    {highlights.map((h) => (
                      <div key={h.label} className="flex items-center gap-3">
                        <span className={h.color}>{h.icon}</span>
                        <span className="text-text-secondary text-sm">{h.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-text-secondary text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-text-secondary leading-relaxed">
                {personalInfo.bio2}
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mt-2">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-dark-400 rounded-2xl border border-white/5 p-5 text-center relative overflow-hidden group cursor-default"
                  whileHover={{ y: -3, borderColor: 'rgba(0,212,255,0.25)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-3xl font-black gradient-text font-mono">{stat.value}</div>
                  <div className="text-text-muted text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex gap-4 pt-2">
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior:'smooth'}); }}
                className="btn-primary"
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0,212,255,0.35)' }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior:'smooth'}); }}
                className="btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
