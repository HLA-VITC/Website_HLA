import React from 'react'
import './Navbar.css';
import logo from './img/logo.jpg';
function Navbar() {
  const logo_hla=logo;
  return (
    <div>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
        <a href="#home">
        <img width="50px" height="auto" src={logo_hla}/></a>
          </div>

          <ul id="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#events">Our Events</a></li>
            <li><a href="#instagram">instagram</a></li>
            <li><a href="#blogs">Blogs</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
