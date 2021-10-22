import './styles/Scoreboard.css';

const Scoreboard = (props) => {
  return (
      <div className = 'scoresContainer'>
        <div className = 'score'>
          High Score: {props.highScore}
        </div>
        <div className = 'score'>
          Score: {props.currentScore}
        </div>
      </div>
  )
}

export default Scoreboard;