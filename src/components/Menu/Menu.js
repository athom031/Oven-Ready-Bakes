import React from 'react';
import './Menu.css';

function Menu() {
  const MENU_PDF = '/assets/menu-media/oven-ready-bakes-menu.pdf';
  const MENU_PNG_PAGE_ONE = '/assets/menu-media/oven-ready-bakes-menu-page-1.png';
  const MENU_PNG_PAGE_TWO = '/assets/menu-media/oven-ready-bakes-menu-page-2.png';

  return (
    <div className="menu-container">
      <div className="pdf-download-box">
        <h1>Menu</h1>
        <a href={MENU_PDF} download className="download-link">Download PDF</a>
      </div>
      <img src={MENU_PNG_PAGE_ONE} alt="Menu page 1" className="menu-image" />
      <img src={MENU_PNG_PAGE_TWO} alt="Menu page 2" className="menu-image" />
    </div>
  );
}

export default Menu;
