import React, { useState } from 'react';
import '../../styles/componets/common/navbar.css'
import { Link } from 'gatsby';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <div className='nav-img-div'>
          <img
            src='https://images.g2crowd.com/uploads/product/image/small_square/small_square_e5709686bed188b24a2393890265c51f/superops.png'
            alt='logo'
            className='superops-logo'
          />
        </div>
        <span className='superops-logo-word'>Superops</span>
      </div>
      <div className={`nav-navigate ${menuOpen ? 'open' : ''}`}>
        <Link to="/syncroPage" className='navi'>Feature</Link>
        <div className='navi'>Pricing</div>
        <div className='navi'>Resources</div>
        <div className='navi'>Customers</div>
        <div className='navi'>Marketplace</div>
        <div className='nav-button'>
          <button className='bad'>BOOK A DEMO</button>
          <button className='gsff'>GET STARTED FOR FREE</button>
        </div>
      </div>
      <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className={`burger-bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger-bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger-bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
}

export default Navbar;