import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const InternshipsContainer = styled.section`
  padding: 150px 20px;
  text-align: center;
  background-color: #f9fafb;
  min-height: 100vh;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .internships-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .internship-item {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 300px;
      text-align: center;
      
      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        opacity: 0.8;
      }
      a:hover, a:focus, a:active, a:visited {
        color: #fff !important; /* Ensures white color after clicking */
        text-decoration: none; /* Prevents underline */
        outline: none;
      }
      span {
        display: block;
        font-size: 0.9rem;
        color: #6c63ff;
        margin-top: 10px;
        font-weight: bold;
      }

      button {
        margin-top: 15px;
        padding: 10px 15px;
        background-color: #6c63ff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: 0.3s ease-in-out;
      }

      button:hover {
        background-color: #5548c8;
      }
    }
  }
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Internships = () => {
  return (
    <motion.div
      id="internships"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <InternshipsContainer>
        <h2>Internships</h2>
        <div className="internships-list">
          <div className="internship-item">
            <h3>AI-ML Virtual Internship</h3>
            <p>AICTE & EduSkills (June 2021 - August 2021)</p>
            <p>Worked on building responsive user interfaces using React and Material-UI.</p>
            <span>Technologies: React, JavaScript, CSS</span>
            <button><a href="https://drive.google.com/file/d/1-co9ujLWsk51P92mLSP6WD6bQaUbGu3l/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Certificate</a></button>
          </div>
          <div className="internship-item">
            <h3>Data Science Intern</h3>
            <p>Slash Mark (Jan 2022 - May 2022)</p>
            <p>Developed scalable REST APIs and optimized database performance.</p>
            <span>Technologies: Node.js, Express.js, MongoDB</span>
            <button><a href="https://drive.google.com/file/d/1-1reW-2l8N13h2ZbfEghf6Qv4rRT5dMp/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Certificate</a></button>
          </div>
        </div>
      </InternshipsContainer>
    </motion.div>
  );
};

export default Internships;
