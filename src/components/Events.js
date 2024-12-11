import React from 'react';
import styles from '../styles/Events.module.css';

function Events() {
  const events = [
    {
      id: 1,
      date: '2023-07-15',
      title: 'Summer Basketball Camp',
      description: 'A week-long intensive training camp for youth players.',
      location: 'MacArthur Sports Center'
    },
    {
      id: 2,
      date: '2023-08-05',
      title: 'Charity Tournament',
      description: 'Annual charity event to raise funds for local community projects.',
      location: 'City Park Courts'
    },
    {
      id: 3,
      date: '2023-09-10',
      title: 'Season Opener',
      description: 'First game of the new season for MacArthur Mavericks.',
      location: 'Regional Sports Arena'
    },
    {
      id: 4,
      date: '2023-10-22',
      title: 'Basketball Skills Workshop',
      description: 'Free workshop for beginners to learn basic basketball skills.',
      location: 'MacArthur Sports Center'
    },
    {
      id: 5,
      date: '2023-11-15',
      title: 'Coach Development Seminar',
      description: 'Professional development event for basketball coaches.',
      location: 'Community Center'
    }
  ];
  return (
    <div className={styles.events}>
      <h2>Upcoming Events</h2>
      <div className={styles.eventList}>
        {events.map(event => (
          <div key={event.id} className={styles.eventCard}>
            <div className={styles.eventDate}>
              {new Date(event.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className={styles.eventDetails}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p className={styles.eventLocation}>
                <i className="fas fa-map-marker-alt"></i> {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
