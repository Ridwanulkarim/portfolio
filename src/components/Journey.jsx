import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { journeyTimeline } from '../data/portfolioData';

export default function Journey() {
  return (
    <section className="py-24 md:py-32 relative bg-[#050508]/60 border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          number="06. EVOLUTION"
          title="My Journey"
          subtitle="How I transitioned from foundational Computer Science to building production-ready applications and exploring intelligent systems."
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pl-6 md:pl-12 space-y-12">
          {journeyTimeline.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[#030304] border-2 border-violet-500 group-hover:scale-125 group-hover:bg-violet-500 transition-all duration-300 shadow-md shadow-violet-500/50" />

              <GlassCard className="p-6 md:p-8 border border-white/[0.08] hover:border-violet-500/30">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">
                    {item.year}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white font-heading mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
