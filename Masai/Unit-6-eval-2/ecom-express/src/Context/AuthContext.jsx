import { createContext } from "react";
import { useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({children}) =>{
    const[auth, setAuth] = useState({status:false, token:null});

    const handleAuth= (token)=>{
        setAuth({status: !auth.status, token});
    }
    console.log(auth)
    return(
        <authContext.Provider value={{auth, handleAuth}}>
            {children}
        </authContext.Provider>
    )
};

export default AuthContextProvider

