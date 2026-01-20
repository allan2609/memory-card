import Scoreboard from "./Scoreboard";

export default function Header({ gameStatus, resetGame, score, bestScore }) {
    return (
    <>
      <p>How many cards can you click on without clicking more than once on any single card?</p>
      <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
      {gameStatus === "lost" && <button onClick={resetGame}>Reset game</button>}
    </>
  )
}
