import './styles/Tile.css'

const Tile = (props) => {
  return (
      <img 
        className = 'image'
        src = {'/assets/images/' + props.id + '.png'}
        alt = {'Image' + props.id}
        onClick = {() => {
          props.updateTileHistory(props.id);
          props.shuffleOrder();
        }}
      />
  )
}

export default Tile;