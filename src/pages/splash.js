import React, { useEffect, useCallback } from 'react';
import './splash.css';

const SplashScreen = ({ onClick }) => {
  const onKeyDown = useCallback(ev => {
    if (ev.code === 'Enter') {
      onClick();
    }
  }, [onClick]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  }, [onKeyDown]);
 
  return (
    <section className="splash-screen load" onKeyDown={onKeyDown}>
      <div className="title">
        <h1 className="title-top"><span className="big">R</span>obot</h1>
        <h1 className="title-bottom"><span className="big">T</span>alke<span className="big">R</span></h1>
      </div>

      <div className="buttons grey-with-red" onClick={onClick}>
        <span className="purple-with-blue">Push start button</span>
      </div>

      <div className="bottom">
        <a href="mailto:barry.wood@gmail.com">
          <span className="yellow">©</span>
          <span className="yellow-with-darkyellow">SUPER ROBOT 2020</span></a>
        <div className="credit grey-with-red">Credit <span className="yellow-with-darkyellow">1</span></div>
      </div>
    </section>
  );
}

export default SplashScreen;