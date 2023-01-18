import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import Reservation from './Reservations';
import logo from '../images/bmw.jpeg';
import linkedin from '../images/linkedin.svg';
import twiter from '../images/twitter.svg';
import g from '../images/gplus.svg';
import pin from '../images/pin.svg';
import Authentication from './Authentication';
import Addcleaner from './Addcleaner';

const Nav = () => (
  <div className="allnav">
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation">
        <div className="links">
          <ul>
            <NavLink className="link" to="/home">
              home
            </NavLink>
            <NavLink className="link" to="/Reservation">
              reserve
            </NavLink>
            <NavLink className="link" to="/Addcleaner">
              Add cleaner
            </NavLink>
            <li className="link">
              <Authentication />
            </li>
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
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/addcleaner" element={<Addcleaner />} />
    </Routes>
  </div>
);

export default Nav;
