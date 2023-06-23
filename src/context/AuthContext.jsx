import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const AuthContext = createContext(undefined);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", "");
    const [token, setToken] = useLocalStorage("token", "");
    const [lenguage, setLenguage] = useLocalStorage("lenguage","ES")

    const contextData = {
        user,
        setUser,
        token,
        setToken,
        lenguage,
        setLenguage,
    };

    return (
        <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
    );
};

export default AuthContext