import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, Building2 } from 'lucide-react';
import { certifications } from '../utils/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp, staggerContainer, scaleIn } from '../animations/variants';

export default function Certifications() {
  const { ref, inView } = useScrollAnimation(0.08);
  const [iframeErrors, setIframeErrors] = useState<Record<number, boolean>>({});

  const handleIframeError = (id: number) => {
    setIframeErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="certifications" className="py-24 lg:py-32 relative">
      {/* Ambient glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section separator */}
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
            // Achievements
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black">
            My <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary mt-4 max-w-xl mx-auto">
            Verified credentials that demonstrate my commitment to continuous learning and professional growth.
          </motion.p>
          <motion.div variants={fadeInUp} className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        {/* Certifications grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.article
              key={cert.id}
              variants={scaleIn}
              className="group relative bg-dark-400 rounded-2xl border border-white/5 overflow-hidden"
              whileHover={{
                y: -6,
                borderColor: `${cert.color}40`,
                boxShadow: `0 20px 60px ${cert.color}18`,
              }}
              transition={{ duration: 0.25 }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 z-10"
                style={{ background: `linear-gradient(to right, ${cert.color}, transparent)` }}
              />

              {/* Certificate preview — photo-like frame */}
              <div className="relative overflow-hidden bg-dark-500" style={{ height: '260px' }}>
                {iframeErrors[cert.id] ? (
                  /* Fallback if Drive embed is blocked */
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${cert.color}30, ${cert.color}10)`, border: `1px solid ${cert.color}30` }}
                    >
                      <Award size={36} style={{ color: cert.color }} />
                    </div>
                    <p className="text-text-muted text-xs font-mono text-center px-4">
                      Preview not available — click "View Certificate" below
                    </p>
                  </div>
                ) : (
                  <iframe
                    src={`https://drive.google.com/file/d/${cert.driveId}/preview`}
                    className="w-full h-full border-0"
                    title={cert.title}
                    allow="autoplay"
                    onError={() => handleIframeError(cert.id)}
                  />
                )}

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-400 to-transparent pointer-events-none z-10" />
              </div>

              {/* Certificate info */}
              <div className="p-5 flex flex-col gap-3">
                {/* Icon + title */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                  >
                    <Award size={18} style={{ color: cert.color }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-text-primary font-bold text-base leading-snug group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-text-muted text-xs mt-0.5 line-clamp-2">{cert.description}</p>
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex items-center justify-between text-xs text-text-muted font-mono border-t border-white/5 pt-3">
                  <div className="flex items-center gap-1.5">
                    <Building2 size={12} className="text-primary flex-shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-accent-light flex-shrink-0" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* View button */}
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border"
                  style={{
                    color: cert.color,
                    borderColor: `${cert.color}40`,
                    background: `${cert.color}08`,
                  }}
                  whileHover={{
                    background: `${cert.color}20`,
                    borderColor: `${cert.color}70`,
                    scale: 1.01,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={14} />
                  View Certificate
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
