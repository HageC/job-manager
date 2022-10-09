import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalState } from "../context/stateContext";
const CheckUser = ({ children }) => {
  const { user } = useGlobalState();
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default CheckUser;
