import React from 'react';
import { motion } from 'framer-motion';

export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[420px] lg:max-w-[480px] mx-auto flex items-center justify-center pointer-events-none select-none">
      {/* Background Ambient Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-violet-600/30 via-indigo-600/20 to-pink-500/20 blur-3xl animate-ambient-glow" />
      
      {/* Outer Geometric Frame */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-white/[0.06] border-dashed"
      />

      {/* Counter-rotating Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-violet-500/20"
      />

      {/* Main Glass Geometric Centerpiece */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-3/4 h-3/4 rounded-3xl glass-panel p-6 flex flex-col justify-between shadow-2xl shadow-violet-950/40 border border-white/10 backdrop-blur-2xl bg-[#08080f]/70"
      >
        {/* Top Header Mockup */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 tracking-wider">RIDWAN.DEV // CSE</span>
        </div>

        {/* Code Visual Lines */}
        <div className="space-y-3 my-auto py-2 font-mono text-xs text-slate-300">
          <div className="flex items-center gap-2 text-violet-400">
            <span className="text-slate-600">01</span>
            <span className="text-pink-400">const</span> engineer = <span className="text-emerald-400">"Ridwan"</span>;
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-600">02</span>
            <span className="text-pink-400">const</span> stack = [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node"</span>, <span className="text-amber-300">"AI"</span>];
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-slate-600">03</span>
            <span className="text-violet-400">function</span> <span className="text-blue-400">buildSolutions</span>() &#123;
          </div>
          <div className="flex items-center gap-2 pl-4 text-emerald-400">
            <span className="text-slate-600">04</span>
            return <span className="text-slate-200">"Simple, Useful & Scalable"</span>;
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-slate-600">05</span>
            &#125;
          </div>
        </div>

        {/* Bottom Status Card */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs text-slate-300 font-medium">CSE Student @ IIUC</span>
          </div>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
            Full-Stack & AI
          </span>
        </div>
      </motion.div>
    </div>
  );
}
