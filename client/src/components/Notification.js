import React from "react";
import { useGlobalState } from "../context/stateContext";

const Notification = () => {
  const { notificationValue, notificationType } = useGlobalState();
  return <div className={notificationValue}>{notificationValue}</div>;
};

export default Notification;
