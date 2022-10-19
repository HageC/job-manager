import React, { useContext } from "react";
import { useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
const AppContext = React.createContext();

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

export const initialValues = {
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
  const tokenRequest = axios.create({
    baseURL: "/api",
  });

  tokenRequest.interceptors.request.use(
    (config) => {
      const checkToken = localStorage.getItem("token");
      if (checkToken) {
        config.headers["Authorization"] = `Bearer ${state.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  tokenRequest.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      if (
        error.response.status === 401 &&
        error.response.data.message !== "Invalid Password"
      ) {
        logout();
      }
      return Promise.reject(error);
    }
  );
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
      setTimeout(() => removeNotification(), 3000);
    }
  };
  const updateUser = async (inputUser) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await tokenRequest.patch("/user/update", inputUser);
      const { user, token } = response.data;

      dispatch({ type: "UPDATE_USER_SUCCESS", payload: { user, token } });

      saveLocalStorage({ user, token });
      removeNotification();
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_ERROR",
        payload: { message: error.response.data.message },
      });
      setTimeout(() => removeNotification(), 3000);
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

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    deleteLocalStorage();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        inputError,
        removeNotification,
        authenticateUser,
        logout,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppProvider };
