import React from 'react';

function Teams() {
  const teams = [
    { id: 1, name: 'Team A', description: 'Description of Team A' },
    { id: 2, name: 'Team B', description: 'Description of Team B' },
    { id: 3, name: 'Team C', description: 'Description of Team C' },
  ];
  return (
    <section id="teams" className="teams-section">
      <h2>Our Teams</h2>
      <div className="team-list">
        {teams.map(team => (
          <div key={team.id} className="team-card">
            <h3>{team.name}</h3>
            <p>{team.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teams;
