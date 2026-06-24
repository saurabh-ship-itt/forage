import React from 'react';

const SystemSlide = () => {
  return (
    <div className="slide">
      <h2>Two-Agent Architecture</h2>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3rem', position: 'relative' }}>
        <div className="node">Human<br/><span style={{fontSize: '0.8rem', color: 'var(--accent-purple)'}}>#sprint-main</span></div>
        <div className="arrow">→</div>
        <div className="node highlight">Hermes<br/><span style={{fontSize: '0.8rem'}}>"The Brain"</span></div>
        <div className="arrow">→</div>
        <div className="node highlight">OpenClaw<br/><span style={{fontSize: '0.8rem'}}>"The Hands"</span></div>
        <div className="arrow">→</div>
        <div className="node">Code Output</div>
        <div className="arrow">→</div>
        <div className="node">Human Review</div>
      </div>

      <div style={{ marginTop: '5rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '1rem', color: 'var(--accent-indigo)' }}>Three Slack Channels:</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ flex: 1 }}>
            <span className="tag">#sprint-main</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Goals / Plans</p>
          </div>
          <div style={{ flex: 1 }}>
            <span className="tag">#agent-coder</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Tasks / Reports</p>
          </div>
          <div style={{ flex: 1 }}>
            <span className="tag">#agent-log</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Agent Internal Thoughts</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .node {
          background: var(--bg-card);
          padding: 1rem 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          min-width: 120px;
        }
        .highlight {
          border-color: var(--accent-purple);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
        }
        .arrow {
          font-size: 1.5rem;
          color: var(--accent-indigo);
        }
      `}</style>
    </div>
  );
};

export default SystemSlide;
