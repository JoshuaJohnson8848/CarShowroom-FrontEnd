import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ListGroup,
  Card,
  Container,
  Col,
  Row,
  Dropdown,
  InputGroup,
  Button,
  Form,
} from 'react-bootstrap';
import './ViewBooking.css';
import axios from 'axios';

function ViewBooking() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [locations, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:9000/book')
      .then((res) => {
        // console.log(res);
        setBookings(res.data.bookings);
        console.log(bookings);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      {!token ? (
        <Navigate to="/" replace />
      ) : (
        <Container container>
          {console.log(filter)}
          <Card className="education_card mx-auto card-shadow rounded">
            {bookings.map((book) => {
              return (
                <ListGroup variant="flush" bg-info>
                  <ListGroup.Item className="rowcolor">
                    <Row>
                      <Col>
                        <h5 className="text">Order_ID - #{book._id}</h5>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <h5 className="text">Name</h5>
                      </Col>
                      <Col>
                        <h5 className="text">{book.fullName}</h5>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <h5 className="text">Address</h5>
                      </Col>
                      <Col>
                        <h5 className="text">{book.address} </h5>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <h5 className="text">Phone</h5>
                      </Col>
                      <Col>
                        <h5 className="text">{book.phone.toString()}</h5>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <h5 className="text">Car Name</h5>
                      </Col>
                      <Col>
                        <h5 className="text">{book.car.carName}</h5>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <h5 className="text">Segment</h5>
                      </Col>
                      <Col>
                        <h5 className="text">{book.car.segment}</h5>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <h5 className="text">Brand</h5>
                      </Col>
                      <Col>
                        <h5 className="text">{book.car.brand}</h5>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <h5 className="text">Status</h5>
                      </Col>
                      <Col>
                        <h5 className="text">{book.status}</h5>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <h5 className="text">Location</h5>
                      </Col>
                      <Col>
                        <h5 className="text">{book.location}</h5>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <h5 className="text">Date</h5>
                      </Col>
                      <Col>
                        <h5 className="text">{book.date}</h5>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              );
            })}
          </Card>
          <Form form rounded form-shadow style={{}}>
            <InputGroup>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  id="text"
                  value={locations}
                  placeholder="Location"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  readOnly
                  required
                />
              </Form.Group>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ height: '36px', marginTop: '33px' }}
                >
                  Select
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={(e) => {
                      setLocation('Aluva');
                    }}
                  >
                    Aluva
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setLocation('Angamaly');
                    }}
                  >
                    Angamaly
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setLocation('Kochi');
                    }}
                  >
                    Kochi
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setLocation('Kothamangalam');
                    }}
                  >
                    Kothamangalam
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setLocation('Muvattupuzha');
                    }}
                  >
                    Muvattupuzha
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setLocation('Kakkanad');
                    }}
                  >
                    Kakkanad
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setLocation('Kolenchery');
                    }}
                  >
                    Kolenchery
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setLocation('Cheranallur');
                    }}
                  >
                    Cheranallur
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setLocation('Maradu');
                    }}
                  >
                    Maradu
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setLocation('Paravur');
                    }}
                  >
                    Paravur
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setLocation('Vyttila');
                    }}
                  >
                    Vyttila
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </InputGroup>
            <InputGroup>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  id="date"
                  value={date}
                  placeholder="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  required
                />
              </Form.Group>
            </InputGroup>
            <Button
              variant="primary"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                axios
                  .post(`http://localhost:9000/book/`, {
                    location: locations,
                    date: date,
                  })
                  .then((response) => {
                    console.log(response.data.bookings);
                    setFilter(response.data.bookings);
                    const status = response.status;
                    //redirect logic
                    if (status == 200) {
                      // navigate('/filter');
                      navigate('/filter', {
                        state: { filter: response.data.bookings },
                      });
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Filter
            </Button>
          </Form>
        </Container>
      )}
    </div>
  );
}

export default ViewBooking;
