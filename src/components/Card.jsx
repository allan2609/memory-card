import "./Card.css";

export default function Card({ id, image, handleCardClick }) {

  return (
    <div className="card">
      <h2>Card name</h2>
      <p>card info</p>
      <img key={id} src={image} onClick={() => handleCardClick(id)} />
    </div>
  )
}
