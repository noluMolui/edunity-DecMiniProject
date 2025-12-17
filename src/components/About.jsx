import Button from "./Button";

function About() {
  return (
    <section className="about">
      <div className="about-image">
        <div className="image-placeholder">Image</div>
      </div>

      <div className="about-text">
        <span className="tag">ABOUT US</span>

        <h2>
          It's Our Passion To Work With <br />
          Children At Kindergarten
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt.
        </p>

        <ul>
          <li>✔ Quality Educators</li>
          <li>✔ Safe And Secure</li>
          <li>✔ Homelike Environment</li>
        </ul>

        <Button text="Admission Open" variant="primary" />
      </div>
    </section>
  );
}

export default About;
