import {useGlobalContext} from '../Context';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  // we need to get the location of the button that we hover over, so we can position the submenu - This is a function to get the location of the button that we hover over.
  // we can get the location of the button using getBoundingClientRect() method, which returns the size of an element and its position relative to the viewport. We can use this method to get the center and bottom position of the button, which we can then pass to the open
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, {center, bottom});
  }

  // we want to close the submenu when we hover over any other element that is not a link button, so we can add an event listener to the nav element that listens for mouseover events, and if the target of the event is not a link button, we can close the submenu.
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className='nav-logo' alt="logo" />
          <button className='btn toggle-btn' onClick={openSidebar}><FaBars /></button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>Products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>Developers</button>
          </li>
          <li className="link-btn">
            <button className="link-btn" onMouseOver={displaySubmenu}>Company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
