import React from "react";
import { SiUpwork, SiWhatsapp, SiLinkedin } from "react-icons/si";

const SocialMedia = () => (
  <div className="app__social">
    <div
      onClick={() => {
        window
          .open("https://www.upwork.com/freelancers/hamzamughal55", "_blank")
          .focus();
      }}
    >
      <SiUpwork />
    </div>
    <div
      onClick={() => {
        window.open("https://www.linkedin.com/in/hamza-afzal-291561154/", "_blank").focus();
      }}
    >
      <SiLinkedin />
    </div>
    <div
      onClick={() => {
        window.open("https://wa.link/04te33", "_blank").focus();
      }}
    >
      <SiWhatsapp />
    </div>
  </div>
);

export default SocialMedia;
