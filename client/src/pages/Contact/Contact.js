import React, { useState } from "react";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "./Contact.css";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  // handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide all Fields");
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      // validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://th.bing.com/th/id/OIP.lIGErMAeY1v2rk2vF_QAjgHaEK?w=282&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                      alt="contact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a
                          href="https://www.linkedin.com/in/athukuri-vishnu-priya-746061257"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <BsLinkedin color="blue" size={30} />
                        </a>
                        <a
                          href="https://github.com/VishnuPriyaAthukuri1109"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <BsGithub color="black" size={30} />
                        </a>
                        <a
                          href="https://leetcode.com/u/Vishnu_Priya11/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <SiLeetcode color="orange" size={30} />
                        </a>
                        <a
                          href="https://www.instagram.com/priya_11_athukuri/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <BsInstagram color="deeppink" size={30} />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write Your Message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
