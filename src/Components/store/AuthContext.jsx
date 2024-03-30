import { createContext, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext=createContext({
    token:null,
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{},
    emailId:"",
})

export const AuthContextProvider=(props)=>{
    let localtoken=localStorage.getItem('token')
    const [token,setToken]=useState(localtoken)
    const email=localStorage.getItem("email")
    const navigate=useNavigate()
    const userLoggedIn=!!token;

    const loginHandler=(token,email)=>{
        setToken(token)
        localStorage.setItem("email",email)
        localStorage.setItem("token", token);    
    }
    const logoutHandler=()=>{
        setToken(null)  
        localStorage.removeItem('token');
        localStorage.removeItem("email")
        // localStorage.removeItem("cart")
        navigate('/')
    }

    const contextValue={
        token:token,
        isLoggedIn:userLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
        emailId:email,
    }
    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;