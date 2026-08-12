import React from 'react';
import GrainOverlay from './components/GrainOverlay';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIBuild from './components/WhatIBuild';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Journey from './components/Journey';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030304] text-slate-100 selection:bg-violet-500/30 selection:text-violet-200">
      {/* Background Subtle Grain Texture */}
      <GrainOverlay />

      {/* Desktop Custom Pointer Cursor */}
      <CustomCursor />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Viewport */}
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Projects />
        <Skills />
        <Education />
        <Journey />
        <GithubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
