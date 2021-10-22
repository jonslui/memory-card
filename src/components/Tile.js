import './styles/Tile.css'

/*
  onTileClick links back to App.js where it calls other associated functions to evaluate player choice
*/
const Tile = (props) => {
  return (
      <img 
        className = 'image'
        src = {props.path + props.id + '.png'}
        alt = {'Image' + props.id}
        onClick = {() => {
          props.onTileClick(props.id);
        }}
      />
  )
}

export default Tile;