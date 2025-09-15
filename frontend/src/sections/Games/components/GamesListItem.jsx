
import './Game.css'

function GamesListItem({ game }) {
  return (
    <li>
      <strong>Title:</strong> {game.title}<br />
      <strong>Genre:</strong> {game.genre}<br />
      <strong>Publisher:</strong> {game.publisher}<br />
      <strong>Developer:</strong> {game.developer}<br />
      <strong>Release Year:</strong> {game.releaseYear}<br />
      <strong>Early Access:</strong> {game.earlyAccess ? "Yes" : "No"}
    </li>
  )
}
export default GamesListItem;
