import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopBarMain.css';
import { useNavigate } from 'react-router-dom';

function TopBarMain() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  return (
    <div>
      <Navbar className="color_nav">
        <Container>
          <Nav className="m-auto">
            <Navbar.Brand
              className="Navtext_color"
              onClick={() => {
                navigate('/cars');
              }}
            >
              Cars
            </Navbar.Brand>
            <Navbar.Brand
              className="Navtext_color"
              onClick={() => {
                navigate('/signup');
              }}
            >
              Signup
            </Navbar.Brand>
            <Navbar.Brand
              className="Navtext_color"
              onClick={() => {
                navigate('/');
              }}
            >
              Login
            </Navbar.Brand>
            <Navbar.Brand
              className="Navtext_color"
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}
            >
              Logout
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBarMain;
