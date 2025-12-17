import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features">
      <FeatureCard
        title="Start Course"
        text="Lorem ipsum dolor sit amet consectetur."
      />

      <FeatureCard
        title="Expert Teachers"
        text="Lorem ipsum dolor sit amet consectetur."
        active={true}
      />

      <FeatureCard
        title="Strategic Location"
        text="Lorem ipsum dolor sit amet consectetur."
      />
    </section>
  );
}

export default Features;
