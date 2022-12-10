import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className='colored-section'>
      <div className="footer-socials">
        <p className='footer-item'><a href="https://github.com/akiif/" className="footer-link link-hover" target="_blank" rel="noopener noreferrer"><FaGithub className='Fa-icons' /></a></p>
        <p className='footer-item'><a href="https://www.linkedin.com/in/akif-mohammed/" className="footer-link link-hover" target="_blank" rel="noopener noreferrer"><FaLinkedin className='Fa-icons' /></a></p>
        <p className='footer-item'><a href="https://twitter.com/akiif_m/" className="footer-link link-hover" target="_blank" rel="noopener noreferrer"><FaTwitter className='Fa-icons' /></a></p>
        <p className='footer-item'><a href="https://www.instagram.com/akiif.m/" className="footer-link link-hover" target="_blank" rel="noopener noreferrer"><FaInstagram className='Fa-icons' /></a></p>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Akif Mohammed</p>
    </footer>
  );
}

export default Footer;