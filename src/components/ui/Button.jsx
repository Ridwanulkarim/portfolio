import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '', 
  external = false,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full px-6 py-3.5 text-sm md:text-base group cursor-pointer";
  
  const variants = {
    primary: "bg-white text-black hover:bg-slate-200 shadow-lg shadow-white/5 hover:shadow-violet-500/20 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "glass-panel text-white hover:bg-white/10 hover:border-violet-500/40 hover:scale-[1.02] active:scale-[0.98]",
    outline: "border border-white/20 text-slate-200 hover:border-white hover:text-white hover:bg-white/5",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5"
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        target={external ? "_blank" : undefined} 
        rel={external ? "noopener noreferrer" : undefined}
        className={combinedClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
