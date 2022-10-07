const reducer = (state, action) => {
  if (action.type === "INPUT_ERROR") {
    return {
      ...state,
      notification: true,
      notificationType: "error",
      notificationValue: "Make sure to enter all values",
    };
  } else if (action.type === "REMOVE_NOTIFICATION") {
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
  }
};

export default reducer;
