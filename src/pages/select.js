import React, { useState } from 'react';
import BigHero from '../components/big-hero';
import Hero from '../components/hero/index';

import fighters from '../data/fighters';
import './select.css';

const SelectScreen = () => {
  const [selectedHero, setSelectedHero] = useState(fighters[0]);

  const onSelection = id => {
    const hero = fighters.find(x => x.id === id);
    if (hero) {
      setSelectedHero(hero);
    }
  };

  return (
    <div className='select-screen-container'>
      <div>Select Your Fighter</div>
      <div className="hero-container">
        <BigHero hero={selectedHero} />
      </div>
      <div className="hero-selection-grid">
        {fighters.map(x => (
          <Hero
            hero={x}
            isSelected={x.id === selectedHero.id}
            onClick={onSelection}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectScreen;