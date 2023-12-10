import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const instagramMessage = [
    `Hey there, welcome to Oven Ready!`,
    `We're not just about baking goodies, we're all about creating heartfelt, homemade yumminess that warms your soul.`,
    `We are on a delightful journey to find exciting pastries, cakes, and treats that'll make your home feel like a cozy hug.`,
    `Every week, we're trying out new recipes, hoping to add something special to our menu.`,
    `Follow our baking escapades on Instagram and be a part of our sweet story.`,
    `Let's bake up some magic together!`
  ]
  const [products, setProducts] = useState([
    {
      title: 'Muffins',
      image: 'muffin',
      description: 'Delicious freshly baked muffins for your morning delight!',
      productClass: 'muffins',
      isHovered: false,
    },
    {
      title: 'Pies',
      image: 'pie',
      description: 'Indulge in our delectable selection of pies for any occasion.',
      productClass: 'pies',
      isHovered: false,
    },
    {
      title: 'Dessert of the Month',
      image: 'mystery-box',
      description: 'Try our special dessert of the month and treat yourself!',
      productClass: 'dessert-of-the-month',
      isHovered: false,
    },
    {
      title: 'Cookies',
      image: 'cookie',
      description: 'Enjoy our freshly baked assortment of cookies for all tastes.',
      productClass: 'cookies',
      isHovered: false,
    },
    {
      title: 'Macarons',
      image: 'macaron',
      description: 'Experience the delicate flavors of our handmade macarons.',
      productClass: 'macarons',
      isHovered: false,
    },
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
    <div>
      <div className="home-container">
        <div className="home-title">
          <h1>Our Goodest Goodies</h1>
        </div>

        <div className="products-container">
          {products.map((product, index) => (
            <Link
              key={index}
              to="/order"
              className={`product-item ${product.productClass}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <h2>{product.title}</h2>
              {product.isHovered ? (
                <img
                  src={process.env.PUBLIC_URL + `/assets/goodies-icons/${product.image}-hover-icon.png`}
                  alt="Hover Icon"
                />
              ) : (
                <img
                  src={process.env.PUBLIC_URL + `/assets/goodies-icons/${product.image}-icon.png`}
                  alt="Regular Icon"
                />
              )}
              <p>{product.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <img
        src={process.env.PUBLIC_URL + '/assets/home-media/chocolate-border.png'}
        alt="Chocolate Border"
        className="chocolate-border"
      />

      <div className="instagram-message-container">
        <div className="text-bubble">
          <div className="text-bubble">
            {instagramMessage.map((line, index) => (
                <React.Fragment key={index}>
                <p>{line}</p>
                {index !== instagramMessage.length - 1 && <br />}
                </React.Fragment>
            ))}
          </div>
        </div>

        <div className="instagram-map">
          <p>Come join the journey!</p>
          <a href="https://www.instagram.com/ovenreadybakes/" target="_blank" rel="noopener noreferrer">
            <img
            src={process.env.PUBLIC_URL + '/assets/home-media/instagram-map.png'}
            alt="Instagram Link"
            className="instagram-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
