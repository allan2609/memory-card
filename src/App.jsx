import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header"
import Gameboard from "./components/Gameboard";

function App() {

  const [gameStatus, setGameStatus] = useState("playing");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [cards, setCards] = useState(shuffle([
    { id: 1, image: "placeholder.jpg", clicked: false },
    { id: 2, image: "placeholder.jpg", clicked: false },
    { id: 3, image: "placeholder.jpg", clicked: false },
    { id: 4, image: "placeholder.jpg", clicked: false },
    { id: 5, image: "placeholder.jpg", clicked: false },
    { id: 6, image: "placeholder.jpg", clicked: false },
    { id: 7, image: "placeholder.jpg", clicked: false },
    { id: 8, image: "placeholder.jpg", clicked: false },
    { id: 9, image: "placeholder.jpg", clicked: false },
    { id: 10, image: "placeholder.jpg", clicked: false },
    { id: 11, image: "placeholder.jpg", clicked: false },
    { id: 12, image: "placeholder.jpg", clicked: false }
  ]));

  useEffect(() => {
    const clickedCount = cards.filter(card => card.clicked).length;

    if (clickedCount === cards.length) {
      setGameStatus("won");
    }
  }, [cards]);

  function handleCardClick(id) {
    if (gameStatus === "lost" || gameStatus === "won") return;

    const clickedCard = cards.find(card => card.id === id);

    console.log("Card " + id + " was clicked");

    if (clickedCard.clicked === true) {
      setBestScore(prevBest => Math.max(prevBest, score));
      setGameStatus("lost");
      return;
    }

    setScore(prevScore => prevScore + 1);

    setCards(prevCards =>
      shuffle(
        prevCards.map(card =>
        card.id === id
          ? { ...card, clicked: true }
          : card
        )
      )
    );
  }

  function resetGame() {
    setScore(0);
    setGameStatus("playing");

    setCards(prevCards =>
      prevCards.map(card => ({ ...card, clicked: false }))
    );
  }

  function shuffle(array) {
    const copiedArray = [...array];
    const output = [];
    let n = copiedArray.length;
    let i;

    while (n) {
      i = Math.floor(Math.random() * n--);
      output.push(copiedArray.splice(i, 1)[0]);
    }

    return output;
  }

  return (
    <>
      <Header gameStatus={gameStatus} resetGame={resetGame} score={score} bestScore={bestScore}></Header>
      <Gameboard cards={cards} handleCardClick={handleCardClick}></Gameboard>
    </>
  )
}

export default App;
