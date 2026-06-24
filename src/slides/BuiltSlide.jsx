import React from 'react';

const BuiltSlide = () => {
  const features = [
    { icon: '📋', text: 'Boards → Lists → Cards (full CRUD)' },
    { icon: '↔️', text: 'Drag cards between lists' },
    { icon: '🏷️', text: 'Coloured tags / labels on cards' },
    { icon: '👤', text: 'Assign members with avatar display' },
    { icon: '📅', text: 'Due dates — overdue cards flagged red', alert: true },
  ];

  return (
    <div className="slide">
      <h2>What the Agents Built</h2>
      
      <div style={{ marginTop: '2rem' }}>
        {features.map((f, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '1.5rem', 
            marginBottom: '1rem',
            background: 'var(--bg-card)',
            borderRadius: '12px',
            border: f.alert ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
            transition: 'transform 0.2s ease',
            cursor: 'default'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{ fontSize: '2rem', marginRight: '1.5rem' }}>{f.icon}</span>
            <span style={{ fontSize: '1.2rem', color: f.alert ? '#fca5a5' : 'inherit' }}>{f.text}</span>
            <span style={{ marginLeft: 'auto', color: 'var(--accent-purple)' }}>✅</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuiltSlide;
