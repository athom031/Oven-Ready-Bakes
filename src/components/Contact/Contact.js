import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {

    const contactBlurb = `Hey there, welcome to Oven Ready! `
    + `We're not just about baking goodies; we're all about creating heartfelt, homemade yumminess that warms your soul. ` 
    + `At Oven Ready, we're prepared to whip up an array of delectable treats tailored precisely to your preferences. `
    + `From fruity burst muffins to an assortment of cookies and macarons, each treat is crafted with care and love. ` 
    + `Browse our selection, place your order, and experience the joy of receiving a package filled with handcrafted delights. ` 
    + `Our commitment to exceptional customer service ensures a seamless ordering process. If you have any dietary restrictions, special requests, or questions, please reach out to us via email or Instagram. `
    + `Join us on our baking escapades on Instagram and be a part of our sweet story. `
    + `Let's bake up some magic together!`

        return (
        <div className="contact-container">
            <div className="contact-blurb">
                <p>{contactBlurb}</p>
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
