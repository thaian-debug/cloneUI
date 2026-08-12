import "./InfoCard.css";

export default function InfoCard({
  badge,
  tagline,
  title,
  subtitle,
  items,
  theme = "light",
}) {
  return (
    <div className={`info-card ${theme}`}>
      {badge && <span className="card-badge">{badge}</span>}

      {tagline && <p className="card-tagline">{tagline}</p>}

      <h2 className="card-title">{title}</h2>

      {subtitle && <p className="card-subtitle">{subtitle}</p>}

      <div className="card-divider"></div>

      <div className="card-list">
        {items?.map((item, index) => (
          <p key={index} className="card-item">
            {item.prefix && <span>{item.prefix} </span>}
            {item.highlight && (
              <span className="card-highlight">{item.highlight} </span>
            )}
            {item.suffix && <span>{item.suffix}</span>}
          </p>
        ))}
      </div>
    </div>
  );
}
