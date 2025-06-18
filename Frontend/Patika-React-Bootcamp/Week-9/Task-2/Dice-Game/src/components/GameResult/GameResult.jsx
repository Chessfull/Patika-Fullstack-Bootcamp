import "./GameResult.css";

const GameResult = ({ result }) => {
  return (
    <div className="game-result">
      {result && <h1>{result}</h1>}
    </div>
  );
};

export default GameResult;