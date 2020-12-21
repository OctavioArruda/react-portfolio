import React from "react";

import { Nav, List, Logo, Link } from "./styles";
import { GiSpikedDragonHead, GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Link href="https://www.linkedin.com/in/octavio-arruda/" target="_blank">
        <Logo>
          <GiSpikedDragonHead />
          <p>Octavio Arruda</p>
        </Logo>
      </Link>
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
          <GiHamburgerMenu />
        </span>
      </button>
      <div>
        <List>
          <li>
            <Link href="" className="nav-link">
              Home
            </Link>
            <Link href="" className="nav-link">
              Experiences
            </Link>
          </li>
          <li>
            <Link href="" className="nav-link">
              About me
            </Link>
          </li>
          <li>
            <Link href="" className="nav-link">
              Contact
            </Link>
          </li>
        </List>
      </div>
    </Nav>
  );
};

export default Navbar;
