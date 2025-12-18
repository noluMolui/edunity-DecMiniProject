import StatCard from "./StatCard";

function VideoStats() {
  return (
    <section className="video-stats">
      
      <div className="video-box">
        <img src="/src/assets/images/vidd.png" alt="video" width="100%"/>
      </div>

    
      <section class="stats">
  <div class="stat">
    <div class="icon">
      <img src="src/assets/images/stats.png" alt="Award Icon" />
    </div>
    <h2>2,500</h2>
    <p>Total Teacher</p>
  </div>

  <div class="stat">
    <div class="icon">
    <img src="src/assets/images/stats.png" alt="Award Icon" />
    </div>
    <h2>5,000</h2>
    <p>Total Student</p>
  </div>

  <div class="stat">
    <div class="icon">
      <img src="src/assets/images/stats.png" alt="Award Icon" />
    </div>
    <h2>350</h2>
    <p>Total Classroom</p>
  </div>

  <div class="stat">
    <div class="icon">
      <img src="src/assets/images/stats.png" alt="Award Icon" />
    </div>
    <h2>1,200</h2>
    <p>Best Awards Won</p>
  </div>
</section>


    </section>
  );
}

export default VideoStats;
