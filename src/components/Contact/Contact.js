import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {

    const [isEmailHovered, setEmailHovered] = useState(false);
    const [isInstagramHovered, setInstagramHovered] = useState(false);

    const contactWelcome = `Hey there, welcome to Oven Ready Bakes!`;
    const contactWelcomeCaption = `Feel free to reach out to us with any questions, dietary needs, or special requests!`;
    const contactBlurb = `We're not just about baking goodies; we're all about creating heartfelt, homemade yumminess that warms your soul. `
    + `At Oven Ready, we're prepared to whip up an array of delectable treats tailored precisely to your preferences. `
    + `From fruity burst muffins to an assortment of cookies and macarons, each treat is crafted with care and love. `
    + `Browse our selection, place your order, and experience the joy of receiving a package filled with handcrafted delights. `
    + `Our commitment to exceptional customer service ensures a seamless ordering process. If you have any dietary needs, special requests, or questions, please reach out to us via email or Instagram. `
    + `Join us on our baking escapades on Instagram and be a part of our sweet story. `
    + `Let's bake up some magic together!`

        return (
        <div className="contact-container">

            <div className="welcome-section">
                <h1>{contactWelcome}</h1>
                <p>{contactWelcomeCaption}</p>
            </div>

            <div className="logo-row">
                <div
                className="logo"
                id="instagram"
                onMouseEnter={() => setInstagramHovered(true)}
                onMouseLeave={() => setInstagramHovered(false)}
                >
                <img
                    src={process.env.PUBLIC_URL + `/assets/navbar-icons/instagram${isInstagramHovered ? '-hover' : ''}-icon.png`}
                    alt="Instagram"
                />
                </div>

                <div
                className="logo"
                id="email"
                onMouseEnter={() => setEmailHovered(true)}
                onMouseLeave={() => setEmailHovered(false)}
                >
                <img
                    src={process.env.PUBLIC_URL + `/assets/navbar-icons/mail${isInstagramHovered ? '-hover' : ''}-icon.png`}
                    alt="Email"
                />
                </div>
            </div>


            <div className="contact-blurb-container">
                <div className="contact-blurb">
                    <div className="text-bubble">
                        <p>{contactBlurb}</p>
                    </div>
                </div>
                <div className = "contact-baked-items">
                    <img
                        src={process.env.PUBLIC_URL + '/assets/contact-media/baked-items.png'}
                        alt="Baked Items"
                        className="contact-baked-items-img"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;
