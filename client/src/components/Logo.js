import React from "react";
import logo from "../assets/job-logo.png";
import { Link } from "react-router-dom";
import { useGlobalState } from "../context/stateContext";
const Logo = () => {
  const { user } = useGlobalState();
  if (user) {
    return (
      <img src={logo} alt="logo" style={{ width: "250px", height: "auto" }} />
    );
  }

  return (
    <Link to={"/home"}>
      <img src={logo} alt="logo" style={{ width: "250px", height: "auto" }} />
    </Link>
  );
};

export default Logo;
