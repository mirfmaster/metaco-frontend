import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Menu = ({ setToggleMenu }) => (
  <>
    <Link to="/leaderboard" onClick={() => setToggleMenu(false)}>
      <p>Leaderboard</p>
    </Link>
    <Link to="/explorer" onClick={() => setToggleMenu(false)}>
      <p>Explorer</p>
    </Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="custom-navbar">
      <div className="custom-navbar-links">
        <div className="custom-navbar-links_logo">
          <Link to="/">
            <h1>Metaco.gg</h1>
          </Link>
        </div>
        <div className="custom-navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="custom-navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="custom-navbar-menu_container scale-up-center">
            <div className="custom-navbar-menu_container-links">
              <Menu setToggleMenu={setToggleMenu} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
