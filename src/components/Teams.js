import React, { useState } from 'react';
import styles from '../styles/Teams.module.css';

function Teams() {
  const [searchTerm, setSearchTerm] = useState('');
  const teams = [
    { id: 1, name: 'MacArthur Mavericks', description: 'Our premier adult team competing in the regional league.', coach: 'John Smith', players: 15 },
    { id: 2, name: 'Junior Ballers', description: 'Youth development team for players aged 12-16.', coach: 'Sarah Johnson', players: 20 },
    { id: 3, name: 'Senior Slammers', description: 'Competitive team for players over 40.', coach: 'Mike Brown', players: 12 },
    { id: 4, name: 'Lady Legends', description: 'Our women\'s team, champions for three years running.', coach: 'Emily Davis', players: 15 },
    { id: 5, name: 'Mini Hoopsters', description: 'Introductory program for children aged 5-11.', coach: 'Tom Wilson', players: 25 },
  ];

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section id="teams" className={styles.teamsSection}>
      <h2>Our Teams</h2>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search teams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.teamList}>
        {filteredTeams.map(team => (
          <div key={team.id} className={styles.teamCard}>
            <h3>{team.name}</h3>
            <p>{team.description}</p>
            <div className={styles.teamDetails}>
              <span>Coach: {team.coach}</span>
              <span>Players: {team.players}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teams;

