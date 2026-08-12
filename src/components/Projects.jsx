import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading 
          number="03. FEATURED WORK"
          title="Selected Work"
          subtitle="A few projects I've built while learning, experimenting and solving real-world problems."
        />

        {/* Project Cards Stack */}
        <div className="space-y-12 md:space-y-16">
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
