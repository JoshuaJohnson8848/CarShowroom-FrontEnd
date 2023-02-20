import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, InputGroup } from 'react-bootstrap';
import './Signup.css';
import axios from 'axios';

function Signup() {
  event.preventDefault();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
                  setName(e.target.value);
                }}
                placeholder="Full Name"
              />
            </Form.Group>
          </InputGroup>
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
                .post('http://localhost:9000/signup', {
                  name: name,
                  email: email,
                  password: pass,
                })
                .then((response) => {
                  console.log(response);
                  const status = response.status;
                  //redirect logic
                  if (status == 200) {
                    navigate('/');
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

export default Signup;
