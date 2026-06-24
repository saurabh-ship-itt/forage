import React from 'react';

const HermesSlide = () => {
  const capabilities = [
    { 
      icon: '🧠', 
      title: 'Memory', 
      desc: 'Recalled repo name "forge2-qualifier-saurabh" across two separate sessions' 
    },
    { 
      icon: '⚡', 
      title: 'SKILL.md', 
      desc: 'status-report skill fires automatically for any status request' 
    },
    { 
      icon: '🕐', 
      title: 'Autonomous Run', 
      desc: 'Cron posted to #agent-log at 11:30 with no human prompt' 
    },
  ];

  return (
    <div className="slide">
      <h2>Hermes Brain — 3 Verified Capabilities</h2>
      
      <div className="card-grid" style={{ marginTop: '3rem' }}>
        {capabilities.map((c, i) => (
          <div key={i} className="card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{c.icon}</div>
            <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}>{c.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HermesSlide;
