import React from "react";
import {
  ContactWrapper,
  ContactTitle,
  ContactInfo,
  SocialIcons,
} from "./style";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactTitle>Contact Us</ContactTitle>

      <ContactInfo>
        <p>
          We’d love to hear from you.<br />
          Whether it’s a query, feedback, or collaboration idea – drop us a message!
        </p>
        <p>📞 055 384 3506</p>
        <p>📍 G Block, IND.Area Al Hyal, Fujairah - U.A.E</p>
        <p>✉️ alwadicarpentry1993@gmail.com</p>
      </ContactInfo>

      <SocialIcons>
        <a
          href="https://instagram.com/alwadicarpentry1993"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/971553843506"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </SocialIcons>
    </ContactWrapper>
  );
};

export default Contact;
