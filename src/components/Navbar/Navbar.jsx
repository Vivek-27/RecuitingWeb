import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="left logo">DREAM</div>
        <div className="mid">
          <ul>
            <li style={{ color: 'black' }}>Discover</li>
            <li>For job seekers</li>
            <li>For companies</li>
          </ul>
        </div>
        <div className="right">
          <button>Log In</button>
          <button className="invertBtn">Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
