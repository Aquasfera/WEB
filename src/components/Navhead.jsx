import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const bgcolor = {
  backgroundColor: "transparent",
}

function Navhead() {
    return (
        <Navbar expand="lg" className='navbar-dark' style={bgcolor}>
        <Container>
          <Navbar.Brand href="#home" >Aquasfera</Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" >Mapa</Nav.Link>
              <Nav.Link href="#link" >Instagram</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navhead;