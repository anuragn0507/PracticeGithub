import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import {authContext} from '../Context/AuthContext'

const PrivateRoute = ({children})=>{
    const{ auth } = useContext(authContext);
    return auth.status?children: <Navigate to="/login"/>;
    
};

export default PrivateRoute;
