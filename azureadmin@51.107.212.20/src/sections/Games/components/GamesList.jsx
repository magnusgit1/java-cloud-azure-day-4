/* eslint-disable react/prop-types */
import './Game.css'
import GamesListItem from './GamesListItem'

function GamesList({ data }) { 
    return (
        <ul>
            {data.map(game => (
                <GamesListItem key={game.id} game={game} />
            ))}
        </ul>
    );
}

export default GamesList