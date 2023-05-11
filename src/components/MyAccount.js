/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Breadcrumb from "react-bootstrap/Breadcrumb";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MyAccount = () => {
  return (
    <div className="MyAccount" id="MyAccountPage">
      <div className="container">
        <div className="Breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>&#8594;
            <Breadcrumb.Item href="#">My Account</Breadcrumb.Item>&#8594;
            <Breadcrumb.Item active>My Bids</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="MyBidsTab">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="leftMenu sticky-menu">
                <div className="text-center">
                  <img
                    className="rounded-circle"
                    src="images/user.jpg"
                    alt="Your Name"
                    width="150"
                    height="150"
                  />
                  <h4 className="userName">Neeraj Verma</h4>
                  <span>vneeraj607@gmail.com</span>
                  <ul className="nav flex-column">
                    <li className="nav-item active">
                      <a className="nav-link" href="#myBids">
                        My Bids
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#myOrder">
                        My Orders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#winningBids">
                        Winning Bids
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
              <div className="rightMenu" id="myBids">
                <div className="mybidSection">
                  <h4>My Bids</h4>
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#home"
                      >
                        Upcoming Bids
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#menu1"
                      >
                        Recent Bids
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mybidSection-content" id>
                  <div className="tab-content">
                    <div id="home" className="tab-pane active">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_one.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading 1</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_two.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading 2</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_three.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading 3</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_four.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading 4</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_five.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading 5</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_six.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading 6</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </div>
                    <div id="menu1" className="container tab-pane fade">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_seven.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading 7</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_eight.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_one.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_two.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_three.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_four.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Update Bid</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="MyorderTab" id="myOrder">
          <div className="Breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>&#8594;
              <Breadcrumb.Item href="#">My Account</Breadcrumb.Item>&#8594;
              <Breadcrumb.Item active>My Order</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="leftMenu sticky-menu">
                <div className="text-center">
                  <img
                    className="rounded-circle"
                    src="images/user.jpg"
                    alt="Your Name"
                    width="150"
                    height="150"
                  />
                  <h4 className="userName">Neeraj Verma</h4>
                  <span>vneeraj607@gmail.com</span>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#myBids">
                        My Bids
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#myOrder">
                        My Orders
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#winningBids">
                        Winning Bids
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
              <div className="rightMenu">
                <div className="mybidSection winbidSection myOrderSection">
                  <h4>My Order</h4>
                  <form>
                    <div className="input-group">
                      <div className="form-outline">
                        <input
                          type="search"
                          id="form1"
                          placeholder="Search"
                          className="form-control"
                        />
                      </div>
                      <button type="button" className="btn search">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mybidSection-content">
                  <div className="tab-content">
                    <div id="home" className="myordertab">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_seven.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <h5>Order ID : TUX3439Z</h5>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">
                                    Submit a Bid
                                  </Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_eight.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <h5>Order ID : TUX3439Z</h5>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">
                                    Submit a Bid
                                  </Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_one.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <h5>Order ID : TUX3439Z</h5>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">
                                    Submit a Bid
                                  </Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_two.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <h5>Order ID : TUX3439Z</h5>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">
                                    Submit a Bid
                                  </Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_three.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <h5>Order ID : TUX3439Z</h5>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">
                                    Submit a Bid
                                  </Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_four.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <h5>Order ID : TUX3439Z</h5>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">
                                    Submit a Bid
                                  </Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="WinningBidsTab" id="winningBids">
          <div className="Breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>&#8594;
              <Breadcrumb.Item href="#">My Account</Breadcrumb.Item>&#8594;
              <Breadcrumb.Item active>Winning Bids</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="leftMenu sticky-menu">
                <div className="text-center">
                  <img
                    className="rounded-circle"
                    src="images/user.jpg"
                    alt="Your Name"
                    width="150"
                    height="150"
                  />
                  <h4 className="userName">Neeraj Verma</h4>
                  <span>vneeraj607@gmail.com</span>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#myBids">
                        My Bids
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#myOrder">
                        My Orders
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#winningBids">
                        Winning Bids
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
              <div className="rightMenu">
                <div className="mybidSection winbidSection">
                  <h4>Winning Bids</h4>
                  <form>
                    <div className="input-group">
                      <div className="form-outline">
                        <input
                          type="search"
                          id="form1"
                          placeholder="Search"
                          className="form-control"
                        />
                      </div>
                      <button type="button" className="btn search">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mybidSection-content">
                  <div className="tab-content">
                    <div id="home" className="Wintab">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_one.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_two.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_three.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_four.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_five.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <Card>
                            <Card.Img src="images/card_six.jpg" />
                            <Card.Body>
                              <h4 className="card-title">Heading</h4>
                              <div className="bidstimer">
                                <p className="peoplebids">
                                  <span>
                                    <i class="fas fa-gavel"></i>
                                  </span>
                                  250 Bids
                                </p>
                                <span className="card-timer">
                                  5hrs:30min:15sec
                                </span>
                              </div>
                              <div className="cardtext">
                                <span>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </span>
                              </div>
                              <div className="PriceSubmit">
                                <div className="cardRate">
                                  <span>&#8377;200</span>
                                </div>
                                <div className="Cardbidbtn">
                                  <Button className="Bidbtn">Buy Now</Button>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
