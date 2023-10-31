// Home.js
import React from 'react';
import './Home.css';
import { InstagramEmbed } from 'react-social-media-embed';

function Home() {
    return (
        <div className="home-container">
            <div className="intro-container">
                <div className="logo-container">
                    <img src={process.env.PUBLIC_URL + '/assets/logo-transparent.png'} alt="Logo" className="logo" />
                </div>
                <div className="intro-text">
                    <h2>Welcome to [Bakery Name]!</h2>
                    <p>Short introductory text about the bakery and what makes it special.</p>
                </div>
            </div>

            <div className="summary-container">
                <h3>Main Items</h3>
                <p>Include descriptions of the main baked goods here.</p>
            </div>

            <div className="social-media-container">
                <div className="social-media-text">
                    <h3>Come Follow My Baking Adventure</h3>
                    <p>Description of the weekly Instagram posts and the bakery's journey.</p>
                </div>
                <div className="instagram-embed">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/reel/CugSmsosGPp/" maxWidth={400} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
