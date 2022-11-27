import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteUserAction} from '../../Actions/userAction'

function User() {
  const dispatch =  useDispatch();

  const usersData = useSelector((storeData) => {
    return storeData.userReducer.users;
  });
  
  const callDeleteAction = (index)=>{
    deleteUserAction(usersData ,dispatch, index)
  }

  return (

    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>User Component</h2>
      {usersData.length > 0 ? (
        <div>
          <table style={{ width: "30px", margin: "auto" }}>
            <thead>
              <tr>
                <th>NAME</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((ele, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{ele}</td>
                    <td>
                      <button onClick={()=>{callDeleteAction(index)}}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ color: "red", textAlign: "center" }}>
          <h2>No Data</h2>{" "}
        </div>
      )}
    </div>
  );
}

export default User;
