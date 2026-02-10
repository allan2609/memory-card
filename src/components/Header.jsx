import Scoreboard from "./Scoreboard";
import "./Header.css";

export default function Header({ gameStatus, resetGame, newGame, score, bestScore }) {
    return (
    <div className="header">
      {gameStatus === "playing" && <p>How many cards can you click on without clicking more than once on any single card?</p>}
      {gameStatus === "won" && <p>Nice! You clicked all the cards 👏</p>}
      {gameStatus === "lost" && <p>Oops — that card was already clicked.</p>}
      <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
      {gameStatus === "lost" && <div className="buttons"><button onClick={resetGame}>Reset game</button><button onClick={newGame}>Different cats</button></div>}
    </div>
  )
}
