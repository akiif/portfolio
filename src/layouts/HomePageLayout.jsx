'use client';
import React from 'react';

// import components
import HomeHeader from '@/views/Home/HomeHeader/HomeHeader';
import About from '@/views/Home/About/About';
import Skills from '@/components/Home/Skills/Skills';
import Projects from '@/views/Home/Projects/Projects';
import Contact from '@/views/Home/Contact/Contact';

function HomePageLayout() {
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

export default HomePageLayout;
