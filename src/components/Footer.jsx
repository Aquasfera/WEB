import React from 'react'
import logo from "../assets/images/A-Q-U-A-E-S-F-E-R-A_001.svg"
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
        <footer class="d-flex flex-wrap justify-content-between align-items-center border-top p-2" style={footerStyle}>
            <p class="col-md-4 mb-0">© {year} Aquaesfera</p>

            <Link to={"/"} class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg class="bi me-2" width="40" height="32" src={logo}></svg>
            </Link>

            <ul class="nav col-md-4 justify-content-end">
                {/* <li class=""><Link to={"/"} class=" px-2 text-decoration-none " style={linkStyle}>Home</Link></li> */}
                <li class=""><Link to={"/animals"} class=" px-2 text-decoration-none " style={linkStyle}>Enciclopedia</Link></li>
                <li class=""><Link to={"/feed"} class=" px-2 text-decoration-none " style={linkStyle}>Instagram</Link></li>
                <li class=""><Link to={"/about-us"} class=" px-2 text-decoration-none " style={linkStyle}>Sobre Nosotros</Link></li>

            </ul>
        </footer>

    )
}
