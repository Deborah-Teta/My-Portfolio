import React from 'react';
import { SKILLS } from '../constants';

function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl">
            A versatile toolset designed for building modern, responsive, and performant web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-slate-200 border-b border-slate-800 pb-2">Core Technologies</h3>
            <div className="space-y-6">
              {SKILLS.filter(s => s.category === 'Technical').map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-300">{skill.name}</span>
                    <span className="text-violet-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-500 h-2.5 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(139,92,246,0.3)]" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-bold text-slate-200 border-b border-slate-800 pb-2">Tools & Design</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {SKILLS.filter(s => s.category !== 'Technical').map((skill) => (
                <div key={skill.name} className="bg-slate-900 p-5 rounded-xl shadow-lg border border-slate-800 flex flex-col justify-center items-center text-center hover:border-violet-500/50 hover:bg-slate-800/50 transition group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-violet-400 font-bold mb-3 group-hover:text-white group-hover:border-violet-500 transition-colors">
                     {skill.level}%
                  </div>
                  <h4 className="font-medium text-slate-200">{skill.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{skill.category}</p>
                </div>
              ))}
              
              {/* Additional soft skills/tools */}
              <div className="bg-slate-900 p-5 rounded-xl shadow-lg border border-slate-800 flex flex-col justify-center items-center text-center hover:border-fuchsia-500/50 hover:bg-slate-800/50 transition">
                 <h4 className="font-medium text-slate-200 mt-2">Git & GitHub</h4>
                 <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Version Control</p>
              </div>
              
               <div className="bg-slate-900 p-5 rounded-xl shadow-lg border border-slate-800 flex flex-col justify-center items-center text-center hover:border-fuchsia-500/50 hover:bg-slate-800/50 transition">
                 <h4 className="font-medium text-slate-200 mt-2">Responsive Design</h4>
                 <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Mobile First</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;