import { initialValues } from "./stateContext";

const reducer = (state, action) => {
  if (action.type === "INPUT_ERROR") {
    return {
      ...state,
      notification: true,
      notificationType: "error",
      notificationValue: "Make sure to enter all values",
    };
  } else if (action.type === "CLEAR_NOTIFICATION") {
    return {
      ...state,
      notification: false,
      notificationType: "",
      notificationValue: "",
    };
  } else if (action.type === "SET_LOADING") {
    return { ...state, loading: true };
  } else if (action.type === "AUTHENTICATE_ERROR") {
    return {
      ...state,
      notification: true,
      notificationType: "error",
      notificationValue: action.payload.message,
      loading: false,
    };
  } else if (action.type === "AUTHENTICATE_SUCCESS") {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      loading: false,
    };
  } else if (action.type === "LOGOUT") {
    return { ...initialValues, user: null, token: null, location: "" };
  } else if (action.type === "UPDATE_USER_SUCCESS") {
    const { user, token } = action.payload;
    return {
      ...state,
      token,
      user,
      location: user.location,
      loading: false,
      notification: true,
      notificationType: "success",
      notificationValue: "User information has been updated.",
    };
  } else if (action.type === "UPDATE_USER_ERROR") {
    return {
      ...state,
      notification: true,
      notificationType: "error",
      notificationValue: action.payload.message,
      loading: false,
    };
  } else if (action.type === "CREATE_JOB_SUCCESS") {
    return {
      ...state,
      loading: false,
      notification: true,
      notificationType: "success",
      notificationValue: "Job has been created.",
    };
  } else if (action.type === "CREATE_JOB_ERROR") {
    return {
      ...state,
      loading: false,
      notification: true,
      notificationType: "error",
      notificationValue: action.payload.message,
    };
  } else if (action.type === "GET_JOBS_SUCCESS") {
    return {
      ...state,
      loading: false,
      jobs: action.payload.jobs,
      jobsCount: action.payload.jobsCount,
      pageCount: action.payload.pageCount,
    };
  } else if (action.type === "CHANGE_PAGE") {
    return { ...state, page: action.payload.page };
  } else if (action.type === "GET_STATS_SUCCESS") {
    return {
      ...state,
      stats: action.payload.jobStats,
      monthStats: action.payload.monthStats,
      loading: false,
    };
  }
};

export default reducer;
