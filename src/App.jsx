import './App.css';
import Game from './components/Game';
import CatchGame from './classes/CatchGame';
import { useState, useReducer } from 'react';


const catchGame = new CatchGame();
console.log(catchGame.pieces);


const App = () => {

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const[pieces, setPieces] = useState(catchGame.pieces);
  

  const handleOnClick = () => {
    catchGame.addPiece();
  }

  const onGameUpdate = () => {
    setPieces(catchGame.pieces);
    forceUpdate();
  }

  catchGame.updateHandler = onGameUpdate;

  return (
    <div className="content">
      <Game pieces={pieces}/>
      <button onClick={handleOnClick}>Add Piece</button>
    </div>
  );
};

export default App;
