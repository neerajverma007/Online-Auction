/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

function BuyerForm() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title mb-4">Sell Product</h3>
          <div className="mb-3">
            <label htmlFor="sellerName" className="form-label">
              Seller Name
            </label>
            <input
              type="text"
              className="form-control"
              id="sellerName"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Product Description
            </label>
            <textarea
              className="form-control productDescription"
              rows="3"
              placeholder="Enter product description"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPhoto" className="form-label">
              Product Photo
            </label>
            <input
              type="file"
              className="form-control"
              id="productPhoto"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reservePrice" className="form-label">
              Selling Price
            </label>
            <input
              type="number"
              className="form-control"
              id="reservePrice"
              maxLength="10"
              placeholder="Enter reserve price"
              required
            />
          </div>
          <div className="form-text mt-3">
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <a href="#">privacy policy.</a>
            </p>
          </div>
          <div className="d-grid mt-3 submitbtn">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BuyerForm;
