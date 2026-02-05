import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header"
import Gameboard from "./components/Gameboard";

function App() {

  const [gameStatus, setGameStatus] = useState("playing");
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_5SvDl5EYxTBga2CO03yFPNGZcoDhUzHiYZw7SuOGTvafyVgGrEEuBqyxNbIB56yc");
        const data = await response.json();
        setLoading(true);

        const formattedCards = shuffle(
          data.map((item, index) => ({
            id: index + 1,
            image: item.url,
            description: item.description,
            clicked: false
          }))
        );

        setCards(formattedCards);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      }
    }

    fetchCards();
  }, []);


  useEffect(() => {
    const clickedCount = cards.filter(card => card.clicked).length;

    if (clickedCount === cards.length && cards.length !== 0) {
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
    <div className="main-layout">
      <Header gameStatus={gameStatus} resetGame={resetGame} score={score} bestScore={bestScore}></Header>
      <Gameboard cards={cards} handleCardClick={handleCardClick}></Gameboard>
    </div>
  )
}

export default App;
