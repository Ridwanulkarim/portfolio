import React from 'react';

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

export default SectionHeading;
