'use client';
import React from 'react';

// import components
import HomeHeader from './HomeHeader/HomeHeader';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function Home() {
  return (
    <div>
      <HomeHeader />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
