import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalState } from "../../context/stateContext";
const Protected = ({ children }) => {
  const { user, token } = useGlobalState();

  if (!user || !token) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    return <Navigate to="/home" />;
  }
  return children;
};

export default Protected;
