import Card from "./Card.jsx";

export default function Gameboard({ cards }) {

    return (
    <>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
          />
        );
      })}
    </>
  )
}
