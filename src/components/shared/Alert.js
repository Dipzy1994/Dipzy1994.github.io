import React from 'react';
import styles from '../../styles/Alert.module.css';

const Alert = ({ message, onClose }) => {
  return (
    <div className={styles.alertOverlay}>
      <div className={styles.alertBox}>
        <h3>FutureSports says:</h3>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Alert;