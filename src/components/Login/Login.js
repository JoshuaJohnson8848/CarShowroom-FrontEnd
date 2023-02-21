import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import axios from 'axios';

function Login() {
  event.preventDefault();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div>
      <Container className="container">
        <Form form rounded form-shadow>
          <InputGroup>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
            </Form.Group>
          </InputGroup>
          <InputGroup>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                placeholder="Password"
              />
            </Form.Group>
          </InputGroup>
          <Button
            variant="primary"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              axios
                .post('http://localhost:9000/login', {
                  email: email,
                  password: pass,
                })
                .then((response) => {
                  console.log(response);
                  const status = response.status;
                  const token = response.token;
                  localStorage.setItem('token', token);
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

export default Login;
