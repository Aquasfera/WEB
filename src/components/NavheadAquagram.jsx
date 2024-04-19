import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Context from '../contexts/Context';
import { useContext } from 'react';
const bgcolor = {
  backgroundColor: "#0A141F"
}

function Navhead() {

  const {actualUser} = useContext(Context);

    return (
        <Navbar expand="lg" className='navbar-dark sticky-top' style={bgcolor} navbar-expand-end="true">
        <Container>
          <Navbar.Brand href="/" >Aquasfera</Navbar.Brand>
          {actualUser ? <Navbar.Brand className='text-white'>{actualUser.username}</Navbar.Brand> : <Navbar.Brand className='text-white'>Nope</Navbar.Brand>}
        </Container>
      </Navbar>
    )
}
export default Navhead;