import React from 'react';
import logo from '../images/logo.png';
import linkedin from '../images/linkedin.svg';
import twiter from '../images/twitter.svg';
import g from '../images/gplus.svg';
import pin from '../images/pin.svg';

const Nav = () => (
  <div className="nav">
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="navigation">
      <div className="links">
        <ul>
          <li>All Cleaners</li>
          <li>Reserve</li>
          <li>Login</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="icons">
        <img src={twiter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
        <img src={g} alt="google plus" />
        <img src={pin} alt="google plus" />
      </div>
    </div>
  </div>
);

export default Nav;
