import logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const MobileNav = ({ device }) => {
  const clickHandler = () => {
    setShowModal(!showModal);
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <div className="backdrop">
          <div className="modal">
            <div className="nav-left">
              <button
                style={{ fontSize: "2.2rem", fontWeight: "200" }}
                className="close-btn"
                onClick={clickHandler}
              >
                X
              </button>
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
          </div>
        </div>
      )}
      <nav className="navbar">
        <img src={logo} alt="logo" />

        <button className="nav-btn" onClick={clickHandler}>
          <FaBars style={{ width: "25px", height: "25px", color: "#0005" }} />
        </button>
      </nav>
    </>
  );
};

export default MobileNav;
