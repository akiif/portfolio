import React from 'react';
import Header from "./Header";
import bitmoji from '../../../assets/images/bitmoji.png';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function HomeHeader() {
  return (
    <section id='home' className="home">
      <div className="header-with-links">
        <Header />
        <div className="header-social-links">
          <p className="header-social-item"><a href="https://github.com/akiif/" className="header-link link-hover" target="_blank" rel="noopener noreferrer"><FaGithub className='Fa-icons' /></a></p>
          <p className="header-social-item"><a href="https://www.linkedin.com/in/akif-mohammed/" className="header-link link-hover" target="_blank" rel="noopener noreferrer"><FaLinkedin className='Fa-icons' /></a></p>
          <p className="header-social-item"><a href="https://twitter.com/akiif_m/" className="header-link link-hover" target="_blank" rel="noopener noreferrer"><FaTwitter className='Fa-icons' /></a></p>
          <p className="header-social-item"><a href="https://www.instagram.com/akiif.m/" className="header-link link-hover" target="_blank" rel="noopener noreferrer"><FaInstagram className='Fa-icons' /></a></p>
        </div>
      </div>
      <img src={bitmoji} alt="bitmoji with hey" className='bitmoji-img shake-img' />
    </section>
  );
}

export default HomeHeader;