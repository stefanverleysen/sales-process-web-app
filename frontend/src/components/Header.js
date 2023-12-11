import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from './SALES-MAPPER_banner.png'; // Import the banner image
import '../App.css'; // This steps out of the components folder into src


function Header() {
  return (
    <header>
      <Link to="/">
        <div className="banner">
          <img src={bannerImage} alt="Sales Mapper Banner" />
        </div>
      </Link>
      <nav>
        {/* Navigation items, if any */}
      </nav>
    </header>
  );
}

export default Header;
