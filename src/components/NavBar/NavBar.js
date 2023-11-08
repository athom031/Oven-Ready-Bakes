import './NavBar.css';
import { Link } from 'react-router-dom';
import React from 'react';

function NavBar() {
  return (
    <div>
        <nav>
            <Link to="/home">
                <img
                    src={process.env.PUBLIC_URL + '/assets/logo-transparent.svg'}
                    alt="Logo"
                    className="logo"
                />
            </Link>
            <Link to="/menu">Menu</Link>
            <Link to="/order">Order</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <a href="https://www.instagram.com/ovenreadybakes/" target="_blank" rel="noopener noreferrer">
                <img
                    src={process.env.PUBLIC_URL + '/assets/instagram-transparent.png'}
                    alt="Instagram"
                    className="instagram"
                />
            </a>
        </nav>
    </div>
  );
}

export default NavBar;
