import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
