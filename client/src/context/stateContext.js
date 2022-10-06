import React, { useContext } from "react";
import { useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const initialValues = {
  notification: false,
  notificationValue: "",
  notificationType: "",
  loading: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const inputError = () => {
    if (state.notification) {
      removeNotification();
    }
    dispatch({ type: "INPUT_ERROR" });
  };

  const removeNotification = () => {
    dispatch({ type: "CLEAR_NOTIFICATION" });
  };

  return (
    <AppContext.Provider value={{ ...state, inputError }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppProvider };
