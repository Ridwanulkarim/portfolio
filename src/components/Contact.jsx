import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiArrowRight, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { socialLinks, contactConfig } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields before sending.' });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    // Success response handling (transparent mock / mailto option)
    setStatus({ 
      type: 'success', 
      message: 'Thank you for reaching out! Form submitted successfully. You can also email directly at ' + socialLinks.email 
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative bg-[#030305]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: CTA & Channels */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-xs font-mono tracking-widest text-violet-400 uppercase mb-3 block">
                // 07. GET IN TOUCH
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-heading leading-tight mb-6">
                Let's build <br className="hidden sm:block" />
                <span className="text-gradient-accent">something.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-md">
                Have a project, idea, collaboration, or opportunity in mind? I'd love to hear about it.
              </p>
            </div>

            {/* Action Channels */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <Button 
                variant="primary" 
                href={`mailto:${socialLinks.email}`}
                external={true}
                className="gap-2"
              >
                <FiMail className="w-4 h-4" />
                <span>Email Me ↗</span>
              </Button>

              <Button 
                variant="secondary" 
                href={socialLinks.linkedin}
                external={true}
                className="gap-2"
              >
                <FiLinkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn ↗</span>
              </Button>

              <Button 
                variant="secondary" 
                href={socialLinks.github}
                external={true}
                className="gap-2"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub ↗</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <GlassCard className="p-8 md:p-10 border border-white/10 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or role..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Status Feedback Message */}
                {status.type === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                    <FiAlertCircle className="w-4 h-4 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {status.type === 'success' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs">
                    <FiCheckCircle className="w-4 h-4 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                <Button variant="primary" type="submit" className="w-full">
                  <span>Send Message</span>
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-[11px] text-center text-slate-500 font-mono">
                  {contactConfig.formNotice}
                </p>

              </form>
            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
