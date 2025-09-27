import React from "react";
import Wrapper from "./style";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="footer-top">
          {/* Logo */}
          <div className="footer-logo">
            <img
              src="\images\logo-alwadi-bg.png"
              alt="Al Wadi Carpentry Logo"
            />
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              We specialize in crafting doors, windows, kitchens, staircases,
              wardrobes, pergolas, and all kinds of wooden carpentry, WPC,
              fiber, aluminium, and glass work.
            </p>
            <p className="email">📧 alwadicarpentry1993@gmail.com</p>
            <p className="phone">📞 +971 50 789 6618</p>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a
                  href="https://instagram.com/alwadicarpentry1993"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971507896618"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Info Links */}
          <div className="footer-info">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="footer-bottom">
          <p><FaLocationDot/> G Block, Ind. Area Al Hyal, Fujairah - U.A.E</p>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
