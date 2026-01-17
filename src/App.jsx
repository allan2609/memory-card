import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header"
import Gameboard from "./components/Gameboard";

function App() {

  const [gameStatus, setGameStatus] = useState("playing");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [cards, setCards] = useState([
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
  ]);

  useEffect(() => {
    console.log("Current score: " + score + ", best score: " + bestScore);
  }, [score, bestScore]);


  function handleCardClick(id) {
    console.log("Card " + id + " was clicked");
    const clickedCard = cards.find(card => card.id === id);

    if (clickedCard.clicked === true) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setGameStatus("lost");
      return;
    }

    setScore(score + 1);

    const newCards = cards.map(card => {
      if (card.id === id) {
        return { ...card, clicked: true }
      } else {
        return card;
      }
    });
    
    setCards(newCards);
  }

  function resetGame() {
    console.log("Game over! Your score was " + score);
    setScore(0);
    setGameStatus("playing");

    const newCards = cards.map(card => {
      return { ...card, clicked: false }
    });

    setCards(newCards);
  }

  return (
    <>
      <Header gameStatus={gameStatus} resetGame={resetGame}></Header>
      <Gameboard cards={cards} handleCardClick={handleCardClick}></Gameboard>
    </>
  )
}

export default App;
