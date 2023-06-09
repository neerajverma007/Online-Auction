/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap";

const Signin = () => {
  let [authMode, setAuthMode] = useState("Signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "Signin" ? "Signup" : "Signin");
  };

  if (authMode === "Signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center Auth-form-text">
              <p>
                Not registered yet?{" "}
                <span onClick={changeAuthMode}>Sign Up</span>
              </p>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-2"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-2"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid mt-4 submitbtn">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
            <p className="forgotlink mt-3">
              <a href="#">Forgot Password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center Auth-form-text">
            Already registered? <span onClick={changeAuthMode}>Sign In</span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Mobile Number</label>
            <input
              type="Number"
              className="form-control mt-2"
              placeholder="+91"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="Confirm Password"
            />
          </div>
          <div className="d-grid mt-4 submitbtn">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
          <p className="forgotlink mt-3">
            <a href="#">Forgot Password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
