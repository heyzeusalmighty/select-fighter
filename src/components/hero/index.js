import React, { useState } from 'react';

import './style.css';

const Hero = ({ hero, isSelected, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const clickyClick = () => {
    onClick(hero.id);
  };

  const boxStyle = isSelected ? 'hero-selected-box' : 'hero-selection-box';
  const pictureStyle = (isHover || isSelected)
    ? 'hero-picture-hover'
    : 'hero-picture';
  return (
    <div
      className={boxStyle}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onClick={clickyClick}
      title={hero.name}
    >
      <div className={pictureStyle}>
        <img src={hero.smallImage} alt='hero' className='hero-picture-image' />
      </div>
    </div>
  )
};

export default Hero;