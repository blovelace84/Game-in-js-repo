import React from "react"
import OdycGame from "./monkey-mayhem"

function App() {
  return (
    <div style={{ width: '800px', height: '600px', margin: 'auto'}}>
      <h1 style={{ textAlign: 'center', color: 'yellow'}}>Welcome to Monkey Mayhem!</h1>
      <p style={{ textAlign: 'center', color: 'green'}}>A game of fun a lots of Mayhem!</p>
      <OdycGame />
    </div>
  );
}

export default App
