export default function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <p>Current score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  )
}
