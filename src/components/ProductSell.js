/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "react-bootstrap";

function ProductSell() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div className="ProductSell-Section">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="slider text-center">
              <Slider {...settings}>
                <div className="slider-section">
                  <div className="slider-image">
                    <img src="images/card_one.jpg" alt="product-image" />
                  </div>
                </div>
                <div className="slider-content">
                  <div className="slider-image">
                    <img src="images/card_one.jpg" alt="product-image" />
                  </div>
                </div>
                <div className="slider-content">
                  <div className="slider-image">
                    <img src="images/card_one.jpg" alt="product-image" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div class="slider-content">
              <h2>The Breeze Camera IX</h2>
              <p>
                Vintage cameras can be worth a lot of money depending on the
                brand, type, condition and popularity. Mass-produced cameras
                like a The Breeze Camera IX Instamatic camera might sell for
                &#8377;100,000 or &#8377;2,500,000 while a rare camera from a
                well-known brand like Leica can go for thousands or even
                millions of dollars.
              </p>
              <ul className="price-table list-unstyled">
                <li className="header">
                  <span className="details">Current Price</span>
                  <h5 className="info">&#8377;70,000</h5>
                </li>
                <li className="header">
                  <span className="details">Buyer's Premium</span>
                  <h5 className="info">10.00%</h5>
                </li>
                <li className="header">
                  <span className="details">Bid Increment (IN)</span>
                  <h5 className="info">&#8377;5000</h5>
                </li>
              </ul>
              <div className="amountpay">
                <div className="form-outline">
                  <input
                    type="number"
                    id="form1"
                    placeholder="&#8377; Enter the Amount"
                    className="form-control"
                  />
                </div>
                <div className="Cardbidbtn">
                  <Button className="Bidbtn">Submit Bid</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSell;
