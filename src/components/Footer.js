/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Footer() {
  return (
    <div className="FooterCopyright">
      <div className="footerSection">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="footerContent">
              <h6 className="FooterHeading">Follow Us</h6>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <span>
                      <i class="fas fa-globe-africa"></i>
                    </span>
                    www.igravel.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      <i class="fas fa-phone-alt"></i>
                    </span>
                    +91 8318464600
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      <i class="fas fa-phone-alt"></i>
                    </span>
                    +91 7905782562
                  </p>
                </li>
              </ul>
              <div className="social-icons">
                <a href="#" title="facebook">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#" title="twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" title="instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" title="youtube">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="#" title="linkedin">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="footerContent">
              <h6 className="FooterHeading">Auction Categories</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Ending Now</a>
                </li>
                <li>
                  <a href="#">Vehicles</a>
                </li>
                <li>
                  <a href="#">Watches</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Real Estate</a>
                </li>
                <li>
                  <a href="#">Jewelry</a>
                </li>
                <li>
                  <a href="#">Art</a>
                </li>
                <li>
                  <a href="#">Sports &amp; Outdoor</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="footerContent">
              <h6 className="FooterHeading">We're Here to Help</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#HomePage">Home</a>
                </li>
                <li>
                  <a href="#ContactusSection">Contact Us</a>
                </li>
                <li>
                  <a href="#AuctionPage">Services</a>
                </li>
                <li>
                  <a href="#MyAccountPage">My Account</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="footerContent">
              <h6 className="FooterHeading">Subscribe to our Newsletter</h6>
              <div className="newsletter-footer">
                <input
                  className="email"
                  type="email"
                  name="EMAIL"
                  placeholder="Enter your email"
                  required=""
                />
                <input className="submit" type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CopyrightSection">
        <p>
          <span>
            <i class="far fa-copyright"></i>
          </span>
          2023 iGRAVEL AUCTION. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
