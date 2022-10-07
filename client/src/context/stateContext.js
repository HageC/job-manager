import React, { useContext } from "react";
import { useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
const AppContext = React.createContext();

const initialValues = {
  user: null,
  token: null,
  location: "",
  notification: false,
  notificationValue: "",
  notificationType: "",
  loading: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const inputError = () => {
    dispatch({ type: "INPUT_ERROR" });
  };

  const removeNotification = () => {
    dispatch({ type: "CLEAR_NOTIFICATION" });
  };

  const authenticateUser = async (inputUser, action) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.post("/api/user/signup", inputUser);
      const { user, token } = response.data;
      dispatch({ type: "AUTHENTICATE_SUCCESS", payload: { user, token } });
    } catch (error) {
      dispatch({
        type: "AUTHENTICATE_ERROR",
        payload: { message: error.response.data.message },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, inputError, removeNotification, authenticateUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppProvider };
