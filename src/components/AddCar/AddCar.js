import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Container, InputGroup, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddCar.css';
import axios from 'axios';

function AddCar() {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state;

  const [carName, setCarName] = useState('');
  const [brand, setBrand] = useState('');
  const [segment, setSegment] = useState('');
  return (
    <div>
      <Container className="container">
        <Form form rounded form-shadow>
          <InputGroup>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Car Name</Form.Label>
              <Form.Control
                type="name"
                id="name"
                onChange={(e) => {
                  setCarName(e.target.value);
                }}
                placeholder=""
                required
              />
            </Form.Group>
          </InputGroup>
          <InputGroup>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                id="text"
                value={brand}
                placeholder=""
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
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
                    setBrand('Maruti Suzuki');
                  }}
                >
                  Maruti Suzuki
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setBrand('Hyundai');
                  }}
                >
                  Hyundai
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setBrand('Mahindra');
                  }}
                >
                  Mahindra
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setBrand('Tata');
                  }}
                >
                  Tata
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setBrand('Toyota');
                  }}
                >
                  Toyota
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setBrand('Kia');
                  }}
                >
                  Kia
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setBrand('Volkswagen');
                  }}
                >
                  Volkswagen
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setBrand('Renault');
                  }}
                >
                  Renault
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setBrand('Nissan');
                  }}
                >
                  Nissan
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setBrand('Skoda');
                  }}
                >
                  Skoda
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
          <InputGroup>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Segment</Form.Label>
              <Form.Control
                type="name"
                id="name"
                placeholder=""
                onChange={(e) => {
                  setSegment(e.target.value);
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
                .post(`http://localhost:9000/cars`, {
                  carName: carName,
                  segment: segment,
                  brand: brand,
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
            Add Car
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddCar;
