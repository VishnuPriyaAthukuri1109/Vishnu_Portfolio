import React from "react";
import "./WorkExp.css";
import { PiStudent } from "react-icons/pi";
import { FcPodiumWithSpeaker } from "react-icons/fc";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const WorkExp = () => {
  return (
    <>
      <div className=" work" id="workexp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Feb 2023 - May 2025"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<PiStudent />}
            >
              <h3 className="vertical-timeline-element-title">
                Student Mentee
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Smart Interviews
              </h4>
              <p>
                Completed a structured learning program covering Data Structures
                and Algorithms (DSA) Gained hands-on experience from
                foundational topics like arrays and linked lists to advanced
                concepts such as dynamic programming and graph algorithms
                Strengthened problem-solving and coding skills through regular
                practice and mentorship
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Sep 2024 -Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FcPodiumWithSpeaker />}
            >
              <h3 className="vertical-timeline-element-title">DSA Mentor</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Smart Interviews
              </h4>
              <p>
                Mentoring students in coding and algorithmic problem-solving
                techniques.– Providing guidance and career advice to help
                students improve their technical and soft skills.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;

// <PiStudent />
