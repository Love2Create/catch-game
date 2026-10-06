import './App.css';
import Game from './components/Game';
import CatchGame from './classes/CatchGame';


// const catchGame = new CatchGame();
// console.log(catchGame.pieces);

const App = () => {
  return (
    <div className="content">
      <Game/>
    </div>
  );
};

export default App;
