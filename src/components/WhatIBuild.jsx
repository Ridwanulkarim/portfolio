import React from 'react';
import { motion } from 'framer-motion';
import { whatIBuildData } from '../data/portfolioData';
import GlassCard from './ui/GlassCard';

export default function WhatIBuild() {
  return (
    <section className="py-24 md:py-32 relative bg-[#050508]/60 border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-violet-400 uppercase mb-3 block">
            // 02. CORE CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading">
            What I build
          </h2>
        </div>

        {/* Grid of 4 Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {whatIBuildData.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group p-8 border border-white/[0.08] hover:border-violet-500/30">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl sm:text-5xl font-mono font-bold text-slate-700 group-hover:text-violet-400 transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-violet-400 group-hover:scale-150 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                  <span>CAPABILITY // {item.number}</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Explore →</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
