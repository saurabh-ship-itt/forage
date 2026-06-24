import React, { useState, useEffect } from 'react';
import TitleSlide from './slides/TitleSlide';
import SystemSlide from './slides/SystemSlide';
import StackSlide from './slides/StackSlide';
import RoutingSlide from './slides/RoutingSlide';
import BuiltSlide from './slides/BuiltSlide';
import LoopSlide from './slides/LoopSlide';
import HermesSlide from './slides/HermesSlide';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <TitleSlide />,
    <SystemSlide />,
    <StackSlide />,
    <RoutingSlide />,
    <BuiltSlide />,
    <LoopSlide />,
    <HermesSlide />,
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="slide-container">
      {slides[currentSlide]}
      <div className="controls">
        <button className="btn" onClick={prevSlide} disabled={currentSlide === 0}>Prev</button>
        <span style={{color: 'var(--text-muted)'}}>{currentSlide + 1} / {slides.length}</span>
        <button className="btn" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default App;
