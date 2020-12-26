import React, { useState } from "react";

import { Nav, List, Logo, Link, ResponsiveButton } from "./styles";
import { GiSpikedDragonHead } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkItems = [
    { href: "", label: "Home" },
    { href: "", label: "Experiences" },
    { href: "", label: "About me" },
    { href: "", label: "Contact" },
  ];

  return (
    <Nav>
      <Link href="https://www.linkedin.com/in/octavio-arruda/" target="_blank">
        <Logo>
          <GiSpikedDragonHead />
          <p>Octavio Arruda</p>
        </Logo>
      </Link>
      <ResponsiveButton
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </ResponsiveButton>
      <List isOpen={isOpen}>
        {navLinkItems.map(({ href, label }, index) => (
          <li key={index}>
            <Link href={href} className="nav-link">
              {label}
            </Link>
          </li>
        ))}
      </List>
    </Nav>
  );
};

export default Navbar;
