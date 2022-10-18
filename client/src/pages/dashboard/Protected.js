import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalState } from "../../context/stateContext";
const Protected = ({ children }) => {
  return children;
};

export default Protected;
