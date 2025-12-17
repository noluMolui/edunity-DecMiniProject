import Button from "./Button";

function Hero() {
  return (
    <section className="hero">
      {/* Left */}
      <div className="hero-text">
        <h1>
          The Best Place <br />
          To Learn And Play <br />
          For Kids
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore.
        </p>

        <div className="hero-buttons">
          <Button text="Browse Courses" variant="primary" />
          <Button text="▶ Watch Now" variant="secondary" />
        </div>
      </div>

      {/* Right visuals */}
      <div className="hero-visual">
        <div className="orange-shape"></div>
        <div className="green-shape"></div>

        <div className="stat stat-top">
          <strong>5.8k</strong>
          <span>Success Courses</span>
        </div>

        <div className="stat stat-bottom">
          <strong>10k+</strong>
          <span>Students</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;

