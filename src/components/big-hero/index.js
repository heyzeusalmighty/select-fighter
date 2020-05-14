import React, { useEffect, useState } from 'react';
import UserService from '../../user-service';

import './style.css';

const BigHero = ({ hero }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    console.log('new hero', hero.name)
    setQuote(UserService.buildQuote(hero.fakeName))
  }, [hero]);

  const onClick = () => {
    setQuote(UserService.buildQuote(hero.fakeName))
  }

  return (
    <div className='big-hero-container'>
      <div className='hero-name'>{hero.fakeName}</div>
      <div className="info-panel">
        <div className='hero-big-picture-container'>
          <img src={hero.largeImage} alt='omg' className='big-hero-picture' />
        </div>
        <div className='hero-big-info-container'>
          {quote}
        </div>
        <div className='hero-generate-another'>
          <button className='hero-button' onClick={onClick}>New</button>
        </div>
      </div>
    </div>
  );
};

export default BigHero;