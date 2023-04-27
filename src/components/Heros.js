/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "bootstrap/dist/js/bootstrap";

function Heros() {
  return (
    <div className="hero-wrapper">
      <div className="hero-wrapper-image">
        <img src="images/bg_one.jpg" />
      </div>
      <div className="hero-wrapper-content">
        <h1>The Best Place to Buy and Sell.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.
        </p>
        <a href="#" class="btn Registerbtn" role="button">
          Register
        </a>
      </div>
    </div>
  );
}

export default Heros;
