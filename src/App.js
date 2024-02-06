import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Research from "./Pages/Research";
import Experience from "./Pages/Experience";
import Blog from "./Pages/Blog";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="hero text-center pt-20 md:pt-40 lg:pt-40 relative">
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;





