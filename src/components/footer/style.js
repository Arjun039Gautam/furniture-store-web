import styled from "styled-components";

const Wrapper = styled.div`
  .footer {
    background: #e6e6e6;
    color: #333;
    font-family: Arial, sans-serif;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px 8%;
    flex-wrap: wrap;
    gap: 90px;
  }

  /* Logo */
  .footer-logo {
    flex: 1 1 180px;
  }

  .footer-logo img {
    height: 200px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .footer-logo img:hover {
    transform: scale(1.1);
  }

  /* Contact */
  .footer-contact {
    flex: 1 1 250px;
    max-width: 300px;
  }

  .footer-contact h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .footer-contact p {
    margin: 10px 0;
    line-height: 1.5;
    font-size: 0.95rem;
    color: #444;
  }

  .footer-contact .email {
    font-weight: bold;
    margin: 15px 0;
  }

  /* Social */
  .footer-social {
    flex: 1 1 150px;
  }

  .footer-social h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .footer-social ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-social li {
    margin: 10px 0;
  }

  .footer-social a {
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
  }

  .footer-social a:hover {
    color: #602e0bff;
    transform: translateX(5px);
  }

  .footer-social a svg {
    transition: transform 0.3s ease;
  }

  .footer-social a:hover svg {
    transform: scale(1.2);
    color: #602e0bff;
  }

  /* Info */
  .footer-info {
    flex: 1 1 150px;
  }

  .footer-info h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .footer-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-info li {
    margin: 10px 0;
  }

  .footer-info a {
    text-decoration: none;
    color: #333;
    position: relative;
    transition: color 0.3s ease;
  }

  .footer-info a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 2px;
    background: #0073e6;
    transition: width 0.3s ease;
  }

  .footer-info a:hover {
    color: #0073e6;
  }

  .footer-info a:hover::after {
    width: 100%;
  }

  /* Bottom */
  .footer-bottom {
    background: #333;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 0.9rem;
  }
  /* Responsive */
  @media (max-width: 900px) {
    .footer-top {
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: 5px;
    }
    .footer-logo img {
      margin-bottom: 20px;
    }
  }
`;

export default Wrapper;
