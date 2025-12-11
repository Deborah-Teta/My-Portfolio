'use client'
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Let's Work Together</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              I'm always open to discussing web development projects or partnership opportunities. 
              Feel free to reach out directly or check my profiles.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 group-hover:border-violet-500/50 rounded-full flex items-center justify-center text-violet-400 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Phone</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 group-hover:border-fuchsia-500/50 rounded-full flex items-center justify-center text-fuchsia-400 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium hover:text-fuchsia-400 transition">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 group-hover:border-violet-500/50 rounded-full flex items-center justify-center text-violet-400 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-slate-600 transition" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-slate-600 transition" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-400">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-slate-600 transition" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-slate-600 transition" placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-lg hover:from-violet-700 hover:to-fuchsia-700 transition flex items-center justify-center gap-2 shadow-lg shadow-violet-900/40 border border-transparent hover:border-violet-500/50">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;