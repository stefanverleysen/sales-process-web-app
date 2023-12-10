import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>        {/* Use Link component */}
          <li><Link to="/signup">Sign Up</Link></li> {/* Use Link component */}
          <li><Link to="/login">Login</Link></li>    {/* Use Link component */}
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
