import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { Tag } from './ui/Tag';
import { certificatesData } from '../data/portfolioData';
import { FiAward, FiMaximize2, FiX, FiCalendar } from 'react-icons/fi';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="05. CERTIFICATIONS & ACHIEVEMENTS"
          title="Professional Certificates"
          subtitle="Official recognition, workshop participations, competition achievements, and academic credentials."
        />

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-0 overflow-hidden group border border-white/[0.08] hover:border-violet-500/40 h-full flex flex-col justify-between">
                
                {/* Image Container with Zoom Preview Trigger */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[4/3] bg-slate-950 overflow-hidden cursor-pointer group/img"
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Overlay Hover Icon */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs">
                    <FiMaximize2 className="w-5 h-5 text-violet-400" />
                    <span>Click to View Full Certificate</span>
                  </div>

                  <div className="absolute top-3 left-3 z-10">
                    <Tag className="bg-black/70 backdrop-blur-md text-violet-300 border-white/10">
                      {cert.type}
                    </Tag>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                      <FiCalendar className="w-3.5 h-3.5 text-violet-400" />
                      <span>{cert.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-violet-200 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-violet-400 text-xs font-medium mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-slate-300 text-xs leading-relaxed font-normal">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <FiAward className="w-4 h-4 text-violet-400" />
                      Verified Record
                    </span>
                    <button 
                      onClick={() => setSelectedCert(cert)}
                      className="text-violet-400 hover:text-white transition-colors cursor-pointer"
                    >
                      View →
                    </button>
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full glass-panel bg-[#0a0a0f] p-4 rounded-2xl border border-white/20 overflow-hidden flex flex-col cursor-default"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white font-heading">{selectedCert.title}</h4>
                  <p className="text-xs text-violet-400 font-mono">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full glass-panel text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Certificate Image */}
              <div className="relative flex-grow overflow-auto max-h-[75vh] flex items-center justify-center rounded-xl bg-slate-950 p-2">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
