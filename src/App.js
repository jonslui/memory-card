import './App.css';
import React, {useState, useEffect} from 'react';
import Scoreboard from './components/Scoreboard'
import Gameboard from './components/Gameboard'

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedTiles, setClickedTiles] = useState([]);

  function updateTileHistory(id){
    if (clickedTiles.includes(id)) {
      if(currentScore > highScore){
        setHighScore(currentScore)
      }
      setCurrentScore(0);
      setClickedTiles([]);
    } else {
      setCurrentScore(currentScore + 1);
      setClickedTiles(clickedTiles.concat([id]));
    }
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>

      <Scoreboard
        highScore = {highScore} 
        currentScore = {currentScore}
      />

      <Gameboard 
        updateTileHistory = {(id) => updateTileHistory(id)}
      />  
    </div>
  );
}

export default App;
