import React from 'react';
import Tile from './Tile';
import uniqid from 'uniqid';
import './styles/Gameboard.css';

const Gameboard = (props) => {
  return (
    <div className = 'tileContainer'>
      {
       props.tileOrder.map((number) => {
        return <Tile 
        path = {props.path}
        onTileClick = {props.onTileClick}
        id = {number}
        key = {uniqid()}
        />
      })
      }
    </div>
  )
}

export default Gameboard;