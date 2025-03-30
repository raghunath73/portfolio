import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

// Styling for the container and experience items
const ExperienceContainer = styled.section`
  padding: 150px 20px;
  background-color: #fff;
  text-align: center;
  min-height: 100vh;
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .experience-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .experience-item {
      background: #f9fafb;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 300px;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        opacity: 0.8;
      }

      // Style for the logos
      .club-logo {
        width: 50px;
        height: 50px;
        object-fit: cover;
        margin-bottom: 10px;
      }
    }
  }
`;
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const Experience = () => {
  return (
    <motion.div
    id="experience"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <ExperienceContainer id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          {/* Club Logo */}
          <img className="club-logo" src="/assets/unstop.jpg" alt="Unstop Logo" />
          <h3>STUDENT EXECUTIVE</h3>
          <p><b>Club : </b>Unstop </p>
          <p>Duration : (2024 - present) </p>
          <p>Developed user-friendly interfaces for web applications.</p>
        </div>
        <div className="experience-item">
          {/* Club Logo */}
          <img className="club-logo" src="D:\RAGHUNATH\All Projects\advanced-portfolio\src\assets\gdsc.png" alt="Google Developers Club Logo" />
          <h3>Co-Lead</h3>
          <p>Google Developers Student Club</p>
          <p>Duration :  (2021 - 2022)</p>
          <p>Been part of events like HTML, CSS, Android Compose, Cloud Boost</p>
        </div>
        <div className="experience-item">
          {/* Club Logo */}
          <img className="club-logo" src="" alt="Igniters Club Logo" />
          <h3>Volunteer</h3>
          <p><b>Club : </b>Igniters</p>
          <p>Duration : (2021 - 2022)</p>
          <p>Helped in volunteering events like pyshop, code hackathon, Kreative 2k23</p>
        </div>
      </div>
    </ExperienceContainer>
    </motion.div>
  );
};

export default Experience;
