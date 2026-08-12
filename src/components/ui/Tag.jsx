import React from 'react';

export function Tag({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:border-violet-500/30 hover:text-violet-300 transition-colors ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeading({ number, title, subtitle, className = '' }) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {number && (
        <span className="text-xs font-mono tracking-widest text-violet-400 uppercase mb-3 block">
          // {number}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
