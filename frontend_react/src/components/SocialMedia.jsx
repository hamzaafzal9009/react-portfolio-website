import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <div className="app__social">
        <div>
          <BsTwitter />
          <FaFacebookF />
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
