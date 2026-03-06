import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../utils/data';
import { fadeInUp, staggerContainer, scaleIn } from '../animations/variants';

export default function Projects() {
  const { ref, inView } = useScrollAnimation(0.08);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = filter === 'featured' ? projects.filter(p => p.featured) : projects;

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      {/* Ambient glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <motion.span variants={fadeInUp} className="inline-block text-primary font-mono text-sm uppercase tracking-widest mb-3">
            // My Work
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary mt-4 max-w-xl mx-auto">
            A collection of projects that showcase my skills in building real-world, full-stack applications.
          </motion.p>
          <motion.div variants={fadeInUp} className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />

          {/* Filter tabs */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mt-8">
            {(['all', 'featured'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-200 ${
                  filter === f
                    ? 'bg-primary text-dark shadow-lg'
                    : 'border border-white/10 text-text-secondary hover:border-primary/30 hover:text-white'
                }`}
              >
                {f === 'all' ? `All Projects (${projects.length})` : `Featured (${projects.filter(p => p.featured).length})`}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative bg-dark-400 rounded-2xl border border-white/5 overflow-hidden cursor-default"
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{
                  y: -6,
                  borderColor: `${project.color}40`,
                  boxShadow: `0 20px 50px ${project.color}18, 0 4px 20px rgba(0,0,0,0.6)`,
                }}
                transition={{ duration: 0.25 }}
              >
                {/* Top color bar */}
                <div
                  className="h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}40)` }}
                />

                {/* Card glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
                  style={{ background: `radial-gradient(ellipse at top, ${project.color}06, transparent 60%)` }}
                />

                <div className="p-6 flex flex-col gap-4 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                      >
                        <Code2 size={18} style={{ color: project.color }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-text-primary group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <Star size={10} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-yellow-400 text-xs font-mono">Featured</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action links */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-text-muted hover:text-white hover:border-white/30 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="GitHub"
                      >
                        <Github size={15} />
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-text-muted hover:text-primary hover:border-primary/40 transition-all"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Live Demo"
                        >
                          <ExternalLink size={15} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-500 border border-white/8 text-text-muted"
                        style={{ borderColor: hovered === project.id ? `${project.color}25` : undefined }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between pt-1 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-text-muted hover:text-primary font-mono transition-colors flex items-center gap-1"
                    >
                      <Github size={12} /> View Source
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium flex items-center gap-1 transition-colors"
                        style={{ color: project.color }}
                      >
                        Live Demo <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span className="text-xs text-text-muted font-mono">No live demo</span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/BHAVYA13014ME"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-white/10 text-text-secondary hover:text-white hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 font-medium"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={20} />
            View All Repositories on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
