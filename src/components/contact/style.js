import styled from "styled-components";

export const ContactWrapper = styled.div`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: #f5f0ea; /* light warm furniture color */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4a3f35; /* dark earthy text */
`;

export const ContactTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  border-bottom: 2px solid #d2b48c; /* furniture style underline */
  padding-bottom: 0.5rem;
`;

export const SocialIcons = styled.div`
   text-decoration: none; 
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  font-size: 1.2rem;
  color: #4a3f35;

  svg:hover {
    color: #a67853; /* hover earthy accent */
    cursor: pointer;
  }
`;

export const ContactInfo = styled.div`
  max-width: 600px;
  text-align: left;
  margin-bottom: 2rem;

  p {
    margin: 0.3rem 0;
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #d2b48c;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #a67853;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #d2b48c;
  border-radius: 8px;
  font-size: 1rem;
  resize: none;
  min-height: 120px;
  outline: none;

  &:focus {
    border-color: #a67853;
  }
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: #a67853;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #875d43;
  }
`;
export const logo = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: #f5f0ea; 
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4a3f35;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;   /* logo size */
    height: 70%;
    background: url("/images/Logo.jpg") no-repeat center center;
    background-size: contain;
    opacity: 0.08;   /* watermark effect */
    transform: translate(-50%, -50%);
    z-index: 0;  /* background me rahe */
  }

  /* text ko upar lane ke liye */
  & > * {
    position: relative;
    z-index: 1;
  }
`;


