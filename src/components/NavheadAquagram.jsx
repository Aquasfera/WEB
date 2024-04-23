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
  const {actualUser, logout} = useContext(Context);

  return (
        <Navbar expand="lg" className='navbar-dark sticky-top' style={bgcolor} navbar-expand-end="true">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")} >Aquasfera</Navbar.Brand>
          <PersonalMenu/>
          {/* {actualUser ? <Navbar.Brand className='text-white' onClick={logout}>{actualUser.username}</Navbar.Brand> : <Navbar.Brand className='text-white'>Nope</Navbar.Brand>} */}
        </Container>
      </Navbar>
    )
}
export default Navhead;