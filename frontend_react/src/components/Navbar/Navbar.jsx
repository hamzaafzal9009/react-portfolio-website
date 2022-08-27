import React from "react";
import "./navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="..." />
      </div>
    </nav>
  );
};

export default Navbar;
