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
  statusOptions: ["interview", "declined", "pending"],
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobs: [],
  monthStats: [],
  jobsCount: 0,
  page: 1,
  pageCount: 1,
  stats: {},
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
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_ERROR",
        payload: { message: error.response.data.message },
      });
    }
    setTimeout(() => removeNotification(), 3000);
  };

  const createJob = async (inputJob) => {
    dispatch({ type: "SET_LOADING" });
    try {
      await tokenRequest.post("/jobs/", inputJob);
      dispatch({ type: "CREATE_JOB_SUCCESS" });
    } catch (error) {
      dispatch({
        type: "CREATE_JOB_ERROR",
        payload: { message: error.response.data.message },
      });
    }
    setTimeout(() => removeNotification(), 3000);
  };

  const getJobs = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await tokenRequest.get(`/jobs?page=${state.page}`);
      const { jobs, jobsCount, pageCount } = response.data;
      dispatch({
        type: "GET_JOBS_SUCCESS",
        payload: { jobs, jobsCount, pageCount },
      });
    } catch (error) {
      logout();
    }
  };

  const removeJob = async (id) => {
    dispatch({ type: "SET_LOADING" });

    try {
      await tokenRequest.delete(`/jobs/${id}`);
      getJobs();
    } catch (error) {
      logout();
    }
  };

  const getStats = async () => {
    dispatch({ type: "SET_LOADING" });

    try {
      const response = await tokenRequest.get("/jobs/jobStats");
      const { jobStats, monthStats } = response.data;
      dispatch({
        type: "GET_STATS_SUCCESS",
        payload: { jobStats, monthStats },
      });
    } catch (error) {
      logout();
    }
  };

  const changePage = (page) => {
    dispatch({ type: "CHANGE_PAGE", payload: { page } });
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
        createJob,
        getJobs,
        changePage,
        removeJob,
        getStats,
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
