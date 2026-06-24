import React from 'react';

const RoutingSlide = () => {
  return (
    <div className="slide">
      <h2>Free Model Routing</h2>
      
      <table>
        <thead>
          <tr>
            <th>Agent</th>
            <th>Model</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Hermes (Brain)</strong></td>
            <td>Groq llama-3.1-405b-reasoning</td>
            <td><span className="tag">Reasoning</span> High-level planning, logic</td>
          </tr>
          <tr>
            <td><strong>OpenClaw (Hands)</strong></td>
            <td>Groq llama-3.3-70b-versatile</td>
            <td><span className="tag">Speed</span> Fast, code-focused</td>
          </tr>
          <tr>
            <td><strong>Fallback</strong></td>
            <td>Ollama qwen2.5-coder (local)</td>
            <td><span className="tag">Reliable</span> Unlimited, offline, no rate limits</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '3rem', padding: '1rem', borderLeft: '4px solid var(--accent-indigo)', background: 'rgba(139, 92, 246, 0.1)' }}>
        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <strong>Footer note:</strong> No paid models. No DeepSeek. No billing.
        </p>
      </div>
    </div>
  );
};

export default RoutingSlide;
