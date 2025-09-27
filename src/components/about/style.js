import styled from "styled-components";

// Hero Section
export const AboutSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("background.jpeg")
    no-repeat center/cover;

  @media (max-width: 1024px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 60vh;
    padding: 20px;
  }

  @media (max-width: 480px) {
    height: 50vh;
    padding: 15px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: #fff;
  z-index: 2;
  text-align: center;
  padding: 0 10px;
  font-weight: normal;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

// Content
export const Content = styled.div`
  padding: 60px 20px;
  max-width: 900px;
  margin: auto;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 50px 15px;
  }

  @media (max-width: 768px) {
    padding: 40px 10px;
  }

  @media (max-width: 480px) {
    padding: 30px 8px;
  }
`;

export const Text = styled.p`
  font-size: 1.6rem;
  color: #444;
  line-height: 1.8;
  text-align: justify;
  font-weight: normal;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

// Inspiration Section
export const InspirationSection = styled.section`
  padding: 60px 20px;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 60px;
  text-align: center;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 40px;
  }
`;

// Logo Section
export const LogoSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 20px;
  background: #f8f8f8;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 30px 15px;
  }
`;

export const Logo = styled.div`
  font-size: 1.2rem;
  margin: 15px;
  color: #333;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin: 10px 0;
  }
`;
