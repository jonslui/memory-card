const Tile = (props) => {

  return (
    <div
      onClick = {(event) => {
        props.updateTileHistory(props.id);
        props.shuffleOrder();
      }}> {props.id} </div>
  )
}

export default Tile;