import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="top-bar">
        <p>Working Monday–Friday 9am–8pm | Houston, Wisconsin</p>
        <span>English</span>
      </div>

      <nav className="navbar">
        <h2 className="logo">KIDSO</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
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
