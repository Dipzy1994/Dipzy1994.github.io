import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavMenu.css';

const NavMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="nav-menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li className="dropdown">
          <button onClick={toggleDropdown}>More ▼</button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/weather">Weather</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;

