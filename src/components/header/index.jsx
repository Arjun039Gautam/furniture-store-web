import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./style";

const Header = () => {
  return (
    <Wrapper>
      <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
    </Wrapper>
  );
};

export default Header;
