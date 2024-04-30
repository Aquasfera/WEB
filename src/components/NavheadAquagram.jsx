import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import PersonalMenu from '../components/PersonalMenu.jsx';
import { useNavigate } from 'react-router-dom';
import world from '../assets/icons/feed.svg'

const bgcolor = {
  backgroundColor: "#0A141F"
}

function Navhead() {
  
  const navigate = useNavigate()
  
  return (
    <Navbar expand="lg" className='navbar-dark sticky-top pt-1' style={bgcolor} navbar-expand-end="true">
        <Container>
          
          <Navbar.Brand onClick={() => navigate("/")} ><img src={world} style={{width: '20px', marginBottom: '4px', marginRight: '2px'}}/> Aquasfera</Navbar.Brand>
          <PersonalMenu/>
          {/* {actualUser ? <Navbar.Brand className='text-white' onClick={logout}>{actualUser.username}</Navbar.Brand> : <Navbar.Brand className='text-white'>Nope</Navbar.Brand>} */}
        </Container>
      </Navbar>
    )
}
export default Navhead;