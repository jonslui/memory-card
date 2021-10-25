import './App.css';
import React, {useState, useEffect} from 'react';
import Title from './components/Title';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';

const App = () => {
  const levels = [{path: '/assets/images/level_1/', length: 4},
                {path: '/assets/images/level_2/', length: 6},
                {path: '/assets/images/level_3/', length: 9},]
  // 4 is used here as it is the length of the first level in levels
  const [tileOrder, setTileOrder] = useState([...Array(4).keys()].map(i => i++))
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedTiles, setClickedTiles] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [title, setTitle] = useState('Chord Memory');

  /*
    randomize image order on mount to make sure they're not displayed in the same order on every load
  */
  useEffect(() => {
    shuffleOrder();
    changeTitle('Click a chord to begin!')
  }, []);  


  /*
    position variable will sometimes be passed with a +1 value when a match is cleared to set up the next board
    position will sometimes be passed with a -currentLevel value to reset board to level 1
  */
  function shuffleOrder(position = 0){
    // create an array of the length of the current level with values incrementing by 1
    // (These values correspond to photos saved in public/assets/images - rendered in Tile.js, (e.g. 0.png, 1.png, 2.png))
    let array = [...Array(levels[currentLevel + position].length).keys()].map(i => i++),
        length = array.length,
        temp,
        index;

    // While there remain elements to shuffle…
    while (length) {
      // Pick a remaining element and reduce length by 1…
      index = Math.floor(Math.random() * length--);
      // Swap it with the current element…
      temp = array[length];
      array[length] = array[index];
      array[index] = temp;
    }

    // Update state with shuffled order
    setTileOrder(array);
  }


  /*
    Instructions/Feedback in this app are provided by
    changing the title, and adding/removing an animation class on each change.
    The animation takes 3 seconds, so setTimeout is called for 4, giving the user time
    to read the message before it is cleared away and replaced with the App title.
  */
  function changeTitle(message){
    const title = document.getElementById('title');
    setTitle(message);
    title.className = 'title_animation';

    setTimeout(() => {
      title.className = '';
      setTitle('Chord Memory');
    }, 4000);
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

  /*
    This function is called on an incorrect click. 
    It calls setHighScore if necessary, resetGame, and provides player feedback.
  */
  function onError(){
    if(currentScore > highScore) {
      setHighScore(currentScore);
      resetGame();
      changeTitle('New High Score!');
    } else {
      resetGame();
      changeTitle('Oops. Keep Trying.');
    }
  }

  /*
    If the first if statement passes, that means that the current stage was cleared.
    If the second if statement passes, that means that all levels have been cleared.
  */
  function checkForWin(){
    if(clickedTiles.length + 1 === levels[currentLevel].length){
      currentLevel + 1 === levels.length ? onPerfectGame() : onClearedLevel();
      return
    }
    shuffleOrder();
  }

  /*
    this function is called if all photos in level 1 and 2 are selected with no repeats,
    sets high score then resets all other values.
  */
  function onPerfectGame(){
    changeTitle('Congratulations! Perfect Game!');
    setHighScore(currentScore + 1);
    resetGame();
  }
  
  // changes the path for photos and resets chosen tile list
  function onClearedLevel(){
    changeTitle('Completed Level ' + (currentLevel + 1) + '!');
    setCurrentLevel(currentLevel + 1);
    setClickedTiles([])
    shuffleOrder(1);
  }

  /*
    returns the player to level 1 and resets all values.
    shuffleOrders -currentLevel value resets the tiles to be rendered array to path 0
  */
  function resetGame(){
    setCurrentLevel(0);
    setCurrentScore(0);
    setClickedTiles([]);
    shuffleOrder(-currentLevel);
  }

  return (
    <div className="App">
      <Title 
        title = {title}
      />

      <Scoreboard
        highScore = {highScore} 
        currentScore = {currentScore}
      />

      <Gameboard 
        path = {levels[currentLevel].path}
        tileOrder = {tileOrder}
        onTileClick = {(id) => {onTileClick(id)}}
      /> 
    </div>
  );
}

export default App;
