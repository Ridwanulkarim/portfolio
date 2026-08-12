import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { skillsData } from '../data/portfolioData';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiVite, 
  SiNodedotjs, SiExpress, SiPostgresql, SiFirebase, SiGit, SiGithub, SiVisualstudiocode, SiPython
} from 'react-icons/si';
import { TbApi, TbBrain, TbServer, TbCpu } from 'react-icons/tb';

const iconMap = {
  "HTML5": SiHtml5,
  "CSS3 / Vanilla CSS": SiCss3,
  "JavaScript (ES6+)": SiJavascript,
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Vite": SiVite,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": TbApi,
  "PostgreSQL": SiPostgresql,
  "Firebase": SiFirebase,
  "Firestore": SiFirebase,
  "Git": SiGit,
  "GitHub": SiGithub,
  "VS Code": SiVisualstudiocode,
  "AI & Machine Learning": TbBrain,
  "Backend Architecture": TbServer,
  "Scalable Systems": TbCpu
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[#050508]/60 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <SectionHeading
          number="04. TECH STACK"
          title="Tools I work with"
          subtitle="Technologies, frameworks, databases, and tooling I use to bring digital products to life."
        />

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((categoryGroup, groupIdx) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              <GlassCard className="h-full p-6 border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                    <h3 className="text-xl font-bold text-white font-heading">
                      {categoryGroup.category}
                    </h3>
                    <span className="text-xs font-mono text-violet-400">
                      // {categoryGroup.skills.length} ITEMS
                    </span>
                  </div>

                  <div className="space-y-3">
                    {categoryGroup.skills.map((skill) => {
                      const IconComponent = iconMap[skill.name] || TbCpu;
                      const isHovered = activeSkill === skill.name;

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setActiveSkill(skill.name)}
                          onMouseLeave={() => setActiveSkill(null)}
                          className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                            isHovered
                              ? 'bg-violet-600/15 border-violet-500/50 translate-x-1 shadow-lg shadow-violet-950/50'
                              : 'bg-white/[0.02] border-white/[0.05] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg transition-colors ${
                                isHovered ? 'bg-violet-500 text-white' : 'bg-white/5 text-slate-300'
                              }`}>
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium text-slate-200">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400">
                              {skill.level}
                            </span>
                          </div>

                          {/* Skill description reveal */}
                          {skill.desc && (
                            <p className="mt-2 text-xs text-slate-400 pl-11 font-normal">
                              {skill.desc}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
