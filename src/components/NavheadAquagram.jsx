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
          <Navbar.Brand href="/" >Aquasfera</Navbar.Brand>
        </Container>
      </Navbar>
    )
}
export default Navhead;