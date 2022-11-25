export const userAction = (data, dispatch) => {
  dispatch({
    type: "USER",
    payload: data,
  });
};
