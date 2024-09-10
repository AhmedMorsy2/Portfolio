import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top mainNav p-3">
      <div className="container">
        <Link
          className="navbar-brand cursor-pointer"
          to="home"
          smooth={false}
          duration={500}
          spy={true}
          exact="true"
          offset={-70}
          activeClass="active"
        >
          Portfolio
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon " />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link cursor-pointer"
                to="home"
                smooth={false}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link cursor-pointer"
                to="projects"
                smooth={false}
                duration={500}
                spy={false}
                exact="true"
                offset={-70}
                activeClass="active"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link cursor-pointer"
                to="skills"
                smooth={false}
                duration={500}
                spy={false}
                exact="true"
                offset={-70}
                activeClass="active"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link cursor-pointer"
                to="about"
                smooth={false}
                duration={500}
                spy={false}
                exact="true"
                offset={-70}
                activeClass="active"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link cursor-pointer"
                to="contact"
                smooth={false}
                duration={500}
                spy={false}
                exact="true"
                offset={-70}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
