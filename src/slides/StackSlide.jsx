import React from 'react';

const StackSlide = () => {
  return (
    <div className="slide">
      <h2>100% Free Stack</h2>
      
      <div className="card-grid" style={{ marginTop: '3rem' }}>
        <div className="card">
          <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1.5rem' }}>Backend</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent-indigo)', marginRight: '1rem' }}>⚡</span> Laravel 11
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent-indigo)', marginRight: '1rem' }}>⚡</span> PHP 8.2
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent-indigo)', marginRight: '1rem' }}>⚡</span> SQLite
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent-indigo)', marginRight: '1rem' }}>⚡</span> REST API (28 routes)
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1.5rem' }}>Frontend</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent-indigo)', marginRight: '1rem' }}>⚛️</span> React 18
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent-indigo)', marginRight: '1rem' }}>⚛️</span> Vite
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent-indigo)', marginRight: '1rem' }}>⚛️</span> Axios
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent-indigo)', marginRight: '1rem' }}>⚛️</span> HTML5 Drag & Drop
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent-indigo)', marginRight: '1rem' }}>⚛️</span> date-fns
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StackSlide;
