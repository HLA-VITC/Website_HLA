import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import logo from './img/bg2.png';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__content">

        <div className="footer__logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="footer__info">
          <h3 className="footer__title">Hindi Literary Association</h3>
        </div>
        <hr />

        <div className="footer__links">
          <h3 className="footer_links_title">Site Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/instagram">Instagram</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="footer__social">
            <a href="https://www.instagram.com/hla_vitc/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer__social-icon" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer__social-icon" />
            </a>
        </div>

        <div className="footer__contact">
          <h3 className="footer_contact_title">Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:contact@example.com">Email: example@mail.com</a>
            </li>
            <li>
              <a href="tel:+123456789">Phone: +123456789</a>
            </li>
          </ul>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;