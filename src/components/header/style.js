import styled from "styled-components";

const Wrapper = styled.header`
  .header {
    display: flex;
    align-items: center;
    justify-content: center; /* Center the container */
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    z-index: 1000;
    /* background: #ffffff; */
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px; /* Adjust this value as needed */
    padding: 10px 50px;
  }

  .logo img {
    height: 60px;
    object-fit: contain;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 40px;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  .nav-links a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: #d4a762;
  }

  .nav-links a.active {
    color: #d4a762;
  }

  .nav-links a::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #d4a762;
    transition: width 0.3s ease;
  }

  .nav-links a:hover::after,
  .nav-links a.active::after {
    width: 100%;
  }
  
  /* Desktop Navigation */
  .desktop-nav {
    display: block;
  }

  /* Mobile Navigation */
  .menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: #333;
    transition: all 0.3s ease;
  }

  .mobile-nav {
    display: none;
    position: fixed;
    top: 90px;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
    padding: 20px 0;
  }

  .nav-links-mobile {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  .nav-links-mobile a {
    color: #333;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    width: 100%;
    padding: 10px;
    text-align: center;
  }

  .nav-links-mobile a:hover {
    background-color: #f0f0f0;
  }

  /* Responsive styles for tablets and mobiles */
  @media (max-width: 900px) {
    .header-content {
      padding: 15px 25px;
    }

    .desktop-nav {
      display: none;
    }

    .menu-toggle {
      display: flex;
    }

    .mobile-nav {
      display: block;
    }
    
    .logo img {
      height: 50px;
    }
  }

  /* Hamburger menu animation */
  .bar.open:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  
  .bar.open:nth-child(2) {
    opacity: 0;
  }
  
  .bar.open:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;

export default Wrapper;