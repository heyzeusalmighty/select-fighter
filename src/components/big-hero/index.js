import React, { useEffect } from 'react';

import './style.css';

const BigHero = ({ hero }) => {
  useEffect(() => {
    console.log('new hero', hero.name)
  }, [hero]);

  return (
    <div className='big-hero-container'>
      <div>I MAM HERO - {hero.name}</div>
      <div className="info-panel">
        <div className='hero-big-picture-container'>
          <img src={hero.largeImage} alt='omg' className='big-hero-picture' />
        </div>
        <div className='hero-big-info-container'>
          stuff
          stuff
          stuff
        </div>
      </div>
      
    </div>
  );
};

export default BigHero;