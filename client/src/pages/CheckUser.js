import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalState } from "../context/stateContext";
const CheckUser = ({ children }) => {
  const { user, token } = useGlobalState();

  if (user && token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default CheckUser;
