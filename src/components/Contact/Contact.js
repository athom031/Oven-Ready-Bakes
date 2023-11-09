import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-blurb">
                <p>Welcome to Oven Ready Bakes! We are passionate about bringing homemade goodness to your table. Our mission is to create delightful treats that warm your home and your heart.</p>
            </div>
            <div className="contact-email">
                <p>If you have any questions or inquiries, please feel free to reach out to us at <a href="mailto:info@ovenreadybakes.com">info@ovenreadybakes.com</a>.</p>
            </div>
            <div className="contact-instagram">
                <p>Check out our latest baking adventures on <Link to="https://www.instagram.com/ovenreadybakes/">Instagram</Link>.</p>
            </div>
        </div>
    );
}

export default Contact;
