import React from 'react';
import HomeHeader from "./components/HomeHeader";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Projects from './components/Projects/Projects';
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <HomeHeader />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;