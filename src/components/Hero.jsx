import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import Button from './ui/Button';
import HeroVisual from './HeroVisual';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-pink-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs md:text-sm font-medium text-slate-300 mb-8 backdrop-blur-md hover:border-emerald-500/40 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalData.status}</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.04] mb-6 font-heading">
              I build digital experiences that are{' '}
              <span className="text-gradient-accent">simple, useful &amp; scalable.</span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mb-10">
              {personalData.heroSubtext}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button 
                variant="primary" 
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto"
              >
                <span>View Projects</span>
                <FiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button 
                variant="secondary" 
                onClick={handleScrollToContact}
                className="w-full sm:w-auto"
              >
                <span>Let's Connect</span>
                <FiArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-violet-400" />
              </Button>
            </div>

            {/* Quick Micro Details */}
            <div className="mt-14 pt-8 border-t border-white/[0.08] w-full flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-400">LOCATION:</span> <span className="text-slate-200">Bangladesh</span>
              </div>
              <div>
                <span className="text-slate-400">ROLE:</span> <span className="text-slate-200">CSE Student</span>
              </div>
              <div>
                <span className="text-slate-400">FOCUS:</span> <span className="text-slate-200">Full-Stack &amp; AI</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Graphic Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
