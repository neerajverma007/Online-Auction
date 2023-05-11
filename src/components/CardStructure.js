/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unreachable */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardStructure = () => {
  return (
    <div className="CardSection" id="AuctionPage">
      <div className="Cardinfo-Wrapper text-center">
        <span>AUCTIONS</span>
        <h4>
          Current <span>Auctions</span>
        </h4>
      </div>
      <div className="Cardcontent-Wrapper">
        <Container>
          <Row>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
              <Card>
                <Card.Img src="images/card_one.jpg" />
                <Card.Body>
                  <h4 className="card-title">Heading 1</h4>
                  <div className="bidstimer">
                    <p className="peoplebids">
                      <span>
                        <i class="fas fa-gavel"></i>
                      </span>
                      123 Bids
                    </p>
                    <span className="card-timer">0hrs:0min:0sec</span>
                  </div>
                  <div className="cardtext">
                    <span>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </span>
                  </div>
                  <div className="PriceSubmit">
                    <div className="cardRate unavailable">
                      <span>Product Unavailable</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
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
                    <span className="card-timer">5hrs:30min:15sec</span>
                  </div>
                  <div className="cardtext">
                    <span>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </span>
                  </div>
                  <div className="PriceSubmit">
                    <div className="cardRate">
                      <span>&#8377;200</span>
                    </div>
                    <div className="Cardbidbtn">
                      <Button className="Bidbtn">Submit a Bid</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
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
                    <span className="card-timer">5hrs:30min:15sec</span>
                  </div>
                  <div className="cardtext">
                    <span>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </span>
                  </div>
                  <div className="PriceSubmit">
                    <div className="cardRate">
                      <span>&#8377;200</span>
                    </div>
                    <div className="Cardbidbtn">
                      <Button className="Bidbtn">Submit a Bid</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
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
                    <span className="card-timer">5hrs:30min:15sec</span>
                  </div>
                  <div className="cardtext">
                    <span>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </span>
                  </div>
                  <div className="PriceSubmit">
                    <div className="cardRate">
                      <span>&#8377;200</span>
                    </div>
                    <div className="Cardbidbtn">
                      <Button className="Bidbtn">Submit a Bid</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
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
                    <span className="card-timer">5hrs:30min:15sec</span>
                  </div>
                  <div className="cardtext">
                    <span>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </span>
                  </div>
                  <div className="PriceSubmit">
                    <div className="cardRate">
                      <span>&#8377;200</span>
                    </div>
                    <div className="Cardbidbtn">
                      <Button className="Bidbtn">Submit a Bid</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
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
                    <span className="card-timer">5hrs:30min:15sec</span>
                  </div>
                  <div className="cardtext">
                    <span>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </span>
                  </div>
                  <div className="PriceSubmit">
                    <div className="cardRate">
                      <span>&#8377;200</span>
                    </div>
                    <div className="Cardbidbtn">
                      <Button className="Bidbtn">Submit a Bid</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
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
                    <span className="card-timer">5hrs:30min:15sec</span>
                  </div>
                  <div className="cardtext">
                    <span>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </span>
                  </div>
                  <div className="PriceSubmit">
                    <div className="cardRate">
                      <span>&#8377;200</span>
                    </div>
                    <div className="Cardbidbtn">
                      <Button className="Bidbtn">Submit a Bid</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
              <Card>
                <Card.Img src="images/card_eight.jpg" />
                <Card.Body>
                  <h4 className="card-title">Heading 8</h4>
                  <div className="bidstimer">
                    <p className="peoplebids">
                      <span>
                        <i class="fas fa-gavel"></i>
                      </span>
                      250 Bids
                    </p>
                    <span className="card-timer">5hrs:30min:15sec</span>
                  </div>
                  <div className="cardtext">
                    <span>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </span>
                  </div>
                  <div className="PriceSubmit">
                    <div className="cardRate">
                      <span>&#8377;200</span>
                    </div>
                    <div className="Cardbidbtn">
                      <Button className="Bidbtn">Submit a Bid</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CardStructure;
