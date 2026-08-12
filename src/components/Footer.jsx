import React from 'react';
import { personalData, socialLinks } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#030304] text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold font-heading text-white">
              {personalData.preferredName}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Computer Science &amp; Engineering</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FiGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FiLinkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a 
              href={`mailto:${socialLinks.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FiMail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Copyright & Attribution */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-slate-500 text-center md:text-right">
            <span>© 2026 {personalData.fullName}</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-400">Built with React</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
