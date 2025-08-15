import React, { useState } from "react";
import StartMenu from "./StartMenu";
import OdycGame from "./monkey-mayhem";

function App() {
  const [started, setStarted] = useState(false);
  const [gameResult, setResult] = useState(null);

  const handleGameOver = (won) => {
    setResult(won ? 'You Win! 🎉' : 'Game Over! Try Again. 💀');
    setStarted(false);

  }
  return (
     <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {!started && gameResult === null && (
        <StartMenu onStart={() => setStarted(true)} />
      )}
      {started && (
        <OdycGame onGameOver={handleGameOver} />
      )}
      {!started && gameResult !== null && (
        <div style={{ color: 'white' }}>
          <h2>{gameResult}</h2>
          <button onClick={() => {
            setGameResult(null);
            setStarted(true);
          }}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App
