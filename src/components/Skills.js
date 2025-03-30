import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;

    .skill-item {
      background: #6c63ff;
      color: #fff;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 1rem;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

// Define the animation variants for the section
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Skills = () => {
  return (
    <motion.div
      id="skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SkillsContainer>
        <h2>Technical Skills</h2>
        <div className="skills-list">
          <div className="skill-item">React</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">HTML & CSS</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">Git & GitHub</div>
          <div className="skill-item">MongoBD</div>
          <div className="skill-item">Java</div>
          <div className="skill-item">Python</div>
          {/* <div className="skill-item"></div> */}
          <div className="skill-item">C</div>

        </div>
      </SkillsContainer>
    </motion.div>
  );
};

export default Skills;
