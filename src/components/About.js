import React from 'react';
import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h2>About MacArthur Ballers</h2>

      <section className={styles.history}>
        <h3>Our History</h3>
        <p>
          Founded in 2010, MacArthur Ballers has grown from a small local team to one of the most 
          respected basketball clubs in the region. Our journey began with a group of passionate 
          players who wanted to create a community around their love for basketball.
        </p>
      </section>

      <section className={styles.mission}>
        <h3>Our Mission</h3>
        <p>
          At MacArthur Ballers, our mission is to foster a love for basketball, promote 
          sportsmanship, and develop skilled players. We believe in the power of teamwork, 
          dedication, and continuous improvement both on and off the court.
        </p>
      </section>

      <section className={styles.keyPoints}>
        <h3>What We Offer</h3>
        <ul>
          <li>Professional coaching for all age groups</li>
          <li>State-of-the-art training facilities</li>
          <li>Regular tournaments and competitions</li>
          <li>Youth development programs</li>
          <li>Community outreach initiatives</li>
        </ul>
      </section>

      <section className={styles.achievements}>
        <h3>Our Achievements</h3>
        <p>
          Over the years, MacArthur Ballers has achieved numerous accolades, including:
        </p>
        <ul>
          <li>Regional Champions (2015, 2018, 2021)</li>
          <li>Youth League Winners (2017, 2019, 2022)</li>
          <li>Community Service Award (2020)</li>
        </ul>
      </section>

      <section className={styles.joinUs}>
        <h3>Join MacArthur Ballers</h3>
        <p>
          Whether you're a seasoned player or new to the game, there's a place for you at 
          MacArthur Ballers. We offer programs for all skill levels and age groups. 
          Come be a part of our basketball family!
        </p>
      </section>
    </div>
  );
}

export default About;
