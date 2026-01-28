import Card from "./Card.jsx";
import placeholder from "../assets/placeholder.jpg";

export default function Gameboard({ cards, handleCardClick }) {

    return (
    <div className="gameboard">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            image={placeholder}
            handleCardClick={handleCardClick}
          />
        );
      })}
    </div>
  )
}
