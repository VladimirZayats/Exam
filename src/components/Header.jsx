import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
         <img src="./img/Kol.jpg" class="Kol"></img>
        <Container>
          <Navbar.Brand> <Link to={'/'}>"КОЛЯНЫЧ"</Link> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>
              Главная
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">
                    Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>
  
      
    </div>
  )
}

export default Header