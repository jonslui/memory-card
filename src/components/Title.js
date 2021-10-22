import React from 'react';
import './styles/Title.css';

/*
  Players get feedback through the title header,
  e.g. If they get a new high score, click a wrong tile, or get a perfect game,
  a message scrolls across the screen, and is removed 4 seconds after animation begins.
  The function controlling this is changeTitle in App.js.
*/
const Title = (props) => {
  return (
    <div className = 'title_container'>
      <h1 id = 'title'>{props.title}</h1>
    </div>
  )
}

export default Title;