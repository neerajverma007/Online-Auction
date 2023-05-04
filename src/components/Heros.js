/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Heros() {
  return (
    <div className="hero-wrapper">
      <div className="hero-wrapper-image">
        <img src="images/bg_one.jpg" />
      </div>
      <div className="hero-wrapper-content">
        <h1>Find Your Next Deal!</h1>
        <p>
          Online Auction is where everyone goes to shop, sell,and give, while
          discovering variety and affordability.
        </p>
        <a href="#" className="btn Registerbtn" role="button">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Heros;
