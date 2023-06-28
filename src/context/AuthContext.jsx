import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", "");
  const [token, setToken] = useLocalStorage("token", "");
  const [language, setLanguage] = useLocalStorage("lang", "es");

  const contextData = {
    user,
    setUser,
    token,
    setToken,
    language,
    setLanguage,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
