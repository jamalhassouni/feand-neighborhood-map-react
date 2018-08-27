import React from 'react';
import './Footer.css';
import ReactIcon from '../../assets/imgs/React-logo.svg';

const Footer = () => (
  <footer>
    <p className="made-with">
      made with
      <img src={ReactIcon} alt="React" title="React"/>
      by <a href="https://github.com/jamalhassouni" target="_blank" rel="noopener noreferrer">Jamal Hassouni</a>
    </p>
    <div className="icons">
      Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
        and  <a href="https://www.iconfinder.com/korawan_m" title="BomSymbols">BomSymbols</a>

    </div>
  </footer>
);

export default Footer;
