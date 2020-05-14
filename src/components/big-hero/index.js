import React, { useEffect, useState } from 'react';

import './style.css';


const fetchHeroQuote = name => {
  const quotes = [
    'A man is a method, a progressive arrangement, a selecting principle, gathering his like unto him wherever he goes. What you are comes to you.',
    'Yes, I am proud; I must be proud to see Men not afraid of God, afraid of me.',
    'The danger is not that a particular class is unfit to govern. Every class is unfit to govern.',
    'I\'m moving to Mars next week, so if you have any boxes.',
    'What is defeat? Nothing but education, nothing but the first step to something better.',
    'The difference between failure and success is doing a thing nearly right and doing a thing exactly right.',
    'An ambassador is an honest man sent abroad to lie for his country.',
    'She looked as though butter wouldn\'t melt in her mouth ... or anywhere else.',
    'Too often whe give children answers to remember rather than problems to solve.'
  ];
  const randomIdx = Math.floor(Math.random() * quotes.length);
  return quotes[randomIdx];
}




const BigHero = ({ hero }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    console.log('new hero', hero.name)
    setQuote(fetchHeroQuote(hero.fakeName))
  }, [hero]);

  const onClick = () => {
    setQuote(fetchHeroQuote(hero.fakeName))
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