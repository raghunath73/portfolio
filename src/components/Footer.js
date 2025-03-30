import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #1e293b;
  color: #fff;
  text-align: center;

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  a {
    color: #6c63ff;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }

  .social-icons {
    margin-top: 10px;

    a {
      margin: 0 15px;
      font-size: 1.5rem;
      color: #fff;
      
      &:hover {
        color: #6c63ff;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        © 2024 Atla Raghunath Reddy. All Rights Reserved. | Built with{" "}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React
        </a>
      </p>
      <div className="social-icons">
        <a href="https://www.instagram.com/raghunath73_" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/raghunath23" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://x.com/araghunath73" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="mailto:araghunathreddy73@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="tel:+91 9949230233" target="_blank" rel="noopener noreferrer">
          <FaPhone />
        </a>
        <a href="https://www.linkedin.com/in/raghunath73/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/raghunath73" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
