import Card from "./Card.jsx";
import "./Gameboard.css";

export default function Gameboard({ cards, handleCardClick }) {

    return (
    <div className="gameboard">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            handleCardClick={handleCardClick}
          />
        );
      })}
    </div>
  )
}
