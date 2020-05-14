import React, { useState } from 'react';
import './App.css';
import Splash from './pages/splash';
import SelectScreen from './pages/select';

function App() {
  const [showSelect, setShowSelect] = useState(false);

  const renderPage = () => {
    if (showSelect) {
      return (
        <SelectScreen />
      )
    }
    return <Splash onClick={() => setShowSelect(true)} />;
  }

  return renderPage();
}

export default App;
