import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { personalInfo } from '../utils/data';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../animations/variants';

const contactCards = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#00d4ff',
  },
  {
    icon: <Phone size={22} />,
    label: 'Phone',
    value: `+91 ${personalInfo.phone}`,
    href: `tel:+91${personalInfo.phone}`,
    color: '#10b981',
  },
  {
    icon: <MapPin size={22} />,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    color: '#f59e0b',
  },
  {
    icon: <Github size={22} />,
    label: 'GitHub',
    value: 'BHAVYA13014ME',
    href: personalInfo.github,
    color: '#94a3b8',
  },
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    value: 'bhavya-butani',
    href: personalInfo.linkedin,
    color: '#0077b5',
  },
];

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { ref, inView } = useScrollAnimation(0.08);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || 'Portfolio Contact',
          message: form.message,
          to_name: 'Bhavya',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setFormState('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    } catch {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Ambient glow */}
      <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 top-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

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
            // Get In Touch
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black">
            Let's <span className="gradient-text">Collaborate</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary mt-4 max-w-xl mx-auto">
            Ready to build something amazing together? I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </motion.p>
          <motion.div variants={fadeInUp} className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-4"
          >
            <motion.h3 variants={fadeInLeft} className="text-2xl font-bold text-text-primary mb-2">
              Contact Information
            </motion.h3>
            <motion.p variants={fadeInLeft} className="text-text-secondary leading-relaxed mb-4">
              Feel free to reach out through any of the channels below. I typically respond within 24 hours.
            </motion.p>

            {contactCards.map((card) => (
              <motion.div key={card.label} variants={fadeInLeft}>
                {card.href ? (
                  <motion.a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-dark-400 border border-white/5 group hover:border-primary/20 transition-all duration-300"
                    whileHover={{ x: 4, backgroundColor: 'rgba(0,212,255,0.03)' }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ background: `${card.color}15`, border: `1px solid ${card.color}30`, color: card.color }}
                    >
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-text-muted text-xs font-mono uppercase tracking-wider">{card.label}</p>
                      <p className="text-text-primary font-medium truncate group-hover:text-primary transition-colors">
                        {card.value}
                      </p>
                    </div>
                  </motion.a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-dark-400 border border-white/5 cursor-default">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${card.color}15`, border: `1px solid ${card.color}30`, color: card.color }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-mono uppercase tracking-wider">{card.label}</p>
                      <p className="text-text-primary font-medium">{card.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="bg-dark-400 rounded-2xl border border-white/8 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-accent/4 pointer-events-none" />

              <h3 className="text-2xl font-bold text-text-primary mb-6 relative">Send a Message</h3>

              <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-dark-500 border border-white/10 text-text-primary placeholder-text-muted text-sm
                                 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-500 border border-white/10 text-text-primary placeholder-text-muted text-sm
                                 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-dark-500 border border-white/10 text-text-primary placeholder-text-muted text-sm
                               focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-500 border border-white/10 text-text-primary placeholder-text-muted text-sm
                               focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>

                {/* Status messages */}
                {formState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3"
                  >
                    <CheckCircle2 size={18} />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}

                {formState === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
                  >
                    <AlertCircle size={18} />
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: formState === 'sending' ? 1 : 1.02, boxShadow: '0 0 25px rgba(0,212,255,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formState === 'sending' ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-dark/50 border-t-dark rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
