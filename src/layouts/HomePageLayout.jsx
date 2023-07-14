'use client';
import React from 'react';

// import components
import HomeHeader from '@/components/Home/HomeHeader/HomeHeader';
import About from '@/components/Home/About/About';
import Skills from '@/components/Home/Skills/Skills';
import Projects from '@/components/Home/Projects/Projects';
import Contact from '@/components/Home/Contact/Contact';

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
