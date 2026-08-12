import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { Tag } from './ui/Tag';
import { educationData } from '../data/portfolioData';
import { FiBookOpen, FiAward } from 'react-icons/fi';

export default function Education() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-mono tracking-widest text-violet-400 uppercase mb-3 block">
              // 05. ACADEMIC BACKGROUND
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-heading mb-6">
              Education
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Grounding practical engineering capabilities in strong computer science fundamentals, algorithm design, and modern software principles.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8 border border-white/10 relative">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-3">
                    <FiBookOpen className="w-3.5 h-3.5" />
                    {educationData.status}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                    {educationData.degree}
                  </h3>
                  <p className="text-slate-300 text-lg font-medium mt-1">
                    {educationData.institution}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                  <FiAward className="w-4 h-4 text-violet-400" />
                  Key Coursework &amp; Focus Areas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {educationData.focusAreas.map((area) => (
                    <Tag key={area}>{area}</Tag>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
