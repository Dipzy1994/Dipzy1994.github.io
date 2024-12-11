import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img 
        src={`${process.env.PUBLIC_URL}/images/image1.jpg`} 
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

