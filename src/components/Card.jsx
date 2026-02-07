import "./Card.css";

export default function Card({ id, image, handleCardClick }) {

  return (
    <div className="card">
      <img key={id} src={image} onClick={() => handleCardClick(id)} />
    </div>
  )
}
