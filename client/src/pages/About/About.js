import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="Profile_Pic.png" alt="Profile_Pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                Hi, I’m VishnuPriya Athukuri from Piduguralla, currently
                pursuing my B.Tech in Computer Science and Engineering with a
                CGPA of 9.58. I’m passionate about Java, Python, Data Structures
                and Algorithms, full stack development, and ML-based
                applications. I’ve worked on projects like an exam seating
                auto-generation system, chatbot-based song recommender, virtual
                mouse, and a mini Siri assistant. I also mentor juniors at Smart
                Interviews, guiding them in problem-solving and coding. I enjoy
                building software that solves real-world problems and enhances
                user experience. My goal is to become a software engineer who
                creates impactful and user-friendly tech.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
