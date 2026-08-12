import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { personalData, hobbiesAndInterestsData, languagesData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs font-mono tracking-widest text-violet-400 uppercase mb-3 block">
                // 01. ABOUT ME
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading">
                {personalData.bioHeadline}
              </h2>
            </div>

            {/* Profile Image Frame */}
            <div className="relative group max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 via-indigo-600/20 to-pink-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />
              
              <div className="relative rounded-2xl overflow-hidden glass-panel p-3 border border-white/10 bg-[#08080c]">
                <div className="relative aspect-[3/4] sm:aspect-square rounded-xl overflow-hidden bg-slate-900">
                  <img 
                    src={personalData.profileImage} 
                    alt={personalData.fullName}
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030304] via-transparent to-transparent opacity-50" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Micro Details Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8 lg:pt-12"
          >
            <div className="space-y-6 text-base md:text-lg text-slate-300 leading-relaxed font-normal">
              {personalData.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Micro Details Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <GlassCard hoverEffect={true} className="p-5">
                <span className="text-xs font-mono text-violet-400 block mb-1">PASSION &amp; HOBBY</span>
                <h4 className="text-lg font-semibold text-white">Astronomical Observation 🔭</h4>
                <p className="text-xs text-slate-400 mt-1">Observing stars, moon, &amp; galaxies with a telescope—enhancing curiosity and patience.</p>
              </GlassCard>

              <GlassCard hoverEffect={true} className="p-5">
                <span className="text-xs font-mono text-violet-400 block mb-1">EDUCATION</span>
                <h4 className="text-lg font-semibold text-white">B.Sc. in CSE @ IIUC</h4>
                <p className="text-xs text-slate-400 mt-1">International Islamic University Chittagong (2024–2028).</p>
              </GlassCard>

              <GlassCard hoverEffect={true} className="p-5">
                <span className="text-xs font-mono text-violet-400 block mb-1">LANGUAGES</span>
                <h4 className="text-lg font-semibold text-white">English &amp; Bengali</h4>
                <p className="text-xs text-slate-400 mt-1">English (Fluent) • Bengali (Native speaker).</p>
              </GlassCard>

              <GlassCard hoverEffect={true} className="p-5">
                <span className="text-xs font-mono text-violet-400 block mb-1">INTERESTS</span>
                <h4 className="text-lg font-semibold text-white">Coding, Writing &amp; Gardening</h4>
                <p className="text-xs text-slate-400 mt-1">Competitive programming, technical articles, and gardening.</p>
              </GlassCard>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
