import React, { useEffect } from "react";
import img from "../assets/undraw_web_developer_re_h7ie.svg";
import swipDown from "../assets/vertical-scroll.gif";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="container" id="home">
        <div className="row ">
          <div
            className="col-lg-6 d-flex justify-content-center align-content-center flex-wrap "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="content">
              <h1>
                Hi, I'm Ahmed Morsy, a Full Stack Developer specializing in the
                MERN Stack
              </h1>
            </div>
          </div>
          <div
            className="col-lg-5 offset-lg-1 heroImg"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={img} className="w-100" alt="" />
          </div>
        </div>
        <div
          className="text-center mt-5 scroll-btn cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Link
            className="nav-link"
            to="projects"
            smooth={false}
            duration={500}
            spy={false}
            exact="true"
            offset={-70}
          >
            <img src={swipDown} alt="" className="w-100" />
          </Link>
        </div>
      </div>
    </>
  );
}
