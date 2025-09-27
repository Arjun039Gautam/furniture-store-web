import styled from "styled-components";

export const GalleryWrapper = styled.div`
  padding: 40px;
  background: #f9f5f0;
  color: #3e2723;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h1 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5rem;
    color: #5d4037;
    font-weight: normal;
  }

  @media (max-width: 768px) {
    padding: 30px;

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 20px;

    h1 {
      font-size: 1.6rem;
    }
  }
`;

export const Category = styled.div`
  margin-bottom: 50px;

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

export const CategoryTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #4e342e;
  border-bottom: 2px solid #795548;
  display: inline-block;
  padding-bottom: 5px;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 95%;
  max-height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 20px;" : "right: 20px;")}
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  border: none;
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 50%;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const ZoomControls = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;

  button {
    padding: 8px 14px;
    background: #5d4037;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.3s;

    &:hover {
      background: #3e2723;
    }
  }
`;
