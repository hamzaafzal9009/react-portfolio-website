import React from "react";

import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="..." />
        </div>
        <div className="about__content">
          <article className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </div>
            <div className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </div>
            <div className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed Projects</small>
            </div>
          </article>

          <p>
            Hey there, my name is Hamza. I have been performing as a web
            developer for 5 long years and am still in the process of gaining
            more experiences through more years, with great efficiency. My
            educational background processes a bachelor's degree in Computer
            Science. I always handle my clients with a friend-like manner
            keeping myself professional. I can solve problems analytically and
            can face any complex situation with a motive of finding it with
            total vividness.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
