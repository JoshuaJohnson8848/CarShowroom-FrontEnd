import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Container, InputGroup, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditCar.css';
import axios from 'axios';

function EditCar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state;

  const [carName, setCarName] = useState(`${car.carName}`);
  const [brand, setBrand] = useState(`${car.brand}`);
  const [segment, setSegment] = useState(`${car.segment}`);
  const [carId, setCarId] = useState(`${car._id}`);

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
                value={carName}
                onChange={(e) => {
                  setCarName(e.target.value);
                }}
                placeholder={car.carName}
                required
              />
            </Form.Group>
          </InputGroup>
          <InputGroup>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="name"
                id="address"
                value={brand}
                placeholder={car.brand}
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
                required
              />
            </Form.Group>
          </InputGroup>
          <InputGroup>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Segment</Form.Label>
              <Form.Control
                type="name"
                id="name"
                value={segment}
                placeholder={car.segment}
                onChange={(e) => {
                  setSegment(e.target.value);
                }}
                required
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

          <Button
            variant="primary"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              axios
                .put(`http://localhost:9000/cars/${carId}`, {
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
            Update
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default EditCar;
