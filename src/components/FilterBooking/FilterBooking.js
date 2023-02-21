import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { ListGroup, Card, Container, Col, Row } from 'react-bootstrap';
import './FilterBooking.css';
import axios from 'axios';

function FilterBooking(props) {
  const location = useLocation();
  const navigate = useNavigate();
  //   const book = location.state;
  //   console.log(book);
  const filter = location.state ? location.state.filter : null;
  console.log(filter);

  return (
    <div>
      <Container container>
        <Card className="education_card mx-auto card-shadow rounded">
          {filter.map((f) => {
            return (
              <ListGroup variant="flush" bg-info>
                <ListGroup.Item className="rowcolor">
                  <Row>
                    <Col>
                      <h5 className="text">Order_ID - #{f._id}</h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h5 className="text">Name</h5>
                    </Col>
                    <Col>
                      <h5 className="text">{f.fullName}</h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h5 className="text">Address</h5>
                    </Col>
                    <Col>
                      <h5 className="text">{f.address} </h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h5 className="text">Phone</h5>
                    </Col>
                    <Col>
                      <h5 className="text">{f.phone.toString()}</h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h5 className="text">Car Name</h5>
                    </Col>
                    <Col>
                      <h5 className="text">{f.car.carName}</h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h5 className="text">Segment</h5>
                    </Col>
                    <Col>
                      <h5 className="text">{f.car.segment}</h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h5 className="text">Brand</h5>
                    </Col>
                    <Col>
                      <h5 className="text">{f.car.brand}</h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h5 className="text">Status</h5>
                    </Col>
                    <Col>
                      <h5 className="text">{f.status}</h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h5 className="text">Location</h5>
                    </Col>
                    <Col>
                      <h5 className="text">{f.location}</h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h5 className="text">Date</h5>
                    </Col>
                    <Col>
                      <h5 className="text">{f.date}</h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </Card>
      </Container>
    </div>
  );
}

export default FilterBooking;
