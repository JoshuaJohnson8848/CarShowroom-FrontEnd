import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cars.css';
import { Container, Button, Card, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Cars() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({});
  useEffect(() => {
    axios
      .get('http://localhost:9000/cars')
      .then((res) => {
        console.log(res);
        console.log(res.data.cars);
        setCars(res.data.cars);
        console.log(cars);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <Container container>
        <Card className="car_card mx-auto card-shadow rounded ">
          {cars.map((car) => {
            return (
              <Row className="car-attr">
                <Row className="car-attr">
                  <h5>{car.carName}</h5>
                </Row>
                <Row>
                  <h5>{car.segment}</h5>
                </Row>
                <Row>
                  <h5>{car.brand}</h5>
                </Row>
                <Button
                  variant="primary"
                  // value={car._id}
                  type="submit"
                  style={{ width: '100px' }}
                  onClick={(e) => {
                    e.preventDefault();
                    axios
                      .get(`http://localhost:9000/cars/${car._id}`)
                      .then((response) => {
                        // console.log(response);
                        setCar(response.data.car);
                        console.log(car);
                        const status = response.status;
                        //redirect logic
                        if (status == 200) {
                          navigate('/book', { car: car });
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  Book
                </Button>
                <hr className="hr" />
                <br />
              </Row>
            );
          })}
        </Card>
      </Container>
    </div>
  );
}

export default Cars;
