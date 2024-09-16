import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item"><Link to="/">Home</Link></li>
                <li className="navbar-item"><Link to="/contact">Contact</Link></li>
                <li className="navbar-item"><Link to="/gallery">Gallery</Link></li>
                {/* <li className="navbar-item"><Link to="/gallery">About Us</Link></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
