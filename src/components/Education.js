import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const EducationContainer = styled.section`
  padding: 150px 20px;
  text-align: center;
  background-color: #f3f4f6;
  min-height: 100vh;
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .education-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .education-item {
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
    }
  }
`;
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const Education = () => {
  return (
    <motion.div
    id="education"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <EducationContainer id="education">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>Graduation</h3>
          <h4>G Pulla Reddy Engineering College</h4>
          <p>Duration : (2020 - 2025)</p>
          <p>Major: Computer Science and Engineering</p>
          <p>CGPA : 7.92</p>
        </div>
        <div className="education-item">
          <h3>Intermediate</h3>
          <h4>Narayana Junior College</h4>
          <p>Duration : (2018 - 2020)</p>
          <p>Major: MPC</p>
          <p>CGPA : 9.88(957/1000)</p>
        </div>
        <div className="education-item">
          <h3>SSC</h3>
          <h4>Jyothi High School</h4>
          <p>Duration : (2017 - 2018)</p>
          <p>Major: Science</p>
          <p>GPA : 9.8 </p>
        </div>
      </div>
    </EducationContainer>
    </motion.div>
  );
};

export default Education;
