import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Container, InputGroup, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookCar.css';
import axios from 'axios';

function BookCar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state;
  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [carId, setCarId] = useState(`${car._id}`);
  const [status, setStatus] = useState('Booked');
  const [locations, setLocation] = useState('');
  const [date, setDate] = useState('');

  return (
    <div>
      <Container className="container">
        <Form form rounded form-shadow>
          <InputGroup>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                id="name"
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                placeholder="Full Name"
                required
              />
            </Form.Group>
          </InputGroup>
          <InputGroup>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="name"
                id="address"
                placeholder="Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </Form.Group>
          </InputGroup>
          <InputGroup>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                id="number"
                placeholder="Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
                maxLength={10}
                size="10"
              />
            </Form.Group>
          </InputGroup>
          <InputGroup>
            <Form.Control
              type="name"
              id="name"
              value={carId}
              placeholder="carid"
              hidden
              onChange={(e) => {
                setCarId(e.target.value);
              }}
              required
            />
          </InputGroup>
          <InputGroup>
            {/* <Form.Group className="mb-3" controlId="formBasicPassword"> */}
            {/* <Form.Label>Status</Form.Label> */}
            <Form.Control
              type="text"
              id="text"
              value={status}
              placeholder="status"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              readOnly
              hidden
              required
            />
            {/* </Form.Group> */}
          </InputGroup>
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
                .post(`http://localhost:9000/book/${carId}`, {
                  fullName: fullname,
                  address: address,
                  phone: phone,
                  status: status,
                  location: locations,
                  date: date,
                })
                .then((response) => {
                  console.log(response);
                  const status = response.status;
                  //redirect logic
                  if (status == 200) {
                    navigate('/cars');
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default BookCar;
