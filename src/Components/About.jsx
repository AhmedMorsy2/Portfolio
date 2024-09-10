import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myCV from "../assets/files/AhmedMorsy_CV.pdf";
export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container my-5 " id="about">
      <div
        className="title text-center"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <h1>About me</h1>
      </div>
      <div className="info mt-3" data-aos="fade-up" data-aos-duration="500">
        <p>
          I am a passionate full-stack developer with a strong foundation in the
          MERN stack (MongoDB, Express.js, React, and Node.js). I earned my
          bachelor's degree in Computer Science from Future University in Egypt
          (2019-2023), where I developed a deep understanding of programming,
          problem-solving, and software engineering principles. After
          graduation, I pursued a Full-Stack Development diploma at Route
          Academy (Sep 2023 - Aug 2024) to further enhance my skills in building
          dynamic, scalable web applications.
        </p>
      </div>
      <div className="text-center" data-aos="fade-up" data-aos-duration="500">
        <a
          href={myCV}
          download="AhmedMorsy_CV.pdf"
          className="download-btn btn btn-outline-primary"
        >
          <i class="fa-solid fa-download me-2"></i>
          Download Resume
        </a>
      </div>
    </div>
  );
}
