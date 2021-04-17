import React from 'react'
import Logo from "../../assests/images/logo/logo.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img src={Logo} alt="Retechgen">
                
                </img>
                <span>etechgen</span>
            </div>
            <div>
                <Link className="link">Home</Link>
                <Link className="link">About Us</Link>
                <Link className="link">Services</Link>
                <Link className="link">Support</Link>
                <Link className="link">Contact Us</Link>
                <Link className="link">Join Us</Link>
            </div>
        </div>
    )
}

export default Navbar
