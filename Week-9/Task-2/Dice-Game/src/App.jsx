import { useState, useEffect } from 'react';
import DiceGame from './components/DiceGame/DiceGame';
import './App.css';

function App() {
  return (
    <div className="app">
      <DiceGame />
    </div>
  );
}

export default App;