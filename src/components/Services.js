import React from 'react';
import styles from '../styles/Services.module.css';

const mockServices = [
  {
    id: 1,
    name: 'Team Training',
    description: 'Professional training sessions for sports teams of all levels.',
    price: '$200 per session'
  },
  {
    id: 2,
    name: 'Individual Coaching',
    description: 'One-on-one coaching sessions tailored to individual athlete needs.',
    price: '$100 per hour'
  },
  {
    id: 3,
    name: 'Sports Equipment Rental',
    description: 'High-quality sports equipment available for rent for teams and individuals.',
    price: 'Varies by equipment'
  },
  {
    id: 4,
    name: 'Nutrition Consultation',
    description: 'Expert advice on nutrition plans for optimal athletic performance.',
    price: '$150 per consultation'
  }
];

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1>Our Services</h1>
      <div className={styles.servicesList}>
        {mockServices.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p className={styles.price}>{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
