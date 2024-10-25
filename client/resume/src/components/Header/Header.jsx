import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Ramandeep Kaur</h1>
      <nav className="header-nav">
        <a href="#home" className="header-link">Home</a>
        <a href="#about" className="header-link">About</a>
        <a href="#services" className="header-link">Services</a>
        <a href="#projects" className="header-link">Projects</a>
        <a href="#education" className="header-link">Education</a>
      </nav>
    </header>
  );
};

export default Header;
