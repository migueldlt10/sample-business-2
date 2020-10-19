import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinux, FaTimes } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";

import "./Navbar.css";
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            MDLT <FaLinux />
            {/* <img className="logo" src="https://i.imgur.com/i20YHDE.png" alt="logo"/> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes className="fa-times" />
            ) : (
              <GoThreeBars className="fa-bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/payment"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Payment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-outline">Get a Quote</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
