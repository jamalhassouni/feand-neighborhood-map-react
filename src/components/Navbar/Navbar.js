import React from 'react';
import './Navbar.css';
import Logo from '../../assets/imgs/logo.svg';

const Navbar = () => (
  <header className="navbar">
    <h1 className="navbar-title">
      <img src={Logo} alt="World with markers and paths in it" className="icon"/>
      <span>Neighborhood Map</span>
    </h1>
  </header>
);

export default Navbar;
