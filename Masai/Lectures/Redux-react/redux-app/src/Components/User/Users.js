import React from 'react';
import {useSelector} from 'react-redux';

function User() {
  const usersData = useSelector((storeData)=>{
    return storeData.users;
  });

  return (
    <div>
        <h2>User Component</h2>
        {
          usersData.map((element, index)=>{
            
          })
        }

    </div>
  )
}

export default User