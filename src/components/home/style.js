import styled, { keyframes } from "styled-components";

// Keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;

  /* Hero Section */
  .hero {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    padding: 0 5%;
    overflow: hidden;
    background-image: url("/images/IMG_3466.JPG");
    background-size: cover;
    background-position: center;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
    backdrop-filter: blur(1px);
  }

  .hero-content {
    position: relative;
    z-index: 2;
    color: #fff;
    max-width: 800px;
  }

  .hero-content h1 {
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .hero-content .subtitle {
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 2px;
    margin-bottom: 5px;
  }

  .hero-content .description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .hero-buttons a{
    text-decoration: none;
  }
  .btn-primary,
  .btn-secondary {
    padding: 12px 25px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  .btn-primary {
    background-color: #d4a762;
    color: #fff;
    border: 2px solid #d4a762;
  }

  .btn-secondary {
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
  }

  .btn-primary:hover,
  .btn-secondary:hover {
    transform: scale(1.05);
  }

  /* Responsive Hero */
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 3rem;
    }
    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }
  }

  /* --- Other Sections --- */

  section {
    padding: 80px 5%;
    text-align: center;
    overflow: hidden;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 50px;
    color: #333;
    font-weight: 700;
  }

  /* New Collection */
  .new-collection h2 {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .collection-grid {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .collection-grid img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
  }

  /* Feature Section */
  .feature {
    background-color: #f6f3ef;
  }

  .feature-content-wrapper {
    display: flex;
    align-items: center;
    gap: 50px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .feature-text {
    flex: 1;
    padding-right: 50px;
    text-align: left;
  }

  .feature-text h2 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .feature-text p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    max-width: 450px;
  }

  .feature-image {
    flex: 1;
    position: relative;
  }

  .feature-image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
  }

  @media (max-width: 900px) {
    .feature-content-wrapper {
      flex-direction: column;
      text-align: center;
    }
    .feature-text {
      padding-right: 0;
      text-align: center;
    }
    .feature-text h2, .feature-text p {
      text-align: center;
    }
  }

  /* How it Works */
  .steps {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
  }

  .step {
    flex: 1 1 220px;
    padding: 30px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .step:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  /* Gallery Section */
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #d4a762;
  }

  .swiper-pagination-bullet-active {
    background-color: #d4a762;
  }

  /* Blog Section */
  .blog-grid {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .blog-card {
    max-width: 400px;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    transition: transform 0.3s ease;
  }

  .blog-card:hover {
    transform: translateY(-10px);
  }

  .blog-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .blog-card h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: #333;
  }

  .blog-card p {
    font-size: 1rem;
    color: #666;
  }
`;

export default Wrapper;