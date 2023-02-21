import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cars.css';
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  ColProps,
  RowProps,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Cars() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('http://localhost:9000/cars')
      .then((res) => {
        // console.log(res);
        // console.log(res.data.cars);
        setCars(res.data.cars);
        // console.log(cars);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <Container container>
        <Card className="car_card mx-auto card-shadow rounded ">
          <br />

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
                {!token ? (
                  <Button
                    variant="primary"
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
                            navigate('/book', { state: car });
                          }
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    Book
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ width: '100px', marginLeft: '10px' }}
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
                              navigate('/editCar', { state: car });
                            }
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="primary"
                      // value={car._id}
                      type="submit"
                      style={{ width: '100px', marginLeft: '10px' }}
                      onClick={(e) => {
                        e.preventDefault();
                        axios
                          .delete(`http://localhost:9000/cars/${car._id}`)
                          .then((response) => {
                            // console.log(response);

                            console.log(car);
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
                      Delete
                    </Button>
                  </>
                )}
                <hr className="hr" />
                <br />
              </Row>
            );
          })}
        </Card>
        {token ? (
          <Row className="AddButton mt-3 ">
            <Col className="AddButton d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                style={{
                  width: '100px',
                  height: '50px',
                  marginTop: '50rem',
                  marginRight: '82rem',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/Add');
                }}
              >
                Add
              </Button>
            </Col>
          </Row>
        ) : null}
      </Container>
    </div>
  );
}

export default Cars;
