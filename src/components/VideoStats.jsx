import StatCard from "./StatCard";

function VideoStats() {
  return (
    <section className="video-stats">
      {/* Video */}
      <div className="video-box">
        <button className="play-circle">▶</button>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <StatCard number="2,500" label="Total Teacher" />
        <StatCard number="5,000" label="Total Student" />
        <StatCard number="350" label="Total Classroom" />
        <StatCard number="1,200" label="Best Awards Won" />
      </div>
    </section>
  );
}

export default VideoStats;
