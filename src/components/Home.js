import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from './Signup';
import CustomCarousel from './shared/Carousel';
import Button from './shared/Button';
import styles from '../styles/Home.module.css';

// Mock data for blog posts
const blogPosts = [
  { id: 1, title: 'Top 10 Basketball Drills for Beginners', excerpt: 'Improve your game with these essential drills...' },
  { id: 2, title: 'The Importance of Team Building in Sports', excerpt: 'Learn how team building activities can boost performance...' },
  { id: 3, title: 'Nutrition Tips for Athletes', excerpt: 'Fuel your body right with these nutrition guidelines...' },
];
function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Welcome to MacArthur Ballers</h1>
        <p>Empowering athletes, building champions, and fostering community through sports.</p>
        <Link to="/signup">
          <Button text="Join Us" />
        </Link>
      </section>
      <CustomCarousel />

      <section className={styles.features}>
        <h2>Why Choose MacArthur Ballers?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <h3>Expert Coaching</h3>
            <p>Learn from experienced coaches who are passionate about developing young talent.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>State-of-the-Art Facilities</h3>
            <p>Train in our modern, well-equipped facilities designed for optimal performance.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Inclusive Community</h3>
            <p>Join a supportive community that celebrates diversity and teamwork.</p>
          </div>
        </div>
      </section>

      <section className={styles.blogPreview}>
        <h2>Latest from Our Blog</h2>
        <div className={styles.blogGrid}>
          {blogPosts.map(post => (
            <div key={post.id} className={styles.blogPost}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`}>Read more</Link>
            </div>
          ))}
        </div>
        <Button text="View All Posts" onClick={() => {/* Navigate to blog page */}} />
      </section>

      <section className={styles.cta}>
        <h2>Ready to Take Your Game to the Next Level?</h2>
        <p>Join MacArthur Ballers today and start your journey to becoming a champion!</p>
        <Link to="/signup">
          <Button text="Sign Up Now" />
        </Link>
      </section>
    </div>
  );
}

export default Home;


