import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import Logo from '../../assets/imgs/logo.svg';

const Navbar = ({ navToggle }) => (
  <header className="navbar">
    <h1 className="navbar-title">
      <img src={Logo} alt="World with markers and paths in it" className="icon"/>
      <span>Neighborhood Map</span>
    </h1>
    <div className="nav-toggle"  onClick={e => navToggle(e)}>
  <div className="nav-toggle-bar"></div>
</div>

  </header>

);
Navbar.propTypes = {
  navToggle: PropTypes.func.isRequired
}
export default Navbar;
