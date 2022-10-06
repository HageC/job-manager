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

  return (
    <AppContext.Provider value={{ ...state }}> {children} </AppContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppProvider };
