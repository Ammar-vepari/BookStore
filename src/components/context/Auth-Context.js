import { createContext } from "react";

export const AuthContext=createContext({
    isLogedin:true,
    Login:()=>{},
    Logout:()=>{}
})