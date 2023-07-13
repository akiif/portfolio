'use client';
import React from 'react';

// import components
import HomeHeader from '@/components/Home/HomeHeader/HomeHeader';
import About from '@/components/Home/About/About';
import Skills from '@/components/Home/Skills/Skills';

function HomePageLayout() {
  return (
    <div>
      <HomeHeader />
      <About />
      <Skills />
    </div>
  );
}

export default HomePageLayout;
