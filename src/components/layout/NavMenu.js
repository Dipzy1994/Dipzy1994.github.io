import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>
    </nav>
  );
};

export default NavMenu;
