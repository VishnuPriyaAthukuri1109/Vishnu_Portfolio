import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my projects with live links and source code.Bringing ideas
          to life through code. Each project showcases real-world problem
          solving. Built with modern tech, creativity, and precision. Explore
          the journey behind every solution.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src="image.png" alt="Project1" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">React-JS</span>
                  <span className="card-detail-badge">TailWind CSS</span>
                  <span className="card-detail-badge">Node-JS</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Python</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Exam Seating Auto Generated System
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/VishnuPriyaAthukuri1109/ExamSeatingAutoGenerationSystem"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Python</span>
                  <img src="image2.png" alt="Project2" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Java Script</span>
                  <span className="card-detail-badge">Spotify-API</span>
                  <span className="card-detail-badge">Python</span>
                  <span className="card-detail-badge">Flask</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      ChatBot Song Recommendation System
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/VishnuPriyaAthukuri1109/ChatBotSongRecommandationSystem"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mobile App</span>
                  <img src="image3.jpg" alt="Project3" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">
                    Extendable Mark Up Language(XML)
                  </span>
                  <span className="card-detail-badge">Java</span>
                  <span className="card-detail-badge">Android-Studio</span>
                  {/* <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Python</span> */}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Scientific Calculator</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/VishnuPriyaAthukuri1109/Scientific-Calculator/tree/master"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
