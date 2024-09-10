import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import { Offline } from "react-detect-offline";

export default function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Offline>
        <div className="rounded-5 position-fixed bottom-0 end-0 bg-dark text-white text-center p-3 m-4">
          You are offline
        </div>
      </Offline>
    </>
  );
}
