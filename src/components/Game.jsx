import {useState, useRef} from 'react';
import './Game.css';
import Hero from './Hero';

const Game = () => {

    const [heroPos, setHeroPos] = useState({x:20, y:50});

    const gameRef = useRef(null);
    const yOffset = 5;

    const onMove = (e) => {
        const bounce = gameRef.current.getBoundingClientRect();
        const pointerX = ((e.clientX - bounce.left) / bounce.width) * 100;
        const pointerY = ((e.clientY / bounce.height) * 100) - yOffset;

        setHeroPos({x:pointerX, y:pointerY});
    }

    return(
        <div className="game" onMouseMove={onMove} ref={gameRef}>
            <Hero pos={heroPos}/>
        </div>
    )
}

export default Game;