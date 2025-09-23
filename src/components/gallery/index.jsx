import React from "react";

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <p>Check out our beautiful furniture designs.</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <img src="https://via.placeholder.com/150" alt="Furniture 1" />
        <img src="https://via.placeholder.com/150" alt="Furniture 2" />
        <img src="https://via.placeholder.com/150" alt="Furniture 3" />
      </div>
    </div>
  );
};

export default Gallery;
