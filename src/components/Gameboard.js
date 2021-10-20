import React, {useState, useEffect} from 'react';
import Tile from './Tile';
import uniqid from 'uniqid';

const Gameboard = (props) => {
  const [order, setOrder] = useState([0,1,2,3,4,5,6,7,8,9]);

  // randomize numbers on mount
  useEffect(() => {
    shuffleOrder();
  }, []);

  function shuffleOrder(){
    // create a deep copy of order so as not to mutate State
    let array = [...order],
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
    setOrder(array);
  }

  return (
      order.map((number) => {
        return <Tile 
        updateTileHistory = {props.updateTileHistory}
        id = {number}
        key = {uniqid()}
        shuffleOrder = {shuffleOrder}/>
      })
  )
}

export default Gameboard;