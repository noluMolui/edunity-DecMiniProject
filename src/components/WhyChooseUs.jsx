import Button from "./Button";

function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="why-text">
        <span className="tag">WHY CHOOSE US</span>
        <h2>New Approach To Fun</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt.
        </p>

        <ul>
          <li>✔ Best Teaching</li>
          <li>✔ Expert Tutor</li>
          <li>✔ Quality Educators</li>
          <li>✔ Affordable</li>
        </ul>

        <Button text="Find Events" variant="primary" />
      </div>

      <div className="why-image">
        <div className="whyUs-image"><img src="/images/Whyus.png" alt="whyus-images" width="400"/></div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
