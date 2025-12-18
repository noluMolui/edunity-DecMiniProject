import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="top-bar">
  <div className="top-bar-container">
    <p>
      <img src="/images/clock.png" alt="clock" width="15" className="icon"/>
            Monday–Friday 9am–8pm
      <span className="separator">|</span>
      <img src="/images/location.png" alt="location" width="15" className="icon"/>
      Houston, Wisconsin
    </p>
    <p className="language-bar">
  <span className="language">English</span>

  <span className="social-icons">
    <img src="/images/facebook.png" alt="facebook" />
    <img src="/images/twitter.png" alt="twitter" />
    <img src="/images/skipe.png" alt="skype" />
    <img src="/images/linkedin.png" alt="linkedin" />
  </span>
</p>

  </div>
</div>


      <nav className="navbar">
       <img src="/images/logo.png" alt="ledunity-logo" width="120"/>
        <ul className="nav-links">

          <li class="nav-item">
           Home ⌄
          </li>

          <li class="nav-item">
            About Us ⌄
           </li>

          <li>Courses</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <Button text="Create" variant="primary" />
      </nav>
    </>
  );
}

export default Navbar;
