import React from 'react';
import logo from '../assets/logo.png'; // 예시 로고 파일, 실제 파일명에 맞게 교체

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-links">
        <a href="#services" className="navbar-link">
          Our Services
        </a>
        <a href="#hero" className="navbar-link">
          About
        </a>
        <a href="#testimonials" className="navbar-link">
          Blog&News
        </a>
        <a href="#cta" className="navbar-link">
          Contact
        </a>
        <a href="#pricing" className="navbar-link">
          Account
        </a>
      </div>
      <span className="navbar-link">+2349067322844</span>
    </nav>
  );
}
