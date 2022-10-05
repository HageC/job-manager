import React from "react";
import logo from "../assets/job-logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to={"/home"}>
      <img src={logo} alt="logo" style={{ width: "250px", height: "auto" }} />
    </Link>
  );
};

export default Logo;
