import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

function Education () {
  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
               {/* Timeline Line could go here */}
              <div className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 hover:border-violet-500/50 transition flex flex-col md:flex-row gap-6 items-start group">
                <div className={`p-4 rounded-xl shrink-0 border border-white/5 ${index === 0 ? 'bg-violet-900/20 text-violet-400' : 'bg-fuchsia-900/20 text-fuchsia-400'}`}>
                  {index === 0 ? <GraduationCap size={32} /> : <Award size={32} />}
                </div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                     <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">{edu.institution}</h3>
                     <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                     <span className="text-sm font-medium text-violet-300 bg-violet-900/30 border border-violet-500/20 px-3 py-1 rounded-full w-fit">
                        {edu.period}
                     </span>
                  </div>
                  <h4 className="text-lg font-medium text-slate-300 mb-3">{edu.degree}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;