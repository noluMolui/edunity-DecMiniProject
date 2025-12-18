import Button from "./Button";

function About() {
  return (
    <section className="about">
      <div className="about-image">

        <div className="Aboutus-images">
          <img src="/src/assets/images/aboutus1.png" alt="aboutusleaner" width="200" />
          <img src="/src/assets/images/aboutus2.png" alt="aboutusleaner" width="200" />
        </div>

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
