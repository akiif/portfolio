import React, { useState } from 'react'
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa"

function Navbar() {
  let [checkBoxValue, toggleCheckBoxValue] = useState(false);
  const { pathname, hash, key } = useLocation();
  
  function hideNavItems() {
    toggleCheckBoxValue(false);
  }

  return (
    <nav className='navbar-section'>
      <Logo />
      <input
        type="checkbox"
        name=""
        id="nav-check"
        checked={checkBoxValue} 
        onClick={() => { checkBoxValue ? toggleCheckBoxValue(false) : toggleCheckBoxValue(true) }}
        onChange={() => {}} //Used to avoid the uncontrolled to controlled component error
      />
      <label htmlFor="nav-check" className='nav-check-btn link-hover'><FaBars className='Fa-icons' /></label>
      <ul className='nav-ul'>
        <li className="nav-item">
          <Link to="/" className= {(pathname === "/") ? 'nav-link link-hover nav-active' : 'nav-link link-hover'}  onClick={hideNavItems}>HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/#about" className='nav-link link-hover' onClick={hideNavItems}>ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="/#skills" className='nav-link link-hover' onClick={hideNavItems}>SKILLS</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className= {(pathname === "/projects") ? 'nav-link link-hover nav-active' : 'nav-link link-hover'} onClick={hideNavItems}>PROJECTS</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;