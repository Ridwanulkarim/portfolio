import React from 'react';

export function Tag({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:border-violet-500/30 hover:text-violet-300 transition-colors ${className}`}>
      {children}
    </span>
  );
}

export default Tag;
