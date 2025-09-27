import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "./style";
import { useSpring, animated } from "@react-spring/web";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation for the mobile menu
  const menuAnimation = useSpring({
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
    opacity: isOpen ? 1 : 0,
    config: { duration: 300 }
  });

  return (
    <Wrapper>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <NavLink to="/">
              <img src='\images\furniture-logo.jpg' alt="Al Wadi Carpentry Logo" />
            </NavLink>
          </div>
          
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <div className={`bar ${isOpen ? 'open' : ''}`} />
            <div className={`bar ${isOpen ? 'open' : ''}`} />
            <div className={`bar ${isOpen ? 'open' : ''}`} />
          </div>

          <nav className="desktop-nav">
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <animated.nav style={menuAnimation} className="mobile-nav">
        <ul className="nav-links-mobile">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </animated.nav>
    </Wrapper>
  );
};

export default Header;