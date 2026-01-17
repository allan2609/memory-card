import Scoreboard from "./Scoreboard";

export default function Header({gameStatus, resetGame}) {
    return (
    <>
      <p>How many cards can you click on without clicking more than once on any single card?</p>
      <Scoreboard></Scoreboard>
      {gameStatus === "lost" && <button onClick={resetGame}>Reset game</button>}
    </>
  )
}
