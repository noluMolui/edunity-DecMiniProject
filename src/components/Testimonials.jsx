import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="testimonials">
      <span className="tag">TESTIMONIAL</span>
      <h2>What Parents Say</h2>

      <div className="testimonial-list">
        <TestimonialCard
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          name="Kathy Sullivan"
        />

        <TestimonialCard
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          name="Elsie Stroud"
        />

        <TestimonialCard
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          name="Kathy Sullivan"
        />
      </div>
    </section>
  );
}

export default Testimonials;
