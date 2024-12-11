import React from 'react';
import styles from '../../styles/Header.module.css';
import logo from '../../assets/logo.png'; // Make sure to add your logo image to the assets folder

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="FutureSports Logo" className={styles.logo} />
        <h1 className={styles.title}>FutureSports</h1>
      </div>
    </header>
  );
};

export default Header;


