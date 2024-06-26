import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import world from '../assets/icons/feed.svg'

const bgcolor = {
  backgroundColor: "#0A141F"
}
const nostyle = {
  textDecoration: "none"
}


function Navhead() {
  const navigate = useNavigate()
  return (
    <Navbar expand="lg" className='navbar-dark sticky-top pt-1' style={bgcolor} navbar-expand-end="true">
      <Container>
        <Link to='/' style={nostyle}><img src={world} style={{width: '20px', marginBottom: '4px', marginRight: '2px'}}/><Navbar.Brand>Aquasfera</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/aquapedia")}  >Mapa</Nav.Link>
            <Nav.Link onClick={() => navigate("/aquagram")} >Aquagram</Nav.Link>
            <Nav.Link onClick={() => navigate("/faq")} >Preguntas Frecuentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navhead;