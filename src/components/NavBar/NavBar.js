import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [isLogoHovered, setLogoHovered] = useState(false);
    const [isInstagramHovered, setInstagramHovered] = useState(false);

    const handleLogoMouseEnter = () => {
        setLogoHovered(true);
    };

    const handleLogoMouseLeave = () => {
        setLogoHovered(false);
    };

    const handleInstagramMouseEnter = () => {
        setInstagramHovered(true);
    };

    const handleInstagramMouseLeave = () => {
        setInstagramHovered(false);
    };

    return (
        <div>
            <nav>
                <Link to="/home">
                    {isLogoHovered ? (
                        <img
                            src={process.env.PUBLIC_URL + '/assets/navbar-icons/logo-hover-icon.svg'}
                            alt="Logo"
                            className="logo"
                            onMouseEnter={handleLogoMouseEnter}
                            onMouseLeave={handleLogoMouseLeave}
                        />
                    ) : (
                        <img
                            src={process.env.PUBLIC_URL + '/assets/navbar-icons/logo-icon.svg'}
                            alt="Logo"
                            className="logo"
                            onMouseEnter={handleLogoMouseEnter}
                            onMouseLeave={handleLogoMouseLeave}
                        />
                    )}
                </Link>
                <Link to="/menu">Menu</Link>
                <Link to="/order">Order</Link>
                <Link to="/contact">Contact</Link>
                {/* <Link to="/about">About</Link> */}
                <a
                    href="https://www.instagram.com/ovenreadybakes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={handleInstagramMouseEnter}
                    onMouseLeave={handleInstagramMouseLeave}
                >
                    {isInstagramHovered ? (
                        <img
                            src={process.env.PUBLIC_URL + '/assets/navbar-icons/instagram-hover-icon.png'}
                            alt="Instagram"
                            className="instagram"
                        />
                    ) : (
                        <img
                            src={process.env.PUBLIC_URL + '/assets/navbar-icons/instagram-icon.png'}
                            alt="Instagram"
                            className="instagram"
                        />
                    )}
                </a>
            </nav>
        </div>
    );
}

export default NavBar;
