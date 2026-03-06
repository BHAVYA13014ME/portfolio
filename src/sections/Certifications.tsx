import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BadgeCheck, Calendar, Award } from 'lucide-react';
import { certifications } from '../utils/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp, staggerContainer, scaleIn } from '../animations/variants';

export default function Certifications() {
  const { ref, inView } = useScrollAnimation(0.08);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="certifications" className="py-24 lg:py-32 relative">
      {/* Ambient glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <motion.span variants={fadeInUp} className="inline-block text-primary font-mono text-sm uppercase tracking-widest mb-3">
            // achievements
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black">
            Achievements &amp; <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary mt-4 max-w-xl mx-auto">
            Verified credentials and recognitions that reflect my commitment to continuous learning and growth.
          </motion.p>
          <motion.div variants={fadeInUp} className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        {/* macOS-style browser window chrome */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          style={{ background: 'rgba(15,15,25,0.7)', backdropFilter: 'blur(12px)' }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-3 px-5 py-3.5 bg-white/5 border-b border-white/10">
            {/* Traffic-light dots */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            {/* Centered title */}
            <div className="flex-1 text-center">
              <span className="text-text-muted text-sm font-mono">🏆 Achievements &amp; Certifications</span>
            </div>
          </div>

          {/* Cards grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 p-6"
          >
            {certifications.map((cert) => {
              const thumbSrc = `https://drive.google.com/thumbnail?id=${cert.driveId}&sz=w600`;
              return (
                <motion.article
                  key={cert.id}
                  variants={scaleIn}
                  className="group relative rounded-2xl overflow-hidden border border-white/8 flex flex-col"
                  style={{ background: 'rgba(20,20,32,0.9)' }}
                  whileHover={{
                    y: -6,
                    borderColor: `${cert.color}50`,
                    boxShadow: `0 20px 50px ${cert.color}20`,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  {/* ── Image area ── */}
                  <div className="relative bg-white overflow-hidden" style={{ height: '200px' }}>
                    {imgErrors[cert.id] ? (
                      /* Fallback when thumbnail can't load */
                      <div
                        className="w-full h-full flex flex-col items-center justify-center gap-3"
                        style={{ background: `linear-gradient(135deg, ${cert.color}18, ${cert.color}08)` }}
                      >
                        <Award size={48} style={{ color: cert.color }} />
                        <span className="text-xs font-mono text-center px-4" style={{ color: cert.color }}>
                          Certificate Preview
                        </span>
                      </div>
                    ) : (
                      <img
                        src={thumbSrc}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgErrors((prev) => ({ ...prev, [cert.id]: true }))}
                        crossOrigin="anonymous"
                      />
                    )}

                    {/* ACHIEVEMENT badge — top-right */}
                    <span
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${cert.color}, ${cert.color}bb)`,
                        boxShadow: `0 4px 12px ${cert.color}50`,
                      }}
                    >
                      Achievement
                    </span>

                    {/* Certified pill — bottom-right */}
                    <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/70 text-white border border-white/20 backdrop-blur-sm">
                      {(cert as any).tag ?? 'Certified'}
                    </span>
                  </div>

                  {/* ── Info area ── */}
                  <div className="flex flex-col gap-3 p-4 flex-1">
                    {/* Title + checkmark */}
                    <div className="flex items-start gap-2">
                      <BadgeCheck size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <h3 className="text-text-primary font-bold text-sm leading-snug group-hover:text-white transition-colors">
                        {cert.title}
                      </h3>
                    </div>

                    {/* Category + date meta row */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted">
                      <div className="flex items-center gap-1.5">
                        <Award size={12} style={{ color: cert.color }} />
                        <span style={{ color: cert.color }} className="font-medium">{(cert as any).category ?? 'Achievement'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-text-muted" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Issuer */}
                    <p className="text-text-muted text-xs leading-relaxed">{cert.issuer}</p>

                    {/* Description */}
                    <p className="text-text-muted text-xs leading-relaxed line-clamp-2 flex-1">{cert.description}</p>

                    {/* View Certificate button */}
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white mt-auto"
                      style={{
                        background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)`,
                        boxShadow: `0 4px 14px ${cert.color}40`,
                      }}
                      whileHover={{ scale: 1.02, boxShadow: `0 6px 20px ${cert.color}60` }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={14} />
                      View Certificate
                    </motion.a>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
