import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" />
        <ul className="nav-list">
          <li className="list-item">features</li>
          <li className="list-item">pricing</li>
          <li className="list-item">resources</li>
        </ul>
      </div>
      <div className="access-btn">
        <button className="login-btn">login</button>
        <button className="signup-btn">sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
