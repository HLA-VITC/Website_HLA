import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from './img/bg2.png';
function Navbar() {
  const logo_hla=logo;
  const [click, setClick] = useState(false)
  
  const closeMenu = () => setClick(false)
  return (
    <div>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">

        <Link to="home" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>
        <img width="50px" height="auto" src={logo_hla}/></Link>

          </div>

          <ul className={click ? "menu active" : "menu"}>
            <li><Link to="home" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>About Us</Link></li>
            <li><Link to="team" spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu}>Our Team</Link></li>
            <li><Link to="event" spy={true} smooth={true} offset={-170} duration={500} onClick={closeMenu}>Our Events</Link></li>
            <li><a href='https://www.instagram.com/hla_vitc/?hl=en' onClick={closeMenu}>instagram</a></li>
            <li><Link to="#blog" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Blogs</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
