import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  padding: 150px 20px;
  background-color: #f3f4f6;
  text-align: center;
  min-height: 100vh;
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .projects-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .project-item {
      background: #fff;
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

      a {
        display: inline-block;
        margin-top: 10px;
        color: #6c63ff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const Projects = () => {
  return (
    <motion.div
    id="internships"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Portfolio Website</h3>
          <p>Built a personal portfolio website using React and styled-components.</p>
          <a href="https://github.com/raghunath73/portfolio" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <div className="project-item">
          <h3>Expense Tracker</h3>
          <p>An application to track daily expenses with visualization tools.</p>
          <a href="https://github.com/raghunath73/expense_tracker" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <div className="project-item">
          <h3>Agriland</h3>
          <p>A website that helps farmer using different features.</p>
          <a href="https://github.com/raghunath73/Agriland" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <div className="project-item">
          <h3>Work Tracker</h3>
          <p>A website that helps to track backlogs</p>
          <a href="https://github.com/raghunath73/worktracker" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        <div className="project-item">
          <h3>Code Tracker</h3>
          <p>A website that helps to track different coding websites</p>
          <a href="https://github.com/raghunath73/CodeTracker" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>

      </div>
    </ProjectsContainer>
    </motion.div>
  );
};

export default Projects;
