import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../utils/data';
import { fadeInUp, staggerContainer, progressBar, scaleIn } from '../animations/variants';

const allTechTags = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS',
  'Node.js', 'Express.js', 'REST API', 'MongoDB', 'SQL',
  'Git', 'GitHub', 'VS Code', 'Vercel',
];

export default function Skills() {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      {/* Ambient glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-60 h-60 bg-accent/6 rounded-full blur-[80px] pointer-events-none" />

      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block text-primary font-mono text-sm uppercase tracking-widest mb-3">
            // Skills & Technologies
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black">
            My <span className="gradient-text">Tech Stack</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary mt-4 max-w-xl mx-auto">
            Technologies and tools I work with on a daily basis to build modern, scalable applications.
          </motion.p>
          <motion.div variants={fadeInUp} className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        {/* Skill categories with progress bars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16"
        >
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              variants={scaleIn}
              className="bg-dark-400 rounded-2xl border border-white/5 p-6 relative overflow-hidden group"
              whileHover={{ y: -4, borderColor: `${category.color}30` }}
              transition={{ duration: 0.25 }}
            >
              {/* Card gradient glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${category.color}08, transparent 60%)` }}
              />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${category.color}15`, border: `1px solid ${category.color}30` }}
                >
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-bold text-text-primary">{category.category}</h3>
                  <p className="text-text-muted text-xs">{category.items.length} skills</p>
                </div>
              </div>

              {/* Skills with progress bars */}
              <div className="space-y-4">
                {category.items.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-text-secondary text-sm font-medium">{skill.name}</span>
                      <span className="text-text-muted text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-500 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${category.color}, ${category.color}99)` }}
                        variants={progressBar}
                        custom={skill.level}
                        transition={{ delay: catIdx * 0.1 + skillIdx * 0.05, duration: 1.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All tech tags marquee-like display */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="bg-dark-400/50 rounded-2xl border border-white/5 p-6 overflow-hidden">
            <p className="text-text-muted text-xs font-mono uppercase tracking-widest text-center mb-5">
              Full Technology Stack
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {allTechTags.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="px-4 py-2 rounded-xl bg-dark-500 border border-white/8 text-sm text-text-secondary font-mono
                             hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
