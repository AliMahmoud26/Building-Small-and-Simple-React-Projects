import React from 'react';
import {useGlobalContext} from '../context/Context';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [openSidebar, openSubmenu, closeSubmenu] = useGlobalContext();
  const displaySubmenu = (e) => {}

  return (
    <nav className='nav'>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className='nav-logo' alt="logo" />
          <button className='btn toggle-btn' onClick={openSidebar}><FaBars /></button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn">Products</button>
          </li>
          <li>
            <button className="link-btn">Developers</button>
          </li>
          <li className="link-btn">Company</li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
