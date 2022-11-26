export const userAction = (data, dispatch) => {
  dispatch({
    type: "USER",
    payload: data,
  });
};

export const deleteUserAction = (data, dispatch, index)=>{
    alert("working");
     data.splice(index, 1);
     var newArray = [...data]
    dispatch({
        type:"DELETE",
        payload: newArray,
    })
}
