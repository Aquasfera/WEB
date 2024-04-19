import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../contexts/Context';
import { useContext, useEffect } from 'react';

const bgcolor = {
  backgroundColor: "#0A141F"
}

function Navhead() {
  
  const {actualUser, setActualUser} = useContext(Context);
  const navigate = useNavigate();

  const logout = () => {
      console.log("Logout intento")
      fetch('http://192.168.1.244:3000/api/logout', {method: 'POST', credentials: 'include'})
      .then(resp => resp.json())
      .then(data => {
              console.log(data);})
      .catch(err => Cookies.remove('tokenCookie'))
      setActualUser(null)
          
      console.log("Logout hecho")
      navigate('/login')
  }

  return (
        <Navbar expand="lg" className='navbar-dark sticky-top' style={bgcolor} navbar-expand-end="true">
        <Container>
          <Navbar.Brand href="/" >Aquasfera</Navbar.Brand>
          {actualUser ? <Navbar.Brand className='text-white' onClick={logout}>{actualUser.username}</Navbar.Brand> : <Navbar.Brand className='text-white'>Nope</Navbar.Brand>}
        </Container>
      </Navbar>
    )
}
export default Navhead;