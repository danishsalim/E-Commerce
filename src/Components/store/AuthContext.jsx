import { createContext, useState } from "react";


const AuthContext=createContext({
    token:null,
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{}
})

export const AuthContextProvider=(props)=>{
    let localtoken=localStorage.getItem('token')
    const [token,setToken]=useState(localtoken)
    const userLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem("token", token);
        // setTimeout(()=>{
        // setToken(null)
        // localStorage.removeItem('token');
        // },50000)
    }
    const logoutHandler=()=>{
        console.log('logout')
        setToken(null)   
        localStorage.removeItem('token');
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