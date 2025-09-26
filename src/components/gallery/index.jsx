import React, { useEffect, useState } from "react";
import {
  GalleryWrapper,
  Category,
  CategoryTitle,
  GalleryGrid,
  Image,
} from "./style";

const Gallery = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/galleryData.json")
      .then((res) => res.json())
      .then((gallery) => setData(gallery))
      .catch((err) => console.error("Error loading gallery:", err));
  }, []);

  return (
    <GalleryWrapper>
      <h1>Furniture Gallery</h1>
      {Object.keys(data).map((cat) => (
        <Category key={cat}>
          <CategoryTitle>{cat.toUpperCase()}</CategoryTitle>
          <GalleryGrid>
            {data[cat].map((img, idx) => (
              <Image key={idx} src={img} alt={`${cat}-${idx}`} />
            ))}
          </GalleryGrid>
        </Category>
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;
