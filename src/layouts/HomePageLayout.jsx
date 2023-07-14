'use client';
import React from 'react';

// import components
import HomeHeader from '@/components/Home/HomeHeader/HomeHeader';
import About from '@/components/Home/About/About';
import Skills from '@/components/Home/Skills/Skills';
import Projects from '@/components/Home/Projects/Projects';

function HomePageLayout() {
  return (
    <div>
      <HomeHeader />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default HomePageLayout;
