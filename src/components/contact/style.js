import styled from "styled-components";

export const ContactWrapper = styled.div`
  min-height: 100vh;
  padding: 5rem 2rem;
  background-color: #f5f0ea;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #4a3f35;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  border-bottom: 2px solid #d2b48c;
  padding-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContactInfo = styled.div`
  max-width: 700px;
  text-align: center;
  margin-bottom: 3rem;

  p {
    font-size: 1.4rem;
    line-height: 1.8;
    margin: 0.6rem 0;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4a3f35;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background: #a67853;
      transform: scale(1.1);
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 768px) {
    gap: 1.2rem;
    a {
      width: 45px;
      height: 45px;
      svg {
        width: 22px;
        height: 22px;
      }
    }
  }

  @media (max-width: 480px) {
    gap: 1rem;
    a {
      width: 40px;
      height: 40px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
