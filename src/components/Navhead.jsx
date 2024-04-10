import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const bgcolor = {
  backgroundColor: "#0A141F"
}

function Navhead() {
    return (
        <Navbar expand="lg" className='navbar-dark sticky-top' style={bgcolor} navbar-expand-end="true">
        <Container>
          <Navbar.Brand href="#home" >Aquasfera</Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" >Mapa</Nav.Link>
              <Nav.Link href="#link" >Instagram</Nav.Link>
              <Nav.Link href="/animals" >Mediterraneo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navhead;