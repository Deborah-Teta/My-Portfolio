import React from 'react';
import { PROFILE_SUMMARY } from '../constants';
import { User, Code, Heart } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 text-lg text-slate-400 leading-relaxed">
            <p className="text-slate-300">
              {PROFILE_SUMMARY}
            </p>
            <p>
              My journey in tech is driven by a passion for solving problems and creating intuitive digital experiences. 
              Whether I'm debugging a complex React component or refining the typography of a landing page, I am dedicated to excellence.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-violet-500/50 transition">
                <h4 className="font-bold text-white text-xl mb-1">2027</h4>
                <p className="text-sm text-violet-400">Expected Graduation</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-fuchsia-500/50 transition">
                <h4 className="font-bold text-white text-xl mb-1">3+</h4>
                <p className="text-sm text-fuchsia-400">Major Projects Completed</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
             <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-900/20 transition group">
                <div className="w-12 h-12 bg-slate-900 border border-slate-700 text-violet-400 rounded-lg flex items-center justify-center mb-4 group-hover:text-white group-hover:bg-violet-600 transition-colors">
                   <Code size={24} />
                </div>
                <h3 className="font-bold text-white mb-2">Clean Architecture</h3>
                <p className="text-slate-400 text-sm">Focus on component-based architecture for scalable and maintainable codebases.</p>
             </div>
             
             <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-fuchsia-500/30 hover:shadow-lg hover:shadow-fuchsia-900/20 transition group">
                <div className="w-12 h-12 bg-slate-900 border border-slate-700 text-fuchsia-400 rounded-lg flex items-center justify-center mb-4 group-hover:text-white group-hover:bg-fuchsia-600 transition-colors">
                   <Heart size={24} />
                </div>
                <h3 className="font-bold text-white mb-2">UI/UX Focused</h3>
                <p className="text-slate-400 text-sm">Passionate about bridging the gap between design and technical implementation.</p>
             </div>

             <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-900/20 transition group">
                <div className="w-12 h-12 bg-slate-900 border border-slate-700 text-violet-400 rounded-lg flex items-center justify-center mb-4 group-hover:text-white group-hover:bg-violet-600 transition-colors">
                   <User size={24} />
                </div>
                <h3 className="font-bold text-white mb-2">Continuous Learner</h3>
                <p className="text-slate-400 text-sm">Constantly updating skills with modern frameworks like Next.js 14 and Tailwind.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;