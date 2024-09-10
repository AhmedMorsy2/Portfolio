import {
  faCss3,
  faDocker,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Skills() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container my-5" id="skills">
      <div className="skills-section">
        <h1 className="mb-5" data-aos="fade-up" data-aos-duration="2000">
          Skills
        </h1>
        <div className="row">
          <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <div className="category-card">
              <h3>Frontend</h3>
              <div className="tech-icons ">
                <FontAwesomeIcon icon={faHtml5} size="3x" title="HTML" />
                <FontAwesomeIcon icon={faCss3} size="3x" title="CSS" />

                <FontAwesomeIcon icon={faJs} size="3x" title="JavaScript" />
                <FontAwesomeIcon icon={faReact} size="3x" title="React" />
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <div className="category-card">
              <h3>Backend</h3>
              <div className="tech-icons d-flex">
                <FontAwesomeIcon icon={faNodeJs} size="3x" title="Node.js" />
                <span className="align-self-center">Node.js</span>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <div className="category-card">
              <h3>Databases</h3>
              <div className="tech-icons d-flex ">
                <FontAwesomeIcon icon={faDatabase} size="3x" title="MongoDB" />
                <span className="align-self-center">MongoDB</span>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <div className="category-card">
              <h3>DevOps/Other</h3>
              <div className="tech-icons">
                <FontAwesomeIcon icon={faDocker} size="3x" title="Docker" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
