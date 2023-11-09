import React, { useState } from 'react';
import './Home.css';
import { InstagramEmbed } from 'react-social-media-embed';
import { Link } from 'react-router-dom';

function Home() {
    const [products, setProducts] = useState([
        {
            title: 'Muffins',
            image: 'muffin',
            description: 'Delicious freshly baked muffins for your morning delight!',
            colorClass: 'muffins',
            isHovered: false
        },
        {
            title: 'Pies',
            image: 'pie',
            description: 'Indulge in our delectable selection of pies for any occasion.',
            colorClass: 'pies',
            isHovered: false
        },
        {
            title: 'Dessert of the Month',
            image: 'mystery-box',
            description: 'Try our special dessert of the month and treat yourself!',
            colorClass: 'dessert-of-the-month',
            isHovered: false
        },
        {
            title: 'Cookies',
            image: 'cookie',
            description: 'Enjoy our freshly baked assortment of cookies for all tastes.',
            colorClass: 'cookies',
            isHovered: false
        },
        {
            title: 'Macaroons',
            image: 'macaroon',
            description: 'Experience the delicate flavors of our handmade macaroons.',
            colorClass: 'macaroons',
            isHovered: false
        }
    ]);

    const handleMouseEnter = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].isHovered = true;
        setProducts(updatedProducts);
    };

    const handleMouseLeave = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].isHovered = false;
        setProducts(updatedProducts);
    };

    return (
        <div className="home-container">
            <div className="home-title">
                <h1>Our Goodest Goodies</h1>
            </div>

            <div className="products-container">
                {products.map((product, index) => (
                    <Link key={index} to="/order" className={`product-item ${product.colorClass}`}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={() => handleMouseLeave(index)}>
                        <h2>{product.title}</h2>
                        {product.isHovered ? (
                            <img src={process.env.PUBLIC_URL + `/assets/goodies-icons/${product.image}-hover-icon.png`} alt="Hover Icon" />
                        ) : (
                            <img src={process.env.PUBLIC_URL + `/assets/goodies-icons/${product.image}-icon.png`} alt="Regular Icon" />
                        )}
                        <p>{product.description}</p>
                    </Link>
                ))}
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
