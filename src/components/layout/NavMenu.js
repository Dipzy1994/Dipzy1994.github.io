import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/NavMenu.module.css';

const NavMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className={styles.navMenu}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li 
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className={styles.dropdownTrigger}>More</span>
          {showDropdown && (
            <ul className={styles.dropdown}>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/weather">Weather</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;

