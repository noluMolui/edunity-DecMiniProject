function TestimonialCard({ text, name }) {
  return (
    <div className="testimonial-card">
      <p>“{text}”</p>
      <h4>{name}</h4>
      <span>Parent</span>
    </div>
  );
}

export default TestimonialCard;
