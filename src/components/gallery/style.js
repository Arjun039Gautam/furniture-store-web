import styled from "styled-components";

export const GalleryWrapper = styled.div`
  padding: 40px;
  background: #f9f5f0; /* furniture feel ka light beige */
  color: #3e2723; /* dark brown furniture tone */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h1 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5rem;
    color: #5d4037;
  }
`;

export const Category = styled.div`
  margin-bottom: 50px;
`;

export const CategoryTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #4e342e;
  border-bottom: 2px solid #795548;
  display: inline-block;
  padding-bottom: 5px;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;
