"use client";
import React from 'react'

// import components
import HomeHeader from '@/components/Home/HomeHeader/HomeHeader';
import About from '@/components/Home/About/About';

function HomePageLayout() {
  return (
    <div>
      <HomeHeader />
      <About />
    </div>
  )
}

export default HomePageLayout