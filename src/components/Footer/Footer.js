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
  </footer>
);

export default Footer;
