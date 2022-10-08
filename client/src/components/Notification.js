import React, { useEffect } from "react";
import { useGlobalState } from "../context/stateContext";

const Notification = () => {
  const { notificationValue, notificationType } = useGlobalState();
  return (
    <div className={`notification ${notificationType}`}>
      {notificationValue}
    </div>
  );
};

export default Notification;
