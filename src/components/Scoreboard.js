const Scoreboard = (props) => {
  
  return (
    <div>
      <div>High Score: {props.highScore}</div>
      <div>Score: {props.currentScore}</div>
    </div>
  )
}

export default Scoreboard;