import React from 'react'
import logo from "../assets/images/A-Q-U-A-E-S-F-E-R-A_001.svg"
import {Link} from 'react-router-dom'
export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    const footerStyle = {
        backgroundColor: '#273654',
        color: 'white'
    }
    const linkStyle = {
        color: 'white'
    }
  return (
    <footer className='d-flex flex-column text-center p-3' style={footerStyle}>
        
        <div className='d-flex flex-row justify-content-center align-items-center '>
            <img src={logo} alt='logo' className='w-25' />
            <span>© {year} Aquaesfera</span>
        </div>
        <div className='d-flex flex-row justify-content-center'>
        <Link className='text-decoration-none m-2' to='/about-us'style={linkStyle} >Sobre Nosotros</Link>
        <Link className='text-decoration-none m-2' to='/contact' style={linkStyle}>Contacto</Link>
        </div>
        {/* <div className='d-flex flex-row justify-content-center'>

        </div> */}
    </footer>

  )
}
