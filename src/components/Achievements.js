
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
const AchievementsContainer = styled.section`
  padding: 150px 20px;
  text-align: center;
  background-color: #f9fafb;
  min-height: 100vh;
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .achievements-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .achievement-item {
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
    }
  }
`;
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Achievements = () => {
  return (
    <motion.div
    id="achievements"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <AchievementsContainer id="achievements">
      <h2>Achievements</h2>
      <div className="achievements-list">
        <div className="achievement-item">
          <h3>Prathibha Award</h3>
          <p>Award of excellence in mandal wise SSC grades by Govt. of Andhra Pradesh (2019).</p>
        </div>
        <div className="achievement-item">
          <h3>Chess RunnerUp</h3>
          <p>Narayana Junior College campus chess championship runner-up (2020).</p>
        </div>
        <div className="achievement-item">
          <h3>Essay Writing RunnerUp</h3>
          <p>Secured second place in Essay Writing competetion held by Election Council of India (2017).</p>
        </div>
      </div>
    </AchievementsContainer>
    </motion.div>
  );
};

export default Achievements;
