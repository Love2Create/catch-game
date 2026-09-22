import {useState} from 'react';
import './Game.css';
import Hero from './Hero';

const Game = () => {

    const [heroPos, setHeroPos] = useState({x:20, y:50})

    return(
        <div className="game">
            <Hero pos={heroPos}/>
        </div>
    )
}

export default Game;