import React, { useContext } from "react";
import { useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
const AppContext = React.createContext();

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialValues = {
  user: user ? JSON.parse(user) : null,
  token: token,
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
    const endpoint = action;
    try {
      const response = await axios.post(`/api/user/${endpoint}`, inputUser);
      const { user, token } = response.data;
      dispatch({ type: "AUTHENTICATE_SUCCESS", payload: { user, token } });
      saveLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: "AUTHENTICATE_ERROR",
        payload: { message: error.response.data.message },
      });
    }
  };

  const saveLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const deleteLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
