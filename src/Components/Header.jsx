import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoImg from '../images/DesignOnLogo.png';
import './style/header.css';

const Header = () => {
   const [isMobile, setIsMobile] = useState(false);

   const toggleNavbar = () => {
      setIsMobile((prev) => !prev); // Toggle between true and false
   };

   return (
      <nav className="navbar">
         <div className="navbar-brand">
            <NavLink to="/">
               <img src={LogoImg} alt="Luxury Logo" />
            </NavLink>
            <div className="navbar-toggle" onClick={toggleNavbar}>
               {isMobile ? (
                  <FontAwesomeIcon className="close" icon={faXmark} size="2x" />
               ) : (
                  <FontAwesomeIcon className="open" icon={faBars} size="2x" />
               )}
            </div>
            <div className={`navbar-links ${isMobile ? 'mobile-active' : ''}`}>
               <NavLink className="navlink-text" to="/">
                  Home
               </NavLink>
               <NavLink className="navlink-text" to="/whatwedo">
                  What We Do
               </NavLink>
               <NavLink className="navlink-text" to="/services">
                  Services
               </NavLink>
               <NavLink className="navlink-text" to="/contact">
                  Contact Us
               </NavLink>
            </div>
         </div>
      </nav>
   );
};

export default Header;
