import React, { useState, useEffect } from 'react';
import BigHero from '../components/big-hero';
import Hero from '../components/hero/index';
import UserService from '../user-service';

import fighters from '../data/fighters';
import './select.css';

const shuffle = array => {
  let currentIdx = array.length, temporaryValue, randomIdx;
  while (0 !== currentIdx) {
    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx -= 1;

    temporaryValue = array[currentIdx];
    array[currentIdx] = array[randomIdx];
    array[randomIdx] = temporaryValue;
  }
  return array;
}

const SelectScreen = () => {
  const [selectedHero, setSelectedHero] = useState(fighters[0]);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const dummies = UserService.getUserList();
    const shuffled = shuffle(dummies);
    const newFighters = fighters.map((x, idx) => ({
      ...x,
      fakeName: shuffled[idx],
    }));
    setHeroes(newFighters);
    setSelectedHero(newFighters[0]);
  }, []);

  const onSelection = id => {
    const hero = heroes.find(x => x.id === id);
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
        {heroes.map(x => (
          <Hero
            key={x.id}
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