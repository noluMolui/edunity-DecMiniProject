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

        <ul className="features-list">
          <li><img src="/src/assets/images/tick.png" alt="a tick" width="15" />QUALITY EDUCATIORS</li>
          <li><img src="/src/assets/images/tick.png" alt="a tick" width="15" />SAFETY AND SECURITY</li>
          <li> <img src="/src/assets/images/tick.png" alt="a tick" width="15" />PLAY TO LEARN</li>
          <li> <img src="/src/assets/images/tick.png" alt="a tick" width="15" />HOMELIKE ENVIROMEND</li>
        </ul>

        <Button text="Admission Open" variant="primary" ></Button>
      </div>
    </section>
  );
}

export default About;
