import React from 'react';

const LoopSlide = () => {
  const steps = [
    { num: 1, text: 'Human posts goal in #sprint-main', color: '#6366f1' },
    { num: 2, text: 'Hermes posts a plan (before writing any code)', color: '#8b5cf6' },
    { num: 3, text: 'Hermes assigns task → OpenClaw in #agent-coder', color: '#6366f1' },
    { num: 4, text: "OpenClaw reports: What I Did / What's Left / What Needs Your Call", color: '#8b5cf6' },
  ];

  return (
    <div className="slide">
      <h2>The Human-in-the-Loop</h2>
      
      <div style={{ marginTop: '3rem', position: 'relative' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '1.5rem',
            position: 'relative'
          }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: s.color, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              fontWeight: 'bold',
              marginRight: '2rem',
              zIndex: 2
            }}>
              {s.num}
            </div>
            <div style={{ 
              flex: 1, 
              padding: '1rem 2rem', 
              background: 'rgba(255,255,255,0.05)', 
              borderRadius: '8px',
              borderLeft: `4px solid ${s.color}`
            }}>
              {s.text}
            </div>
            {i < steps.length - 1 && (
              <div style={{ 
                position: 'absolute', 
                left: '20px', 
                top: '40px', 
                width: '2px', 
                height: 'calc(1.5rem + 10px)', 
                background: `linear-gradient(to bottom, ${s.color}, ${steps[i+1].color})`,
                zIndex: 1
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoopSlide;
