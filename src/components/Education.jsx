import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { Tag } from './ui/Tag';
import { educationData } from '../data/portfolioData';
import { FiBookOpen, FiAward, FiCheckCircle } from 'react-icons/fi';

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="06. ACADEMIC BACKGROUND"
          title="Education"
          subtitle="Grounding practical software capabilities in Computer Science, engineering fundamentals, and high academic excellence."
        />

        {/* Education Stack */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 border border-white/10 relative group hover:border-violet-500/40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Degree & Institution */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${
                        edu.status === 'Currently Enrolled'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                          : 'bg-violet-500/10 border-violet-500/30 text-violet-300'
                      }`}>
                        <FiBookOpen className="w-3.5 h-3.5" />
                        {edu.status}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading group-hover:text-violet-200 transition-colors">
                      {edu.degree}
                    </h3>

                    <p className="text-slate-300 text-base md:text-lg font-medium mt-1">
                      {edu.institution}
                    </p>

                    <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-violet-400 bg-white/[0.02] px-3 py-1 rounded-lg border border-white/[0.05]">
                      <FiCheckCircle className="w-3.5 h-3.5" />
                      <span>Result: {edu.result}</span>
                    </div>
                  </div>

                  {/* Right Column: Focus Areas */}
                  <div className="lg:col-span-5 pt-4 lg:pt-0 lg:border-l lg:border-white/[0.08] lg:pl-6">
                    <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-2">
                      <FiAward className="w-4 h-4 text-violet-400" />
                      Subjects &amp; Focus Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.focusAreas.map((area) => (
                        <Tag key={area}>{area}</Tag>
                      ))}
                    </div>
                  </div>

                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
