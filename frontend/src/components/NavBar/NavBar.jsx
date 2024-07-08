import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo">App</a>
      <nav className="header__navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Navbar;
