import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Context from '../contexts/Context';
import { useContext, useEffect } from 'react';
import PersonalMenu from '../components/PersonalMenu.jsx';
import { useNavigate } from 'react-router-dom';

const bgcolor = {
  backgroundColor: "#0A141F"
}

function Navhead() {
  
  const navigate = useNavigate()
  
  return (
        <Navbar expand="lg" className='navbar-dark sticky-top' style={bgcolor} navbar-expand-end="true">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")} >Aquasfera</Navbar.Brand>
          <PersonalMenu/>
        </Container>
      </Navbar>
    )
}
export default Navhead;