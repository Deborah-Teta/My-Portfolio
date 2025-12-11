import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

function Hero()  {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-slate-950 overflow-hidden pt-16">
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left space-y-6">
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">
              Deborah Teta
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
            I craft responsive, user-friendly web applications using React, Next.js, and modern UI principles. 
            Let's build something beautiful together.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg hover:from-violet-500 hover:to-fuchsia-500 transition shadow-lg shadow-violet-500/25 font-medium border border-transparent"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-lg hover:bg-white/10 hover:border-violet-500/50 transition font-medium backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 pt-8 text-slate-500">
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>

         <div className="relative z-10 w-full max-w-md mx-auto aspect-square bg-slate-900 rounded-full rotate-3 shadow-2xl shadow-violet-900/50 flex items-center justify-center overflow-hidden border border-white/10 group-hover:rotate-0 transition duration-700 ease-out">
              {/* Replace the src below with your actual profile picture URL */}
              <img 
                src="photo\mypic.jpg" 
                alt="Deborah Teta"
                className="w-full h-full object-cover rounded-full hover:scale-110 transition duration-700"
              />
              
              {/* Subtle overlay to blend the photo slightly with the theme (optional) */}
              <div className="absolute inset-0 bg-violet-900/10 mix-blend-overlay"></div>
           </div>

      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hover:text-white transition">
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;