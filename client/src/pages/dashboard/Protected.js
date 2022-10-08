import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalState } from "../../context/stateContext";
const Protected = ({ children }) => {
  const { user } = useGlobalState();
  if (!user) {
    return <Navigate to="/signup" />;
  }
  return children;
};

export default Protected;
