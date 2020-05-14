import React from 'react';

import './style.css';

const Hero = ({ hero }) => {
  return (
    <div className="hero-selection-box">
      {hero.name}
    </div>
  )
};

export default Hero;