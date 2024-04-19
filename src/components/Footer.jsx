import React from 'react'
import logo from "../assets/icons/AquasferaLogo.png"
import { Link } from 'react-router-dom'
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
        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top p-2" style={footerStyle}>
        <p className="col-md-4 mb-0">© {year} Aquaesfera</p>
        <Link to={"/"} className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img className="bi m-2" width="40" height="40" src={logo} alt="Logo"></img>
        </Link>
    
        <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><Link to={"/animals"} className="nav-link px-2 text-decoration-none" style={linkStyle}>Enciclopedia</Link></li>
            <li className="nav-item"><Link to={"/feed"} className="nav-link px-2 text-decoration-none" style={linkStyle}>Instagram</Link></li>
            <li className="nav-item"><Link to={"/aquapedia/about-us"} className="nav-link px-2 text-decoration-none" style={linkStyle}>Sobre Nosotros</Link></li>
        </ul>
    </footer>
    )
}
