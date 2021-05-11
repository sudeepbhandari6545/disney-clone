import React from 'react';
import './App.css';

import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import ImgSlider from './components/ImgSlider';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ImgSlider />
    </div>
  );
}

export default App;
