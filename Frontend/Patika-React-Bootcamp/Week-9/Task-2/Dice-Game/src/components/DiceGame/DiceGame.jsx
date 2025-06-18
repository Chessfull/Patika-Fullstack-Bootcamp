import { useState, useEffect } from 'react';
import PlayerSection from "../PlayerSection/PlayerSection";
import GameResult from "../GameResult/GameResult";
import './DiceGame.css';

const DiceGame = () => {
  const [player1Name, setPlayer1Name] = useState('Player 1');
  const [player2Name] = useState('PC');
  const [player1Dice, setPlayer1Dice] = useState(1);
  const [player2Dice, setPlayer2Dice] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [result, setResult] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    
    // Rolling dice here.
    const rollInterval = setInterval(() => {
      setPlayer1Dice(Math.floor(Math.random() * 6) + 1);
      setPlayer2Dice(Math.floor(Math.random() * 6) + 1);
    }, 100);

    // For find winner stopping interval after 3 seconds.
    setTimeout(() => {
      clearInterval(rollInterval);
      const finalDice1 = Math.floor(Math.random() * 6) + 1;
      const finalDice2 = Math.floor(Math.random() * 6) + 1;
      
      setPlayer1Dice(finalDice1);
      setPlayer2Dice(finalDice2);
      
      if (finalDice1 > finalDice2) {
        setResult(`${player1Name} Wins!`);
      } else if (finalDice2 > finalDice1) {
        setResult(`${player2Name} Wins!`);
      } else {
        setResult('Draw!');
      }
      
      setIsRolling(false);
    }, 3000);
  };

  const handleNameChange = (newName) => {
    setPlayer1Name(newName);
    setIsEditing(false);
  };

  return (
    <div className="dice-game">
      <GameResult result={result} />
      <div className="game-container">
        <PlayerSection 
          name={player1Name}
          diceValue={player1Dice}
          isEditable={true}
          onNameChange={handleNameChange}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <button 
          className="roll-button"
          onClick={rollDice}
          disabled={isRolling}
        >
          {isRolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
        <PlayerSection 
          name={player2Name}
          diceValue={player2Dice}
          isEditable={false}
        />
      </div>
    </div>
  );
};

export default DiceGame;