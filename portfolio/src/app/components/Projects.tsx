
import React from 'react';
import Image from 'next/image';
import { PROJECTS } from '../constants';
import { ExternalLink, Layout, ShoppingBag, FileText } from 'lucide-react';

const Projects: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'E-commerce': return <ShoppingBag size={24} />;
      case 'Blog': return <FileText size={24} />;
      default: return <Layout size={24} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
          <p className="mt-4 text-slate-400">A selection of my recent work.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-900/10 transition duration-500 flex flex-col h-full relative">
              
              {/* Project Image Container */}
              <div className="h-56 bg-slate-800 relative overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  // Fallback gradient if image is missing
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-violet-900/40 to-indigo-900/40' : index === 1 ? 'from-fuchsia-900/40 to-pink-900/40' : 'from-purple-900/40 to-violet-900/40'} group-hover:scale-105 transition duration-700`}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:text-white/40 transition">
                       {getIcon(project.category)}
                    </div>
                  </>
                )}
                
                {/* Overlay Gradient for Text Readability (optional for future overlay text, mostly aesthetic here) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg z-10 flex items-center gap-2">
                  {getIcon(project.category)}
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed border-b border-slate-800 pb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-violet-600 hover:border-violet-500 hover:text-white transition-all duration-300 font-medium text-sm group-hover:shadow-lg group-hover:shadow-violet-900/20"
                >
                  View Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
