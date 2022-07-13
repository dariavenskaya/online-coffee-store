import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';


function NavBar() {
  return (
    <>
    <div className="shadow"></div>
    <div className="navbar">
      <ul className="navlinks">
      <Link to='/'><li className="menu-item home">HOME</li></Link>
      <Link to='/shop'><li className="menu-item shop">SHOP</li></Link>
      {/* <Link to='/about'> */}
          <li className="menu-item about-us">ABOUT US</li>
          {/* </Link> */}

      </ul>
      <div className="actions">
      <div className="search">
          <input type="text" placeholder='find your coffee'/>
          <button className='search-btn' type='submit'>
              <img src="search.svg" alt="search button" />
          </button>
      </div>
      {/* <Link to='/cart'> */}
          <div className="cart">
      <img width={36} height={36} src="cart.svg" alt="shopping cart"/> 
      <span>0</span>  
      </div>
      {/* </Link> */}

      </div>
    </div>
    </>

  );
}

export default NavBar;
