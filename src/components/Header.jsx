import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <h1>Platzi BEM</h1>
      </div>
      <div className="Header__button Header__button--success">
        <a href="#">
          About
        </a>
      </div>

      <div className="Header__button Header__button--danger">
        <a href="#">
          About
        </a>
      </div>
    </div>
  )
};

export default Header;