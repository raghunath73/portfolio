import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import heroImage from "../assets/hero-image.svg"; // Replace with your image
import { Link } from "react-scroll";

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
  background: linear-gradient(135deg, #6c63ff, #ff6584);
  color: #fff;
  text-align: center;
  overflow: hidden;

  .hero-content {
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .text {
      flex: 1;
      margin: 20px;
      h1 {
        font-size: 3rem;
        line-height: 1.2;
        margin: 10px 0;
      }
      p {
        font-size: 1.2rem;
        margin: 20px 0;
        opacity: 0.8;
      }
      .cta-buttons {
        display: flex;
        gap: 15px;

        button {
          background-color: #fff;
          color: #6c63ff;
          padding: 12px 20px;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;

          &:hover {
            background-color: #ff6584;
            color: #fff;
            transform: translateY(-3px);
          }
        }
      }
    }

    .image {
      flex: 1;
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        height: auto;
        transform: scale(1);
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Text Section */}
        <motion.div
          className="text"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        >
          <h1>
            Hi, I'm <span style={{ color: "#ff6584" }}>Raghunath</span>
          </h1>
          <p>
            A passionate <strong>Computer Science student</strong> who always love to explore new technologies in the industry
            and have knowlwdge in topisc like Deep Learning, Machine Learning, AI, Web Development, DSA, and core computer science 
            subjects. I looking for oppurtunities to endure my skills. Lets Explore my portfolio.
          </p>
          <div className="cta-buttons">
            <button>View My Work</button>
            <button><Link to="contact" smooth duration={500}>Contact Me</Link></button>
          </div>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          className="image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={heroImage} alt="Hero Illustration" />
        </motion.div>
      </motion.div>
    </HomeContainer>
  );
};

export default Home;
