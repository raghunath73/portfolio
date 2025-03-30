import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Internships from "./components/Internships";

const App = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Education />
                <Experience />
                <Internships />
                <Projects />
                <Skills />
                <Certifications />
                <Achievements />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "10px",
            backgroundColor: "#6c63ff",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          ↑
        </button>
      </div>
    </Router>
  );
};

export default App;
