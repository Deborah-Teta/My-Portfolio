
import React from 'react';
import Hero from '../app/components/Hero';
import About from '../app/components/About';
import Skills from '../app/components/Skills';
import Projects from '../app/components/Projects';
import Education from '../app/components/Education';
import Contact from '../app/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
