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
        <h1>The Best Place to Buy and Sell.</h1>
        <p>
          Get ready for the ultimate shopping experience. At iGRAVEL AUCTION, we
          offer a wide variety of products that will exceed your expectations.
          Start bidding now and see for yourself!
        </p>
        <a href="#" className="btn Registerbtn" role="button">
          Register
        </a>
      </div>
    </div>
  );
}

export default Heros;
