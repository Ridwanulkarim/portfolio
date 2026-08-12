import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiGitBranch, FiActivity } from 'react-icons/fi';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { githubSectionData, socialLinks } from '../data/portfolioData';

export default function GithubSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <GlassCard className="p-8 md:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-r from-[#08080f] via-[#050508] to-[#0d0714]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                <FiActivity className="w-3.5 h-3.5 animate-pulse" />
                <span>OPEN SOURCE &amp; CODE REPOS</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white font-heading">
                {githubSectionData.title}
              </h2>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl font-normal">
                {githubSectionData.description}
              </p>

              <div className="pt-4">
                <Button 
                  variant="primary" 
                  href={socialLinks.github} 
                  external={true}
                  className="gap-2"
                >
                  <FiGithub className="w-5 h-5" />
                  <span>Visit GitHub Profile</span>
                  <FiExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right: Technical Stats Card */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {githubSectionData.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400">
                        {idx === 0 ? <FiCode className="w-4 h-4" /> : idx === 1 ? <FiGitBranch className="w-4 h-4" /> : <FiActivity className="w-4 h-4" />}
                      </div>
                      <span className="text-xs font-mono text-slate-400">{stat.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </GlassCard>

      </div>
    </section>
  );
}
