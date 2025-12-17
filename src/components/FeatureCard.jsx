function FeatureCard({ title, text, active }) {
  return (
    <div className={`feature-card ${active ? "active" : ""}`}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default FeatureCard;
