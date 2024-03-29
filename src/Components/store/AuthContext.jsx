import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext=createContext({
    token:null,
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{}
})

export const AuthContextProvider=(props)=>{
    let localtoken=localStorage.getItem('token')
    const [token,setToken]=useState(localtoken)
    const navigate=useNavigate()
    const userLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem("token", token);
        
    }
    const logoutHandler=()=>{
        setToken(null)   
        localStorage.removeItem('token');
        navigate('/')
    }

    const contextValue={
        token:token,
        isLoggedIn:userLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
    }
    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;