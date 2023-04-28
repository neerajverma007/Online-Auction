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
    <div className="CardSection">
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
                  <Card.Title>Heading 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="Cardbidbtn">
                    <span>250 Bids</span>
                    <Button className="Bidbtn">Submit a Bid</Button>
                  </div>
                </Card.Body>
                <div className="cardRate">
                  <span>&#8377;200</span>
                </div>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
              <Card>
                <Card.Img src="images/card_two.jpg" />
                <Card.Body>
                  <Card.Title>Heading 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="Cardbidbtn">
                    <span>250 Bids</span>
                    <Button className="Bidbtn">Submit a Bid</Button>
                  </div>
                </Card.Body>
                <div className="cardRate">
                  <span>&#8377;200</span>
                </div>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
              <Card>
                <Card.Img src="images/card_three.jpg" />
                <Card.Body>
                  <Card.Title>Heading 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="Cardbidbtn">
                    <span>250 Bids</span>
                    <Button className="Bidbtn">Submit a Bid</Button>
                  </div>
                </Card.Body>
                <div className="cardRate">
                  <span>&#8377;200</span>
                </div>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
              <Card>
                <Card.Img src="images/card_four.jpg" />
                <Card.Body>
                  <Card.Title>Heading 4</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="Cardbidbtn">
                    <span>250 Bids</span>
                    <Button className="Bidbtn">Submit a Bid</Button>
                  </div>
                </Card.Body>
                <div className="cardRate">
                  <span>&#8377;200</span>
                </div>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
              <Card>
                <Card.Img src="images/card_five.jpg" />
                <Card.Body>
                  <Card.Title>Heading 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="Cardbidbtn">
                    <span>250 Bids</span>
                    <Button className="Bidbtn">Submit a Bid</Button>
                  </div>
                </Card.Body>
                <div className="cardRate">
                  <span>&#8377;200</span>
                </div>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
              <Card>
                <Card.Img src="images/card_six.jpg" />
                <Card.Body>
                  <Card.Title>Heading 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="Cardbidbtn">
                    <span>250 Bids</span>
                    <Button className="Bidbtn">Submit a Bid</Button>
                  </div>
                </Card.Body>
                <div className="cardRate">
                  <span>&#8377;200</span>
                </div>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
              <Card>
                <Card.Img src="images/card_seven.jpg" />
                <Card.Body>
                  <Card.Title>Heading 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="Cardbidbtn">
                    <span>250 Bids</span>
                    <Button className="Bidbtn">Submit a Bid</Button>
                  </div>
                </Card.Body>
                <div className="cardRate">
                  <span>&#8377;200</span>
                </div>
              </Card>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-6 col-12">
              <Card>
                <Card.Img src="images/card_eight.jpg" />
                <Card.Body>
                  <Card.Title>Heading 4</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="Cardbidbtn">
                    <span>250 Bids</span>
                    <Button className="Bidbtn">Submit a Bid</Button>
                  </div>
                </Card.Body>
                <div className="cardRate">
                  <span>&#8377;200</span>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CardStructure;
