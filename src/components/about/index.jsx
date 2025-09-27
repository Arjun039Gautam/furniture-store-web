import React from "react";
import {
  AboutSection,
  Overlay,
  Title,
  Content,
  Text,
  InspirationSection,
  SectionTitle,
  LogoSection,
  Logo
} from "./style";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <AboutSection>
        <Overlay />
        <Title>
          About Us
          <br />
          "Your comfort is our priority. We design spaces for joyful living"
        </Title>
      </AboutSection>

      {/* Content */}
      <Content>
        <Text>
          At Al Wadi Carpentry Workshop LLC, we believe that every piece of
          furniture tells a story. Since 1993, our workshop has been dedicated to
          crafting high-quality, custom-made furniture that blends tradition,
          durability, and modern design.
          <br />
          With over three decades of experience, we specialize in:
          <br />- Bespoke furniture tailored to your lifestyle and space.
          <br />- Elegant wooden interiors that reflect warmth and comfort.
          <br />- Durable, handcrafted pieces built to last for generations.
          <br />
          Our motto, “Better Home, Better Living”, reflects our passion for
          turning houses into homes with timeless furniture. Whether it’s classic
          designs or contemporary trends, our skilled craftsmen bring your vision
          to life with precision and care. We don’t just make furniture—we create
          experiences that add comfort, style, and value to your living spaces.
        </Text>
      </Content>

      {/* Inspiration Section */}
      <InspirationSection>
        <SectionTitle>Our Key Features</SectionTitle>
        <Text>
          <br />• Custom-Made Designs – Furniture tailored to your taste and space.
          <br />• Premium Craftsmanship – Handcrafted with precision and care.
          <br />• Durable Materials – Built to last for generations.
          <br />• Elegant Interiors – Blending tradition with modern style.
          <br />• Affordable Luxury – High quality at the right price.
        </Text>
      </InspirationSection>

      {/* Logo Section */}
      <LogoSection>
        <Logo>Chairs</Logo>
        <Logo>Stairs</Logo>
        <Logo>Almiras</Logo>
        <Logo>Curtains</Logo>
        <Logo>Wooden Doors</Logo>
      </LogoSection>
    </>
  );
};

export default About;
