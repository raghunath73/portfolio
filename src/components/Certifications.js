import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const CertificationsContainer = styled.section`
  padding: 150px 20px;
  text-align: center;
  background-color: #f3f4f6;
  min-height: 100vh;
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .certifications-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .certification-item {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 300px;

      h3 {
        font-size: 1.2rem;
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
const Certifications = () => {
  return (
    <motion.div
    id="certifications"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <CertificationsContainer id="certifications">
      <h2>Certifications</h2>
      <div className="certifications-list">
        <div className="certification-item">
          <h3>Deep Lerning</h3>
          <p>Issued by NPTEL</p>
          <a href="https://drive.google.com/file/d/1S3c5e1r7aoJKNq3uco8mCcLmLZuQoXas/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
        <div className="certification-item">
          <h3>MTA Java Foundations</h3>
          <p>Issued by Microsoft</p>
          <a href="https://drive.google.com/file/d/1SNvs63ANBfLcjZv0tidW-mQMHnWeHTgl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
        <div className="certification-item">
          <h3>Python </h3>
          <p>Issued by HackerRank</p>
          <a href="https://drive.google.com/file/d/1Ay-Hyl7jvZPEX76rNIrhgXZGst7g3lzi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
        <div className="certification-item">
          <h3>Communication Skills</h3>
          <p>Issued by TCSIiON</p>
          <a href="https://drive.google.com/file/d/1lPMpnYvlnqrpi7wSSKbadL0kephW3vJ-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
        <div className="certification-item">
          <h3>Advanced DSA</h3>
          <p>Issued by Unstop</p>
          <a href="https://drive.google.com/file/d/1S0q6SFXOm9Pcm97YoDrwT-sUo5h2l8oN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
        <div className="certification-item">
          <h3>Tech A Git Foundations</h3>
          <p>Issued by Infosys Springborad</p>
          <a href="https://drive.google.com/file/d/13tyC82YyVSX9xn9JDetnEAUcW1JjiM0D/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
        
      </div>
    </CertificationsContainer>
  </motion.div>
  );
};

export default Certifications;
