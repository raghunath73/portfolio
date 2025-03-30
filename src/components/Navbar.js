import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #6c63ff;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .nav-links {
    display: flex;
    gap: 20px;

    a {
      color: #fff;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #ff6584;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="logo">My Portfolio</div>
      <div className="nav-links">
        <Link to="home" smooth duration={500}>Home</Link>
        <Link to="education" smooth duration={500}>Education</Link>
        <Link to="experience" smooth duration={500}>Experience</Link>
        <Link to="internships" smooth duration={500}>Internships</Link>
        <Link to="projects" smooth duration={500}>Projects</Link>
        <Link to="skills" smooth duration={500}>Skills</Link>
        <Link to="certifications" smooth duration={500}>Certifications</Link>
        <Link to="achievements" smooth duration={500}>Achievements</Link>
        <Link to="contact" smooth duration={500}>Contact</Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
