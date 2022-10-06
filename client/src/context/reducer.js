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
  }
};

export default reducer;
