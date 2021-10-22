import './App.css';
import React, {useState, useEffect} from 'react';
import Scoreboard from './components/Scoreboard'
import Gameboard from './components/Gameboard'

const App = () => {
  const paths = [{path: '/assets/images/level_1/', length: 6},
                {path: '/assets/images/level_2/', length: 9},]
  // 6 is used here because it is the length of the first level
  const [tileOrder, setTileOrder] = useState([...Array(6).keys()].map(i => i++))
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedTiles, setClickedTiles] = useState([]);
  const [currentPath, setCurrentPath] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  /*
    randomize image order on mount to make sure they're not displayed in the same order on every load
  */
  useEffect(() => {
    shuffleOrder();
  }, []);  


  /*
    position variable will sometimes be passed with a +1 value when a match is cleared to set up the next board
    position will sometimes be passes with a -currentPath value to reset game to board #1
  */
  function shuffleOrder(position = 0){
    // create an array of the length of the current levels array with values incrementing by 1
    // These values correspond to photos saved in public/assets/images - rendered in Tile.js
    let array = [...Array(paths[currentPath + position].length).keys()].map(i => i++),
        length = array.length,
        temp,
        index;
    // While there remain elements to shuffle…
    while (length) {
      // Pick a remaining element and reduce length by 1…
      index = Math.floor(Math.random() * length--);
      // And swap it with the current element…
      temp = array[length];
      array[length] = array[index];
      array[index] = temp;
    }
    // Update state
    setTileOrder(array);
  }

  /*
    This function is passed through props to Tile.js.
    When a tile is clicked in Tile.js it calls this function with the clicked Tiles id.
    If this value is already part of the clickedTiles array, it is an invalid move, so the game should end.
    Otherwise it is added to the Clicked Tiles array and the program must check if it was a winning move or not.
  */
  function onTileClick(id){
    if (clickedTiles.includes(id)) {
      onError();
    } else {
      setCurrentScore(currentScore + 1)
      setClickedTiles(clickedTiles.concat([id]));
      checkForWin();
    }
  }

  function onError(){
    alert('Oh no! Better luck next time.')
    if(currentScore > highScore) {
      setHighScore(currentScore);
    }
    resetGame();
  }

  /*
    If the first for loop passes, that means that the current stage was cleared.
    If the second for loop passes, that means that all levels have been cleared.
  */
  function checkForWin(){
    if(clickedTiles.length + 1 === paths[currentPath].length){
      currentPath + 1 === paths.length ? onPerfectGame() : onClearedLevel();
      return
    }
    shuffleOrder();
  }

  /*
    this function is called if all photos in level 1 and 2 are selected with no repeats,
    sets high score then resets all other values.
  */
  function onPerfectGame(){
    alert('Congratulations! Perfect Game!');
    setHighScore(currentScore + 1);
    resetGame();
  }
  
  // changes the path for photos and resets chosen tile list
  function onClearedLevel(){
    alert('Congratulations! You passed this level!');
    setCurrentPath(currentPath + 1);
    setClickedTiles([])
    shuffleOrder(1);
  }

  /*
    returns the player to level 1 and resets all values.
    shuffleOrders -currentPath value resets the tiles to be rendered array to path 0
  */
  function resetGame(){
    setCurrentPath(0);
    setCurrentScore(0);
    setClickedTiles([]);
    shuffleOrder(-currentPath);
  }

  return (
    <div className="App">
      <h1>Chord Memory</h1>

      <Scoreboard
        highScore = {highScore} 
        currentScore = {currentScore}
      />

      <Gameboard 
        path = {paths[currentPath].path}
        // length = {paths[currentPath].length}
        tileOrder = {tileOrder}
        onTileClick = {(id) => {onTileClick(id)}}
      /> 

    </div>
  );
}

export default App;
