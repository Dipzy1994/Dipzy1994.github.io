import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import Alert from './shared/Alert';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formData);
      setShowAlert(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? styles.errorInput : ''}
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.errorInput : ''}
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={errors.subject ? styles.errorInput : ''}
          />
          {errors.subject && <span className={styles.errorMessage}>{errors.subject}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? styles.errorInput : ''}
          ></textarea>
          {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
      {showAlert && (
        <Alert 
          message="Thank you for your message. We will get back to you soon!"
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
}

export default Contact;

