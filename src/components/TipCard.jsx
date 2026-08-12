import "./TipCard.css";

export default function TipCard({ image, title, description }) {
  return (
    <div className="tip-card">
      <div className="card-thumb">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <a href="#" className="read-more-btn">
          Xem thêm
        </a>
      </div>
    </div>
  );
}
