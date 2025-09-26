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
      
      <SocialIcons>
       
        
                <a  href="https://instagram.com/alwadicarpentry1993"
                  target="_blank"
                  rel="noopener noreferrer">
                   <FaInstagram />
                </a>

        
        <FaWhatsapp />
       
      </SocialIcons>

      <ContactInfo>
        <p>
          We’d love to hear from you.<br />Whether it’s query, feedback, or collaboration idea – drop us a message!
        </p>
        <p> 📞055 384 3506</p>
        <p> 📍G Block, IND.Area Al Hyal , Fujairah - U.A.E</p>
        
        <p> ✉️ alwadicarpentry1993@gmail.com</p>
      </ContactInfo>

      
    </ContactWrapper>
  );
};

export default Contact;
