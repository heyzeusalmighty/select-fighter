import React from 'react';
import BigHero from '../components/big-hero';
import Hero from '../components/hero/index';

import fighters from '../data/fighters';
import './select.css';

const SelectScreen = () => {

  return (
    <div className='select-screen-container'>
      <div>Select Your Fighter</div>
      <div className="hero-container">
        <BigHero />
      </div>
      <div className="hero-selection-grid">
        {fighters.map(x => <Hero hero={x} />)}
      </div>
    </div>
  );
}

export default SelectScreen;