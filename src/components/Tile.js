import './styles/Tile.css'

/*

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