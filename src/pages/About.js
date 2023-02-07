import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <div className="about-creator">
          <p>
            <span>Name : </span> Jagdeesh Kushwaha
          </p>
          <p>
            <span>At : </span> Learning Full Stack Web Developement at PW Skills
            / iNeuron.ai
          </p>
          <p>
            <span>Contribution : </span> Contributed in styles, components and
            functionality in building the app.
          </p>
          <p className="social-accounts">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Jagdishk7"
            >
              <FaGithub className="social-handle" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/jagdeesh-kushwaha-0218aa230/"
            >
              <FaLinkedin className="social-handle" />
            </a>
          </p>
        </div>
        <div className="avatar">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFHeOFa3YHoQw/profile-displayphoto-shrink_800_800/0/1668821924694?e=1680739200&v=beta&t=BcejYkMnAqc4h4oJPUwB5UlxMhzbZUI2Dnd4Q_wi3d8"
            alt=""
            className="avatar-img"
          />
        </div>
      </div>
      <div className="about-box">
        <div className="about-creator">
          <p>
            <span>Name : </span> Vaibhav Prajapat
          </p>
          <p>
            <span>At : </span> Learning Full Stack Web Developement at PW Skills
            / iNeuron.ai
          </p>
          <p>
            <span>Contribution : </span> Contributed in styles, components and
            functionality in building the app.
          </p>
          <p className="social-accounts">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/vai7725"
            >
              <FaGithub className="social-handle" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/vaibhav-prajapat-52b773232/"
            >
              <FaLinkedin className="social-handle" />
            </a>
          </p>
        </div>
        <div className="avatar">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFsFH-jGv8NvA/profile-displayphoto-shrink_800_800/0/1665077565285?e=1680739200&v=beta&t=tlO7s7hb6SuSZCt2ph7QqS818U76g7ojXJQVUJqUtrg"
            alt=""
            className="avatar-img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
