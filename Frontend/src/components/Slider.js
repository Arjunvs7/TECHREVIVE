import React from 'react';
import './Slider.css'; // Custom slider styles

const Slider = () => {
  return (
    <div className="slider">
      <div className="slide fade">
        <img src="https://via.placeholder.com/1200x400?text=Welcome+to+TECHREVIVE" alt="Slide 1" />
        <div className="text">Repair & Recycle Made Easy</div>
      </div>
      <div className="slide fade">
        <img src="https://via.placeholder.com/1200x400?text=Your+Trusted+Repair+Partner" alt="Slide 2" />
        <div className="text">Experts in Electronics Repair</div>
      </div>
      <div className="slide fade">
        <img src="https://via.placeholder.com/1200x400?text=Recycle+For+a+Better+Planet" alt="Slide 3" />
        <div className="text">E-Waste Recycling Simplified</div>
      </div>
    </div>
  );
};

export default Slider;
