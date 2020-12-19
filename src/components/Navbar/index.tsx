import React from "react";

import { Nav } from "./styles";
import { FaMap } from "react-icons/fa";
import { GiSpikedDragonHead } from "react-icons/gi";

const Navbar: React.FC = () => {
  return (
    <>
      <Nav>
        <a href="https://www.linkedin.com/in/octavio-arruda/" target="_blank">
          <span>
            <GiSpikedDragonHead />
          </span>
          <h4>Octavio Arruda</h4>
        </a>
        {/* Responsive hamburguer button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <FaMap />
          </span>
        </button>
        <div>
          <ul>
            <li>
              <a href="" className="nav-link">
                Experiences
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                About me
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
