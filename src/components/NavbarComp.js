/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function NavbarComp() {
  const navlinksArray = [
    { id: 1, href: "#", text: "Home" },
    { id: 2, href: "#", text: "Auction" },
    { id: 4, href: "#", text: "Services" },
    { id: 6, href: "#", text: "About Us" },
    { id: 7, href: "#", text: "Contact Us" },
    { id: 5, href: "#", text: "My Account" },
    { id: 8, href: "#", text: "Login" },
  ];
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#NavbarComp">
          <img src="images/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {navlinksArray.map(({ href, text, id }) => (
              <NavLink href={href} text={text} key={id} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, text, id }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {text}
      </a>
    </li>
  );
}

export default NavbarComp;
