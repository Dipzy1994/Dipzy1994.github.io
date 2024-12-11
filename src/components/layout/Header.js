import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image1.jpg';

function Header() {
  return (
    <header>
      <img 
        src={logo}
        alt="MacArthur Ballers Logo" 
        className="logo"
      />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

