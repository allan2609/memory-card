import Card from "./Card.jsx";
import placeholder from "../assets/placeholder.jpg";

export default function Gameboard({ cards }) {

    return (
    <>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            image={placeholder}
          />
        );
      })}
    </>
  )
}
