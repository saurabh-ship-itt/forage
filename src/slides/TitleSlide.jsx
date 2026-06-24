import React from 'react';

const TitleSlide = () => {
  return (
    <div className="slide">
      <h1>Forge 2 · Edition 1 Qualifier</h1>
      <h2 className="subtitle">Kanban Board · Built by AI Agents</h2>
      <div style={{ marginTop: '4rem', borderLeft: '4px solid var(--accent-purple)', paddingLeft: '2rem' }}>
        <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0' }}>Saurabh Kumar Malhotra</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>PSIT Kanpur</p>
      </div>
      <p style={{ marginTop: '3rem', fontStyle: 'italic', color: 'var(--accent-indigo)', fontSize: '1.5rem' }}>
        "Two agents. One sprint. Zero paid APIs."
      </p>
    </div>
  );
};

export default TitleSlide;
