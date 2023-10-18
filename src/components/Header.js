import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header-logo">
                <Link to="/"><img src="/images/logo.png" alt="Vencer Innovia Logo" /></Link>
                    <Link to="/"><h1>Vencer Innovia</h1></Link>
                </div>
                <nav className="header-nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/products">Our Products</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Log In</Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;
