import { useState } from "react";
import "./App.css";
import Header from "./components/Header"
import Gameboard from "./components/Gameboard";

function App() {

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

  function handleCardClick(id) {
    console.log("card " + id + " was clicked");
    const newCards = cards.map(card => {
      if (card.id === id) {
        return { ...card, clicked: true }
      } else {
        return card;
      }
    });
    setCards(newCards);
    console.log(newCards);
  }

  return (
    <>
      <Header></Header>
      <Gameboard cards={cards} handleCardClick={handleCardClick}></Gameboard>
    </>
  )
}

export default App;
