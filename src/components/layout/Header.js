import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import SearchBar from '../shared/SearchBar';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>FutureSports</Link>
      </div>
      <div className={styles.navContainer}>
        <NavMenu />
      </div>
      <div className={styles.searchContainer}>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;



