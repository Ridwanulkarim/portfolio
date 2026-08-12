import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiCheckCircle } from 'react-icons/fi';
import GlassCard from './ui/GlassCard';
import { Tag } from './ui/Tag';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="w-full"
    >
      <GlassCard className="p-0 overflow-hidden group border border-white/[0.08] hover:border-violet-500/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Project Preview Image */}
          <div className="lg:col-span-6 relative overflow-hidden bg-slate-950 aspect-video lg:aspect-auto">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80 lg:opacity-30" />
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/70 backdrop-blur-md text-violet-300 border border-white/10">
                // PROJECT {project.number}
              </span>
            </div>
          </div>

          {/* Project Copy & Info */}
          <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading group-hover:text-violet-200 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {project.description}
              </p>

              {/* Key Features List */}
              <div className="mb-6 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Key Highlights:</span>
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <FiCheckCircle className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>

            {/* Project Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
              <a
                href={project.liveDemo}
                onClick={(e) => project.liveDemo === '#' && e.preventDefault()}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-full transition-all duration-300 group/btn"
              >
                <span>Live Demo</span>
                <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>

              <a
                href={project.github}
                onClick={(e) => project.github === '#' && e.preventDefault()}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white px-4 py-2.5 rounded-full hover:bg-white/5 transition-all duration-300"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

        </div>
      </GlassCard>
    </motion.div>
  );
}
