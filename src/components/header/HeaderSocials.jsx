import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/hamza-afzal-291561154/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/hamzaafzal9009"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.upwork.com/freelancers/hamzamughal55"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiUpwork />
      </a>
    </div>
  );
};

export default HeaderSocials;
