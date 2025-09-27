import React, { useEffect, useState, useCallback } from "react";
import {
  GalleryWrapper,
  Category,
  CategoryTitle,
  GalleryGrid,
  Image,
  ModalOverlay,
  ModalContent,
  ModalImage,
  CloseButton,
} from "./style";

const Gallery = () => {
  const [data, setData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  // Load gallery data
  useEffect(() => {
    fetch("/galleryData.json")
      .then((res) => res.json())
      .then((gallery) => setData(gallery))
      .catch((err) => console.error("Error loading gallery:", err));
  }, []);

  // Open modal
  const handleImageClick = useCallback((cat, idx) => {
    setSelectedCategory(cat);
    setSelectedIndex(idx);
    setZoom(1);
  }, []);

  // Close modal
  const handleClose = useCallback(() => {
    setSelectedCategory(null);
    setSelectedIndex(null);
    setZoom(1);
  }, []);

  // Mouse wheel zoom
  const handleWheel = useCallback(
    (e) => {
      if (selectedCategory !== null && selectedIndex !== null) {
        e.preventDefault();
        if (e.deltaY < 0) setZoom((z) => Math.min(z + 0.1, 3));
        if (e.deltaY > 0) setZoom((z) => Math.max(z - 0.1, 1));
      }
    },
    [selectedCategory, selectedIndex]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  // Click outside modal to close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <GalleryWrapper>
      <h1>Furniture Gallery</h1>
      {data &&
        Object.keys(data).map((cat) => (
          <Category key={cat}>
            <CategoryTitle>{cat.toUpperCase()}</CategoryTitle>
            <GalleryGrid>
              {data[cat].map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`${cat}-${idx}`}
                  onClick={() => handleImageClick(cat, idx)}
                />
              ))}
            </GalleryGrid>
          </Category>
        ))}

      {selectedCategory !== null && selectedIndex !== null && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContent>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
            <ModalImage
              src={data[selectedCategory][selectedIndex]}
              alt="Zoomed"
              style={{ transform: `scale(${zoom})` }}
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </GalleryWrapper>
  );
};

export default Gallery;
