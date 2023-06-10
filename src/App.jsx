import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const favoriteMovie = 'StarWars';
function App() {
  return (
    <div>
      <h1>Hello, {favoriteMovie}</h1>
    </div>
  );
}

export default App;
