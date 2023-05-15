/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Signin from "./Signin";

function NavbarComp() {
  const [isLoginModal, setLoginModal] = useState(false);

  const navlinksArray = [
    { id: 1, href: "#HomePage", text: "Home" },
    { id: 2, href: "#AuctionPage", text: "Auction" },
    { id: 4, href: "#", text: "Services" },
    { id: 6, href: "#aboutustab", text: "About Us" },
    { id: 7, href: "#ContactusSection", text: "Contact Us" },
    // {
    //   id: 8,
    //   href: "#LoginPage",
    //   text: "Login",
    //   handleClick: handleLogin,
    //   dropDownItems: [
    //     { id: 5, href: "#MyAccountPage", text: "My Account" },
    //     { id: 9, handleClick: () => alert("Logout Func"), text: "Logout" },
    //   ],
    // },
  ];

  function handleLogin() {
    setLoginModal(true);
  }

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
            {navlinksArray.map(({ href, text, id, handleClick }) => (
              <NavLink
                href={href}
                text={text}
                key={id}
                handleClick={handleClick ?? (() => {})}
              />
            ))}
            {2 === 2 ? (
              <li className="nav-item">
                <div className="avtar d-flex">
                  <img
                    className="rounded-circle"
                    src="images/user.jpg"
                    alt="avatar-image"
                  />
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle-grey"
                      data-bs-toggle="dropdown"
                    >
                      Neeraj<i className="fas fa-chevron-down"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a href="#MyAccountPage" className="dropdown-item">
                        My Account
                      </a>
                      <a href="#" className="dropdown-item">
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  href={"#login"}
                  text="Login"
                  handleClick={handleLogin}
                />
              </li>
            )}
          </ul>
        </div>
      </div>

      {isLoginModal && <Signin setLoginModal={setLoginModal} />}
    </nav>
  );
}

function NavLink({ href, text = "ERR", id, handleClick }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href} onClick={handleClick}>
        {text}
      </a>
    </li>
  );
}

export default NavbarComp;
