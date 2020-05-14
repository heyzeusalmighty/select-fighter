import React, { useEffect, useState } from 'react';

import './style.css';


const fetchHeroQuote = name => {
  return 'One of a race of persons who lived before the division of labor had been carried to such a pitch of differentiation, and who followed the primitive economic maxim, “Every man his own horse.” The best of the lot was Chiron, who to the wisdom and virtues of the horse added the fleetness of man.';
}




const BigHero = ({ hero }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    console.log('new hero', hero.name)
    setQuote(fetchHeroQuote(hero.fakeName))
  }, [hero]);

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
      </div>
      
    </div>
  );
};

export default BigHero;