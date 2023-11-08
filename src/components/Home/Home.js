// Home.js
import React from 'react';
import './Home.css';
import { InstagramEmbed } from 'react-social-media-embed';

function Home() {
    return (
        <div className="home-container">
            <div className="intro-container">
                <div className="intro-text">
                    <p>
                        Browse our mouthwatering selection, place your order, and experience the joy of receiving a package filled with handcrafted delights. Our commitment to exceptional customer service ensures a seamless ordering process, making it as easy as a warm, buttery bite of our coffee cake.
                    </p>
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
            <a href="https://www.instagram.com/ovenreadybakes/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={process.env.PUBLIC_URL + '/assets/instagram-map.png'}
                        alt="Instagram"
                        className="instagram"
                    />
                </a>
        </div>
    );
}

export default Home;
