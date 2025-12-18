import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="top-bar">
  <div className="top-bar-container">
    <p>
      <img src="/src/assets/images/clock.png" alt="clock" width="15" className="icon"/>
            Monday–Friday 9am–8pm
      <span className="separator">|</span>
      <img src="/src/assets/images/location.png" alt="location" width="15" className="icon"/>
      Houston, Wisconsin
    </p>
    <p className="language-bar">
  <span className="language">English</span>

  <span className="social-icons">
    <img src="/src/assets/images/facebook.png" alt="facebook" />
    <img src="/src/assets/images/twitter.png" alt="twitter" />
    <img src="/src/assets/images/skipe.png" alt="skype" />
    <img src="/src/assets/images/linkedin.png" alt="linkedin" />
  </span>
</p>

  </div>
</div>


      <nav className="navbar">
       <img src="src/assets/images/logo.png" alt="ledunity-logo" width="120"/>
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
